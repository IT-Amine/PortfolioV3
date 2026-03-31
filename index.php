<?php
/**
 * index.php (Root)
 * Point d'entrée pour le développement LOCAL et Vercel
 */
require_once __DIR__ . '/includes/config.php';
?>
<!DOCTYPE html>
<html lang="fr">
<?php include __DIR__ . '/includes/head.php'; ?>
<body>
    <?php include __DIR__ . '/includes/navbar.php'; ?>

    <!-- Section Accueil / Hero -->
    <section id="accueil" class="section hero-section active">
        <div class="hero-container">
            <div class="hero-badge" data-aos="fade-down">Disponibilité : Alternance 2025</div>
            <h1 class="hero-title" data-aos="fade-up">
                Expertise en <span class="gradient-text">Cybersécurité</span> & Infrastructure IT
            </h1>
            <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="100">
                Étudiant en BTS SIO SISR passionné par la défense des systèmes et l'automatisation réseau.
            </p>
            <div class="hero-cta" data-aos="fade-up" data-aos-delay="200">
                <a href="#projets" class="btn-primary">Découvrir mes Projets</a>
                <?php if (isset($_SESSION['role'])): ?>
                    <a href="javascript:void(0)" onclick="window.open(getSecureUrl('CV'), '_blank')" class="btn-secondary">📄 Mon CV (Sécurisé)</a>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Section BTS SIO -->
    <section id="bts-sio" class="section">
        <div class="container">
            <h2 class="section-title">Parcours <span class="gradient-text">BTS SIO SISR</span></h2>
            <div id="btsSioContent"></div>
        </div>
    </section>

    <!-- Section Projets -->
    <section id="projets" class="section">
        <div class="container">
            <h2 class="section-title">Projets <span class="gradient-text">Techniques</span></h2>
            <div class="projects-grid" id="projectsGrid"></div>
        </div>
    </section>

    <!-- Section Veille -->
    <section id="veille" class="section">
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">Veille <span class="gradient-text">Technologique</span></h2>
                <p class="section-subtitle">
                    Analyse continue des menaces et vulnérabilités (CERT-FR & ANSSI) 
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

    <!-- Section Formations -->
    <?php if (isset($_SESSION['role'])): ?>
    <section id="formations" class="section">
        <div class="container">
            <h2 class="section-title">Études & <span class="gradient-text">Parcours</span></h2>
            <div id="formationsGrid"></div>
            
            <h2 class="section-title" style="margin-top: 4rem;">Certifications <span class="gradient-text">Clés</span></h2>
            <div id="certificationsTree"></div>
        </div>
    </section>

    <!-- Section OpenClassrooms -->
    <section id="openclassrooms" class="section">
        <div class="container">
            <h2 class="section-title">Certificats <span class="gradient-text">OpenClassrooms</span></h2>
            <p class="section-subtitle">Spécialisation et badges de compétences techniques</p>
            <div class="oc-grid" id="openclassroomsGrid"></div>
        </div>
    </section>
    <?php endif; ?>

    <!-- Section Compétences (Tableau) -->
    <section id="competences" class="section">
        <div class="container">
            <h2 class="section-title">Tableau de <span class="gradient-text">Compétences</span></h2>
            <div id="competencesTable"></div>
        </div>
    </section>

    <!-- Section Contact -->
    <section id="contact" class="section">
        <div class="container">
            <h2 class="section-title">Me <span class="gradient-text">Contacter</span></h2>
            <div class="contact-card">
                <p>N'hésitez pas à me solliciter pour toute opportunité ou échange technique.</p>
                <div class="contact-links">
                    <a href="mailto:votre@email.com" class="contact-link">Email</a>
                    <a href="https://linkedin.com/in/votre-profil" target="_blank" class="contact-link">LinkedIn</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Modale Visionneuse Image -->
    <div id="imageViewerModal" class="modal-viewer">
        <div class="modal-viewer-overlay" onclick="closeImageViewerModal()"></div>
        <div class="modal-viewer-content">
            <button class="modal-close-btn" onclick="closeImageViewerModal()">&times;</button>
            <h3 id="viewerTitle" class="viewer-title"></h3>
            <img id="viewerImg" src="" alt="Aperçu">
        </div>
    </div>

    <?php include __DIR__ . '/includes/footer.php'; ?>
    <script src="/script.js"></script>
</body>
</html>
