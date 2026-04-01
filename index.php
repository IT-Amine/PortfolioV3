<?php
/**
 * Point d'entrée local (Apache, php -S). Sur Vercel ce fichier est exclu du déploiement (.vercelignore) :
 * la page est servie via api/index.php + rewrites.
 */
require_once __DIR__ . '/includes/main.php';
