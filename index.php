<?php include_once 'includes/config.php'; ?>
<?php include_once 'includes/head.php'; ?>

<?php include_once 'includes/navbar.php'; ?>

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
          <?php if (isset($_SESSION['role']) && ($_SESSION['role'] === 'admin' || $_SESSION['role'] === 'recruiter')): ?>
            <button onclick="window.open(getSecureUrl('CV'))" class="btn-outline" id="hero-cv-btn">
              Mon CV
            </button>
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
        <!-- Les cartes de projets seront générées ici par script.js -->
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
      <div class="veille-sources-info">
        <p class="sources-label">Sources officielles surveillées :</p>
        <div class="sources-links">
          <a href="https://www.cert.ssi.gouv.fr/" target="_blank" class="source-link">ANSSI (CERT-FR)</a>
          <a href="https://www.ssi.gouv.fr/" target="_blank" class="source-link">Cyber-sécurité Gouvernementale</a>
        </div>
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

  <?php if (isset($_SESSION['role']) && ($_SESSION['role'] === 'admin' || $_SESSION['role'] === 'recruiter')): ?>
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
  <?php endif; ?>

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
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
                <line x1="10" y1="6" x2="10" y2="6.01" />
                <line x1="10" y1="18" x2="10" y2="18.01" />
                <line x1="14" y1="6" x2="14" y2="6.01" />
                <line x1="14" y1="18" x2="14" y2="18.01" />
                <line x1="18" y1="6" x2="18.01" y2="6" />
                <line x1="18" y1="18" x2="18.01" y2="18" />
              </svg></div>
            <h4>Stage BTS SISR</h4>
            <p>6 semaines</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg></div>
            <h4>Projets infrastructure réseau</h4>
            <p>Configuration & optimisation</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg></div>
            <h4>Administration systèmes</h4>
            <p>Linux/Windows</p>
          </div>
          <div class="mission-card">
            <div class="mission-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg></div>
            <h4>Missions cybersécurité</h4>
            <p>Audit & sécurisation</p>
          </div>
        </div>
      </div>

      <div class="contact-competences">
        <h3 class="contact-section-title">
          <span class="contact-title-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg></span>
          Ce que je peux apporter
        </h3>
        <div class="competences-grid">
          <div class="competence-card">
            <div class="competence-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
                <line x1="10" y1="6" x2="10" y2="6.01" />
                <line x1="10" y1="18" x2="10" y2="18.01" />
                <line x1="14" y1="6" x2="14" y2="6.01" />
                <line x1="14" y1="18" x2="14" y2="18.01" />
                <line x1="18" y1="6" x2="18.01" y2="6" />
                <line x1="18" y1="18" x2="18.01" y2="18" />
              </svg></div>
            <div>
              <h4>Configuration serveurs & virtualisation</h4>
              <p>Proxmox, VMware, Windows Server</p>
            </div>
          </div>
          <div class="competence-card">
            <div class="competence-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg></div>
            <div>
              <h4>Mise en place solutions réseau</h4>
              <p>VLAN, Routage, Firewall</p>
            </div>
          </div>
          <div class="competence-card">
            <div class="competence-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg></div>
            <div>
              <h4>Audit sécurité</h4>
              <p>Analyse vulnérabilités & hardening</p>
            </div>
          </div>
          <div class="competence-card">
            <div class="competence-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg></div>
            <div>
              <h4>Documentation technique</h4>
              <p>Procédures & rapports détaillés</p>
            </div>
          </div>
        </div>
      </div>

      <div class="contact-buttons">
        <a href="mailto:kadaamine37@hotmail.com?subject=Contact%20Portfolio" class="btn-primary btn-with-icon"
          id="contact-mail-btn"><span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg></span>Me contacter par mail</a>
        <a href="https://github.com/IT-Amine" target="_blank" rel="noopener noreferrer"
          class="btn-secondary btn-with-icon"><span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
              stroke-linejoin="round">
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg></span>Voir mon GitHub</a>
        <a href="https://www.linkedin.com/in/kada-amine" target="_blank" rel="noopener noreferrer"
          class="btn-outline btn-with-icon"><span class="btn-icon"><svg xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg></span>Profil LinkedIn</a>
      </div>

      <p class="contact-footer">
        © <?php echo date('Y'); ?> Étudiant BTS SIO SISR — Portfolio
      </p>
    </div>
  </section>

<?php include_once 'includes/footer.php'; ?>
