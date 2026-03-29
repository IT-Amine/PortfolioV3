#!/bin/bash

# Configuration
INTERVAL=300 # 5 minutes en secondes
BRANCH="main"

echo "Sécurisation de l'auto-push toutes les 5 minutes sur la branche $BRANCH..."

while true
do
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
    else
      echo "[$DATE] Erreur : Échec du push. Réessayez manuellement plus tard."
    fi
  else
    echo "[$(date +"%H:%M:%S")] Aucun changement à pousser."
  fi

  # Attendre l'intervalle configuré
  sleep $INTERVAL
done
