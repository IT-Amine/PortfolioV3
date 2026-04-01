<?php
/**
 * api/view.php
 * Proxy de sécurité pour lire les documents sensibles sans exposer leur chemin réel.
 * En prod, on peut même lier cela à une session !
 */
require_once __DIR__ . '/../bootstrap/config.php';

$fileKey = $_GET['file'] ?? '';
$token = $_GET['token'] ?? '';

// Vérification du token de session (Cybersécurité ++)
if (!validateFileToken($fileKey, $token)) {
    // SISR FAILSAFE : Si on est connecté, on autorise quand même (pour éviter les erreurs de jetons)
    if (!(isset($_SESSION['role']) && ($_SESSION['role'] === 'admin' || $_SESSION['role'] === 'recruiter'))) {
        http_response_code(403);
        die("Accès refusé : Jeton invalide ou session expirée.");
    }
}

// ⚠️ NOUVEAUTÉ : Protection spécifique pour le CV
// Le CV n'est accessible que si l'utilisateur est connecté (Admin ou Recruteur)
if ($fileKey === 'CV') {
    if (!isset($_SESSION['role']) || ($_SESSION['role'] !== 'admin' && $_SESSION['role'] !== 'recruiter')) {
        http_response_code(403);
        die("Accès réservé : Veuillez vous connecter en tant que Recruteur pour voir mon CV.");
    }
}

// Mapping des clés vers les fichiers réels
$FILE_MAP = [
    // SISR : On s'assure d'avoir un lien valide même si Vercel est mal configuré
    'CV' => (getenv('CV_LINK') && strlen(getenv('CV_LINK')) > 5) ? getenv('CV_LINK') : 'https://cvdesignr.com/p/6808a706550eb?hl=fr_FR',
    'PIX' => getenv('CERT_PIX_PATH') ?: (BASE_PATH . '/assets/img/certif/PIX_v7l2s3.jpg'),
    'MOOC' => getenv('CERT_MOOC_PATH') ?: (BASE_PATH . '/assets/img/certif/MOOC_x4n1m8.jpg'),
    'EBIOS' => getenv('CERT_EBIOS_PATH') ?: (BASE_PATH . '/assets/img/certif/EBIOS_k8v9z2.pdf'),
];

if (!isset($FILE_MAP[$fileKey])) {
    http_response_code(404);
    die("Fichier introuvable.");
}

$target = $FILE_MAP[$fileKey];

// Si c'est un lien externe (comme CVDesignr)
if (filter_var($target, FILTER_VALIDATE_URL)) {
    header("Location: " . trim($target), true, 302);
    exit;
}

// Si c'est un fichier local
if (file_exists($target)) {
    $mimeType = mime_content_type($target);
    header("Content-Type: $mimeType");
    header("Content-Length: " . filesize($target));
    // Optionnel : Forcer le téléchargement si besoin (ici on laisse le navigateur afficher)
    // header("Content-Disposition: inline; filename=\"".basename($target)."\"");
    readfile($target);
    exit;
} else {
    http_response_code(404);
    die("Fichier manquant sur le serveur.");
}
?>
