<?php
/**
 * api/view.php
 * Proxy de sécurité et relais média (Obfuscation des URL)
 */
require_once __DIR__ . '/../bootstrap/config.php';

$fileKey = $_GET['file'] ?? '';
$token = $_GET['token'] ?? '';
$fHash = $_GET['f'] ?? '';

function resolveLocalPath(string $p): string {
    if ($p === '') return $p;
    if (str_starts_with($p, '/')) {
        // Chemin qui démarre à la racine du projet (ex: /assets/...)
        return rtrim(BASE_PATH, '/') . $p;
    }
    $trimmed = ltrim($p, './');
    return rtrim(BASE_PATH, '/') . '/' . $trimmed;
}

// 1) GESTION DES CHEMINS CHIFFRÉS (?f=...)
if ($fHash) {
    $decrypted = decryptPath($fHash);
    
    // Sécurité: Empêcher de lire n'importe quel fichier système
    if ($decrypted && (str_starts_with($decrypted, '/assets/') || str_starts_with($decrypted, 'assets/'))) {
        $target = resolveLocalPath($decrypted);
        if (file_exists($target)) {
            $mimeType = mime_content_type($target);
            header("Content-Type: $mimeType");
            header("Content-Length: " . filesize($target));
            readfile($target);
            exit;
        }
    }
    http_response_code(404);
    die("Fichier média sécurisé introuvable ou corrompu.");
}

// 2) GESTION DES FICHIERS PAR CLÉ (CV, PIX...)
if (!validateFileToken($fileKey, $token)) {
    if (!(isset($_SESSION['role']) && ($_SESSION['role'] === 'admin' || $_SESSION['role'] === 'recruiter'))) {
        http_response_code(403);
        die("Accès refusé : Jeton invalide ou session expirée.");
    }
}

if ($fileKey === 'CV') {
    if (!isset($_SESSION['role']) || ($_SESSION['role'] !== 'admin' && $_SESSION['role'] !== 'recruiter')) {
        http_response_code(403);
        die("Accès réservé : Veuillez vous connecter en tant que Recruteur pour voir mon CV.");
    }
}

$FILE_MAP = [
    'CV' => (getenv('CV_LINK') && strlen(getenv('CV_LINK')) > 5) ? getenv('CV_LINK') : 'https://cvdesignr.com/p/6808a706550eb?hl=fr_FR',
    'PIX' => resolveLocalPath(getenv('CERT_PIX_PATH') ?: 'assets/img/certif/PIX_v7l2s3.jpg'),
    'MOOC' => resolveLocalPath(getenv('CERT_MOOC_PATH') ?: 'assets/img/certif/MOOC_x4n1m8.jpg'),
    'EBIOS' => resolveLocalPath(getenv('CERT_EBIOS_PATH') ?: 'assets/img/certif/EBIOS_k8v9z2.pdf'),
];

if (!isset($FILE_MAP[$fileKey])) {
    http_response_code(404);
    die("Fichier introuvable.");
}

$target = $FILE_MAP[$fileKey];

// Si c'est un lien externe (comme CVDesignr) -> MASQUAGE (Proxy relais) !
if (filter_var($target, FILTER_VALIDATE_URL)) {
    // On masque la redirection en chargeant le contenu nous-mêmes
    $content = @file_get_contents($target);
    if ($content !== false && strlen($content) > 1000) {
        $headers = $http_response_header ?? [];
        $mime = 'application/pdf';
        // On récupère le type MIME de la source
        foreach ($headers as $h) {
            if (preg_match('/^Content-Type:\s+(.*)$/i', $h, $m)) {
                $mime = trim($m[1]);
                break;
            }
        }
        header("Content-Type: $mime");
        echo $content;
    } else {
        // En cas de blocage anti-scraping (403), on retombe sur une redirection
        header("Location: " . trim($target), true, 302);
    }
    exit;
}

// Fichiers locaux résiduels
if (file_exists($target)) {
    $mimeType = mime_content_type($target);
    header("Content-Type: $mimeType");
    header("Content-Length: " . filesize($target));
    readfile($target);
    exit;
} else {
    http_response_code(404);
    die("Fichier manquant sur le serveur.");
}
?>
