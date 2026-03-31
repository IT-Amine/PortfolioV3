<?php
require_once 'includes/config.php';

// Protection de la page : Seul l'Admin peut entrer
if (!isset($_SESSION['role']) || $_SESSION['role'] !== 'admin') {
    header('Location: index.php');
    exit;
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin | IT AMINE</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
        .admin-page { padding-top: 100px; min-height: 100vh; background: #f8fafc; padding-bottom: 50px; }
        .admin-container { max-width: 1200px; margin: 0 auto; padding: 2rem; }
        .admin-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
        .admin-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 1.5rem; }
        .admin-card { background: white; padding: 2rem; border-radius: 20px; border: 1px solid var(--border-subtle); box-shadow: var(--shadow-card); }
        .admin-card h3 { color: var(--accent); margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.75rem; font-size: 1.25rem; font-weight: 800; }
        
        /* Forms */
        .admin-form { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
        .admin-input-group { display: flex; flex-direction: column; gap: 0.5rem; }
        .admin-input-group label { font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); }
        .admin-input { padding: 0.75rem 1rem; border: 1px solid var(--border-subtle); border-radius: 12px; font-family: inherit; font-size: 0.9rem; }
        .admin-input:focus { outline: none; border-color: var(--accent); box-shadow: 0 0 0 4px var(--accent-soft); }
        
        .btn-submit { padding: 0.75rem; background: var(--accent); color: white; border-radius: 12px; border: none; font-weight: 700; cursor: pointer; transition: all 0.2s; }
        .btn-submit:hover { background: var(--accent-hover); transform: translateY(-2px); }
        
        /* Lists */
        .admin-list { margin-top: 1.5rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem; }
        .list-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem; background: #f9fafb; border-radius: 10px; margin-bottom: 0.75rem; border: 1px solid transparent; transition: all 0.2s; }
        .list-item:hover { border-color: var(--accent-soft); background: white; }
        .item-info { display: flex; flex-direction: column; gap: 0.25rem; }
        .item-title { font-size: 0.9rem; font-weight: 700; color: var(--text-primary); }
        .item-meta { font-size: 0.75rem; color: var(--text-muted); }
        
        .btn-delete { padding: 0.4rem; background: #fee2e2; color: #ef4444; border: none; border-radius: 8px; cursor: pointer; transition: all 0.2s; }
        .btn-delete:hover { background: #ef4444; color: white; }

        /* DropZone */
        .dropzone { border: 2px dashed rgba(45, 106, 79, 0.2); background: rgba(45, 106, 79, 0.02); padding: 2rem; border-radius: 12px; text-align: center; cursor: pointer; transition: all 0.3s; margin-bottom: 0.5rem; display: flex; flex-direction: column; align-items: center; gap: 0.5rem; color: var(--text-muted); font-weight: 600; font-size: 0.85rem; }
        .dropzone:hover, .dropzone.active { border-color: var(--accent); background: rgba(45, 106, 79, 0.05); color: var(--accent); }
        .dropzone span { pointer-events: none; }
        
        .status-msg { margin-top: 1rem; padding: 0.75rem; border-radius: 10px; display: none; font-size: 0.85rem; font-weight: 600; }
        .status-success { background: #dcfce7; color: #166534; }
        .status-error { background: #fee2e2; color: #991b1b; }
    </style>
</head>
<body>
    <?php include 'includes/navbar.php'; ?>

    <main class="admin-page">
        <div class="admin-container">
            <div class="admin-header">
                <div>
                    <h1>Tableau de <span class="gradient-text">Bord</span></h1>
                    <p>Bienvenue, <strong><?php echo htmlspecialchars($_SESSION['username']); ?></strong>. Panel connecté à Néon DB.</p>
                </div>
                <a href="api/auth.php?action=logout" class="btn-logout-nav" style="background:#ef4444; color:white; padding: 0.75rem 1.5rem; border-radius:12px; text-decoration:none; font-weight:bold;">Déconnexion</a>
            </div>

            <div class="admin-grid">
                <!-- Gestion Veille -->
                <div class="admin-card">
                    <h3>🔍 Veille Cybersécurité</h3>
                    <form class="admin-form" id="veilleForm">
                        <div class="admin-input-group">
                            <label>Titre de l'article</label>
                            <input type="text" id="v_title" class="admin-input" placeholder="Faille zero-day..." required>
                        </div>
                        <div class="admin-input-group">
                            <label>Lien URL</label>
                            <input type="url" id="v_link" class="admin-input" placeholder="https://..." required>
                        </div>
                        <div class="admin-input-group">
                            <label>Source</label>
                            <input type="text" id="v_source" class="admin-input" placeholder="ANSSI, CERT-FR..." required>
                        </div>
                        <button type="submit" class="btn-submit">Ajouter l'article</button>
                    </form>
                    <div id="v_status" class="status-msg"></div>
                    <div class="admin-list" id="veilleList"></div>
                </div>

                <!-- Gestion Accès Recruteurs -->
                <div class="admin-card">
                    <h3>🔑 Accès Recruteurs</h3>
                    <form class="admin-form" id="accessForm">
                        <div class="admin-input-group">
                            <label>Nom d'utilisateur / Entreprise</label>
                            <input type="text" id="u_name" class="admin-input" placeholder="Recruteur_Acap" required>
                        </div>
                        <div class="admin-input-group">
                            <label>Mot de passe</label>
                            <input type="text" id="u_pass" class="admin-input" placeholder="Code sécurisé" required>
                        </div>
                        <button type="submit" class="btn-submit">Générer l'accès</button>
                    </form>
                    <div id="u_status" class="status-msg"></div>
                    <div class="admin-list" id="userList"></div>
                </div>

                <!-- Gestion Formations -->
                <div class="admin-card">
                    <h3>🎓 Mes Formations</h3>
                    <form class="admin-form" id="formationForm">
                        <div class="admin-input-group">
                            <label>Diplôme / Formation</label>
                            <input type="text" id="f_title" class="admin-input" placeholder="BTS SIO SISR" required>
                        </div>
                        <div class="admin-input-group">
                            <label>Établissement</label>
                            <input type="text" id="f_subtitle" class="admin-input" placeholder="Lycée..." required>
                        </div>
                        <div class="admin-input-group">
                            <label>Dates</label>
                            <input type="text" id="f_date" class="admin-input" placeholder="2025–2027" required>
                        </div>
                        <div class="admin-input-group">
                            <label>Chemin PDF ( GitHub/Public )</label>
                            <div class="dropzone" id="f_drop">
                                <span>📄 Glissez-déposez votre PDF ici</span>
                                <input type="file" hidden accept=".pdf">
                            </div>
                            <input type="text" id="f_pdf" class="admin-input" placeholder="/public/uploads/..." required>
                        </div>
                        <button type="submit" class="btn-submit">Ajouter la formation</button>
                    </form>
                    <div id="f_status" class="status-msg"></div>
                    <div class="admin-list" id="formationList"></div>
                </div>

                <!-- Gestion Certifications -->
                <div class="admin-card">
                    <h3>🏆 Certifications & Badges</h3>
                    <form class="admin-form" id="certForm">
                        <div class="admin-input-group">
                            <label>Libellé de la certif</label>
                            <input type="text" id="c_title" class="admin-input" placeholder="PIX, Docker..." required>
                        </div>
                        <div class="admin-input-group">
                            <label>Type de badge</label>
                            <select id="c_cat" class="admin-input">
                                <option value="tree">Arbre des Certifs (Timeline)</option>
                                <option value="openclassrooms">Grille OpenClassrooms (Hexagone)</option>
                            </select>
                        </div>
                        <div class="admin-input-group">
                            <label>Chemin Image / Doc</label>
                            <div class="dropzone" id="c_drop">
                                <span>🖼️ Glissez-déposez le badge ou PDF</span>
                                <input type="file" hidden accept=".pdf,.png,.jpg,.jpeg">
                            </div>
                            <input type="text" id="c_file" class="admin-input" placeholder="/public/uploads/..." required>
                        </div>
                        <button type="submit" class="btn-submit">Ajouter la certification</button>
                    </form>
                    <div id="c_status" class="status-msg"></div>
                    <div class="admin-list" id="certList"></div>
                </div>

            </div>
        </div>
    </main>

    <script>
        // --- HELPERS ---
        async function apiCall(url, method = 'GET', body = null) {
            const options = { method };
            if (body) {
                options.headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
                options.body = body;
            }
            const res = await fetch(url, options);
            return res.json();
        }

        function showStatus(id, msg, isError = false) {
            const el = document.getElementById(id);
            el.textContent = msg;
            el.className = `status-msg ${isError ? 'status-error' : 'status-success'}`;
            el.style.display = 'block';
            setTimeout(() => el.style.display = 'none', 3000);
        }

        // --- VEILLE ---
        async function loadVeille() {
            const data = await apiCall('api/admin/veille_actions.php?action=list');
            document.getElementById('veilleList').innerHTML = data.map(v => `
                <div class="list-item">
                    <div class="item-info">
                        <span class="item-title">${v.title}</span>
                        <span class="item-meta">${v.source}</span>
                    </div>
                    <button class="btn-delete" onclick="deleteVeille(${v.id})">🗑️</button>
                </div>
            `).join('');
        }
        document.getElementById('veilleForm').onsubmit = async (e) => {
            e.preventDefault();
            const body = new URLSearchParams(new FormData(e.target));
            body.append('title', document.getElementById('v_title').value);
            body.append('link', document.getElementById('v_link').value);
            body.append('source', document.getElementById('v_source').value);
            const res = await apiCall('api/admin/veille_actions.php', 'POST', body);
            if(res.success) { showStatus('v_status', 'Article ajouté'); e.target.reset(); loadVeille(); }
        }
        async function deleteVeille(id) { if(confirm('Sûr ?')) { await apiCall(`api/admin/veille_actions.php?id=${id}`, 'DELETE'); loadVeille(); } }

        // --- USERS ---
        async function loadUsers() {
            const data = await apiCall('api/admin/access_actions.php');
            document.getElementById('userList').innerHTML = data.map(u => `
                <div class="list-item">
                    <div class="item-info">
                        <span class="item-title">${u.username}</span>
                        <span class="item-meta">${u.role}</span>
                    </div>
                    ${u.id === 1 ? '' : `<button class="btn-delete" onclick="deleteUser(${u.id})">🗑️</button>`}
                </div>
            `).join('');
        }
        document.getElementById('accessForm').onsubmit = async (e) => {
            e.preventDefault();
            const body = new URLSearchParams();
            body.append('username', document.getElementById('u_name').value);
            body.append('password', document.getElementById('u_pass').value);
            const res = await apiCall('api/admin/access_actions.php', 'POST', body);
            if(res.success) { showStatus('u_status', 'Accès créé'); e.target.reset(); loadUsers(); }
        }
        async function deleteUser(id) { if(confirm('Sûr ?')) { await apiCall(`api/admin/access_actions.php?id=${id}`, 'DELETE'); loadUsers(); } }

        // --- FORMATIONS ---
        async function loadFormations() {
            const data = await apiCall('api/admin/content_actions.php?action=list_formations');
            document.getElementById('formationList').innerHTML = data.map(f => `
                <div class="list-item">
                    <div class="item-info">
                        <span class="item-title">${f.title}</span>
                        <span class="item-meta">${f.date_range}</span>
                    </div>
                    <button class="btn-delete" onclick="deleteFormation(${f.id})">🗑️</button>
                </div>
            `).join('');
        }
        document.getElementById('formationForm').onsubmit = async (e) => {
            e.preventDefault();
            const body = new URLSearchParams();
            body.append('title', document.getElementById('f_title').value);
            body.append('subtitle', document.getElementById('f_subtitle').value);
            body.append('date', document.getElementById('f_date').value);
            body.append('pdf_path', document.getElementById('f_pdf').value);
            const res = await apiCall('api/admin/content_actions.php?action=add_formation', 'POST', body);
            if(res.success) { showStatus('f_status', 'Formation ajoutée'); e.target.reset(); loadFormations(); }
        }
        async function deleteFormation(id) { if(confirm('Sûr ?')) { await apiCall(`api/admin/content_actions.php?action=delete_formation&id=${id}`, 'DELETE'); loadFormations(); } }

        // --- CERTIFICATIONS ---
        async function loadCerts() {
            const data = await apiCall('api/admin/content_actions.php?action=list_certifications');
            document.getElementById('certList').innerHTML = data.map(c => `
                <div class="list-item">
                    <div class="item-info">
                        <span class="item-title">${c.title}</span>
                        <span class="item-meta">Cat: ${c.category}</span>
                    </div>
                    <button class="btn-delete" onclick="deleteCert(${c.id})">🗑️</button>
                </div>
            `).join('');
        }
        document.getElementById('certForm').onsubmit = async (e) => {
            e.preventDefault();
            const body = new URLSearchParams();
            body.append('title', document.getElementById('c_title').value);
            body.append('category', document.getElementById('c_cat').value);
            body.append('file_path', document.getElementById('c_file').value);
            // Default values
            body.append('type', document.getElementById('c_cat').value === 'tree' ? 'image' : 'image');
            body.append('icon', document.getElementById('c_cat').value === 'tree' ? 'shield' : 'globe');
            
            const res = await apiCall('api/admin/content_actions.php?action=add_certification', 'POST', body);
            if(res.success) { showStatus('c_status', 'Certification ajoutée'); e.target.reset(); loadCerts(); }
        }
        async function deleteCert(id) { if(confirm('Sûr ?')) { await apiCall(`api/admin/content_actions.php?action=delete_certification&id=${id}`, 'DELETE'); loadCerts(); } }


        // --- UPLOAD HANDLER ---
        function setupDropZone(dropId, inputId, statusId) {
            const dropzone = document.getElementById(dropId);
            const input = document.getElementById(inputId);

            dropzone.onclick = () => dropzone.querySelector('input').click();
            dropzone.querySelector('input').onchange = (e) => uploadFile(e.target.files[0], input, statusId);

            dropzone.ondragover = (e) => { e.preventDefault(); dropzone.classList.add('active'); };
            dropzone.ondragleave = () => dropzone.classList.remove('active');
            dropzone.ondrop = (e) => {
                e.preventDefault();
                dropzone.classList.remove('active');
                if (e.dataTransfer.files.length) uploadFile(e.dataTransfer.files[0], input, statusId);
            };
        }

        async function uploadFile(file, textInput, statusId) {
            if (!file) return;
            const formData = new FormData();
            formData.append('file', file);

            showStatus(statusId, '📤 Upload & Sync GitHub en cours...');
            try {
                const res = await fetch('api/admin/upload_handler.php', { method: 'POST', body: formData });
                const data = await res.json();
                if (data.success) {
                    textInput.value = data.path;
                    showStatus(statusId, data.git_status || 'Fichier uploadé !');
                } else {
                    showStatus(statusId, data.error, true);
                }
            } catch (err) {
                showStatus(statusId, 'Erreur de connexion serveur.', true);
            }
        }

        // Init
        loadVeille();
        loadUsers();
        loadFormations();
        loadCerts();

        setupDropZone('f_drop', 'f_pdf', 'f_status');
        setupDropZone('c_drop', 'c_file', 'c_status');
    </script>

    <?php include 'includes/footer.php'; ?>
</body>
</html>
