<?php
require_once __DIR__ . '/../bootstrap/config.php';

$action = $_GET['action'] ?? '';

function safeQuery($pdo, $sql) {
    try {
        $stmt = $pdo->query($sql);
        return $stmt->fetchAll();
    } catch (PDOException $e) {
        // SQLSTATE 42P01 = relation (table) inexistante → retourner tableau vide sans casser le site
        if (str_contains($e->getCode(), '42P01') || str_contains($e->getMessage(), 'does not exist')) {
            return [];
        }
        throw $e; // Re-lancer si c'est une autre erreur
    }
}

try {
    if (!$pdo) {
        sendJSON(['error' => 'Base de données non disponible.'], 500);
    }
    if ($action === 'formations') {
        $formations = safeQuery($pdo, "SELECT * FROM formations ORDER BY display_order ASC, id DESC");
        foreach($formations as &$f) {
            if (!empty($f['pdf_path'])) $f['pdf_path'] = '/view?f=' . encryptPath($f['pdf_path']);
            if (!empty($f['icon']) && preg_match('/[\/\.]/', $f['icon'])) $f['icon'] = '/view?f=' . encryptPath($f['icon']);
        }
        sendJSON($formations);
    }
    if ($action === 'certifications') {
        $certs = safeQuery($pdo, "SELECT * FROM certifications ORDER BY display_order ASC, id DESC");
        foreach($certs as &$c) {
            if (!empty($c['file_path'])) {
                if (str_starts_with($c['file_path'], '#')) continue;
                $c['file_path'] = '/view?f=' . encryptPath($c['file_path']);
            }
            if (!empty($c['icon']) && preg_match('/[\/\.]/', $c['icon'])) $c['icon'] = '/view?f=' . encryptPath($c['icon']);
        }
        sendJSON($certs);
    }
    if ($action === 'veille') {
        $rows = safeQuery($pdo, "SELECT * FROM veille ORDER BY pub_date DESC LIMIT 10");
        sendJSON($rows);
    }
    // Action inconnue
    sendJSON([]);
} catch (PDOException $e) {
    error_log('content.php: ' . $e->getMessage());
    sendJSON(['error' => 'Erreur serveur'], 500);
}
?>
