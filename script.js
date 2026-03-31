/* ============================================================
   PORTFOLIO BTS SIO — SCRIPT PRINCIPAL (CERVEAU)
   ============================================================ */


const CONTACT_EMAIL = 'kadaamine37@hotmail.com';
const CONTACT_SUBJECT = 'Portfolio BTS SIO - Contact';

/* --- ICÔNES SVG --- */

const ICONS = {
  server: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="10" y1="6" x2="10" y2="6.01"/><line x1="10" y1="18" x2="10" y2="18.01"/><line x1="14" y1="6" x2="14" y2="6.01"/><line x1="14" y1="18" x2="14" y2="18.01"/><line x1="18" y1="6" x2="18.01" y2="6"/><line x1="18" y1="18" x2="18.01" y2="18"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  terminal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  document: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
  settings: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.23 2h-.46c-.4 0-.79.2-1.01.53l-.35.53a8.3 8.3 0 0 1-.9.41l-.6.22c-.41.15-.65.57-.59 1l.07.63c.03.3-.01.6-.14.86a2 2 0 0 1-1.07 1.07c-.26.13-.56.17-.86.14l-.63-.07c-.44-.06-.86.18-1 .59l-.22.6c-.1.3-.23.6-.4.9l-.54.34c-.33.22-.53.61-.53 1.01v.46c0 .4.2.79.53 1.01l.53.35c.18.29.32.59.41.9l.22.6c.15.41.57.65 1 .59l.63-.07c.3-.03.6.01.86.14a2 2 0 0 1 1.07 1.07c.13.26.17.56.14.86l-.07.63c-.06.44.18.86.59 1l.6.22c.3.1.6.23.9.4l.35.53c.22.33.61.53 1.01.53h.46c.4 0 .79-.2 1.01-.53l.35-.53c.29-.18.59-.32.9-.41l.6-.22c.41-.15.65-.57.59-1l-.07-.63a2 2 0 0 1 1.21-1.93c.3-.13.6-.17.86-.14l.63.07c.44.06.86-.18 1-.59l.22-.6c.1-.3.23-.6.4-.9l.53-.35c.33-.22.53-.61.53-1.01v-.46c0-.4-.2-.79-.53-1.01l-.53-.35a8.3 8.3 0 0 1-.41-.9l-.22-.6c-.15-.41-.57-.65-1-.59l-.63.07a2 2 0 0 1-1.21-1.93c-.13-.3-.17-.6-.14-.86l.07-.63c.06-.44-.18-.86-.59-1l-.6-.22a8.3 8.3 0 0 1-.9-.41l-.35-.53A1.23 1.23 0 0 0 12.23 2z"/><circle cx="12" cy="12" r="3"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  tool: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',

  // Logos Officiels Tech
  debian: 'https://cdn.simpleicons.org/debian/D70A53',
  windows: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg',
  proxmox: 'https://cdn.simpleicons.org/proxmox/E57000',
  docker: 'https://cdn.simpleicons.org/docker/2496ED',
  vmware: 'https://cdn.simpleicons.org/vmware/607078',
  ansible: 'https://cdn.simpleicons.org/ansible/000000',
  kubernetes: 'https://cdn.simpleicons.org/kubernetes/326CE5',
  gitlab: 'https://cdn.simpleicons.org/gitlab/FC6D26',
};

function getIcon(name) {
  const iconContent = ICONS[name];
  if (!iconContent) return ICONS['terminal'];

  // Si c'est une URL (commence par http), on renvoie un tag img
  if (typeof iconContent === 'string' && iconContent.startsWith('http')) {
    return `<img src="${iconContent}" alt="${name}" style="width: 100%; height: 100%; object-fit: contain;">`;
  }

  return iconContent;
}

/* --- UTILS --- */

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g,
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag])
  );
}


/* --- DONNÉES DES COMPOSANTS --- */

const projectsData = [
  {
    id: 'millenuits',
    title: 'Groupe Millenuits — Infrastructure & Services',
    desc: 'Refonte de l\'infrastructure système et réseau. Déploiement des services critiques (AD DS, DHCP, DNS, GPO) et segmentation réseau via VLAN.',
    tech: ['Active Directory', 'Windows Server', 'VLAN', 'Systèmes'],
    logo: '/public/MilleNuits.jpg',
    pdfs: [
      { label: 'Situation SP1', href: '/public/Projet/millenuits/SP1.pdf' },
      { label: 'Situation SP2', href: '/public/Projet/millenuits/SP2.pdf' },
      { label: 'Situation SP3', href: '/public/Projet/millenuits/SP3.pdf' },
      { label: 'Contexte Technique', href: '/public/Projet/millenuits/contexte.pdf' },
    ]
  },
  {
    id: 'cyber',
    title: 'Laboratoire de Cybersécurité',
    desc: 'Environnement de test sécurisé. Étude du durcissement (hardening) des terminaux et analyse des vulnérabilités.',
    tech: ['Cybersécurité', 'Hardening', 'Analyse vulnérabilités'],
    icon: 'shield',
    pdfs: [
      { label: 'TP1 — Sécurité', href: '/public/Projet/cyber/TP1.pdf' },
      { label: 'TP2 — Commun', href: '/public/Projet/cyber/TP2.pdf' },
      { label: 'Contexte Labo', href: '/public/Projet/cyber/Contexte.pdf' }
    ]
  },
  {
    id: 'imdeo',
    title: 'Architecture Réseau IMDEO',
    desc: 'Conception d\'une architecture logique pour l\'implantation IMDEO. Routage avancé et segmentation.',
    tech: ['Cisco', 'Architecture', 'Routage'],
    logo: '/public/imdeo.jpeg',
    pdfs: [
      { label: 'Dossier Technique', href: '/public/Projet/imdeo/imdeo.pdf' },
      { label: 'Contexte Projet', href: '/public/Projet/imdeo/Contexte.pdf' },
      { label: 'Structure Réseau', href: '/public/Projet/imdeo/structure.pdf' }
    ]
  },
  {
    id: 'ap',
    title: 'Projet AP — Architecture Prototypage',
    desc: 'Serveurs, virtualisation et stratégies de sauvegarde sur l\'infrastructure Lab.',
    tech: ['Virtualisation', 'Infrastructure', 'Backup'],
    icon: 'server',
    pdfs: [
      { label: 'Document AP1', href: '/public/Projet/AP.pdf' },
    ]
  }
];

const skillsCategories = [
  {
    title: 'Administration système',
    skills: [
      { name: 'Debian', icon: 'debian' },
      { name: 'Windows server', icon: 'windows' },
      { name: 'Active Directory', icon: 'server' },
      { name: 'Linux Admin', icon: 'terminal' }
    ]
  },
  {
    title: 'Virtualisation & Conteneurs',
    skills: [
      { name: 'VMware ESXi', icon: 'vmware' },
      { name: 'Proxmox', icon: 'proxmox' },
      { name: 'Docker', icon: 'docker' },
      { name: 'LXC', icon: 'box' }
    ]
  },
  {
    title: 'Automatisation & DevOps',
    skills: [
      { name: 'Ansible', icon: 'ansible' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'GitLab', icon: 'gitlab' },
      { name: 'Bash', icon: 'terminal' }
    ]
  }
];

const certificationsTreeData = [
  { id: 'pix', title: 'PIX — Compétences Numériques', date: '2024', icon: 'shield', file: null, type: 'image' },
  { id: 'mooc', title: 'SecNumAcadémie (ANSSI)', date: '2024', icon: 'shield', file: null, type: 'image' },
  { id: 'ebios', title: 'EBIOS — Analyse de risque', date: '2025', icon: 'shield', file: null, type: 'pdf' },
  { id: 'oc', title: 'OpenClassrooms — Réseaux & Systèmes', date: '2024–2025', icon: 'globe', file: '#openclassrooms', type: 'section' },
];

const formationsData = [
  {
    title: 'BTS SIO SISR',
    subtitle: 'Lycée Paul-Louis Courier, Tours',
    date: '2025–2027',
    desc: 'Services Informatiques aux Organisations, option SISR. Administration système, réseau',
    showVoir: false
  },
  {
    title: 'Bac Pro SN RISC',
    subtitle: 'Lycée Henri Becquerel, Tours',
    date: '2022–2025',
    desc: 'Systèmes Numériques, option RISC. Réseaux et systèmes communicants.',
    showVoir: false
  }
];

// Patrimoine data removed as requested.

let openclassroomsCerts = [
  { title: 'Active Directory', image: null },
  { title: 'Docker', image: null },
  { title: 'TCP/IP', image: null },
  { title: 'Windows Server', image: null },
  { title: 'Cisco Networking', image: null },
  { title: 'Déploiement Win10', image: null },
  { title: 'Git & GitHub', image: null },
  { title: 'Git Fundamentals', image: null },
  { title: 'Linux Administration', image: null },
  { title: 'Hardware PC', image: null },
  { title: 'ChatGPT', image: null },
  { title: 'Virtualisation Environnement', image: null },
];

const btsSioData = {
  description: "Spécialisé en SISR, je maîtrise l'administration système et réseau, la virtualisation et la cybersécurité.",
  objectifs: [
    { icon: 'server', label: 'Administrer des serveurs', desc: 'Windows Server, Debian, AD, DNS, DHCP' },
    { icon: 'globe', label: 'Gérer les réseaux', desc: 'VLANs, routage, segmentation' },
    { icon: 'shield', label: 'Sécuriser les systèmes', desc: 'Audit, hardening, firewall' },
    { icon: 'terminal', label: 'Automatisation', desc: 'PowerShell, Bash' },
  ],
};

const competencesListData = [
  { ref: '1.1', desc: 'Gérer le patrimoine informatique', niveau: 'Avancé', preuve: 'Inventaire OCS/GLPI' },
  { ref: '1.2', desc: 'Répondre aux incidents / demandes', niveau: 'Maîtrisé', preuve: 'Ticketing IT' },
  { ref: '2.1', desc: 'Concevoir une solution infrastructure', niveau: 'Intermédiaire', preuve: 'Maquettage Cisco/VMware' },
  { ref: '2.2', desc: 'Installer et configurer des équipements', niveau: 'Avancé', preuve: 'Switching, Windows Server' },
  { ref: '3.1', desc: 'Protéger les données et les systèmes', niveau: 'Maîtrisé', preuve: 'GPO, Firewall, Backup' },
];

/* --- ÉTAT GLOBAL & ROUTING --- */

let activeSection = 'accueil';

// SISR ROBUST AUTH : On synchronise le déverrouillage
// On vérifie d'abord window.SERVER_AUTH (PHP), puis le sessionStorage
const isAuthorizedFromServer = (typeof window.SERVER_AUTH !== 'undefined' && window.SERVER_AUTH === true);
let isUnlocked = isAuthorizedFromServer || sessionStorage.getItem('isUnlocked') === 'true';

// On maintient la synchro si SERVER_AUTH est vrai
if (isAuthorizedFromServer) {
  sessionStorage.setItem('isUnlocked', 'true');
}

let decryptedCvLink = sessionStorage.getItem('decryptedCvLink') || '';

// Restauration des fichiers de certifications si déjà déverrouillé
if (isUnlocked) {
  const savedCerts = JSON.parse(sessionStorage.getItem('decryptedCerts') || '[]');
  const savedOC = JSON.parse(sessionStorage.getItem('decryptedOC') || '[]');

  savedCerts.forEach(cert => {
    const target = certificationsTreeData.find(c => c.id === cert.id);
    if (target) target.file = cert.file;
  });

  savedOC.forEach(oc => {
    const target = openclassroomsCerts.find(c => c.title === oc.title);
    if (target) target.image = oc.image;
  });
}

function getDefaultSection() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const sections = ['accueil', 'bts-sio', 'projets', 'veille', 'patrimoine', 'formations', 'competences', 'contact', 'openclassrooms'];
  return sections.includes(hash) ? hash : 'accueil';
}

function updateActiveSection() {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(activeSection);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === activeSection);
  });
}

function goToSection(sectionId) {
  window.location.hash = sectionId;
}

/* --- RENDU --- */

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projectsData.map(p => `
    <article class="project-card" onclick="openProjectModal('${p.id}')">
      <div class="project-card-header">
        <div class="project-icon">
          ${p.logo
      ? `<img src="${p.logo}" alt="Logo ${p.title}" style="width: 100%; height: 100%; object-fit: contain;">`
      : getIcon(p.icon)}
        </div>
        <div class="project-view-badge">Voir</div>
      </div>
      <h3 class="project-card-title">${p.title}</h3>
      <p class="project-card-desc">${p.desc}</p>
      <div class="project-card-tech">
        ${p.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
      </div>
    </article>
  `).join('');
}

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skillsCategories.map(cat => `
    <div class="skills-category">
      <h3 class="skills-category-title">${cat.title}</h3>
      <div class="skills-logo-grid">
        ${cat.skills.map(s => `
          <div class="skill-logo-card">
            <div class="skill-logo-icon">${getIcon(s.icon)}</div>
            <span class="skill-logo-name">${s.name}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

async function renderFormations() {
  const container = document.getElementById('formationsGrid');
  if (!container) return;

  let allFormations = [...formationsData];

  try {
    const res = await fetch('/api/content.php?action=formations');
    if (res.ok) {
      const dbFormations = await res.json();
      if (dbFormations && Array.isArray(dbFormations)) {
        dbFormations.forEach(dbf => {
          if (!allFormations.find(f => f.title === dbf.title)) {
            allFormations.unshift({
                id: 'db-' + dbf.id,
                title: dbf.title,
                subtitle: dbf.subtitle,
                date: dbf.date_range,
                desc: dbf.description || '',
                pdf: dbf.pdf_path
            });
          }
        });
      }
    }
  } catch (err) { console.warn("Mode statique formations"); }

  // CLEAN IT GRID : Blocs indépendants et pro
  container.innerHTML = allFormations.map(f => `
    <div class="edu-card-pro" ${f.pdf ? `onclick="viewPDF('${f.pdf}', '${f.title}')" style="cursor:pointer;"` : ''}>
      <div class="edu-header-pro">
        <div class="edu-info-pro">
          <h4 class="edu-title-pro">${f.title}</h4>
          <div class="edu-subtitle-pro">${f.subtitle}</div>
        </div>
        <div class="edu-date-pro">${f.date}</div>
      </div>
      <p class="edu-desc-pro">${f.desc}</p>
      ${f.pdf ? '<div class="cert-btn-pro" style="margin-top:1rem; display:inline-block;">Consulter</div>' : ''}
    </div>
  `).join('');
}

function renderBtsSio() {
  const container = document.getElementById('btsSioContent');
  if (!container) return;
  container.innerHTML = `
    <div class="bts-intro-card"><p>${btsSioData.description}</p></div>
    <div class="bts-objectifs-grid">
      ${btsSioData.objectifs.map(o => `
        <div class="bts-objectif-card">
          <div class="bts-objectif-icon">${getIcon(o.icon)}</div>
          <h4>${o.label}</h4><p>${o.desc}</p>
        </div>
      `).join('')}
    </div>
  `;
}

function renderCompetencesTable() {
  const container = document.getElementById('competencesTable');
  if (!container) return;
  container.innerHTML = `
    <div class="comp-table-wrapper">
      <table class="comp-table">
        <thead>
          <tr><th>Réf</th><th>Description</th><th>Niveau</th><th>Preuves</th></tr>
        </thead>
        <tbody>
          ${competencesListData.map(c => `
            <tr>
              <td>${c.ref}</td>
              <td>${c.desc}</td>
              <td><span class="comp-niveau" style="--niveau-color: ${c.niveau === 'Avancé' ? '#10b981' : (c.niveau === 'Maîtrisé' ? '#3b82f6' : '#f59e0b')}">${c.niveau}</span></td>
              <td class="comp-preuve">${c.preuve}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function renderPatrimoine() { return; }

async function renderVeille() {
  const container = document.getElementById('veilleContent');
  if (!container) return;
  container.innerHTML = '<div class="veille-loading">Chargement du flux de sécurité...</div>';
  try {
    // SISR : On utilise le point d'entrée unifié avec les permissions
    const res = await fetch(`/api/content.php?action=veille&t=${Date.now()}`, { credentials: 'include' });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const articles = await res.json();

    if (!articles || articles.length === 0 || articles.error) {
      container.innerHTML = '<p class="veille-empty">Aucun article de veille disponible.</p>';
      return;
    }

    const [featured, ...others] = articles;

    container.innerHTML = `
      <div class="veille-magazine-layout">
        <a href="${featured.link}" target="_blank" class="veille-featured-card">
          <div class="veille-card-bg-overlay"></div>
          <div class="veille-card-content">
            <div class="veille-status-badge">
              <span class="pulse-dot"></span>
              LATEST UPDATE
            </div>
            <div class="veille-meta">
              <span class="veille-source-tag">${escapeHTML(featured.source)}</span>
              <span class="veille-date-tag">${new Date(featured.pub_date).toLocaleDateString('fr-FR')}</span>
            </div>
            <h3 class="veille-featured-title">${escapeHTML(featured.title)}</h3>
            <div class="veille-read-btn">
              Lire l'article complet
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>
        </a>
        <div class="veille-secondary-grid">
          ${others.map(a => `
            <a href="${a.link}" target="_blank" class="veille-small-card">
              <div class="veille-small-header">
                <span class="source-pill">${escapeHTML(a.source)}</span>
                <span class="date-pill">${new Date(a.pub_date).toLocaleDateString('fr-FR')}</span>
              </div>
              <h4 class="veille-small-title">${escapeHTML(a.title)}</h4>
              <div class="veille-small-footer">Consulter →</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  } catch (err) {
    console.error('Erreur Veille:', err);
    container.innerHTML = '<p class="veille-empty">Flux temporairement indisponible.</p>';
  }
}

async function renderOpenClassrooms() {
  const container = document.getElementById('openclassroomsGrid');
  if (!container) return;

  // SISR : On synchronise les données
  const ocData = (typeof openclassroomsCerts !== 'undefined') ? openclassroomsCerts : [];
  
  container.innerHTML = ocData.map((c, i) => {
    // Si isUnlocked (via SERVER_AUTH), ce n'est PAS verrouillé
    const isLocked = !isUnlocked;
    const onClickAction = isLocked ? 'openAuthModal()' : `viewCertificateImageByIndex(${i})`;
    
    return `
      <div class="oc-card ${isLocked ? 'is-locked' : ''}" onclick="${onClickAction}">
        <div class="oc-card-image-container">
          ${isLocked 
            ? `<div class="oc-card-locked-overlay"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg><span>Accès Verrouillé</span></div>`
            : `<img src="${c.image}" alt="${c.title}" class="oc-card-image">`
          }
        </div>
        <div class="oc-card-content">
          <h4 class="oc-card-title">${escapeHTML(c.title)}</h4>
        </div>
      </div>
    `;
  }).join('');
}

/* --- MODALES --- */

function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;

  document.getElementById('modalProjectTitle').textContent = project.title;
  document.getElementById('modalProjectDesc').textContent = project.desc || '';

  const list = document.getElementById('modalPdfList');
  const frame = document.getElementById('pdfFrame');

  list.innerHTML = '';

  if (project.pdfs && project.pdfs.length > 0) {
    project.pdfs.forEach((pdf, index) => {
      const btn = document.createElement('button');
      btn.className = `pdf-btn ${index === 0 ? 'active' : ''}`;
      btn.innerHTML = `<span class="pdf-btn-icon">${getIcon('document')}</span><span>${pdf.label}</span>`;

      btn.onclick = (e) => {
        e.stopPropagation(); // Évite les conflits de clics
        document.querySelectorAll('.pdf-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // On change la source de l'iframe
        frame.src = pdf.href;
        if (document.getElementById('pdfDownloadLink')) {
          document.getElementById('pdfDownloadLink').href = pdf.href;
        }
      };
      list.appendChild(btn);
    });

    // Chargement initial du premier PDF
    frame.src = project.pdfs[0].href;
  }

  document.getElementById('projectModal').classList.add('active');
}

function viewPDF(url, title) {
  // 1. Vérification si c'est une ancre interne
  if (url && url.startsWith('#')) {
    goToSection(url.slice(1));
    return;
  }

  const modal = document.getElementById('projectModal');
  const frame = document.getElementById('pdfFrame');
  const downloadLink = document.getElementById('pdfDownloadLink');

  // 2. On prépare la modale avant d'injecter la source
  document.getElementById('modalProjectTitle').textContent = title;

  // 3. Injection de la source (directe, sans viewer externe)
  frame.src = url;

  if (downloadLink) downloadLink.href = url;

  modal.classList.add('active');
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  const frame = document.getElementById('pdfFrame');
  modal.classList.remove('active');
  frame.src = 'about:blank';
}

/* --- VISIONNEUSE IMAGE (CERTIFICATS) --- */

function viewCertificateImageByIndex(index) {
  const cert = openclassroomsCerts[index];
  if (!cert) return;
  viewCertificateImage(cert.image, cert.title);
}

function viewCertificateImage(src, title, tags = [], desc = '') {
  const modal = document.getElementById('imageViewerModal');
  const img = document.getElementById('viewerModalImage');
  const titleEl = document.getElementById('viewerModalTitle');
  const descEl = document.getElementById('viewerModalDescription');
  const tagsEl = document.getElementById('viewerModalTags');

  if (!modal || !img) return;

  img.src = src;
  titleEl.textContent = title;
  descEl.textContent = desc || '';

  if (tagsEl) {
    tagsEl.innerHTML = tags.map(t => `<span class="viewer-modal-tag">${t}</span>`).join('');
  }

  modal.classList.add('active');
}

function closeImageViewerModal() {
  const modal = document.getElementById('imageViewerModal');
  if (modal) modal.classList.remove('active');
}

async function renderCertificationsTree() {
  const container = document.getElementById('certificationsTree');
  if (!container) return;

  // On force la classe autorisée si isUnlocked est vrai
  if (isUnlocked) container.classList.add('is-authorized');

  let allCerts = [...certificationsTreeData];

  try {
    // SISR : On force l'inclusion des credentials pour la session
    const res = await fetch('/api/content.php?action=certifications', { credentials: 'include' });
    if (res.ok) {
      const dbCerts = await res.json();
      if (dbCerts && Array.isArray(dbCerts) && dbCerts.length > 0) {
        dbCerts.forEach(dbc => {
           if (dbc.category === 'tree' && !allCerts.find(c => c.title === dbc.title)) {
             allCerts.unshift({
               id: 'db-' + dbc.id,
               title: dbc.title,
               date: 'Certifié',
               icon: dbc.icon || 'shield',
               file: dbc.file_path,
               type: dbc.type || 'image'
             });
           }
        });
      }
    }
  } catch (err) { console.warn("Mode statique certifs"); }

  // SISR : On stocke les certifs pour y accéder sans erreur de JSON dans le HTML
  window.lastCertData = allCerts;

  container.innerHTML = `
    <div class="cert-grid-pro">
      ${allCerts.map((c, i) => {
        const isDb = typeof c.id === 'string' && c.id.startsWith('db-');
        // SISR SYNC : Pas de verrou si isUnlocked est vrai
        const isLockedState = !isUnlocked && !isDb; 
        
        // On utilise l'index sur la variable globale window.lastCertData
        let onClickAction = `viewCertInTreeByIndex(${i})`;
        if (isDb) onClickAction = `window.open('${c.file}', '_blank')`;

        return `
          <div class="cert-card-pro ${isLockedState ? 'is-locked' : ''}" onclick="${onClickAction}">
            <div class="cert-icon-pro">${getIcon(c.icon)}</div>
            <div class="cert-info-pro">
              <h4>${escapeHTML(c.title)}</h4>
              <span>${escapeHTML(c.date)}</span>
            </div>
            ${!isLockedState ? '<div class="cert-btn-pro">Voir</div>' : '<div class="cert-btn-pro">🔒</div>'}
          </div>
        `;
      }).join('')}
    </div>
  `;
}

function viewCertInTreeByIndex(index) {
  if (!isUnlocked) {
    openAuthModal();
    return;
  }
  const data = window.lastCertData || [];
  const c = data[index];
  if (!c) return;
  if (c.type === 'section') {
    goToSection(c.file.slice(1));
  } else if (c.type === 'pdf') {
    viewPDF(c.file, c.title);
  } else {
    viewCertificateImage(c.file, c.title);
  }
}

function viewCertInTree(index) {
  if (!isUnlocked) {
    openAuthModal();
    return;
  }
  const c = certificationsTreeData[index];
  if (!c) return;
  if (c.type === 'section') {
    goToSection(c.file.slice(1));
  } else if (c.type === 'pdf') {
    viewPDF(c.file, c.title);
  } else {
    viewCertificateImage(c.file, c.title);
  }
}

/* --- INIT --- */

document.addEventListener('DOMContentLoaded', () => {
  activeSection = getDefaultSection();
  updateActiveSection();
  window.addEventListener('hashchange', () => {
    activeSection = decodeURIComponent(window.location.hash.slice(1)) || 'accueil';
    updateActiveSection();
  });

  const navMenu = document.getElementById('nav-menu');
  navMenu?.addEventListener('click', (e) => {
    const btn = e.target.closest('.nav-btn');
    if (btn && btn.dataset.section) {
      goToSection(btn.dataset.section);
      navMenu.classList.remove('is-open');
    }
  });

  const navToggle = document.getElementById('nav-toggle');
  navToggle?.addEventListener('click', () => navMenu?.classList.toggle('is-open'));

  renderProjects();
  renderSkills();
  renderFormations();
  renderPatrimoine();
  renderVeille();
  renderOpenClassrooms();
  renderBtsSio();
  renderCompetencesTable();
  renderCertificationsTree();
  updateLockedElements();

  // Robustesse pour le bouton mail
  const mailBtn = document.getElementById('contact-mail-btn');
  if (mailBtn) {
    mailBtn.addEventListener('click', (e) => {
      // Si le href mailto: ne s'ouvre pas, on force avec window.location
      const href = mailBtn.getAttribute('href');
      if (href && href.startsWith('mailto:')) {
      }
    });
  }

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

window.goToSection = goToSection;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.viewPDF = viewPDF;
window.viewCertificateImageByIndex = viewCertificateImageByIndex;
window.viewCertificateImage = viewCertificateImage;
window.closeImageViewerModal = closeImageViewerModal;
window.viewCertInTree = viewCertInTree;

function switchAuthTab(tab) {
  const tabs = document.querySelectorAll('.auth-tab-btn');
  const contents = document.querySelectorAll('.auth-tab-content');
  
  tabs.forEach(t => t.classList.remove('active'));
  contents.forEach(c => {
    c.classList.remove('active');
    c.style.display = 'none';
  });

  const activeTab = document.getElementById(`tab-${tab}`);
  const activeContent = document.getElementById(`auth-${tab}-content`);
  
  if (activeTab && activeContent) {
    activeTab.classList.add('active');
    activeContent.classList.add('active');
    activeContent.style.display = 'block';
  }
}

async function handleRecruiterUnlock(e) {
  if (e) e.preventDefault();
  const input = document.getElementById('accessCodeInput');
  const codeValue = input.value;
  const error = document.getElementById('authError');

  try {
    const response = await fetch('/api/auth.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: codeValue })
    });

    const data = await response.json();

    if (data.success) {
      isUnlocked = true;
      sessionStorage.setItem('isUnlocked', 'true');
      
      // PERSISTANCE SISR : Sauvegarde des liens sécurisés pour les boutons
      if (data.cvLink) sessionStorage.setItem('decryptedCvLink', data.cvLink);
      if (data.certifications) sessionStorage.setItem('decryptedCerts', JSON.stringify(data.certifications));
      
      console.log("Accès déverrouillé via API Sécurisée 🛡️");
      
      closeLoginModal();
      
      // Rafraîchissement pour appliquer les changements PHP
      setTimeout(() => {
        window.location.reload();
      }, 300);
    } else {
      throw new Error("Code invalide");
    }
  } catch (e) {
    if (error) error.style.display = 'block';
    input.classList.add('shake');
    setTimeout(() => input.classList.remove('shake'), 400);
  }
}

function updateLockedElements() {
  const unlockIndicator = document.getElementById('unlockIndicator');
  const cvBtn = document.getElementById('hero-cv-btn');

  if (isUnlocked) {
    // État déverrouillé
    if (unlockIndicator) {
      unlockIndicator.classList.add('visible');
    }

    if (cvBtn) {
      cvBtn.classList.remove('is-locked');
      cvBtn.classList.add('is-unlocked');
      cvBtn.href = decryptedCvLink;
      cvBtn.onclick = null;
    }
  } else {
    // État verrouillé
    if (unlockIndicator) {
      unlockIndicator.classList.remove('visible');
    }

    if (cvBtn) {
      cvBtn.classList.add('is-locked');
      cvBtn.onclick = (e) => {
        e.preventDefault();
        openAuthModal();
      };
    }
  }
}

// Export des fonctions globales
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.checkAccessCode = checkAccessCode;
/* --- SYSTÈME DE CONNEXION ADMIN --- */

function openLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) modal.classList.add('active');
}

function closeLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.remove('active');
    const err = document.getElementById('loginError');
    if (err) err.style.display = 'none';
  }
}

async function handleLogin(e) {
  e.preventDefault();
  const username = document.getElementById('admin_username').value;
  const password = document.getElementById('admin_password').value;
  const error = document.getElementById('loginError');

  try {
    const res = await fetch('/api/auth.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      credentials: 'include' // SISR : Indispensable pour la session
    });
    const data = await res.json();
    if (data.success) {
      window.location.href = '/admin.php';
    } else {
      if (error) error.style.display = 'block';
    }
  } catch (err) {
    if (error) error.style.display = 'block';
  }
}

window.goToSection = goToSection;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.viewPDF = viewPDF;
window.viewCertificateImageByIndex = viewCertificateImageByIndex;
window.viewCertificateImage = viewCertificateImage;
window.closeImageViewerModal = closeImageViewerModal;
window.viewCertInTree = viewCertInTree;

window.openLoginModal = openLoginModal;
window.closeLoginModal = closeLoginModal;
window.handleLogin = handleLogin;
window.switchAuthTab = switchAuthTab;
window.handleRecruiterUnlock = handleRecruiterUnlock;
