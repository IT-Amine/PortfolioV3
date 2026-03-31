<?php
require_once 'includes/config.php';

$stmt = $pdo->query("SELECT username, role, id FROM users");
$users = $stmt->fetchAll();

header('Content-Type: text/plain');
echo "--- LISTE DES COMPTES ACTIFS ---\n";
foreach ($users as $u) {
    echo "UTILISATEUR : " . $u['username'] . " | RÔLE : " . $u['role'] . "\n";
}
echo "-------------------------------\n";
echo "Si vous essayez de vous connecter en Admin et que ça échoue, c'est soit le mot de passe, soit l'accès PHP local.\n";
?>
