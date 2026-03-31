#!/bin/bash
# sync_veille.sh - Commande pour forcer la synchronisation de la veille
# Utilisation : ./sync_veille.sh

echo "🚀 Lancement de la synchronisation sélective (ANSSI/CERT-FR)..."
php "$(dirname "$0")/cron/sync-veille.php"
echo "✅ Synchronisation terminée."
