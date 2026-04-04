<?php
/**
 * Bootstrap : .env, PDO, sessions, helpers.
 * Chemin projet : une seule constante pour éviter les chemins cassés après déplacement de fichiers.
 */
if (!defined('BASE_PATH')) {
    define('BASE_PATH', dirname(__DIR__));
}

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

loadEnv(BASE_PATH . '/.env');

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
    $dbHost = getenv('POSTGRES_HOST') ?: (getenv('PGHOST') ?: 'localhost');
    $dbName = getenv('POSTGRES_DATABASE') ?: (getenv('PGDATABASE') ?: 'portfolio');
    $dbUser = getenv('POSTGRES_USER') ?: (getenv('PGUSER') ?: 'postgres');
    $dbPass = getenv('POSTGRES_PASSWORD') ?: (getenv('PGPASSWORD') ?: '');

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

function ensureSessionsTable(PDO $pdo): void {
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS sessions (
            id VARCHAR(128) PRIMARY KEY,
            data TEXT,
            last_access INTEGER NOT NULL DEFAULT 0
        )
    ");
}

if ($pdo) {
    try {
        ensureSessionsTable($pdo);
    } catch (PDOException $e) {
        error_log("SESSIONS SCHEMA: " . $e->getMessage());
    }
}

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
        try {
            $stmt = $this->pdo->prepare("SELECT data FROM sessions WHERE id = ?");
            $stmt->execute([$id]);
            $row = $stmt->fetchColumn();
            return $row !== false && $row !== null ? (string) $row : '';
        } catch (PDOException $e) {
            error_log("SESSION READ: " . $e->getMessage());
            return '';
        }
    }

    public function write($id, $data): bool {
        try {
            $stmt = $this->pdo->prepare("
                INSERT INTO sessions (id, data, last_access)
                VALUES (?, ?, ?)
                ON CONFLICT (id)
                DO UPDATE SET data = EXCLUDED.data, last_access = EXCLUDED.last_access
            ");
            return $stmt->execute([$id, $data, time()]);
        } catch (PDOException $e) {
            error_log("SESSION WRITE: " . $e->getMessage());
            return false;
        }
    }

    public function destroy($id): bool {
        try {
            $stmt = $this->pdo->prepare("DELETE FROM sessions WHERE id = ?");
            return $stmt->execute([$id]);
        } catch (PDOException $e) {
            error_log("SESSION DESTROY: " . $e->getMessage());
            return false;
        }
    }

    public function gc($maxlifetime): int|false {
        try {
            $stmt = $this->pdo->prepare("DELETE FROM sessions WHERE last_access < ?");
            $stmt->execute([time() - (int) $maxlifetime]);
            return $stmt->rowCount();
        } catch (PDOException $e) {
            error_log("SESSION GC: " . $e->getMessage());
            return 0;
        }
    }
}

if ($pdo) {
    $handler = new DatabaseSessionHandler($pdo);
    session_set_save_handler($handler, true);
}

$isHttps = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https');
ini_set('session.cookie_secure', $isHttps ? 1 : 0);
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_samesite', 'Lax');
ini_set('session.gc_maxlifetime', 3600 * 24);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

$__appSecret = getenv('APP_SECRET') ?: getenv('CRON_SECRET') ?: '';
if ($__appSecret === '') {
    $dbUrl = getenv('DATABASE_URL') ?: '';
    $__appSecret = $dbUrl !== ''
        ? hash('sha256', $dbUrl . '|portfolio-hmac-v1')
        : 'local-dev-only-set-CRON_SECRET';
}
define('APP_SECRET', $__appSecret);

function hashPassword($password) {
    return password_hash($password, PASSWORD_ARGON2ID);
}

function verifyPassword($password, $hash) {
    return password_verify($password, $hash);
}

function getSecureFileToken($fileKey) {
    // Stateless : on génère un token stable sans dépendre de la session
    // (compatible serverless Vercel où chaque requête a un processus PHP différent)
    return hash_hmac('sha256', $fileKey . '|portfolio-view-token', APP_SECRET);
}

function validateFileToken($fileKey, $token) {
    return hash_equals(getSecureFileToken($fileKey), $token);
}

function sendJSON($data, $status = 200) {
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data);
    exit;
}

function encryptPath($path) {
    if (!$path || str_starts_with($path, '#') || !preg_match('/[\/\.]/', $path)) return $path;
    $key = substr(hash('sha256', APP_SECRET . 'path-key'), 0, 32);
    $iv = substr(hash('sha256', APP_SECRET . 'iv-salt'), 0, 16);
    $encrypted = openssl_encrypt($path, 'aes-256-cbc', $key, 0, $iv);
    // Masquage propre
    return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($encrypted));
}

function decryptPath($hash) {
    if (!$hash) return '';
    $key = substr(hash('sha256', APP_SECRET . 'path-key'), 0, 32);
    $iv = substr(hash('sha256', APP_SECRET . 'iv-salt'), 0, 16);
    
    // Restaurer le padding base64
    $padding = strlen($hash) % 4;
    $hashToDecode = $hash;
    if ($padding > 0) $hashToDecode .= str_repeat('=', 4 - $padding);
    
    $decoded = base64_decode(str_replace(['-', '_'], ['+', '/'], $hashToDecode));
    return openssl_decrypt($decoded, 'aes-256-cbc', $key, 0, $iv) ?: $hash; 
}
