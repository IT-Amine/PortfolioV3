<?php
/**
 * Page d'accueil du portfolio.
 * Inclus depuis index.php (local) et api/index.php (Vercel).
 */
require_once dirname(__DIR__, 2) . '/bootstrap/config.php';

$isAuthorized = isset($_SESSION['role']) && ($_SESSION['role'] === 'admin' || $_SESSION['role'] === 'recruiter');
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <?php include __DIR__ . '/../partials/head.php'; ?>
  <script>
    window.SERVER_AUTH = <?php echo $isAuthorized ? 'true' : 'false'; ?>;
  </script>
</head>

<body>
  <?php include __DIR__ . '/../partials/navbar.php'; ?>

  <!-- Arrière-plan animé -->
  <div class="animated-background"></div>

  <!-- Section Accueil -->
  <section id="accueil" class="section active">
    <div class="hero-content">
      <div class="hero-text">
        <p class="hero-label">BTS SIO • Option SISR</p>
        <h1 class="hero-title">
          Étudiant en <span class="gradient-text">Administration Réseaux & Systèmes</span>
        </h1>
        <p class="hero-description">
          En formation pour devenir administrateur réseau et systèmes. Mise en place
          d'infrastructures sécurisées, virtualisation, segmentation réseau et
          automatisation des tâches d'exploitation.
        </p>
        <div class="hero-buttons">
          <button class="btn-primary" onclick="goToSection('projets')">Consulter mes réalisations</button>

          <?php if ($isAuthorized): ?>
            <a href="/view?file=CV&token=<?php echo getSecureFileToken('CV'); ?>" target="_blank"
              rel="noopener noreferrer" class="btn-outline is-unlocked" id="hero-cv-btn">Mon CV</a>
          <?php endif; ?>
        </div>
        <div class="hero-stack">
          <span class="stack-label">STACK</span>
          <span>Proxmox • OPNsense • Debian • Windows Server • Docker</span>
        </div>
      </div>
      <div class="hero-image-container">
        <div class="abstract-tech-shape"></div>
      </div>
    </div>
  </section>

  <!-- Section BTS SIO -->
  <section id="bts-sio" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">BTS SIO</p>
        <h2 class="section-title">Présentation du <span class="gradient-text">BTS SIO SISR</span></h2>
        <p class="section-description">
          Le BTS Services Informatiques aux Organisations (SIO) prépare aux métiers de l'informatique en entreprise,
          avec une spécialisation en Solutions d'Infrastructure, Systèmes et Réseaux (SISR).
        </p>
      </div>
      <div id="btsSioContent"></div>
    </div>
  </section>

  <!-- Section Projets -->
  <section id="projets" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Projets</p>
        <h2 class="section-title">
          Projets techniques <span class="gradient-text">SISR</span>
        </h2>
      </div>
      <div class="projects-grid" id="projectsGrid">
        <div class="veille-loading">Chargement des projets techniques...</div>
      </div>
    </div>
  </section>

  <!-- Section Veille Technologique -->
  <section id="veille" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Veille Technologique</p>
        <h2 class="section-title">Ma veille en <span class="gradient-text">cybersécurité</span></h2>
        <p class="section-description">
          Suivi régulier des évolutions technologiques en cybersécurité, réseaux et administration système
          pour rester à jour sur les menaces et bonnes pratiques.
        </p>
      </div>
      <div id="veilleContent"></div>
    </div>
  </section>

  <!-- Section Compétences -->
  <section id="competences" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Compétences techniques</p>
        <h2 class="section-title">
          Tableau de synthèse des <span class="gradient-text">compétences</span>
        </h2>
        <p class="section-description">
          Référentiel officiel BTS SIO SISR — compétences maîtrisées avec niveau et preuves associées.
        </p>
      </div>
      <div class="skills-grid" id="skillsGrid"></div>
      <div class="competences-table-wrapper" id="competencesTable"></div>
    </div>
  </section>

  <?php if ($isAuthorized): ?>
    <!-- Section Formations -->
    <section id="formations" class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Mes Formations</p>
          <h2 class="section-title">Parcours de formation</h2>
          <p class="section-description">
            Un parcours orienté réseaux, systèmes et cybersécurité, avec des formations complémentaires.
          </p>
        </div>

        <div class="formations-split-layout">
          <div class="formations-column">
            <div class="column-header">
              <span class="column-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg></span>
              <h3 class="column-title">Études & Parcours</h3>
            </div>
            <div class="formations-grid" id="formationsGrid"></div>
          </div>

          <div class="certifications-column">
            <div class="column-header">
              <span class="column-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg></span>
              <h3 class="column-title">Certifications Clés</h3>
            </div>
            <div id="certificationsTree" class="cert-tree-container">
              <!-- Arbre injecté par JS -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section OpenClassrooms -->
    <section id="openclassrooms" class="section">
      <div class="container">
        <div class="section-header">
          <p class="section-label">Certifications OpenClassrooms</p>
          <h2 class="section-title">
            Parcours en ligne orienté <span class="gradient-text">infrastructure</span>
          </h2>
          <p class="section-description">
            Sélection de formations OpenClassrooms validées autour des réseaux,
            systèmes, automatisation et outils modernes.
          </p>
        </div>
        <div class="openclassrooms-grid" id="openclassroomsGrid"></div>
        <p class="openclassrooms-footer">
          Ces certifications complètent ma formation BTS SIO SISR en renforçant ma
          pratique des réseaux, des systèmes Microsoft et des outils de
          productivité modernes.
        </p>
      </div>
    </section>
  <?php endif; ?>

  <!-- Section Contact -->
  <section id="contact" class="section">
    <div class="container">
      <div class="section-header">
        <p class="section-label">Contact</p>
        <h2 class="section-title">
          Discutons ensemble sur le thème <span class="gradient-text">SISR</span>
        </h2>
        <p class="section-description">
          Disponible pour des stages ou projets orientés réseaux, systèmes et sécurité.
          N'hésitez pas à me contacter pour échanger sur vos besoins.
        </p>
      </div>

      <div class="contact-missions">
        <h3 class="contact-section-title">
          <span class="contact-title-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg></span>
          Missions recherchées
        </h3>
        <div class="missions-grid">
          <div class="mission-card">
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                <path d="M6 12v5c3 3 9 3 12 0v-5" />
              </svg></div>
            <h4>Stage BTS SISR</h4>
            <p>Mission de 6 semaines</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg></div>
            <h4>Projets infrastructure</h4>
            <p>Réseaux & Systèmes</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg></div>
            <h4>Administration</h4>
            <p>Sécurité & Cloud</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="22" y1="12" x2="18" y2="12" />
                <line x1="6" y1="12" x2="2" y2="12" />
                <line x1="12" y1="6" x2="12" y2="2" />
                <line x1="12" y1="22" x2="12" y2="18" />
              </svg></div>
            <h4>Audits Sécurité</h4>
            <p>Analyse & Hardening</p>
          </div>
        </div>
      </div>

      <div class="contact-buttons">
        <a href="mailto:kadaamine37@hotmail.com?subject=Contact%20Portfolio" class="btn-primary"
          id="contact-mail-btn">Me contacter par mail</a>
        <a href="https://github.com/IT-Amine" target="_blank" rel="noopener noreferrer" class="btn-secondary">Voir mon
          GitHub</a>
        <a href="https://www.linkedin.com/in/kada-amine" target="_blank" rel="noopener noreferrer"
          class="btn-outline">LinkedIn</a>
      </div>

      <p class="contact-footer">
        © <?php echo date('Y'); ?> Étudiant BTS SIO SISR — Portfolio
      </p>
    </div>
  </section>

  <?php include __DIR__ . '/../partials/footer.php'; ?>

  <!-- MODALE D'AUTHENTIFICATION UNIFIÉE (ADMIN & RECRUTEUR) -->
  <div class="modal" id="loginModal">
    <div class="modal-content auth-modal-card">
      <button class="modal-close" onclick="closeLoginModal()">&times;</button>

      <div class="auth-tabs">
        <button class="auth-tab-btn active" id="tab-recruteur" onclick="switchAuthTab('recruteur')">Accès
          Recruteur</button>
        <button class="auth-tab-btn" id="tab-admin" onclick="switchAuthTab('admin')">Administration</button>
      </div>

      <!-- Formulaire Recruteur -->
      <div id="auth-recruteur-content" class="auth-tab-content active">
        <div class="auth-header">
          <div class="auth-icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <polyline points="17 11 19 13 23 9" />
            </svg>
          </div>
          <h3>Espace Recruteur</h3>
          <p>Saisissez votre code pour débloquer le CV et les certifications.</p>
        </div>
        <form id="recruiterAuthForm" onsubmit="handleRecruiterUnlock(event)">
          <div class="form-group">
            <label for="accessCodeInput">Code d'accès</label>
            <input type="text" id="accessCodeInput" placeholder="Entrez votre code..." required>
          </div>
          <div id="authError" class="auth-error-msg"
            style="display:none; color: #ef4444; margin-bottom: 10px; font-size: 0.9rem;">Code incorrect.</div>
          <button type="submit" class="btn-primary auth-submit-btn" style="width: 100%;">Déverrouiller l'accès</button>
        </form>
      </div>

      <!-- Formulaire Admin -->
      <div id="auth-admin-content" class="auth-tab-content" style="display:none;">
        <div class="auth-header">
          <div class="auth-icon-circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </div>
          <h3>Administration</h3>
          <p>Identifiez-vous pour gérer le contenu du portfolio.</p>
        </div>
        <form id="adminLoginForm" onsubmit="handleLogin(event)">
          <div class="form-group">
            <label for="admin_username">Identifiant</label>
            <input type="text" id="admin_username" placeholder="Nom d'utilisateur" required>
          </div>
          <div class="form-group">
            <label for="admin_password">Mot de passe</label>
            <input type="password" id="admin_password" placeholder="••••••••" required>
          </div>
          <div id="loginError" class="auth-error-msg"
            style="display:none; color: #ef4444; margin-bottom: 10px; font-size: 0.9rem;">Identifiants incorrects.</div>
          <button type="submit" class="btn-primary auth-submit-btn" style="width: 100%;">Se connecter</button>
        </form>
      </div>
    </div>
  </div>


</body>

</html>
