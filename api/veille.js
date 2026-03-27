/**
 * /api/veille.js
 * Vercel Serverless Function — retourne les derniers articles de veille en JSON.
 * Appelé par le frontend du portfolio pour afficher la section Veille.
 *
 * Variables d'environnement requises dans Vercel :
 *   POSTGRES_URL (connexion Neon fournie automatiquement)
 */

import { sql } from '@vercel/postgres';

export default async function handler(req, res) {
  // N'accepter que GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  try {
    const category = req.query.category || null;
    const limit    = Math.min(parseInt(req.query.limit) || 20, 50);

    let result;
    if (category) {
      result = await sql`
        SELECT id, title, link, pub_date, description, source, category
        FROM veille_articles
        WHERE category = ${category}
        ORDER BY pub_date DESC
        LIMIT ${limit};
      `;
    } else {
      result = await sql`
        SELECT id, title, link, pub_date, description, source, category
        FROM veille_articles
        ORDER BY pub_date DESC
        LIMIT ${limit};
      `;
    }

    // Récupérer les catégories disponibles
    const cats = await sql`
      SELECT DISTINCT category FROM veille_articles ORDER BY category;
    `;

    return res.status(200).json({
      articles: result.rows,
      categories: cats.rows.map(r => r.category),
      total: result.rows.length,
      updatedAt: new Date().toISOString(),
    });

  } catch (err) {
    console.error('Veille API error:', err);

    // Si la table n'existe pas encore (premier déploiement), retourner un tableau vide
    if (err.message?.includes('does not exist')) {
      return res.status(200).json({
        articles: [],
        categories: [],
        total: 0,
        updatedAt: new Date().toISOString(),
        note: 'Aucun article pour le moment. Le cron se chargera de la première récupération.',
      });
    }

    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
