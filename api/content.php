<?php
require_once '../includes/config.php';

$action = $_GET['action'] ?? '';

try {
    if ($action === 'formations') {
        $stmt = $pdo->query("SELECT * FROM formations ORDER BY display_order ASC, id DESC");
        sendJSON($stmt->fetchAll());
    }
    if ($action === 'certifications') {
        $stmt = $pdo->query("SELECT * FROM certifications ORDER BY display_order ASC, id DESC");
        sendJSON($stmt->fetchAll());
    }
} catch (PDOException $e) {
    sendJSON(['error' => 'Erreur DB'], 500);
}
