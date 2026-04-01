# Portfolio BTS SIO - IT-Amine

Ce projet est un portfolio professionnel développé pour un étudiant en BTS SIO (Services Informatiques aux Organisations), option SISR (Solutions d'Infrastructure, Systèmes et Réseaux). Il est conçu pour être déployé sur **Vercel** avec un backend en **PHP**.

## 📂 Arborescence du Projet

```text
.
├── api/                    # Scripts PHP (Points d'entrée Vercel / API)
│   ├── admin.php           # Page d'administration
│   ├── auth.php            # Gestion de l'authentification (AJAX)
│   ├── config.php          # Initialisation de la configuration
│   ├── content.php         # Récupération dynamique de contenu (Projets, Certifs)
│   ├── index.php           # Point d'entrée principal (Accueil)
│   ├── init_db.php         # Script d'initialisation de la base de données Neon
│   ├── view.php            # Gestion de l'affichage sécurisé des fichiers (PDF/CV)
│   └── ...                 # Autres utilitaires API
├── assets/                 # Ressources statiques du frontend
│   ├── css/                # Feuilles de style (styles.css)
│   ├── img/                # Images, icônes et documents (PDF)
│   │   ├── certif/         # Certificats PDF/JPG
│   │   ├── openclassroom/  # Badges OpenClassrooms
│   │   └── Projet/         # Documents et images liés aux projets
│   └── js/                 # Logique JavaScript client (script.js)
├── bootstrap/              # Configuration de l'application
│   └── config.php          # Variables d'environnement et connexion DB
├── views/                  # Templates et vues HTML (inclus via PHP)
│   ├── pages/              # Pages complètes (home.php, admin.php)
│   └── partials/           # Fragments réutilisables (navbar, footer, head)
├── index.php               # Entrée locale (Redirige vers views/pages/home.php)
├── admin.php               # Raccourci local pour l'admin
├── vercel.json             # Configuration du déploiement Vercel (Routines & Rewrites)
├── .env                    # Variables d'environnement (Base de données, tokens)
├── .vercelignore           # Fichiers à exclure du déploiement Vercel
├── .gitignore              # Fichiers à exclure du contrôle de version
├── robots.txt              # Instructions pour les moteurs de recherche
└── sitemap.xml             # Plan du site pour le SEO
```

## 📝 Explication des Dossiers et Fichiers

### Core / Backend
- **`api/`** : C'est le cœur logique du site sur Vercel. Chaque fichier `.php` dans ce dossier agit comme une fonction serveur. Les requêtes sont redirigées ici via le fichier `vercel.json`.
- **`bootstrap/config.php`** : Centralise la configuration globale, notamment la connexion à la base de données PostgreSQL (Neon) et le chargement des variables d'environnement.

### Frontend / Assets
- **`assets/css/styles.css`** : Contient l'intégralité du design du site. C'est un fichier volumineux qui gère le responsive, les animations et les thèmes.
- **`assets/js/script.js`** : Gère l'interactivité côté client : chargement dynamique des projets, navigation fluide entre les sections, et appels API.
- **`assets/img/`** : Stocke tous les médias. Les fichiers PDF des projets et des certifications sont également stockés ici pour être consultables via le site.

### Structure des Vues
- **`views/pages/`** : Contient le contenu principal de la page d'accueil (`home.php`) et de l'interface d'administration (`admin.php`).
- **`views/partials/`** : Permet de ne pas répéter le code commun. Par exemple, le `head.php` contient toutes les balises `<meta>` et liens CSS, tandis que `navbar.php` gère le menu de navigation.

### Déploiement et SEO
- **`vercel.json`** : Crucial pour le fonctionnement sur Vercel. Il définit comment les URLs (ex: `/admin`) sont redirigées vers les scripts PHP (ex: `/api/admin.php`) et configure les en-têtes de sécurité.
- **`robots.txt` & `sitemap.xml`** : Optimisent le référencement du portfolio sur les moteurs de recherche comme Google.

---
© 2026 - Portfolio IT-Amine
