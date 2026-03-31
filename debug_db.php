<?php
require_once 'includes/config.php';

header('Content-Type: text/plain');
echo "--- DIAGNOSTIC BASE DE DONNÉES (Neon) ---\n";

try {
    $stmt = $pdo->query("SELECT 1 as connected");
    $result = $stmt->fetch();
    if ($result && $result['connected'] == 1) {
        echo "✅ CONNEXION RÉUSSIE : La base de données répond.\n";
        
        // Vérification des tables critiques
        $tables = ['users', 'formations', 'veille', 'certifications'];
        foreach ($tables as $table) {
            try {
                $count = $pdo->query("SELECT COUNT(*) FROM $table")->fetchColumn();
                echo "✅ TABLE [$table] : $count entrées trouvées.\n";
            } catch (Exception $e) {
                echo "❌ TABLE [$table] : Introuvable ou erreur (" . $e->getMessage() . ")\n";
            }
        }
    }
} catch (Exception $e) {
    echo "❌ ÉCHEC DE CONNEXION : " . $e->getMessage() . "\n";
    echo "Détails Host : " . (getenv('POSTGRES_HOST') ?: 'Non défini') . "\n";
    echo "Détails DB : " . (getenv('POSTGRES_DATABASE') ?: 'Non défini') . "\n";
}
?>
