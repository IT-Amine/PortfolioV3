/* ============================================================
   PORTFOLIO BTS SIO — SCRIPT PRINCIPAL (CERVEAU)
   ============================================================ */

const CONTACT_EMAIL = 'kadaamine37@hotmail.com';
const CONTACT_SUBJECT = 'Contact depuis portfolio BTS SIO';

/* --- ICÔNES SVG --- */

const ICONS = {
  server: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="10" y1="6" x2="10" y2="6.01"/><line x1="10" y1="18" x2="10" y2="18.01"/><line x1="14" y1="6" x2="14" y2="6.01"/><line x1="14" y1="18" x2="14" y2="18.01"/><line x1="18" y1="6" x2="18.01" y2="6"/><line x1="18" y1="18" x2="18.01" y2="18"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  terminal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  document: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',

  // Logos Officiels Tech
  debian: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#D70A53"><path d="M12.007 0c-4.137 0-7.387 2.05-8.875 5.562 2.688-2.612 6.55-2.85 8.163-1.025 1.587 1.787.975 4.675-2.113 6.038-2.787 1.237-6.025.1-7.112-2.313a5.59 5.59 0 0 1-.375-1.925C1.132 8.788.632 11.237.632 13.912c0 5.65 3.125 10.088 8.188 10.088 5.612 0 9.063-4.5 9.063-10.375 0-7.125-5.325-13.625-5.875-13.625zm-1.05 6.012c1.725 0 2.25 2.1 1.012 3.262-.975.912-3.113.3-3.113-1.5 0-.825.187-1.762 2.1-1.762z"/></svg>',
  windows: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00A4EF"><path d="M0 3.449L9.75 2.1V11.4H0V3.449zm0 8.851h9.75v9.3L0 20.25v-7.95zm10.55-10.5L24 0v11.4h-13.45V1.8zm13.45 10.5V24l-13.45-1.9v-9.3H24z"/></svg>',
  vmware: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#607078"><path d="M18.396 17.135l3.204-1.85V11.59l-3.204 1.85v3.695zm-3.8 2.193l3.204-1.85V13.784l-3.204 1.85v3.694zM7.004 10.56L3.8 12.41v3.695L7.004 14.256V10.56zm3.8-2.193L7.6 10.217v3.695l3.204-1.85v-3.695zm3.8 6.09l3.204-1.85v-3.696l-3.204 1.85v3.696zm-7.6 4.386L10.204 17l3.205-1.85v-3.694L10.205 13.305l-3.204 1.85zM22.204 7.896L19 9.746v3.695l3.204-1.85V7.896zM1.796 11.41L5 9.56V5.865L1.796 7.715v3.695zm3.8-2.193L8.8 7.367V3.673l-3.204 1.85V9.217z"/></svg>',
  proxmox: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E57000"><path d="M4.363 4.417L0 6.64v8.835l4.363 2.181 4.364-2.18v-8.836l-4.364-2.22zm4.364 8.835l-4.364 2.182-4.363-2.182V8.818l4.363-2.181 4.364 2.181v4.434zm3.272-8.835L8.727 6.64v8.835l3.272 2.181L15.273 15.476V6.64l-3.272-2.22zm3.27 8.835l-3.273 2.182L8.727 13.25V8.818l3.272-2.181 3.273 2.181v4.434zm3.274-8.835L15.273 6.64v8.835l3.272 2.181 3.273-2.18v-8.836l-3.273-2.22zm3.273 8.835l-3.273 2.182L15.273 13.25V8.818l3.273-2.181 3.273 2.181v4.434zM24 6.64v8.835l-4.364 2.181L15.273 15.476v-8.836L19.636 4.417 24 6.638zm-4.364 8.835l-4.363-2.182V8.818l4.363-2.181 4.364 2.181V13.25l-4.364 2.22z"/></svg>',
  docker: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2496ED"><path d="M13.983 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.917-2.917h2.119c.102 0 .186.084.186.186V10.46a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm-2.917 2.917h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.149a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.917 0h2.119c.101 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.232a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.917 0h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H2.315a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm0-2.917h2.119c.102 0 .186.084.186.186V10.46a.186.186 0 0 1-.186.186H2.315a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm2.917 0h2.119c.101 0 .186.084.186.186V10.46a.186.186 0 0 1-.186.186H5.232a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm2.917 0h2.119c.102 0 .186.084.186.186V10.46a.186.186 0 0 1-.186.186H8.149a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm-5.834-2.917h2.119c.101 0 .186.084.186.186V7.54a.186.186 0 0 1-.186.186H2.315a.186.186 0 0 1-.186-.186V5.43c0-.102.084-.186.186-.186zm14.374 2.137c-.305-.596-.543-.591-.564-.591h-2.181c-.021 0-.042.001-.063.003L15 8.127c-.312.012-.486.027-.812.274-.15.114-.233.242-.258.406-.025.163-.04.49-.041.884V10.5h1.125a1.125 1.125 0 0 1 1.125 1.125v1.25h1.125a1.125 1.125 0 0 1 1.125 1.125v1.25H16.5a1.125 1.125 0 0 1-1.125 1.125H12V21a1.5 1.5 0 0 1-.375.986 1.5 1.5 0 0 1-.75.485c-.375.125-.75.029-1.125-.125-.375-.154-1.375-.625-1.375-1.121 0-.5 0-.75 1.012-1.25a.874.874 0 0 1 .863-.125c.188.062.375.152.375-.125V17.5H8.75c-.345 0-.625-.28-.625-.625v-1.25H6.875c-.345 0-.625-.28-.625-.625v-1.25H5c-.345 0-.625-.28-.625-.625V12.5H2.341c-.482-.016-.841-.417-.841-.9V9.5h-.186a1.125 1.125 0 0 1-1.125-1.125V6.125A1.125 1.125 0 0 1 1.315 5h1.125A1.125 1.125 0 0 1 3.565 6.125v1.125h.186V5.375a1.125 1.125 0 0 1 1.125-1.125H5.8A1.125 1.125 0 0 1 6.92 5.375v2h2.247V5.375a1.125 1.125 0 0 1 1.125-1.125h.186A1.125 1.125 0 0 1 11.603 5.375v2h.186V5.375a1.125 1.125 0 0 1 1.125-1.125h.186a1.125 1.125 0 0 1 1.125 1.125v2c.225.016.4-.1.6-.2l1.125-.1s1.375-1.125 2.125-1.125 3.5.5 3.5 4.5c0 2.5-1.125 3.75-2.245 4.417z"/></svg>',
  ansible: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 18.232l-1.636-3.877H7.817l-1.636 3.877H3.97l6.653-15.07h2.753l6.653 15.07h-2.206zm-7.653-5.23h3.666L12 8.243l-1.833 4.759z"/></svg>',
  kubernetes: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#326CE5"><path d="M12 4.148L19.23 8.324v8.352L12 20.852l-7.23-4.176V8.324L12 4.148zm0-1.332L3.5 7.844v10.312L12 22.5l8.5-4.344V7.844L12 2.816zM11.25 7.5h1.5v9h-1.5v-9z"/></svg>',
  gitlab: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FC6D26"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.859 0L16.425 9.45H7.574L4.91 1.263c-.135-.417-.724-.417-.859 0L1.387 9.452.045 13.587c-.1.308.011.647.276.84l11.679 8.48 11.679-8.48c.265-.193.376-.532.276-.84z"/></svg>',
};

function getIcon(name) {
  return ICONS[name] || '';
}

/* --- DONNÉES DES COMPOSANTS --- */

const projectsData = [
  {
    id: 'millenuits',
    title: 'Groupe Millenuits — Infrastructure & Services',
    desc: 'Refonte de l\'infrastructure système et réseau. Déploiement des services critiques (AD DS, DHCP, DNS, GPO) et segmentation réseau via VLAN. Gestion centralisée du parc informatique.',
    tech: ['Active Directory', 'Windows Server', 'VLAN', 'Systèmes'],
    icon: 'globe',
    pdfs: [
      { label: 'Situation SP1 — Réseau', href: 'public/Projet/millenuits/Situation - SP1 - Gestion de l’infrastructure réseau.pdf' },
      { label: 'Situation SP2 — Parc Info', href: 'public/Projet/millenuits/Situation - SP2 - Gestion du parc informatique.pdf' },
      { label: 'Situation SP3 — AD / DHCP', href: 'public/Projet/millenuits/Situation - SP3 - Gestion des services principaux AD - DHCP.pdf' },
      { label: 'Contexte Technique', href: 'public/Projet/millenuits/Contexte Millenuits.pdf' },
    ]
  },
  {
    id: 'cyber',
    title: 'Laboratoire de Cybersécurité',
    desc: 'Mise en place d\'un environnement de test sécurisé. Étude du durcissement (hardening) des terminaux, analyse des vulnérabilités et rédaction de dossiers de sécurité commun.',
    tech: ['Cybersécurité', 'Hardening', 'Analyse de vulnérabilité', 'Audit'],
    icon: 'shield',
    pdfs: [
      { label: 'Sécurité des terminaux (TP1)', href: 'public/Projet/cyber/TP1-sécurité des terminaux.pdf' },
      { label: 'Dossier Commun (TP2)', href: 'public/Projet/cyber/TP2-Commun-dossier.pdf' },
      { label: 'Contexte Labo 2026', href: 'public/Projet/cyber/Contexte-labo-2026.pdf' },
    ]
  },
  {
    id: 'imdeo',
    title: 'Architecture Réseau IMDEO',
    desc: 'Conception d\'une architecture logique pour l\'implantation IMDEO. Déploiement de solutions de routage avancé et structuration des services réseau.',
    tech: ['Cisco', 'Architecture', 'Routage', 'Switching'],
    icon: 'antenna',
    pdfs: [
      { label: 'Dossier Technique IMDEO', href: 'public/Projet/imdeo/imdeo.pdf' },
      { label: 'Structure du Projet', href: 'public/Projet/imdeo/structure-imdeo.pdf' },
      { label: 'Contexte IMDEO 2026', href: 'public/Projet/imdeo/Contexte - IMDEO - 2026.pdf' },
    ]
  },
  {
    id: 'ap',
    title: 'Projet AP — Architecture Prototypage',
    desc: 'Projet complet d\'architecture de prototypage (AP1). Mise en œuvre de solutions de serveurs, virtualisation et stratégies de sauvegarde.',
    tech: ['Virtualisation', 'Infrastructure', 'Prototypage', 'Sauvegarde'],
    icon: 'server',
    pdfs: [
      { label: 'Document de projet (AP.pdf)', href: 'public/Projet/AP.pdf' },
    ]
  },
  {
    id: 'portfolio',
    title: 'Portfolio Professionnel V3',
    desc: 'Conception d\'une interface moderne Blanc/Vert avec automatisation de la veille technologique via Vercel et Neon Postgres.',
    tech: ['Next.js', 'Vercel', 'Postgres', 'Design'],
    icon: 'terminal'
  }
];

const skillsCategories = [
  {
    title: 'Administration système',
    skills: [
      { name: 'Debian', icon: 'debian' },
      { name: 'Windows server', icon: 'windows' },
      { name: 'Active Directory', icon: 'clipboard' },
      { name: 'Linux Admin', icon: 'terminal' }
    ]
  },
  {
    title: 'Virtualisation & Conteneurs',
    skills: [
      { name: 'VMware ESXi', icon: 'vmware' },
      { name: 'Proxmox', icon: 'proxmox' },
      { name: 'Docker', icon: 'docker' },
      { name: 'Docker Compose', icon: 'docker' }
    ]
  },
  {
    title: 'Automatisation & DevOps',
    skills: [
      { name: 'Ansible', icon: 'ansible' },
      { name: 'Kubernetes', icon: 'kubernetes' },
      { name: 'GitLab CI/CD', icon: 'gitlab' },
      { name: 'Scripting Bash', icon: 'terminal' }
    ]
  }
];

const formationsData = [
  {
    title: 'BTS SIO SISR',
    subtitle: 'Lycée Paul-Louis Courier, Tours',
    date: '2025–2027',
    desc: 'Services Informatiques aux Organisations, option Solutions d’Infrastructure, Systèmes et Réseaux. Étude approfondie de l\'administration système, réseau et cybersécurité.'
  },
  {
    title: 'Bac Pro SN RISC',
    subtitle: 'Lycée Henri Becquerel, Tours',
    date: '2022–2025',
    desc: 'Systèmes Numériques, option Réseaux Informatiques et Systèmes Communicants. Apprentissage des bases de l\'informatique, du réseau et de la maintenance matérielle.'
  },
  {
    title: 'Certifications OpenClassrooms',
    subtitle: 'Auto-formation continue',
    date: '2024–Présent',
    desc: 'Plusieurs certifications obtenues sur TCP/IP, Linux, Windows Server, Git, Docker et Active Directory.'
  }
];

const openclassroomsCerts = [
  { title: 'TCP/IP', description: 'Maîtrise des protocoles TCP/IP.', image: 'public/openclassroom/TCP:IP.png', tags: ['Réseaux', 'TCP/IP'] },
  { title: 'Windows Server', description: 'Administration Windows Server.', image: 'public/openclassroom/Windows Server.png', tags: ['Windows Server', 'Administration'] },
  { title: 'Gérer Git & GitHub', description: 'Contrôle de version.', image: 'public/openclassroom/git.png', tags: ['Git', 'GitHub'] },
  { title: 'Déployez Windows 10', description: 'Déploiement Windows 10.', image: 'public/openclassroom/déployez Win10.png', tags: ['Windows 10'] },
  { title: 'Montez un PC', description: 'Assemblage matériel.', image: 'public/openclassroom/pc.png', tags: ['Hardware'] },
  { title: 'Utiliser ChatGPT', description: 'IA conversationnelle.', image: 'public/openclassroom/utiliser ChatGPT.png', tags: ['IA'] },
  { title: 'Active Directory', description: 'Gestion centralisée.', image: 'public/openclassroom/Centralisez et sécuriser avec Active Directory.jpg', tags: ['AD', 'Sécurité'] },
  { title: 'Initiez-vous à Linux', description: 'Administration Linux.', image: 'public/openclassroom/linux.jpg', tags: ['Linux'] },
  { title: 'Conteneurs Docker', description: 'Conteneurisation.', image: 'public/openclassroom/Optimisez avec des Conteneur Docker.jpg', tags: ['Docker'] },
  { title: 'Packet Tracer', description: 'Simulation réseau Cisco.', image: 'public/openclassroom/cisco.jpg', tags: ['Réseaux', 'Cisco'] },
  { title: 'Virtualisation', description: 'Environnements virtuels.', image: 'public/openclassroom/virtualiser vos environnement travail.jpg', tags: ['Virtualisation'] },
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

/* --- ÉTAT GLOBAL & ROUTING --- */

let activeSection = 'accueil';

function getDefaultSection() {
  const hash = window.location.hash.slice(1);
  const sections = ['accueil', 'bts-sio', 'projets', 'veille', 'patrimoine', 'formations', 'compétences', 'contact', 'openclassrooms'];
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
  activeSection = sectionId;
  updateActiveSection();
  window.location.hash = sectionId;
}

/* --- RENDU DES COMPOSANTS --- */

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projectsData.map(p => `
    <article class="project-card featured" onclick="openProjectModal('${p.id}')">
      <div class="project-card-inner">
        <div style="display:flex; justify-content:space-between; margin-bottom:1rem;">
          <div style="color:var(--accent); width:28px;">${getIcon(p.icon)}</div>
          ${p.pdfs ? '<div class="project-view-badge">Voir</div>' : ''}
        </div>
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.desc}</p>
        <div class="project-card-tech mt-auto">
          ${p.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
        </div>
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

function renderFormations() {
  const grid = document.getElementById('formationsGrid');
  if (!grid) return;
  grid.innerHTML = `
    <div class="timeline-container">
      <div class="timeline-line"></div>
      ${formationsData.map(f => `
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content">
            <div class="timeline-header">
              <h3 class="timeline-title">${f.title}</h3>
              <div class="timeline-subtitle">${f.subtitle}</div>
            </div>
            <div class="timeline-date">${f.date}</div>
            <p class="timeline-desc">${f.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
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

async function renderVeille() {
  const container = document.getElementById('veilleFlux');
  if (!container) return;
  
  container.innerHTML = '<div class="veille-loading"><div class="veille-loading-spinner"></div>Chargement des derniers flux...</div>';

  try {
    // Ajouter un timestamp pour s'assurer de ne pas avoir de cache navigateur
    const res = await fetch(`/api/veille?limit=5&t=${Date.now()}`);
    const data = await res.json();
    const articles = data.articles || [];
    
    if (articles.length === 0) {
      container.innerHTML = '<p class="veille-empty">Aucun article récent. La synchronisation automatique est en cours.</p>';
      return;
    }

    container.innerHTML = articles.map(a => `
      <a href="${a.link}" target="_blank" class="veille-article-card">
        <div class="veille-article-meta">${a.source} — ${new Date(a.pub_date).toLocaleDateString()}</div>
        <h4>${a.title}</h4>
        <p>${a.description || ''}</p>
        <div class="veille-tag">${a.category || 'Info'}</div>
      </a>
    `).join('');
  } catch (err) {
    console.error('Erreur fetch veille:', err);
    container.innerHTML = '<p class="veille-empty">Erreur de chargement du flux de veille.</p>';
  }
}

function renderOpenClassrooms() {
  const grid = document.getElementById('openclassroomsGrid');
  if (!grid) return;
  grid.innerHTML = openclassroomsCerts.map((c, i) => `
    <article class="oc-card" onclick="openOcModalByIndex(${i})">
      <img src="${c.image}" alt="${c.title}">
      <h4>${c.title}</h4>
    </article>
  `).join('');
}

/* --- MODALES --- */

function openProjectModal(id) {
  const project = projectsData.find(p => p.id === id);
  if (!project) return;
  document.getElementById('modalProjectTitle').textContent = project.title;
  document.getElementById('modalProjectDesc').textContent = project.desc;
  const list = document.getElementById('modalPdfList');
  const viewer = document.getElementById('modalPdfViewer');
  const frame = document.getElementById('pdfFrame');
  list.innerHTML = ''; viewer.style.display = 'none';

  if (project.pdfs) {
    project.pdfs.forEach(pdf => {
      const btn = document.createElement('button');
      btn.className = 'btn-secondary';
      btn.innerHTML = `${getIcon('document')} ${pdf.label}`;
      btn.onclick = () => { frame.src = pdf.href; viewer.style.display = 'block'; };
      list.appendChild(btn);
    });
  }
  document.getElementById('projectModal').classList.add('active');
}

function closeProjectModal() {
  document.getElementById('projectModal').classList.remove('active');
  document.getElementById('pdfFrame').src = '';
}

function openOcModalByIndex(i) {
  const c = openclassroomsCerts[i];
  document.getElementById('ocModalTitle').textContent = c.title;
  document.getElementById('ocModalImage').src = c.image;
  document.getElementById('ocModal').classList.add('active');
}

function closeOcModal() { document.getElementById('ocModal').classList.remove('active'); }

/* --- INITIALISATION --- */

document.addEventListener('DOMContentLoaded', () => {
  activeSection = getDefaultSection();
  updateActiveSection();
  window.addEventListener('hashchange', () => {
    activeSection = window.location.hash.slice(1) || 'accueil';
    updateActiveSection();
  });

  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  navToggle?.addEventListener('click', () => navMenu?.classList.toggle('is-open'));
  navMenu?.addEventListener('click', (e) => {
    if (e.target.closest('.nav-btn')) navMenu.classList.remove('is-open');
  });

  renderProjects();
  renderSkills();
  renderFormations();
  renderBtsSio();
  renderVeille();
  renderOpenClassrooms();

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});