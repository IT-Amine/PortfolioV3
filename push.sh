#!/bin/bash

# Configuration
BRANCH="main"

# Vérifier s'il y a des changements locaux
if [[ -n $(git status -s) ]]; then
  DATE=$(date +"%d/%m/%Y %H:%M:%S")
  echo "[$DATE] Changements détectés. Préparation de l'envoi..."
  
  # Ajouter tous les fichiers
  git add .
  
  # Commit avec message auto
  git commit -m "Auto-push automatique: $DATE"
  
  # Pousser vers le serveur
  if git push origin $BRANCH; then
    echo "[$DATE] Succès : Modifications envoyées vers GitHub."
    exit 0
  else
    echo "[$DATE] Erreur : Échec du push. Réessayez manuellement plus tard."
    exit 1
  fi
else
  echo "[$(date +"%H:%M:%S")] Aucun changement à pousser."
  exit 0
fi
