<?php
/**
 * api/init_db.php
 * Script d'initialisation de la base de données Neon.
 * Crée les tables nécessaires (users, veille, formations, certifications)
 * et insère un administrateur par défaut si aucun n'existe.
 */
require_once __DIR__ . '/../includes/config.php';

header('Content-Type: text/plain; charset=utf-8');

try {
    echo "========================================\n";
    echo "INITIALISATION DE LA BASE DE DONNÉES\n";
    echo "========================================\n\n";

    if (!$pdo) {
        die("ERREUR : Aucune connexion à la base de données. Vérifiez DATABASE_URL.\n");
    }

    echo "✅ Connexion PDO réussie.\n\n";

    // 1. Création de la table 'users'
    echo "Création de la table 'users'...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            role VARCHAR(20) DEFAULT 'recruiter',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ");
    echo "✅ Table 'users' prête.\n";

    // Vérifier si l'admin existe
    $stmt = $pdo->query("SELECT count(*) FROM users WHERE role = 'admin'");
    if ($stmt->fetchColumn() == 0) {
        echo "⚠️ Aucun administrateur trouvé. Création de l'admin par défaut...\n";
        $pwdHas = password_hash('Admin2026SISR!', PASSWORD_ARGON2ID);
        $stmtIns = $pdo->prepare("INSERT INTO users (username, password_hash, role) VALUES ('admin', ?, 'admin')");
        $stmtIns->execute([$pwdHas]);
        echo "✅ Compte administrateur créé.\n   -> Utilisateur : admin\n   -> Mot de passe : Admin2026SISR!\n";
    } else {
        echo "✅ Un administrateur existe déjà.\n";
    }

    // 2. Création de la table 'veille'
    echo "\nCréation de la table 'veille'...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS veille (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            link VARCHAR(255) NOT NULL,
            source VARCHAR(100) NOT NULL,
            pub_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE
        )
    ");
    echo "✅ Table 'veille' prête.\n";

    // 3. Création de la table 'formations'
    echo "\nCréation de la table 'formations'...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS formations (
            id SERIAL PRIMARY KEY,
            title VARCHAR(150),
            subtitle VARCHAR(150),
            date_range VARCHAR(50),
            description TEXT,
            icon VARCHAR(50),
            pdf_path VARCHAR(255),
            show_voir BOOLEAN DEFAULT false,
            display_order INTEGER DEFAULT 0
        )
    ");
    echo "✅ Table 'formations' prête.\n";

    // 4. Création de la table 'certifications'
    echo "\nCréation de la table 'certifications'...\n";
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS certifications (
            id SERIAL PRIMARY KEY,
            category VARCHAR(50),
            title VARCHAR(150),
            issuer VARCHAR(100),
            date_val VARCHAR(50),
            icon VARCHAR(50),
            file_path VARCHAR(255),
            type VARCHAR(20),
            display_order INTEGER DEFAULT 0
        )
    ");
    echo "✅ Table 'certifications' prête.\n\n";

    echo "========================================\n";
    echo " INITIALISATION TERMINÉE AVEC SUCCÈS ! \n";
    echo "========================================\n\n";
    echo "Vous pouvez maintenant lancer le script de migration des données depuis le terminal avec :\n";
    echo "php api/admin/migrate_data.php\n\n";
    echo "Ou bien vous connecter avec l'utilisateur 'admin' et le mot de passe 'Admin2026SISR!'.\n";

} catch (PDOException $e) {
    echo "❌ ERREUR CRITIQUE DE BASE DE DONNÉES :\n";
    echo $e->getMessage() . "\n";
}
