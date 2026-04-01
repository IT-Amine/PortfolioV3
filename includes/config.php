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

/**
 * 🔒 GESTIONNAIRE DE SESSIONS EN BASE DE DONNÉES (Pour Vercel)
 */
class DatabaseSessionHandler implements SessionHandlerInterface {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }

    public function open($savePath, $sessionName): bool {
        return true;
    }

    public function close(): bool {
        return true;
    }

    public function read($id): string {
        $stmt = $this->pdo->prepare("SELECT data FROM sessions WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetchColumn() ?: '';
    }

    public function write($id, $data): bool {
        $stmt = $this->pdo->prepare("
            INSERT INTO sessions (id, data, last_access) 
            VALUES (?, ?, ?) 
            ON CONFLICT (id) 
            DO UPDATE SET data = EXCLUDED.data, last_access = EXCLUDED.last_access
        ");
        return $stmt->execute([$id, $data, time()]);
    }

    public function destroy($id): bool {
        $stmt = $this->pdo->prepare("DELETE FROM sessions WHERE id = ?");
        return $stmt->execute([$id]);
    }

    public function gc($maxlifetime): int|false {
        $stmt = $this->pdo->prepare("DELETE FROM sessions WHERE last_access < ?");
        $stmt->execute([time() - $maxlifetime]);
        return $stmt->rowCount();
    }
}

// Activer le handler si PDO est disponible
if ($pdo) {
    $handler = new DatabaseSessionHandler($pdo);
    session_set_save_handler($handler, true);
}

// Configuration Globale des Cookies
$isHttps = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
ini_set('session.cookie_secure', $isHttps ? 1 : 0);
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_samesite', 'Lax');
ini_set('session.gc_maxlifetime', 3600 * 24); // 24 heures

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
