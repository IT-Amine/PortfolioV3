<?php
/**
 * Crée ou met à jour le compte admin (mot de passe).
 * Sécurité : Bearer CRON_SECRET uniquement (même logique que sync-veille / init_db).
 */
require_once __DIR__ . '/../bootstrap/config.php';

header('Content-Type: application/json; charset=utf-8');

$SECRET = getenv('CRON_SECRET') ?: ($_ENV['CRON_SECRET'] ?? '');
if ($SECRET === '' && !getenv('VERCEL')) {
    $SECRET = 'local-dev-cron-only';
}
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

if (php_sapi_name() !== 'cli') {
    if ($SECRET === '' || $authHeader !== 'Bearer ' . $SECRET) {
        http_response_code(404);
        echo json_encode(['ok' => false, 'error' => 'Not found']);
        exit;
    }
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    sendJSON(['ok' => false, 'error' => 'POST only'], 405);
}

$raw = file_get_contents('php://input');
$input = json_decode($raw, true) ?: [];
$username = trim($input['username'] ?? 'amine');
$password = $input['password'] ?? (getenv('ADMIN_PASSWORD') ?: '');

if ($username === '' || $password === '') {
    sendJSON(['ok' => false, 'error' => 'username et password requis (ou variable ADMIN_PASSWORD sur Vercel)'], 400);
}

if (!$pdo) {
    sendJSON(['ok' => false, 'error' => 'Base de données indisponible'], 500);
}

try {
    $hash = password_hash($password, PASSWORD_ARGON2ID);
    $stmt = $pdo->prepare("
        INSERT INTO users (username, password_hash, role)
        VALUES (?, ?, 'admin')
        ON CONFLICT (username) DO UPDATE SET
            password_hash = EXCLUDED.password_hash,
            role = 'admin'
    ");
    $stmt->execute([$username, $hash]);
    sendJSON(['ok' => true, 'username' => $username, 'message' => 'Compte admin mis à jour. Connecte-toi sur /admin']);
} catch (PDOException $e) {
    error_log('reset-admin: ' . $e->getMessage());
    sendJSON(['ok' => false, 'error' => 'Erreur serveur'], 500);
}
