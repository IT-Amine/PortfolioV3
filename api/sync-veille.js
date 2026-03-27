/**
 * /api/sync-veille.js
 * Vercel Serverless Function — appelée chaque jour à 7h par le Cron Job.
 * Récupère les flux RSS des sources de cybersécurité et les stocke dans Neon (Postgres).
 *
 * Variables d'environnement requises dans Vercel :
 *   POSTGRES_URL (connexion Neon fournie automatiquement)
 *   CRON_SECRET   (token pour sécuriser l'endpoint du cron)
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

    const title   = (itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/) || 
                     itemXml.match(/<title>(.*?)<\/title>/))?.[1]?.trim() || 'Sans titre';
    const link    = (itemXml.match(/<link>(.*?)<\/link>/) || 
                     itemXml.match(/<link href="(.*?)"/))?.[1]?.trim() || '#';
    const pubDate = (itemXml.match(/<pubDate>(.*?)<\/pubDate>/))?.[1]?.trim() || new Date().toISOString();
    const desc    = (itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/) || 
                     itemXml.match(/<description>(.*?)<\/description>/))?.[1]
                     ?.replace(/<[^>]+>/g, '')
                     ?.substring(0, 300)
                     ?.trim() || '';

    items.push({ title, link, pubDate, desc, source: sourceName, category });
  }

  return items;
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

    // Récupérer chaque flux RSS
    for (const feed of RSS_SOURCES) {
      try {
        const response = await fetch(feed.url, {
          headers: { 'User-Agent': 'Portfolio-Veille-Bot/1.0' },
          signal: AbortSignal.timeout(8000),
        });

        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const xml = await response.text();
        const articles = parseRSS(xml, feed.name, feed.category);
        allArticles.push(...articles.slice(0, 5)); // Max 5 articles par source
      } catch (err) {
        errors.push({ source: feed.name, error: err.message });
      }
    }

    // Insérer seulement le premier article le plus récent trouvé (le plus "intéressant")
    let inserted = 0;
    if (allArticles.length > 0) {
      // On trie par date pour être sûr d'avoir le plus récent
      const latest = allArticles.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))[0];
      
      try {
        await sql`
          INSERT INTO veille_articles (title, link, pub_date, description, source, category)
          VALUES (
            ${latest.title},
            ${latest.link},
            ${new Date(latest.pubDate).toISOString()},
            ${latest.desc},
            ${latest.source},
            ${latest.category}
          )
          ON CONFLICT (link) DO NOTHING;
        `;
        inserted = 1;
      } catch (err) {
        console.error('Error inserting article:', err);
      }
    }

    // Nettoyer les articles de plus de 6 mois pour économiser l'espace Neon
    await sql`
      DELETE FROM veille_articles
      WHERE created_at < NOW() - INTERVAL '6 months';
    `;

    return res.status(200).json({
      success: true,
      fetched: allArticles.length,
      inserted,
      errors,
      timestamp: new Date().toISOString(),
    });

  } catch (err) {
    console.error('Sync veille error:', err);
    return res.status(500).json({ error: err.message });
  }
}
