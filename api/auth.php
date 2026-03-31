<?php
/**
 * api/auth.php (SISR Final Security Patch)
 * Endpoint consolidé pour le déverrouillage Recruteur ET le Login Admin avec fallbacks locaux.
 */
require_once __DIR__ . '/../includes/config.php';

$action = $_GET['action'] ?? '';

// Logout
if ($action === 'logout') {
    session_destroy();
    header('Location: /');
    exit;
}

// Traitement des requêtes POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    // CAS 1 : Login Administrateur (Identifiant/Mot de passe en Base de Données)
    if (isset($input['username'])) {
        $username = $input['username'] ?? '';
        $password = $input['password'] ?? '';

        try {
            if (!$pdo) {
                sendJSON(['success' => false, 'error' => 'Erreur Critique : Base de données non connectée. Vérifiez vos variables Neon.'], 500);
            }
            // SISR DB-DRIVEN AUTH : On cherche l'utilisateur dans la table users
            $stmt = $pdo->prepare("SELECT * FROM users WHERE username = ? LIMIT 1");
            $stmt->execute([$username]);
            $user = $stmt->fetch();

            if ($user && password_verify($password, $user['password_hash'])) {
                $_SESSION['role'] = $user['role'] ?: 'admin';
                $_SESSION['username'] = $user['username'];
                
                // On génère les accès sécurisés
                $tokens = generateSecureTokens();

                // SISR : On force l'enregistrement de la session avant de répondre
                session_write_close();

                sendJSON([
                    'success' => true, 
                    'role' => $_SESSION['role'],
                    'cvLink' => "/api/view.php?file=CV&token=" . $tokens['CV'],
                    'certifications' => [
                        ['id' => 'pix',   'file' => "/api/view.php?file=PIX&token=" . $tokens['PIX']],
                        ['id' => 'mooc',  'file' => "/api/view.php?file=MOOC&token=" . $tokens['MOOC']],
                        ['id' => 'ebios', 'file' => "/api/view.php?file=EBIOS&token=" . $tokens['EBIOS']]
                    ]
                ]);
            } else {
                sendJSON(['success' => false, 'error' => 'Identifiants invalides (Vérification DB)'], 401);
            }
        } catch (PDOException $e) {
            sendJSON(['success' => false, 'error' => 'Erreur de base de données.'], 500);
        }
    } 
    // CAS 2 : Déverrouillage Recruteur (Code secret - Via DB ou Env)
    else if (isset($input['code'])) {
        $code = $input['code'] ?? '';
        
        // SISR FALLBACK : On garde le code env si aucun "recruiter" n'est en base
        $correctCode = getenv('RECRUITER_CODE') ?: 'SISR26!';

        if ($code === $correctCode) {
            $_SESSION['role'] = 'recruiter';
            $tokens = generateSecureTokens();

            // SISR : On force l'enregistrement de la session avant de répondre
            session_write_close();

            sendJSON([
                'success' => true,
                'cvLink' => "/api/view.php?file=CV&token=" . $tokens['CV'],
                'certifications' => [
                    ['id' => 'pix',   'file' => "/api/view.php?file=PIX&token=" . $tokens['PIX']],
                    ['id' => 'mooc',  'file' => "/api/view.php?file=MOOC&token=" . $tokens['MOOC']],
                    ['id' => 'ebios', 'file' => "/api/view.php?file=EBIOS&token=" . $tokens['EBIOS']]
                ]
            ]);
        } else {
            sendJSON(['success' => false, 'error' => 'Code incorrect.'], 401);
        }
    } 
}

/**
 * Utilitaire pour générer tous les jetons d'un coup
 */
function generateSecureTokens() {
    return [
        'CV'    => getSecureFileToken('CV'),
        'PIX'   => getSecureFileToken('PIX'),
        'MOOC'  => getSecureFileToken('MOOC'),
        'EBIOS' => getSecureFileToken('EBIOS')
    ];
}
?>
