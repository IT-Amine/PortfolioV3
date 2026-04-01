<?php
require_once '../includes/config.php';

$action = $_GET['action'] ?? '';

try {
    if (!$pdo) {
        sendJSON(['error' => 'Base de données non disponible.'], 500);
    }
    if ($action === 'formations') {
        $stmt = $pdo->query("SELECT * FROM formations ORDER BY display_order ASC, id DESC");
        sendJSON($stmt->fetchAll());
    }
    if ($action === 'certifications') {
        $stmt = $pdo->query("SELECT * FROM certifications ORDER BY display_order ASC, id DESC");
        sendJSON($stmt->fetchAll());
    }
    if ($action === 'veille') {
        // SISR : On récupère les articles de veille technologique
        $stmt = $pdo->query("SELECT * FROM veille ORDER BY pub_date DESC LIMIT 10");
        sendJSON($stmt->fetchAll());
    }
} catch (PDOException $e) {
    error_log('content.php: ' . $e->getMessage());
    sendJSON(['error' => 'Erreur serveur'], 500);
}
?>
