<?php
require_once __DIR__ . '/../includes/config.php';

echo "📦 Migration des données vers Néon...\n";

try {
    // 1. Formations
    echo "Migrating Formations...\n";
    $formations = [
        ['BTS SIO SISR', 'Lycée Paul-Louis Courier, Tours', '2025–2027', 'Services Informatiques aux Organisations, option SISR. Administration système, réseau', 'award', '', false, 1],
        ['Bac Pro SN RISC', 'Lycée Henri Becquerel, Tours', '2022–2025', 'Systèmes Numériques, option RISC. Réseaux et systèmes communicants.', 'book', '', false, 2]
    ];
    $stmt = $pdo->prepare("INSERT INTO formations (title, subtitle, date_range, description, icon, pdf_path, show_voir, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    foreach ($formations as $f) {
        $stmt->execute($f);
    }

    // 2. Certifications (Arbre)
    echo "Migrating Certifications (Tree)...\n";
    $treeCerts = [
        ['tree', 'PIX — Compétences Numériques', 'PIX', '2024', 'shield', 'PIX', 'image', 1],
        ['tree', 'SecNumAcadémie (ANSSI)', 'ANSSI', '2024', 'shield', 'MOOC', 'image', 2],
        ['tree', 'EBIOS — Analyse de risque', 'ANSSI', '2025', 'shield', 'EBIOS', 'pdf', 3],
        ['tree', 'OpenClassrooms — Réseaux & Systèmes', 'OC', '2024–2025', 'globe', '#openclassrooms', 'section', 4]
    ];
    $stmt = $pdo->prepare("INSERT INTO certifications (category, title, issuer, date_val, icon, file_path, type, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    foreach ($treeCerts as $c) {
        $stmt->execute($c);
    }

    // 3. Certifications (OpenClassrooms Grid)
    echo "Migrating OpenClassrooms Grid...\n";
    $ocCerts = [
        ['openclassrooms', 'Active Directory', 'OC', '2024', 'server', '/public/openclassroom/AD_z9v2l8.jpg', 'image', 1],
        ['openclassrooms', 'Docker', 'OC', '2024', 'docker', '/public/openclassroom/Docker_m5n1x4.jpg', 'image', 2],
        ['openclassrooms', 'TCP/IP', 'OC', '2024', 'globe', '/public/openclassroom/TCPIP_v8l2n3.png', 'image', 3],
        ['openclassrooms', 'Windows Server', 'OC', '2024', 'windows', '/public/openclassroom/WinServer_k9v1m4.png', 'image', 4],
        ['openclassrooms', 'Cisco Networking', 'OC', '2024', 'globe', '/public/openclassroom/Cisco_x2l9n3.jpg', 'image', 5],
        ['openclassrooms', 'Déploiement Win10', 'OC', '2024', 'windows', '/public/openclassroom/Win10_v5n1m8.png', 'image', 6],
        ['openclassrooms', 'Git & GitHub', 'OC', '2024', 'terminal', '/public/openclassroom/GitGithub_z9v3l8.jpg', 'image', 7],
        ['openclassrooms', 'Git Fundamentals', 'OC', '2024', 'terminal', '/public/openclassroom/Git_k2n5m4.png', 'image', 8],
        ['openclassrooms', 'Linux Administration', 'OC', '2024', 'terminal', '/public/openclassroom/Linux_v8l1n3.jpg', 'image', 9],
        ['openclassrooms', 'Hardware PC', 'OC', '2024', 'server', '/public/openclassroom/PC_x5v9m4.png', 'image', 10],
        ['openclassrooms', 'ChatGPT', 'OC', '2024', 'terminal', '/public/openclassroom/ChatGPT_k8v2l9.png', 'image', 11],
        ['openclassrooms', 'Virtualisation Environnement', 'OC', '2024', 'proxmox', '/public/openclassroom/Virtualisation_m9n1x4.jpg', 'image', 12],
    ];
    $stmt = $pdo->prepare("INSERT INTO certifications (category, title, issuer, date_val, icon, file_path, type, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    foreach ($ocCerts as $c) {
        $stmt->execute($c);
    }

    echo "✅ Migration terminée avec succès.\n";

} catch (PDOException $e) {
    echo "❌ Erreur SQL : " . $e->getMessage() . "\n";
    exit(1);
}
