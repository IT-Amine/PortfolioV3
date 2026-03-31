  <!-- Navigation (SISR PRO GLASS) -->
  <header class="nav-header" id="main-nav">
    <div class="nav-container">
      <div class="nav-brand" onclick="goToSection('accueil')">IT AMINE</div>
      
      <button type="button" class="nav-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-menu">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>

      <!-- Indicateur de déverrouillage discret (Style Pro) -->
      <div id="unlockIndicator" class="unlock-status-icon" style="margin-right: 15px; opacity: 0; transition: opacity 0.5s ease;">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981"
          stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0" />
        </svg>
      </div>

      <nav class="nav-menu" id="nav-menu" role="navigation" aria-label="Menu principal">
        <button type="button" class="nav-btn active" data-section="accueil">Accueil</button>
        <button type="button" class="nav-btn" data-section="bts-sio">SISR</button>
        <button type="button" class="nav-btn" data-section="projets">Projets</button>
        <button type="button" class="nav-btn" data-section="veille">Veille</button>
        <?php if (isset($_SESSION['role'])): ?>
          <button type="button" class="nav-btn" data-section="formations">Formations</button>
        <?php endif; ?>
        <button type="button" class="nav-btn" data-section="competences">Compétences</button>
        <button type="button" class="nav-btn" data-section="contact">Contact</button>
        
        <?php if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin'): ?>
          <a href="admin.php" class="nav-btn btn-admin-nav" style="background: var(--accent); color: white !important; font-weight: 700; border-radius: 12px; padding: 0.6rem 1.2rem; box-shadow: 0 4px 12px rgba(45, 106, 79, 0.2);">Dashboard</a>
          <a href="/api/auth.php?action=logout" class="nav-btn" style="opacity: 0.7; font-size: 0.8rem; margin-left: 10px;">Déconnexion</a>
        <?php else: ?>
          <button type="button" class="nav-btn btn-login-nav" onclick="openLoginModal()" style="background: var(--accent); color: white !important; font-weight: 700; border-radius: 12px; padding: 0.6rem 1.2rem; margin-left: 15px; border: none; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(45, 106, 79, 0.2);">
            S'identifier
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 8px; vertical-align: middle;"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
          </button>
        <?php endif; ?>
      </nav>
    </div>
  </header>
