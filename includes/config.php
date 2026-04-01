<?php
/**
 * config.php
 * Gestion des variables d'environnement et connexion Base de données
 */

// Simple chargeur de fichier .env (si existant)
function loadEnv($path) {
    if (!file_exists($path)) return false;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        $trimmed = trim($line);
        if ($trimmed === '' || strpos($trimmed, '#') === 0) continue;
        
        $parts = explode('=', $trimmed, 2);
        if (count($parts) < 2) continue;
        
        $name = trim($parts[0]);
        $value = trim(trim($parts[1]), "\"'");
        
        $_ENV[$name] = $value;
        putenv("$name=$value");
    }
    return true;
}

// Charger le .env à la racine
loadEnv(__DIR__ . '/../.env');

// Architecture SISR : Connexion Neon robuste (Priorité DATABASE_URL)
$dbUrl = getenv('DATABASE_URL');
$pdo = null;

if ($dbUrl) {
    try {
        $parts = parse_url($dbUrl);
        if ($parts === false) {
            throw new Exception("Format de DATABASE_URL invalide.");
        }
        
        $dbHost = $parts['host'] ?? 'localhost';
        $dbName = isset($parts['path']) ? ltrim($parts['path'], '/') : 'portfolio';
        $dbUser = $parts['user'] ?? 'postgres';
        $dbPass = $parts['pass'] ?? '';
        
        // Fix SNI Neon : Utiliser le format recommandé endpoint=ID
        $endpointId = explode('.', $dbHost)[0];
        $dsn = "pgsql:host=$dbHost;port=5432;dbname=$dbName;sslmode=require;options='endpoint=$endpointId'";
        $pdo = new PDO($dsn, $dbUser, $dbPass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $e) {
        error_log("DATABASE ERROR (URL): " . $e->getMessage());
    }
}

if (!$pdo) {
    // Fallback local classique si DATABASE_URL n'a pas marché
    $dbHost = getenv('POSTGRES_HOST') ?: (getenv('PGHOST') ?: 'localhost');
    $dbName = getenv('POSTGRES_DATABASE') ?: (getenv('PGDATABASE') ?: 'portfolio');
    $dbUser = getenv('POSTGRES_USER') ?: (getenv('PGUSER') ?: 'postgres');
    $dbPass = getenv('POSTGRES_PASSWORD') ?: (getenv('PGPASSWORD') ?: '');
    
    // Fix SNI Neon (Fallback logic)
    $endpointId = explode('.', $dbHost)[0];
    $dsn = "pgsql:host=$dbHost;port=5432;dbname=$dbName;sslmode=require;options='endpoint=$endpointId'";
    
    try {
        $pdo = new PDO($dsn, $dbUser, $dbPass, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        ]);
    } catch (PDOException $e) {
        error_log("DATABASE ERROR (Fallback): " . $e->getMessage());
    }
}

// Sécurisation des sessions (SISR Sync Pro)
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);

// Détection HTTPS pour le cookie secure
$isHttps = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
ini_set('session.cookie_secure', $isHttps ? 1 : 0);
ini_set('session.gc_maxlifetime', 3600); // 1 heure

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Helpers de Sécurité (Hachage & Chiffrage)
 */

define('APP_SECRET', getenv('CRON_SECRET') ?: 'default-secret-si-vide');

function hashPassword($password) {
    return password_hash($password, PASSWORD_ARGON2ID);
}

function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}

function getSecureFileToken($fileKey) {
    // Génère un jeton lié à la session et à l'ID du fichier
    // On utilise un HMAC pour que le jeton soit infalsifiable
    return hash_hmac('sha256', $fileKey . session_id(), APP_SECRET);
}

function validateFileToken($fileKey, $token) {
    return hash_equals(getSecureFileToken($fileKey), $token);
}

/**
 * Helper: Envoyer une réponse JSON
 */
function sendJSON($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
    exit;
}
?>
