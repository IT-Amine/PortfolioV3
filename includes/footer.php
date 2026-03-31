  <!-- Modales -->
  <!-- Modale Projet Dynamique -->
  <div id="projectModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="modalProjectTitle">Détail du projet</h3>
        <button class="modal-close" onclick="closeProjectModal()">Fermer</button>
      </div>

      <div class="modal-body">
        <p id="modalProjectDesc" class="modal-description"></p>

        <div class="project-modal-layout">
          <div class="project-modal-sidebar">
            <h4 class="sidebar-title">Documents</h4>
            <div id="modalPdfList" class="pdf-selection-list">
              <!-- Boutons injectés ici -->
            </div>
          </div>

          <div class="project-modal-main">
            <div id="modalPdfViewer" class="modal-pdf-container">
              <iframe id="pdfFrame" src="" width="100%" height="500px" frameborder="0"></iframe>
              <div id="pdfFallback" class="pdf-fallback" style="display: none;">
                <p>Aperçu indisponible. <a id="pdfDownloadLink" href="#" target="_blank">Ouvrir le document</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Projet Générique -->
  <div id="genericProjectModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <h3 id="genericProjectTitle">Détails du projet</h3>
        <button class="modal-close" onclick="closeGenericProjectModal()">Fermer</button>
      </div>
      <div id="genericProjectContent" class="modal-body">
        <p>Description détaillée en cours de rédaction...</p>
      </div>
    </div>
  </div>

  <!-- Modal Certificat -->
  <div id="certModal" class="modal" onclick="if(event.target===this) closeCertModal();">
    <div class="modal-content" onclick="event.stopPropagation()">
      <div class="modal-header">
        <div>
          <h3 id="certModalTitle"></h3>
          <p id="certModalSubtitle" class="modal-subtitle"></p>
        </div>
        <button class="modal-close" onclick="closeCertModal()">Fermer</button>
      </div>
      <p class="modal-description" id="certModalDescription"></p>
      <div class="modal-cert-container" id="certModalContent"></div>
    </div>
  </div>

  <!-- Visionneuse Image Générique (Certificats, etc.) -->
  <div id="imageViewerModal" class="modal">
    <div class="modal-content" onclick="event.stopPropagation()">
      <button class="modal-close-absolute" onclick="closeImageViewerModal()">Fermer</button>
      <div class="viewer-modal-image-container">
        <img id="viewerModalImage" src="" alt="" class="viewer-modal-image">
      </div>
      <h3 id="viewerModalTitle" class="viewer-modal-title"></h3>
      <p id="viewerModalDescription" class="viewer-modal-description"></p>
      <div id="viewerModalTags" class="viewer-modal-tags"></div>
    </div>
  </div>

  </div>

  <!-- Modale de Connexion (Admin/Recruteur) -->
  <div id="loginModal" class="modal">
    <div class="modal-content login-modal-card">
      <div class="login-modal-header">
        <div class="login-modal-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h3>Espace Sécurisé</h3>
        <p>Connexion réservée à l'administration</p>
      </div>
      
      <form id="loginForm" class="login-modal-form" onsubmit="handleLogin(event);">
        <div class="login-input-group">
          <label for="username">Identifiant</label>
          <div class="input-wrapper">
            <input type="text" id="username" placeholder="Admin ou Recruteur" required>
          </div>
        </div>
        
        <div class="login-input-group">
          <label for="password">Mot de passe</label>
          <div class="input-wrapper">
            <input type="password" id="password" placeholder="••••••••" required>
          </div>
        </div>
        
        <button type="submit" class="btn-login-submit">
          Se connecter
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </button>
        
        <div id="loginError" class="login-error-msg" style="display: none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          Identifiants incorrects
        </div>
      </form>
      
      <button class="login-modal-close" onclick="closeLoginModal()">Annuler</button>
    </div>
  </div>


  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quad'
    });
  </script>
  <script src="/script.js"></script>
</body>
</html>
