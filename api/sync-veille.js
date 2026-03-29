/**
 * /api/sync-veille.js
 * Vercel Serverless Function — appelée chaque jour à 7h par le Cron Job.
 * Récupère les flux RSS des sources de cybersécurité et les stocke dans Neon (Postgres).
 */

import { sql } from '@vercel/postgres';

// ───────────────────────────────────────────────
// Sources RSS de veille cybersécurité / réseau
// ───────────────────────────────────────────────
const RSS_SOURCES = [
  {
    name: 'ANSSI — Alertes',
    url: 'https://www.cert.ssi.gouv.fr/feed/',
    category: 'Cybersécurité',
  },
  {
    name: 'CERT-FR — Avis',
    url: 'https://www.cert.ssi.gouv.fr/avis/feed/',
    category: 'Cybersécurité',
  },
  {
    name: 'Bleeping Computer',
    url: 'https://www.bleepingcomputer.com/feed/',
    category: 'Actualité IT',
  },
  {
    name: 'The Hacker News',
    url: 'https://feeds.feedburner.com/TheHackersNews',
    category: 'Cybersécurité',
  },
  {
    name: 'Korben',
    url: 'https://korben.info/feed',
    category: 'Tech & Linux',
  },
];

// ───────────────────────────────────────────────
// Helper : parse RSS XML → tableau d'articles
// ───────────────────────────────────────────────
function parseRSS(xmlText, sourceName, category) {
  const items = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xmlText)) !== null) {
    const itemXml = match[1];

    const title = (itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) ||
      itemXml.match(/<title>(.*?)<\/title>/))?.[1]?.trim() || 'Sans titre';
    const link = (itemXml.match(/<link>(.*?)<\/link>/) ||
      itemXml.match(/<link href="(.*?)"/))?.[1]?.trim() || '#';
    const pubDate = (itemXml.match(/<pubDate>(.*?)<\/pubDate>/))?.[1]?.trim() || new Date().toISOString();
    const desc = (itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) ||
      itemXml.match(/<description>(.*?)<\/description>/))?.[1]
      ?.replace(/<[^>]+>/g, '')
      ?.substring(0, 300)
      ?.trim() || '';

    items.push({ title, link, pubDate, desc, source: sourceName, category });
  }

  return items;
}

// ───────────────────────────────────────────────
// Helper : Numéro de semaine actuelle (Calendrier)
// ───────────────────────────────────────────────
function getWeekNumber(d) {
  d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  var weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return weekNo;
}

// ───────────────────────────────────────────────
// Handler principal
// ───────────────────────────────────────────────
export default async function handler(req, res) {
  // Sécurité : vérifier le token Vercel Cron (ou CRON_SECRET)
  const authHeader = req.headers.authorization;
  if (
    process.env.CRON_SECRET &&
    authHeader !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return res.status(401).json({ error: 'Non autorisé' });
  }

  try {
    // Créer la table si elle n'existe pas encore
    await sql`
      CREATE TABLE IF NOT EXISTS veille_articles (
        id          SERIAL PRIMARY KEY,
        title       TEXT        NOT NULL,
        link        TEXT        NOT NULL,
        pub_date    TIMESTAMPTZ,
        description TEXT,
        source      VARCHAR(100),
        category    VARCHAR(100),
        created_at  TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(link)
      );
    `;

    const allArticles = [];
    const errors = [];

    // Mots-clés de cybersécurité pour le filtrage
    const cyberKeywords = ['cyber', 'sécurité', 'security', 'vulnerabilité', 'vulnerability', 'hack', 'faille', 'attaque', 'malware', 'ransomware', 'data breach', 'phishing', 'anssi', 'cert-fr'];

    // Récupérer chaque flux RSS
    for (const feed of RSS_SOURCES) {
      try {
        const response = await fetch(feed.url, {
          headers: { 'User-Agent': 'Portfolio-Veille-Bot/1.0' },
          signal: AbortSignal.timeout(8000),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const xml = await response.text();
        let articles = parseRSS(xml, feed.name, feed.category);

        // FILTRAGE : Cybersécurité & Pertinence
        articles = articles.filter(art => {
          const content = (art.title + ' ' + art.desc).toLowerCase();
          const hasCyberKeyword = cyberKeywords.some(kw => content.includes(kw));
          
          // Si la source est déjà cybersécurité (ANSSI, CERT-FR, Hacker News), on garde
          if (feed.category === 'Cybersécurité') return true;
          
          // Pour les autres (Korben, Bleeping), on ne garde que si c'est lié au cyber
          return hasCyberKeyword;
        });

        allArticles.push(...articles.slice(0, 5)); // Max 5 articles par source
      } catch (err) {
        errors.push({ source: feed.name, error: err.message });
      }
    }

    // Insérer les articles les plus récents (Top 10)
    let inserted = 0;
    if (allArticles.length > 0) {
      // Trier par date décroissante
      const sourcesLatest = allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate)).slice(0, 10);

      for (const article of sourcesLatest) {
        try {
          const res = await sql`
            INSERT INTO veille_articles (title, link, pub_date, description, source, category)
            VALUES (
              ${article.title},
              ${article.link},
              ${new Date(article.pubDate).toISOString()},
              ${article.desc},
              ${article.source},
              ${article.category}
            )
            ON CONFLICT (link) DO NOTHING;
          `;
          if (res.rowCount > 0) inserted++;
        } catch (err) {
          console.error('Error inserting article:', err);
        }
      }
    }

    // ───────────────────────────────────────────────
    // AUTOMATISATION : Maintenance Bi-hebdomadaire & Limite
    // ───────────────────────────────────────────────
    
    const today = new Date();
    const weekNum = getWeekNumber(today);
    const isEvenWeek = (weekNum % 2 === 0);
    let maintenanceLog = 'Daily Keeping';

    // 1. Suppression des 8 plus anciens tous les 15 jours (semaines paires, le lundi)
    if (isEvenWeek && today.getDay() === 1) { // 1 = Lundi
      await sql`
        DELETE FROM veille_articles
        WHERE id IN (
          SELECT id FROM veille_articles
          ORDER BY pub_date ASC
          LIMIT 8
        );
      `;
      maintenanceLog = `Bi-weekly cleanup (Week ${weekNum}): 8 oldest articles deleted`;
    }

    // 2. Nettoyage quotidien : On ne garde que les 14 derniers articles
    await sql`
      DELETE FROM veille_articles
      WHERE id NOT IN (
        SELECT id FROM veille_articles
        ORDER BY pub_date DESC
        LIMIT 14
      );
    `;

    return res.status(200).json({
      success: true,
      fetched: allArticles.length,
      inserted,
      errors,
      maintenance: maintenanceLog,
      timestamp: today.toISOString(),
    });

  } catch (err) {
    console.error('Sync veille error:', err);
    return res.status(500).json({ error: err.message });
  }
}
