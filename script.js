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
  settings: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12.23 2h-.46c-.4 0-.79.2-1.01.53l-.35.53a8.3 8.3 0 0 1-.9.41l-.6.22c-.41.15-.65.57-.59 1l.07.63c.03.3-.01.6-.14.86a2 2 0 0 1-1.07 1.07c-.26.13-.56.17-.86.14l-.63-.07c-.44-.06-.86.18-1 .59l-.22.6c-.1.3-.23.6-.4.9l-.54.34c-.33.22-.53.61-.53 1.01v.46c0 .4.2.79.53 1.01l.53.35c.18.29.32.59.41.9l.22.6c.15.41.57.65 1 .59l.63-.07c.3-.03.6.01.86.14a2 2 0 0 1 1.07 1.07c.13.26.17.56.14.86l-.07.63c-.06.44.18.86.59 1l.6.22c.3.1.6.23.9.4l.35.53c.22.33.61.53 1.01.53h.46c.4 0 .79-.2 1.01-.53l.35-.53c.29-.18.59-.32.9-.41l.6-.22c.41-.15.65-.57.59-1l-.07-.63a2 2 0 0 1 1.21-1.93c.3-.13.6-.17.86-.14l.63.07c.44.06.86-.18 1-.59l.22-.6c.1-.3.23-.6.4-.9l.53-.35c.33-.22.53-.61.53-1.01v-.46c0-.4-.2-.79-.53-1.01l-.53-.35a8.3 8.3 0 0 1-.41-.9l-.22-.6c-.15-.41-.57-.65-1-.59l-.63.07a2 2 0 0 1-1.21-1.93c-.13-.3-.17-.6-.14-.86l.07-.63c.06-.44-.18-.86-.59-1l-.6-.22a8.3 8.3 0 0 1-.9-.41l-.35-.53A1.23 1.23 0 0 0 12.23 2z"/><circle cx="12" cy="12" r="3"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  tool: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="m14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',

  // Logos Officiels Tech
  debian: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#D70A53"><path d="M12.007 0c-4.137 0-7.387 2.05-8.875 5.562 2.688-2.612 6.55-2.85 8.163-1.025 1.587 1.787.975 4.675-2.113 6.038-2.787 1.237-6.025.1-7.112-2.313a5.59 5.59 0 0 1-.375-1.925C1.132 8.788.632 11.237.632 13.912c0 5.65 3.125 10.088 8.188 10.088 5.612 0 9.063-4.5 9.063-10.375 0-7.125-5.325-13.625-5.875-13.625zm-1.05 6.012c1.725 0 2.25 2.1 1.012 3.262-.975.912-3.113.3-3.113-1.5 0-.825.187-1.762 2.1-1.762z"/></svg>',
  windows: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#00A4EF"><path d="M0 3.449L9.75 2.1V11.4H0V3.449zm0 8.851h9.75v9.3L0 20.25v-7.95zm10.55-10.5L24 0v11.4h-13.45V1.8zm13.45 10.5V24l-13.45-1.9v-9.3H24z"/></svg>',
  proxmox: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E57000"><path d="M12 0L2.4 4.8v14.4L12 24l9.6-4.8V4.8L12 0zm7.2 18L12 21.6 4.8 18V6l7.2-3.6L19.2 6v12zM12 7.2L8.4 9v6l3.6 1.8 3.6-1.8V9L12 7.2z"/></svg>',
  docker: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#2496ED"><path d="M13.983 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.917-2.917h2.119c.102 0 .186.084.186.186V10.46a.186.186 0 0 1-.186.186h-2.119a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm-2.917 2.917h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.149a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.917 0h2.119c.101 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.232a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm-2.917 0h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H2.315a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zm0-2.917h2.119c.102 0 .186.084.186.186V10.46a.186.186 0 0 1-.186-.186H2.315a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm2.917 0h2.119c.101 0 .186.084.186.186V10.46a.186.186 0 0 1-.186.186H5.232a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm2.917 0h2.119c.102 0 .186.084.186.186V10.46a.186.186 0 0 1-.186-.186H8.149a.186.186 0 0 1-.186-.186V8.347c0-.101.084-.186.186-.186zm-5.834-2.917h2.119c.101 0 .186.084.186.186V7.54a.186.186 0 0 1-.186-.186H2.315a.186.186 0 0 1-.186-.186V5.43c0-.102.084-.186.186-.186zm14.374 2.137c-.305-.596-.543-.591-.564-.591h-2.181c-.021 0-.042.001-.063.003L15 8.127c-.312.012-.486.027-.812.274-.15.114-.233.242-.258.406-.025.163-.04.49-.041.884V10.5h1.125a1.125 1.125 0 0 1 1.125 1.125v1.25h1.125a1.125 1.125 0 0 1 1.125 1.125v1.25H16.5a1.125 1.125 0 0 1-1.125 1.125H12V21a1.5 1.5 0 0 1-.375.986 1.5 1.5 0 0 1-.75.485c-.375.125-.75.029-1.125-.125-.375-.154-1.375-.625-1.375-1.121 0-.5 0-.75 1.012-1.25a.874.874 0 0 1 .863-.125c.188.062.375.152.375-.125V17.5H8.75c-.345 0-.625-.28-.625-.625v-1.25H6.875c-.345 0-.625-.28-.625-.625v-1.25H5c-.345 0-.625-.28-.625-.625V12.5H2.341c-.482-.016-.841-.417-.841-.9V9.5h-.186a1.125 1.125 0 0 1-1.125-1.125V6.125A1.125 1.125 0 0 1 1.315 5h1.125A1.125 1.125 0 0 1 3.565 6.125v1.125h.186V5.375a1.125 1.125 0 0 1 1.125-1.125H5.8A1.125 1.125 0 0 1 6.92 5.375v2h2.247V5.375a1.125 1.125 0 0 1 1.125-1.125h.186A1.125 1.125 0 0 1 11.603 5.375v2h.186V5.375a1.125 1.125 0 0 1 1.125-1.125h.186a1.125 1.125 0 0 1 1.125 1.125v2c.225.016.4-.1.6-.2l1.125-.1s1.375-1.125 2.125-1.125 3.5.5 3.5 4.5c0 2.5-1.125 3.75-2.245 4.417z"/></svg>',
  vmware: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#607078"><path d="M18.396 17.135l3.204-1.85V11.59l-3.204 1.85v3.695zm-3.8 2.193l3.204-1.85V13.784l-3.204 1.85v3.694zM7.004 10.56L3.8 12.41v3.695L7.004 14.256V10.56zm3.8-2.193L7.6 10.217v3.695l3.204-1.85v-3.695zm3.8 6.09l3.204-1.85v-3.696l-3.204 1.85v3.696zm-7.6 4.386L10.204 17l3.205-1.85v-3.694L10.205 13.305l-3.204 1.85zM22.204 7.896L19 9.746v3.695l3.204-1.85V7.896zM1.796 11.41L5 9.56V5.865L1.796 7.715v3.695zm3.8-2.193L8.8 7.367V3.673l-3.204 1.85V9.217z"/></svg>',
  ansible: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.82 18.232l-1.636-3.877H7.817l-1.636 3.877H3.97l6.653-15.07h2.753l6.653 15.07h-2.206zm-7.653-5.23h3.666L12 8.243l-1.833 4.759z"/></svg>',
  kubernetes: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#326CE5"><path d="M12 4.148L19.23 8.324v8.352L12 20.852l-7.23-4.176V8.324L12 4.148zm0-1.332L3.5 7.844v10.312L12 22.5l8.5-4.344V7.844L12 2.816zM11.25 7.5h1.5v9h-1.5v-9z"/></svg>',
  gitlab: '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#FC6D26"><path d="M23.955 13.587l-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.859 0L16.425 9.45H7.574L4.91 1.263c-.135-.417-.724-.417-.859 0L1.387 9.452.045 13.587c-.1.308.011.647.276.84l11.679 8.48 11.679-8.48c.265-.193.376-.532.276-.84z"/></svg>',
};

function getIcon(name, color = '10b981') {
  // Mapping pour Simple Icons (slugs)
  const mapping = {
    debian: 'debian',
    windows: 'windows8',
    proxmox: 'proxmox',
    docker: 'docker',
    vmware: 'vmware',
    ansible: 'ansible',
    kubernetes: 'kubernetes',
    gitlab: 'gitlab',
    terminal: 'gnumetadata',
    server: 'windows-server',
    shield: 'shield-halved', // Lucide / Heroicons fallback
    globe: 'globe',
    document: 'read-the-docs',
    settings: 'cog',
    search: 'search',
    tool: 'wrench'
  };
  
  const slug = mapping[name] || name;
  
  // Utiliser Simple Icons CDN pour les logos tech
  const techLogos = ['debian', 'windows', 'proxmox', 'docker', 'vmware', 'ansible', 'kubernetes', 'gitlab', 'windows-server'];
  if (techLogos.includes(slug)) {
    return `<img src="https://cdn.simpleicons.org/${slug}/${color}" alt="${name}" style="width: 100%; height: 100%; object-fit: contain;">`;
  }

  // Fallback SVG Lucide simpler
  return ICONS[name] || ICONS['terminal'];
}

/* --- DONNÉES DES COMPOSANTS --- */

const projectsData = [
  {
    id: 'millenuits',
    title: 'Groupe Millenuits — Infrastructure & Services',
    desc: 'Refonte de l\'infrastructure système et réseau. Déploiement des services critiques (AD DS, DHCP, DNS, GPO) et segmentation réseau via VLAN.',
    tech: ['Active Directory', 'Windows Server', 'VLAN', 'Systèmes'],
    icon: 'globe',
    pdfs: [
      { label: 'Situation SP1 — Réseau', href: '/public/Projet/millenuits/Situation - SP1 - Gestion de l’infrastructure réseau.pdf' },
      { label: 'Situation SP2 — Parc Info', href: '/public/Projet/millenuits/Situation - SP2 - Gestion du parc informatique.pdf' },
      { label: 'Situation SP3 — AD / DHCP', href: '/public/Projet/millenuits/Situation - SP3 - Gestion des services principaux AD - DHCP.pdf' },
      { label: 'Contexte Technique', href: '/public/Projet/millenuits/Contexte Millenuits.pdf' },
    ]
  },
  {
    id: 'cyber',
    title: 'Laboratoire de Cybersécurité',
    desc: 'Environnement de test sécurisé. Étude du durcissement (hardening) des terminaux et analyse des vulnérabilités.',
    tech: ['Cybersécurité', 'Hardening', 'Analyse vulnérabilités'],
    icon: 'shield',
    pdfs: [
      { label: 'Sécurité terminaux', href: '/public/Projet/cyber/TP1-sécurité des terminaux.pdf' },
      { label: 'Dossier Commun', href: '/public/Projet/cyber/TP2-Commun-dossier.pdf' },
    ]
  },
  {
    id: 'imdeo',
    title: 'Architecture Réseau IMDEO',
    desc: 'Conception d\'une architecture logique pour l\'implantation IMDEO. Routage avancé et segmentation.',
    tech: ['Cisco', 'Architecture', 'Routage'],
    icon: 'antenna',
    pdfs: [
      { label: 'Dossier IMDEO', href: '/public/Projet/imdeo/imdeo.pdf' },
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
  { title: 'PIX — Compétences Numériques', date: '2024', icon: 'shield', file: '/public/certif/PIX.jpg', type: 'image' },
  { title: 'SecNumAcadémie (ANSSI)', date: '2024', icon: 'shield', file: '/public/certif/MOOC.jpg', type: 'image' },
  { title: 'EBIOS — Analyse de risque', date: '2025', icon: 'shield', file: '/public/certif/EBIOS.pdf', type: 'pdf' },
];

const formationsData = [
  { 
    title: 'BTS SIO SISR', 
    subtitle: 'Lycée Paul-Louis Courier, Tours', 
    date: '2025–2027', 
    desc: 'Services Informatiques aux Organisations, option SISR. Administration système, réseau et cybersécurité.',
    image: '/public/images/bts-sio.jpg',
    pdf: '/public/Projet/BTS_SIO_Certificat.pdf'
  },
  { 
    title: 'Bac Pro SN RISC', 
    subtitle: 'Lycée Henri Becquerel, Tours', 
    date: '2022–2025', 
    desc: 'Systèmes Numériques, option RISC. Réseaux et systèmes communicants.',
    image: '/public/images/bac-pro.webp',
    pdf: '/public/Projet/Bac_Pro_Diplome.pdf'
  }
];

const patrimoineData = [
  { title: 'Inventaire Matériel', desc: 'Gestion du parc via GLPI et OCS Inventory.', icon: 'search', outils: ['GLPI', 'OCS'] },
  { title: 'Maintenance Préventive', desc: 'Déploiement de mises à jour via WSUS / Ansible.', icon: 'settings', outils: ['WSUS', 'Ansible'] },
  { title: 'Support Utilisateur', desc: 'Gestion des tickets et assistance technique.', icon: 'tool', outils: ['Tickets', 'Remote'] },
];

const openclassroomsCerts = [
  { title: 'TCP/IP', image: 'public/openclassroom/TCP:IP.png' },
  { title: 'Active Directory', image: 'public/openclassroom/Centralisez et sécuriser avec Active Directory.jpg' },
  { title: 'Docker', image: 'public/openclassroom/Optimisez avec des Conteneur Docker.jpg' },
  { title: 'Linux', image: 'public/openclassroom/linux.jpg' },
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

/* --- RENDU --- */

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projectsData.map(p => `
    <article class="project-card" onclick="openProjectModal('${p.id}')">
      <div class="project-card-header">
        <div class="project-icon">${getIcon(p.icon)}</div>
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

function renderFormations() {
  const grid = document.getElementById('formationsGrid');
  if (!grid) return;
  grid.innerHTML = `<div class="timeline-container"><div class="timeline-line"></div>` + 
    formationsData.map(f => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-header">
            <h3 class="timeline-title">${f.title}</h3>
            <div class="timeline-subtitle">${f.subtitle}</div>
          </div>
          <div class="timeline-date">${f.date}</div>
          <p class="timeline-desc">${f.desc}</p>
          ${f.pdf ? `<a href="${f.pdf}" target="_blank" class="btn-secondary" style="font-size: 0.8rem; padding: 0.5rem 1rem; margin-bottom: 1rem;">${getIcon('document')} Voir le diplôme (PDF)</a>` : ''}
          ${f.image ? `
            <div class="timeline-image-container">
              <img src="${f.image}" class="timeline-image" alt="${f.title}" onerror="this.parentElement.style.display='none'">
            </div>
          ` : ''}
        </div>
      </div>
    `).join('') + `</div>`;
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

function renderPatrimoine() {
  const container = document.getElementById('patrimoineContent');
  if (!container) return;
  container.innerHTML = `
    <div class="patrimoine-grid">
      ${patrimoineData.map(p => `
        <div class="patrimoine-card">
          <div class="patrimoine-card-header">
            <div class="patrimoine-icon">${getIcon(p.icon)}</div>
            <h4>${p.title}</h4>
          </div>
          <p>${p.desc}</p>
          <div class="patrimoine-outils">
            ${p.outils.map(o => `<span class="patrimoine-outil-tag">${o}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

async function renderVeille() {
  // Correction ID : veilleContent dans l'HTML
  const container = document.getElementById('veilleContent');
  if (!container) return;
  container.innerHTML = '<div class="veille-loading">Chargement...</div>';
  try {
    const res = await fetch(`/api/veille?limit=5&t=${Date.now()}`);
    const data = await res.json();
    const articles = data.articles || [];
    if (articles.length === 0) {
      container.innerHTML = '<p class="veille-empty">Aucun article pour le moment.</p>';
      return;
    }
    container.innerHTML = articles.map(a => `
      <a href="${a.link}" target="_blank" class="veille-article-card">
        <div class="veille-article-meta">${a.source} — ${new Date(a.pub_date).toLocaleDateString()}</div>
        <h4>${a.title}</h4>
      </a>
    `).join('');
  } catch {
    container.innerHTML = '<p class="veille-empty">Erreur flux.</p>';
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
  document.getElementById('modalProjectDesc').textContent = project.desc || '';
  
  const list = document.getElementById('modalPdfList');
  const frame = document.getElementById('pdfFrame');
  const fallback = document.getElementById('pdfFallback');
  const downloadLink = document.getElementById('pdfDownloadLink');

  list.innerHTML = '';
  frame.src = '';
  fallback.style.display = 'none';

  if (project.pdfs && project.pdfs.length > 0) {
    project.pdfs.forEach((pdf, index) => {
      const btn = document.createElement('button');
      btn.className = `pdf-btn ${index === 0 ? 'active' : ''}`;
      btn.innerHTML = `<span class="pdf-btn-icon">${getIcon('document')}</span><span>${pdf.label}</span>`;
      
      btn.onclick = () => {
        console.log('Ouverture PDF:', pdf.href);
        // Update UI
        document.querySelectorAll('.pdf-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Load PDF
        frame.src = pdf.href;
        downloadLink.href = pdf.href;
        
        // Check local storage / settings if iframe blocked
        if (window.innerWidth < 768) {
          fallback.style.display = 'block';
        }
      };
      
      list.appendChild(btn);
    });

    // Auto-load first PDF
    const firstPdf = project.pdfs[0];
    frame.src = firstPdf.href;
    downloadLink.href = firstPdf.href;
  } else {
    list.innerHTML = '<p class="text-muted">Aucun document joint.</p>';
  }

  document.getElementById('projectModal').classList.add('active');
}

function closeProjectModal() { document.getElementById('projectModal').classList.remove('active'); document.getElementById('pdfFrame').src = ''; }
function openOcModalByIndex(i) {
  const c = openclassroomsCerts[i];
  document.getElementById('ocModalTitle').textContent = c.title;
  document.getElementById('ocModalImage').src = c.image;
  document.getElementById('ocModal').classList.add('active');
}
function renderCertificationsTree() {
  const container = document.getElementById('certificationsTree');
  if (!container) return;
  container.innerHTML = `
    <div class="cert-tree">
      <div class="cert-tree-line"></div>
      ${certificationsTreeData.map(c => `
        <div class="cert-item">
          <div class="cert-dot"></div>
          <div class="cert-card" onclick="${c.type === 'pdf' ? `window.open('${c.file}', '_blank')` : `openImageModal('${c.file}', '${c.title}')`}">
            <div class="cert-header-info">
              <div class="cert-icon-small">${getIcon(c.icon)}</div>
              <div class="cert-details">
                <h4 class="cert-title-txt">${c.title}</h4>
                <div class="cert-date-txt">${c.date}</div>
              </div>
            </div>
            <div class="cert-badge">Voir</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openImageModal(src, title) {
  const modal = document.getElementById('ocModal'); // Re-use OC modal for simplicity
  const img = document.getElementById('ocModalImage');
  const modalTitle = document.getElementById('ocModalTitle');
  if (!modal || !img) return;

  img.src = src;
  modalTitle.textContent = title;
  modal.classList.add('active');
}

function renderCertificationsTree() {
  const container = document.getElementById('certificationsTree');
  if (!container) return;
  container.innerHTML = `
    <div class="cert-tree">
      <div class="cert-tree-line"></div>
      ${certificationsTreeData.map(c => `
        <div class="cert-item">
          <div class="cert-dot"></div>
          <div class="cert-card" onclick="${c.type === 'pdf' ? `window.open('${c.file}', '_blank')` : `openImageModal('${c.file}', '${c.title}')`}">
            <div class="cert-header-info">
              <div class="cert-icon-small">${getIcon(c.icon)}</div>
              <div class="cert-details">
                <h4 class="cert-title-txt">${c.title}</h4>
                <div class="cert-date-txt">${c.date}</div>
              </div>
            </div>
            <div class="cert-badge">Voir</div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function openImageModal(src, title) {
  const modal = document.getElementById('ocModal'); // Ré-utiliser la modale OC
  const img = document.getElementById('ocModalImage');
  const modalTitle = document.getElementById('ocModalTitle');
  if (!modal || !img) return;

  img.src = src;
  modalTitle.textContent = title;
  modal.classList.add('active');
}

/* --- INIT --- */

document.addEventListener('DOMContentLoaded', () => {
  activeSection = getDefaultSection();
  updateActiveSection();
  window.addEventListener('hashchange', () => {
    activeSection = window.location.hash.slice(1) || 'accueil';
    updateActiveSection();
  });

  // Fix Navigation : Écouter les clics sur les boutons de nav
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

  // Rendu initial
  renderProjects();
  renderSkills();
  renderFormations();
  renderPatrimoine();
  renderVeille();
  renderOpenClassrooms();
  renderBtsSio();
  renderCompetencesTable();
  renderCertificationsTree();

  const yearEl = document.getElementById('currentYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

// Exposer goToSection pour les clics directs dans le HTML (ex: boutons hero)
window.goToSection = goToSection;
window.openProjectModal = openProjectModal;
window.closeProjectModal = closeProjectModal;
window.openOcModalByIndex = openOcModalByIndex;
window.closeOcModal = closeOcModal;