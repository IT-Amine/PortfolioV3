<?php
/**
 * api/admin_actions.php
 * Endpoint unifié pour toutes les actions d'administration
 * Permet d'éviter la limite de fonctions Serverless de Vercel.
 */
require_once '../includes/config.php';

// Protection Admin
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    sendJSON(['error' => 'Accès admin requis.'], 403);
}

$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? '';

try {
    // --- GESTION UPLOAD ---
    if ($action === 'upload_file' && $method === 'POST') {
        if (!isset($_FILES['file'])) sendJSON(['error' => 'Aucun fichier reçu.'], 400);

        $file = $_FILES['file'];
        $uploadDir = __DIR__ . '/../public/uploads/';
        $allowedExtensions = ['pdf', 'png', 'jpg', 'jpeg'];

        $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
        if (!in_array($ext, $allowedExtensions)) {
            sendJSON(['error' => 'Extension non autorisée (PDF, PNG, JPG uniquement).'], 400);
        }

        $safeName = preg_replace('/[^a-zA-Z0-9.\-_]/', '_', pathinfo($file['name'], PATHINFO_FILENAME));
        $finalName = time() . '_' . $safeName . '.' . $ext;
        $targetPath = $uploadDir . $finalName;
        $relativePath = '/public/uploads/' . $finalName;

        if (move_uploaded_file($file['tmp_name'], $targetPath)) {
            $gitStatus = "Fichier sauvegardé localement.";
            try {
                $rootPath = realpath(__DIR__ . '/../');
                $cmdAdd = "cd " . escapeshellarg($rootPath) . " && git add " . escapeshellarg($targetPath) . " 2>&1";
                $cmdCommit = "cd " . escapeshellarg($rootPath) . " && git commit -m \"Admin: Upload " . escapeshellarg($finalName) . "\" 2>&1";
                $cmdPush = "cd " . escapeshellarg($rootPath) . " && git push 2>&1";
                
                shell_exec($cmdAdd);
                shell_exec($cmdCommit);
                $outputPush = shell_exec($cmdPush);

                if (strpos($outputPush, 'Everything up-to-date') !== false || strpos($outputPush, '->') !== false) {
                    $gitStatus = "✅ Synchronisé sur GitHub avec succès.";
                } else {
                    $gitStatus = "⚠️ Sauvegardé, mais erreur Git : " . $outputPush;
                }
            } catch (Exception $e) { $gitStatus = "❌ Erreur Git critique : " . $e->getMessage(); }

            sendJSON(['success' => true, 'path' => $relativePath, 'filename' => $finalName, 'git_status' => $gitStatus]);
        } else {
            sendJSON(['error' => 'Erreur lors du déplacement.'], 500);
        }
    }

    // --- GESTION USERS / ACCÈS ---
    if ($action === 'list_users' && $method === 'GET') {
        $stmt = $pdo->query("SELECT id, username, role, created_at FROM users ORDER BY created_at DESC");
        sendJSON($stmt->fetchAll());
    }
    if ($action === 'add_user' && $method === 'POST') {
        $username = trim($_POST['username'] ?? '');
        $password = $_POST['password'] ?? '';
        if (!$username || !$password) sendJSON(['error' => 'Identifiant et passe requis.'], 400);

        $hash = password_hash($password, PASSWORD_ARGON2ID);
        $stmt = $pdo->prepare("INSERT INTO users (username, password_hash, role) VALUES (?, ?, 'recruiter')");
        $stmt->execute([$username, $hash]);
        sendJSON(['success' => true]);
    }
    if ($action === 'delete_user' && $method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        if ($id === 1) sendJSON(['error' => 'Impossible de supprimer l\'admin.'], 403);
        $stmt = $pdo->prepare("DELETE FROM users WHERE id = ?");
        $stmt->execute([$id]);
        sendJSON(['success' => true]);
    }

    // --- GESTION VEILLE ---
    if ($action === 'list_veille' && $method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM veille ORDER BY pub_date DESC");
        sendJSON($stmt->fetchAll());
    }
    if ($action === 'add_veille' && $method === 'POST') {
        $title = trim($_POST['title'] ?? '');
        $link = trim($_POST['link'] ?? '');
        $source = trim($_POST['source'] ?? 'Cyber-Sécurité');
        if (!$title || !$link) sendJSON(['error' => 'Titre et lien requis.'], 400);

        $stmt = $pdo->prepare("INSERT INTO veille (title, link, source) VALUES (?, ?, ?)");
        $stmt->execute([$title, $link, $source]);
        sendJSON(['success' => true, 'id' => $pdo->lastInsertId()]);
    }
    if ($action === 'delete_veille' && $method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        $stmt = $pdo->prepare("DELETE FROM veille WHERE id = ?");
        $stmt->execute([$id]);
        sendJSON(['success' => true]);
    }

    // --- GESTION FORMATIONS ---
    if ($action === 'list_formations' && $method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM formations ORDER BY display_order ASC, id DESC");
        sendJSON($stmt->fetchAll());
    }
    if ($action === 'add_formation' && $method === 'POST') {
        $title = trim($_POST['title'] ?? '');
        $subtitle = trim($_POST['subtitle'] ?? '');
        $date = trim($_POST['date'] ?? '');
        $desc = trim($_POST['desc'] ?? '');
        $icon = trim($_POST['icon'] ?? 'award');
        $pdf = trim($_POST['pdf_path'] ?? '');
        $showVoir = intval($_POST['show_voir'] ?? 0);
        if (!$title) sendJSON(['error' => 'Titre requis.'], 400);

        $stmt = $pdo->prepare("INSERT INTO formations (title, subtitle, date_range, description, icon, pdf_path, show_voir) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$title, $subtitle, $date, $desc, $icon, $pdf, $showVoir]);
        sendJSON(['success' => true]);
    }
    if ($action === 'delete_formation' && $method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        $stmt = $pdo->prepare("DELETE FROM formations WHERE id = ?");
        $stmt->execute([$id]);
        sendJSON(['success' => true]);
    }

    // --- GESTION CERTIFICATIONS ---
    if ($action === 'list_certifications' && $method === 'GET') {
        $stmt = $pdo->query("SELECT * FROM certifications ORDER BY category, display_order ASC, id DESC");
        sendJSON($stmt->fetchAll());
    }
    if ($action === 'add_certification' && $method === 'POST') {
        $category = trim($_POST['category'] ?? 'openclassrooms');
        $title = trim($_POST['title'] ?? '');
        $issuer = trim($_POST['issuer'] ?? 'OC');
        $date = trim($_POST['date'] ?? '');
        $icon = trim($_POST['icon'] ?? 'shield');
        $file = trim($_POST['file_path'] ?? '');
        $type = trim($_POST['type'] ?? 'image');
        if (!$title || !$file) sendJSON(['error' => 'Titre et fichier requis.'], 400);

        $stmt = $pdo->prepare("INSERT INTO certifications (category, title, issuer, date_val, icon, file_path, type) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->execute([$category, $title, $issuer, $date, $icon, $file, $type]);
        sendJSON(['success' => true]);
    }
    if ($action === 'delete_certification' && $method === 'DELETE') {
        $id = intval($_GET['id'] ?? 0);
        $stmt = $pdo->prepare("DELETE FROM certifications WHERE id = ?");
        $stmt->execute([$id]);
        sendJSON(['success' => true]);
    }

    sendJSON(['error' => 'Action inconnue'], 404);

} catch (PDOException $e) {
    sendJSON(['error' => 'Erreur DB : ' . $e->getMessage()], 500);
}
