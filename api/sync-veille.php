<?php
/**
 * cron/sync-veille.php
 * Tâche Cron pour synchroniser les articles de veille cybersécurité (Version Sélective)
 */
require_once __DIR__ . '/../includes/config.php';

// Sécurité : Bearer CRON_SECRET (obligatoire en prod Vercel ; dev local peut définir CRON_SECRET)
$SECRET = getenv('CRON_SECRET') ?: ($_ENV['CRON_SECRET'] ?? '');
if ($SECRET === '' && !getenv('VERCEL')) {
    $SECRET = 'local-dev-cron-only';
}
$authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

if (php_sapi_name() !== 'cli') {
    if ($SECRET === '' || $authHeader !== 'Bearer ' . $SECRET) {
        sendJSON(['error' => 'Non autorisé'], 401);
    }
}

$RSS_SOURCES = [
    ['name' => 'CERT-FR — Alertes', 'url' => 'https://www.cert.ssi.gouv.fr/feed/'],
    ['name' => 'CERT-FR — Avis (CVE)', 'url' => 'https://www.cert.ssi.gouv.fr/avis/feed/']
];

function parseRSS($xml_url, $sourceName) {
    $items = [];
    $xml = @simplexml_load_file($xml_url);
    if (!$xml) return [];

    foreach ($xml->channel->item as $item) {
        $items[] = [
            'title' => (string)$item->title,
            'link' => (string)$item->link,
            'pub_date' => date('Y-m-d H:i:s', strtotime((string)$item->pubDate)),
            'source' => $sourceName
        ];
    }
    return $items;
}

try {
    // 1. Vérifier si on a déjà atteint le quota de 2 articles ce mois-ci
    $currentMonth = date('Y-m');
    $stmt = $pdo->prepare("SELECT COUNT(*) FROM veille WHERE TO_CHAR(pub_date, 'YYYY-MM') = ?");
    $stmt->execute([$currentMonth]);
    $countThisMonth = $stmt->fetchColumn();

    if ($countThisMonth >= 2) {
        die("✅ Quota mensuel atteint (2/2). Aucune synchronisation nécessaire.\n");
    }

    $availableSlots = 2 - $countThisMonth;
    echo "📡 Quota restant : $availableSlots article(s) pour le mois de " . date('F') . ".\n";

    $allArticles = [];
    foreach ($RSS_SOURCES as $feed) {
        $allArticles = array_merge($allArticles, parseRSS($feed['url'], $feed['name']));
    }

    // 2. Trier par date décroissante
    usort($allArticles, function($a, $b) { return strtotime($b['pub_date']) - strtotime($a['pub_date']); });

    // 3. Insertion sélective
    $insertedCount = 0;
    $stmtInsert = $pdo->prepare("INSERT INTO veille (title, link, source, pub_date) VALUES (?, ?, ?, ?)");

    foreach ($allArticles as $art) {
        if ($insertedCount >= $availableSlots) break;

        // On vérifie si l'article existe déjà (via le lien)
        $check = $pdo->prepare("SELECT id FROM veille WHERE link = ?");
        $check->execute([$art['link']]);
        if (!$check->fetch()) {
            $stmtInsert->execute([$art['title'], $art['link'], $art['source'], $art['pub_date']]);
            if ($stmtInsert->rowCount() > 0) {
                echo "✨ Nouvel article : " . $art['title'] . "\n";
                $insertedCount++;
            }
        }
    }

    echo "🏁 Synchronisation terminée. $insertedCount articles ajoutés.\n";

} catch (Exception $e) {
    echo "❌ Erreur : " . $e->getMessage() . "\n";
}
