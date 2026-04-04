<?php
require_once __DIR__ . '/../bootstrap/config.php';

$action = $_GET['action'] ?? '';

try {
    if (!$pdo) {
        sendJSON(['error' => 'Base de données non disponible.'], 500);
    }
    if ($action === 'formations') {
        $stmt = $pdo->query("SELECT * FROM formations ORDER BY display_order ASC, id DESC");
        $formations = $stmt->fetchAll();
        foreach($formations as &$f) {
            if (!empty($f['pdf_path'])) $f['pdf_path'] = '/view?f=' . encryptPath($f['pdf_path']);
            if (!empty($f['icon']) && preg_match('/[\/\.]/', $f['icon'])) $f['icon'] = '/view?f=' . encryptPath($f['icon']);
        }
        sendJSON($formations);
    }
    if ($action === 'certifications') {
        $stmt = $pdo->query("SELECT * FROM certifications ORDER BY display_order ASC, id DESC");
        $certs = $stmt->fetchAll();
        foreach($certs as &$c) {
            if (!empty($c['file_path'])) {
                // On préserve les IDs intra-page type #openclassrooms
                if (str_starts_with($c['file_path'], '#')) continue;
                $c['file_path'] = '/view?f=' . encryptPath($c['file_path']);
            }
            if (!empty($c['icon']) && preg_match('/[\/\.]/', $c['icon'])) $c['icon'] = '/view?f=' . encryptPath($c['icon']);
        }
        sendJSON($certs);
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
