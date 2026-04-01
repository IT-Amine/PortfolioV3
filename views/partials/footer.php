<!-- Modales -->
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

<!-- Modale d'Authentification Recruteur -->
<div id="authModal" class="modal">
  ...
</div>



<style>
  /* Styles discrets pour la modale login sans casser le reste */
  .login-modal-card {
    max-width: 400px;
    padding: 2rem;
    border-radius: 20px;
  }

  .login-modal-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .login-modal-icon {
    width: 48px;
    height: 48px;
    background: rgba(45, 106, 79, 0.1);
    color: var(--accent);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
  }

  .login-modal-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .login-input-group label {
    display: block;
    font-size: 0.85rem;
    font-weight: 700;
    color: var(--text-secondary);
    margin-bottom: 0.5rem;
  }

  .input-wrapper input {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    font-family: inherit;
  }

  .btn-login-submit {
    padding: 0.75rem;
    background: var(--accent);
    color: white;
    border-radius: 12px;
    border: none;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .login-modal-close {
    margin-top: 1rem;
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    width: 100%;
    font-size: 0.85rem;
  }

  .login-error-msg {
    color: #ef4444;
    font-size: 0.85rem;
    text-align: center;
    margin-top: 0.5rem;
  }
</style>

<script src="/assets/js/script.js"></script>
</body>

</html>