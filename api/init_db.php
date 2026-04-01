<?php
/**
 * api/init_db.php
 * Script d'initialisation et de restauration COMPLÈTE du Portfolio.
 * Ce script :
 * 1. SUPPRIME les tables existantes (Reset total).
 * 2. CRÉE les structures (users, veille, formations, certifications).
 * 3. INSÈRE ton compte admin 'amine'.
 * 4. RESTAURE tes données (Formations & Certifications).
 */
require_once __DIR__ . '/../bootstrap/config.php';

header('Content-Type: text/plain; charset=utf-8');

try {
    // Sécurité : ce script RESET la base. Interdit publiquement sur Vercel sans Bearer token.
    $SECRET = getenv('CRON_SECRET') ?: ($_ENV['CRON_SECRET'] ?? '');
    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (php_sapi_name() !== 'cli' && getenv('VERCEL')) {
        if ($SECRET === '' || $authHeader !== 'Bearer ' . $SECRET) {
            http_response_code(404);
            die("Not Found\n");
        }
    }

    echo "================================================\n";
    echo "   RESTAURATION COMPLÈTE DU PORTFOLIO (SISR)    \n";
    echo "================================================\n\n";

    if (!$pdo) {
        die("❌ ERREUR : Connexion à la base de données échouée. Vérifiez DATABASE_URL.\n");
    }

    echo "✅ Connexion PDO réussie.\n\n";

    // 1. NETTOYAGE (DROP)
    echo "1. Nettoyage de la base de données...\n";
    $pdo->exec("DROP TABLE IF EXISTS sessions, certifications, formations, veille, users CASCADE");
    echo "✅ Tables existantes supprimées.\n\n";

    // 2. CRÉATION DES TABLES
    echo "2. Création des structures...\n";

    // Table 'users'
    $pdo->exec("
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            password_hash VARCHAR(255) NOT NULL,
            role VARCHAR(20) DEFAULT 'recruiter',
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ");
    echo "✅ Table 'users' créée.\n";

    // Table 'veille'
    $pdo->exec("
        CREATE TABLE veille (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            link VARCHAR(255) NOT NULL,
            source VARCHAR(100) NOT NULL,
            pub_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            is_active BOOLEAN DEFAULT TRUE
        )
    ");
    echo "✅ Table 'veille' créée.\n";

    // Table 'formations'
    $pdo->exec("
        CREATE TABLE formations (
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
    echo "✅ Table 'formations' créée.\n";

    // Table 'certifications'
    $pdo->exec("
        CREATE TABLE certifications (
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
    echo "✅ Table 'certifications' créée.\n";

    // Table 'sessions' (Nécessaire pour la persistance sur Vercel)
    $pdo->exec("
        CREATE TABLE IF NOT EXISTS sessions (
            id VARCHAR(128) PRIMARY KEY,
            data TEXT,
            last_access INTEGER NOT NULL
        )
    ");
    echo "✅ Table 'sessions' créée.\n\n";

    // 3. INSERTION ADMIN
    echo "3. Création du compte administrateur...\n";
    $username = 'amine';
    $password = 'Zzizou&370';
    $pwdHash = password_hash($password, PASSWORD_ARGON2ID);
    
    $stmtUser = $pdo->prepare("INSERT INTO users (username, password_hash, role) VALUES (?, ?, 'admin')");
    $stmtUser->execute([$username, $pwdHash]);
    echo "✅ Administrateur '$username' créé avec succès.\n\n";

    // 4. RESTAURATION DES DONNÉES (MIGRATE)
    echo "4. Restauration de ton parcours et certifications...\n";

    // Formations
    $formations = [
        ['BTS SIO SISR', 'Lycée Paul-Louis Courier, Tours', '2025–2027', 'Services Informatiques aux Organisations, option SISR. Administration système, réseau', 'award', '', 0, 1],
        ['Bac Pro SN RISC', 'Lycée Henri Becquerel, Tours', '2022–2025', 'Systèmes Numériques, option RISC. Réseaux et systèmes communicants.', 'book', '', 0, 2]
    ];
    $stmtF = $pdo->prepare("INSERT INTO formations (title, subtitle, date_range, description, icon, pdf_path, show_voir, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    foreach ($formations as $f) { 
        $f[6] = (int)$f[6]; // Sécurité SISR : On force le type entier pour PostgreSQL
        $stmtF->execute($f); 
    }
    echo "✅ Formations restaurées.\n";

    // Certifications (Tree + OC)
    $certs = [
        // Arbre
        ['tree', 'PIX — Compétences Numériques', 'PIX', '2024', 'shield', 'PIX', 'image', 1],
        ['tree', 'SecNumAcadémie (ANSSI)', 'ANSSI', '2024', 'shield', 'MOOC', 'image', 2],
        ['tree', 'EBIOS — Analyse de risque', 'ANSSI', '2025', 'shield', 'EBIOS', 'pdf', 3],
        ['tree', 'OpenClassrooms — Réseaux & Systèmes', 'OC', '2024–2025', 'globe', '#openclassrooms', 'section', 4],
        // OpenClassrooms Grid
        ['openclassrooms', 'Active Directory', 'OC', '2024', 'server', '/assets/img/openclassroom/AD_z9v2l8.jpg', 'image', 1],
        ['openclassrooms', 'Docker', 'OC', '2024', 'docker', '/assets/img/openclassroom/Docker_m5n1x4.jpg', 'image', 2],
        ['openclassrooms', 'TCP/IP', 'OC', '2024', 'globe', '/assets/img/openclassroom/TCPIP_v8l2n3.png', 'image', 3],
        ['openclassrooms', 'Windows Server', 'OC', '2024', 'windows', '/assets/img/openclassroom/WinServer_k9v1m4.png', 'image', 4],
        ['openclassrooms', 'Cisco Networking', 'OC', '2024', 'globe', '/assets/img/openclassroom/Cisco_x2l9n3.jpg', 'image', 5],
        ['openclassrooms', 'Déploiement Win10', 'OC', '2024', 'windows', '/assets/img/openclassroom/Win10_v5n1m8.png', 'image', 6],
        ['openclassrooms', 'Git & GitHub', 'OC', '2024', 'terminal', '/assets/img/openclassroom/GitGithub_z9v3l8.jpg', 'image', 7],
        ['openclassrooms', 'Git Fundamentals', 'OC', '2024', 'terminal', '/assets/img/openclassroom/Git_k2n5m4.png', 'image', 8],
        ['openclassrooms', 'Linux Administration', 'OC', '2024', 'terminal', '/assets/img/openclassroom/Linux_v8l1n3.jpg', 'image', 9],
        ['openclassrooms', 'Hardware PC', 'OC', '2024', 'server', '/assets/img/openclassroom/PC_x5v9m4.png', 'image', 10],
        ['openclassrooms', 'ChatGPT', 'OC', '2024', 'terminal', '/assets/img/openclassroom/ChatGPT_k8v2l9.png', 'image', 11],
        ['openclassrooms', 'Virtualisation Environnement', 'OC', '2024', 'proxmox', '/assets/img/openclassroom/Virtualisation_m9n1x4.jpg', 'image', 12],
    ];
    $stmtC = $pdo->prepare("INSERT INTO certifications (category, title, issuer, date_val, icon, file_path, type, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    foreach ($certs as $c) { $stmtC->execute($c); }
    echo "✅ Certifications restaurées.\n\n";

    echo "================================================\n";
    echo "   RÉINITIALISATION TERMINÉE AVEC SUCCÈS !     \n";
    echo "================================================\n\n";
    echo "Connectez-vous maintenant sur : /admin\n";
    echo "Identifiant : amine\n";
    if (getenv('VERCEL')) {
        echo "Mot de passe : (celui défini dans ce script — changez-le après la première connexion)\n";
    } else {
        echo "Mot de passe : Zzizou&370\n";
    }

} catch (PDOException $e) {
    echo "❌ ERREUR SQL CRITIQUE :\n";
    echo $e->getMessage() . "\n";
}
