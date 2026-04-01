<?php
/**
 * api/veille.php
 * Récupération des articles de veille technologique en PHP.
 */
require_once __DIR__ . '/../bootstrap/config.php';

// Autoriser les requêtes GET uniquement
if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    sendJSON(["error" => "Méthode non autorisée"], 405);
}

// Désactiver le cache pour avoir les données en temps réel
header('Cache-Control: no-store, max-age=0, must-revalidate');

try {
    $limit = min(intval($_GET['limit'] ?? 20), 50);

    // 1. Récupérer les articles (Table 'veille' créée par init_core.php)
    $stmt = $pdo->prepare("
        SELECT id, title, link, source, pub_date
        FROM veille
        WHERE is_active = TRUE
        ORDER BY pub_date DESC
        LIMIT :limit
    ");
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    $stmt->execute();
    $articles = $stmt->fetchAll();

    sendJSON([
        "articles" => $articles,
        "total" => count($articles),
        "updatedAt" => date('c')
    ]);

} catch (PDOException $e) {
    error_log("Veille API error: " . $e->getMessage());
    sendJSON(["articles" => [], "total" => 0, "error" => $e->getMessage()], 500);
}
?>
