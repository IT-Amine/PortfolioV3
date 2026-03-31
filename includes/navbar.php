  <!-- Navigation -->
  <header class="nav-header" id="main-nav">
    <div class="nav-container">
      <div class="nav-brand" onclick="goToSection('accueil')">IT AMINE</div>
      
      <button type="button" class="nav-toggle" id="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="nav-menu">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>

      <nav class="nav-menu" id="nav-menu" role="navigation">
        <button type="button" class="nav-btn active" data-section="accueil">Accueil</button>
        <button type="button" class="nav-btn" data-section="bts-sio">SISR</button>
        <button type="button" class="nav-btn" data-section="projets">Réalisations</button>
        <button type="button" class="nav-btn" data-section="veille">Veille</button>
        <?php if (isset($_SESSION['role']) && ($_SESSION['role'] === 'admin' || $_SESSION['role'] === 'recruiter')): ?>
          <button type="button" class="nav-btn" data-section="formations">Formations</button>
        <?php endif; ?>
        <button type="button" class="nav-btn" data-section="competences">Compétences</button>
        <button type="button" class="nav-btn" data-section="contact">Contact</button>
        
        <?php if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin'): ?>
          <a href="admin.php" class="nav-btn btn-admin-nav">Dashboard Admin</a>
        <?php endif; ?>

        <?php if (isset($_SESSION['user_id'])): ?>
          <a href="api/auth.php?action=logout" class="nav-btn btn-logout-nav">Déconnexion</a>
        <?php else: ?>
          <button type="button" class="nav-btn btn-login-nav" onclick="openLoginModal()">S'identifier</button>
        <?php endif; ?>
      </nav>
    </div>
  </header>
