// ============================================
// CONFIGURATION CONTACT (mailto compatible Windows / Mac / Linux)
// ============================================
const CONTACT_EMAIL = 'kadaamine37@hotmail.com';
const CONTACT_SUBJECT = 'Contact depuis portfolio BTS SIO';

// ============================================
// ICÔNES SVG (style Heroicons / professionnel)
// ============================================

const ICONS = {
  server: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><line x1="10" y1="6" x2="10" y2="6.01"/><line x1="10" y1="18" x2="10" y2="18.01"/><line x1="14" y1="6" x2="14" y2="6.01"/><line x1="14" y1="18" x2="14" y2="18.01"/><line x1="18" y1="6" x2="18.01" y2="6"/><line x1="18" y1="18" x2="18.01" y2="18"/></svg>',
  globe: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  shield: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  terminal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
  clipboard: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  database: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  chart: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  lock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  cog: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  ticket: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>',
  antenna: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12 7 2"/><path d="m7 12 5-10"/><path d="m12 12 5-10"/><path d="m17 12 5-10"/><path d="M4 22h16"/></svg>',
  storage: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>',
  target: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  wrench: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  document: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  search: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>',
  linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
};

function getIcon(name) {
  return ICONS[name] || '';
}

// ============================================
// DONNÉES
// ============================================

const projectsData = [
  {
    title: 'Situation SP1 – Infrastructure Réseau',
    desc: 'Gestion et mise en œuvre d\'une infrastructure réseau complète : conception, déploiement, sécurisation et documentation technique.',
    tech: ['Réseau', 'Infrastructure', 'Cisco', 'Sécurité'],
    color: 'from-emerald-500 to-emerald-700',
    pdfHref: 'public/Projet/sp1.pdf',
    icon: 'globe',
    id: 'sp1Project'
  },
  {
    title: 'Projet AP1 – Architecture de Prototypage',
    desc: 'Maquette réseau BTS SIO, serveur Web/FTP, gestion de tickets, virtualisation Nutanix et sauvegardes automatisées SFTP/FTPS.',
    tech: ['Nutanix', 'Packet Tracer', 'AD', 'Sauvegarde'],
    color: 'from-emerald-500 to-emerald-700',
    pdfHref: 'public/Projet/ap1.pdf',
    icon: 'server',
    id: 'ap1Project'
  },
  {
    title: 'Bloc 2 – Réseau Avancé IMDEO',
    desc: 'Architecture logique et configuration réseau avancée Cisco. Inclut le contexte d\'implantation et le travail technique réalisé.',
    tech: ['Cisco', 'Réseau Avancé', 'VLAN', 'Inter-VLAN'],
    color: 'from-emerald-500 to-emerald-700',
    pdfs: [
      { label: 'Contexte IMDEO', href: 'public/Projet/imdeo.pdf' },
      { label: 'Travail Réalisé', href: 'public/Projet/rendu-imdeo.pdf' },
    ],
    icon: 'shield',
    id: 'bloc2Project'
  },
  {
    title: 'Administration Windows Server 2019',
    desc: 'Déploiement DHCP, DNS et Active Directory. Gestion des GPO et des rôles serveurs pour un parc informatique.',
    tech: ['Windows Server', 'AD DS', 'GPO', 'DNS'],
    color: 'from-emerald-500 to-emerald-700',
    icon: 'clipboard'
  },
  {
    title: 'Virtualisation Proxmox VE',
    desc: 'Mise en œuvre de serveurs de virtualisation (KVM & LXC) avec haute disponibilité et gestion du stockage ZFS.',
    tech: ['Proxmox', 'Virtualisation', 'KVM', 'LXC'],
    color: 'from-emerald-500 to-emerald-700',
    icon: 'storage'
  },
  {
    title: 'Portfolio Professionnel',
    desc: 'Conception d\'un portfolio dynamique en mode "Pro Clean" avec intégration de veille techno auto et déploiement serverless.',
    tech: ['Vercel', 'Node.js', 'Postgres', 'Design'],
    color: 'from-emerald-500 to-emerald-700',
    icon: 'terminal'
  }
];

const skillsData = [
  { name: 'Administration Serveurs', level: 90, color: 'from-emerald-500 to-teal-500', icon: 'server' },
  { name: 'Réseaux & Infrastructure', level: 85, color: 'from-purple-500 to-pink-500', icon: 'globe' },
  { name: 'Cybersécurité', level: 80, color: 'from-red-500 to-orange-500', icon: 'shield' },
  { name: 'Scripting (PowerShell, Bash)', level: 75, color: 'from-green-500 to-emerald-500', icon: 'terminal' },
  { name: 'Active Directory & GPO', level: 70, color: 'from-indigo-500 to-blue-600', icon: 'clipboard' },
  { name: 'Sauvegarde & PRA', level: 60, color: 'from-purple-500 to-pink-600', icon: 'database' },
  { name: 'Supervision (Zabbix, Nagios)', level: 55, color: 'from-green-500 to-emerald-600', icon: 'chart' },
  { name: 'VPN & Accès Distant', level: 65, color: 'from-cyan-500 to-teal-600', icon: 'lock' },
  { name: 'Ansible & Automatisation', level: 50, color: 'from-red-500 to-orange-600', icon: 'cog' },
  { name: 'Ticketing (GLPI, ServiceNow)', level: 55, color: 'from-amber-500 to-yellow-600', icon: 'ticket' },
  { name: 'Protocoles Réseau (OSPF, BGP)', level: 60, color: 'from-violet-500 to-purple-600', icon: 'antenna' },
  { name: 'Stockage NAS', level: 55, color: 'from-slate-500 to-gray-600', icon: 'storage' },
];

const formationsData = [
  {
    title: 'BTS SIO SISR',
    subtitle: 'Lycée Paul-Louis Courier, Tours — 2025–2026',
    gradient: 'from-blue-600 to-cyan-600',
    shadow: 'shadow-blue-900/40',
    cta: { type: 'link', label: 'En savoir plus sur le BTS SIO', href: 'https://nizar-it.github.io/formation/', color: 'blue' },
  },
  {
    title: 'Bac Pro Systèmes Numériques',
    subtitle: 'Lycée Henri Becquerel, Tours — 2025 — Mention Bien',
    gradient: 'from-amber-600 to-orange-600',
    shadow: 'shadow-amber-900/40',
  },
  {
    title: 'Club EBIOS - MOOC',
    subtitle: 'Lycée Paul-Louis Courier, Tours — 2025',
    gradient: 'from-purple-600 to-pink-600',
    shadow: 'shadow-purple-900/40',
    certificate: { label: 'Voir le certificat EBIOS', href: 'public/certif/EBIOS.pdf', color: 'purple' },
  },
  {
    title: 'MOOC ANSSI — Cybersécurité',
    subtitle: 'Lycée Paul-Louis Courier, Tours — 2025',
    gradient: 'from-green-600 to-emerald-600',
    shadow: 'shadow-emerald-900/40',
    certificate: { label: 'Voir l\'attestation ANSSI', href: 'public/certif/MOOC.jpg', color: 'emerald' },
  },
  {
    title: 'OpenClassrooms',
    subtitle: 'Mes certifications sur OpenClassrooms',
    gradient: 'from-sky-500 to-indigo-600',
    shadow: 'shadow-sky-900/40',
    cta: { type: 'action', label: 'Voir mes cours OpenClassrooms', color: 'indigo' },
  },
  {
    title: 'GIP Pix - PIX',
    subtitle: 'Lycée Henri Becquerel, Tours — 2025',
    gradient: 'from-fuchsia-500 to-rose-600',
    shadow: 'shadow-rose-900/40',
    certificate: { label: 'Voir le certificat PIX', href: 'public/certif/PIX.jpg', color: 'rose' },
  },
  {
    title: 'SST',
    subtitle: 'Lycée Henri Becquerel, Tours — 2024–2025',
    gradient: 'from-red-500 to-orange-600',
    shadow: 'shadow-red-900/40',
  },
];

const openclassroomsCerts = [
  {
    title: 'TCP/IP',
    description: 'Maîtrise des protocoles TCP/IP et des bases des réseaux informatiques.',
    image: 'public/openclassroom/TCP:IP.png',
    tags: ['Réseaux', 'TCP/IP', 'Protocoles'],
  },
  {
    title: 'Windows Server',
    description: 'Administration et gestion de serveurs Windows Server en environnement professionnel.',
    image: 'public/openclassroom/Windows Server.png',
    tags: ['Windows Server', 'Administration', 'Serveurs'],
  },
  {
    title: 'Gérer Git & GitHub',
    description: 'Contrôle de version et collaboration avec Git et GitHub sur des projets informatiques.',
    image: 'public/openclassroom/git.png',
    tags: ['Git', 'GitHub', 'Version Control'],
  },
  {
    title: 'Déployez Windows 10',
    description: 'Déploiement et configuration de Windows 10 en contexte entreprise.',
    image: 'public/openclassroom/déployez Win10.png',
    tags: ['Windows 10', 'Déploiement', 'Entreprise'],
  },
  {
    title: 'Montez un PC',
    description: 'Assemblage et configuration complète d\'un ordinateur personnel.',
    image: 'public/openclassroom/pc.png',
    tags: ['Hardware', 'Assemblage', 'PC'],
  },
  {
    title: 'Utiliser ChatGPT',
    description: 'Utilisation de l\'IA conversationnelle pour la productivité et l\'assistance technique.',
    image: 'public/openclassroom/utiliser ChatGPT.png',
    tags: ['IA', 'ChatGPT', 'Productivité'],
  },
  {
    title: 'Centralisez et sécurisez avec Active Directory',
    description: 'Administration et configuration d\'Active Directory pour centraliser et sécuriser la gestion des utilisateurs et ressources.',
    image: 'public/openclassroom/Centralisez et sécuriser avec Active Directory.jpg',
    tags: ['Active Directory', 'Windows Server', 'Sécurité'],
  },
  {
    title: 'Initiez-vous à Linux',
    description: 'Découverte et apprentissage de Linux pour l\'administration système et les serveurs.',
    image: 'public/openclassroom/linux.jpg',
    tags: ['Linux', 'Administration', 'Systèmes'],
  },
  {
    title: 'Optimisez avec des Conteneurs Docker',
    description: 'Maîtrise de Docker pour conteneuriser et déployer des applications de manière efficace.',
    image: 'public/openclassroom/Optimisez avec des Conteneur Docker.jpg',
    tags: ['Docker', 'Conteneurs', 'DevOps'],
  },
  {
    title: 'Simulez des schémas avec Cisco Packet Tracer',
    description: 'Conception et simulation de réseaux avec Cisco Packet Tracer pour la configuration et le dépannage.',
    image: 'public/openclassroom/cisco.jpg',
    tags: ['Réseaux', 'Cisco', 'Simulation'],
  },
  {
    title: 'Virtualisez vos environnements de travail',
    description: 'Mise en place d\'environnements virtuels pour tester et déployer des infrastructures.',
    image: 'public/openclassroom/virtualiser vos environnement travail.jpg',
    tags: ['Virtualisation', 'Infrastructure', 'VMware'],
  },
];

// ============================================
// DONNÉES NOUVELLES SECTIONS
// ============================================

const btsSioData = {
  description: `Spécialisé en Solutions d'Infrastructure, Systèmes et Réseaux (SISR), je maîtrise
  l'administration de serveurs, la gestion des réseaux, la virtualisation et la cybersécurité.
  Cette formation de 2 ans prépare aux métiers d'administrateur réseau, technicien système
  et responsable infrastructure.`,
  objectifs: [
    { icon: 'server', label: 'Administrer des serveurs', desc: 'Windows Server, Debian, gestion des services réseau (DNS, DHCP, AD)' },
    { icon: 'globe', label: 'Gérer des infrastructures réseau', desc: 'VLANs, routage, firewall, VPN, segmentation réseau' },
    { icon: 'shield', label: 'Sécuriser les systèmes', desc: 'Audit, hardening, règles de pare-feu, supervision (Zabbix, Nagios)' },
    { icon: 'database', label: 'Virtualiser des environnements', desc: 'Proxmox VE, VMware, Docker, LXC, conteneurisation' },
    { icon: 'terminal', label: 'Automatiser les tâches', desc: 'PowerShell, Bash, scripts de déploiement et de sauvegarde' },
    { icon: 'clipboard', label: 'Documenter et piloter', desc: 'Procédures techniques, rapports d\'audit, gestion de tickets' },
  ],
  competencesCles: ['Windows Server', 'Linux (Debian)', 'Proxmox VE', 'OPNsense', 'Active Directory', 'Docker', 'VPN/VLANs', 'Cisco Packet Tracer'],
};

const veilleData = {
  sujet: 'La cybersécurité des infrastructures réseau',
  accroche: 'Face à l\'explosion des attaques réseau (ransomwares, intrusions, DDoS), je suis l\'évolution des technologies de protection des infrastructures IT pour rester à la pointe des bonnes pratiques SISR.',
  outils: [
    { name: 'ANSSI / CERT-FR', desc: 'Bulletins d\'alerte officiels sur les vulnérabilités critiques', url: 'https://www.cert.ssi.gouv.fr' },
    { name: 'CVE / NVD', desc: 'Base de données des failles de sécurité référencées (NIST)', url: 'https://nvd.nist.gov' },
    { name: 'Bleeping Computer', desc: 'Actualités malwares, ransomwares et incidents de sécurité', url: 'https://www.bleepingcomputer.com' },
    { name: 'Exploit Database', desc: 'Référence des exploits publics pour la veille offensive', url: 'https://www.exploit-db.com' },
  ],
  articles: [], // Sera rempli par l'API Neon/Vercel
  impact: 'Cette veille me permet de comprendre les menaces actuelles, d\'adapter mes configurations réseau (règles firewall, segmentation VLAN) et de proposer des recommandations de sécurité basées sur des données réelles lors de mes projets PPE et stages.',
};

const patrimoineData = {
  intro: 'La gestion du patrimoine informatique consiste à inventorier, maintenir et sécuriser l\'ensemble des ressources matérielles et logicielles d\'un système d\'information.',
  activites: [
    {
      icon: 'clipboard',
      titre: 'Inventaire matériel & logiciel',
      desc: 'Recensement des équipements (PCs, serveurs, switches, routeurs) et des logiciels installés. Utilisation de GLPI et OCSInventory pour la gestion automatisée du parc.',
      outils: ['GLPI', 'OCSInventory', 'Fusion Inventory'],
    },
    {
      icon: 'wrench',
      titre: 'Maintenance & support',
      desc: 'Diagnostic et résolution d\'incidents matériels et logiciels. Gestion des tickets via GLPI, remplacement de composants défectueux, mises à jour système.',
      outils: ['GLPI (tickets)', 'Windows Update', 'WSUS'],
    },
    {
      icon: 'shield',
      titre: 'Sécurisation du parc',
      desc: 'Mise en place de stratégies de sécurité : GPO, antivirus centralisé, chiffrement des disques (BitLocker), contrôle des accès et politique de mots de passe.',
      outils: ['GPO', 'BitLocker', 'Active Directory', 'Antivirus centralisé'],
    },
    {
      icon: 'chart',
      titre: 'Supervision & monitoring',
      desc: 'Surveillance des équipements réseau et serveurs avec des outils de supervision. Alertes en cas de panne, analyse des performances et traçabilité des incidents.',
      outils: ['Zabbix', 'Nagios', 'PRTG', 'Prometheus'],
    },
    {
      icon: 'database',
      titre: 'Sauvegardes & PRA',
      desc: 'Mise en œuvre de politiques de sauvegarde (règle 3-2-1), planification des sauvegardes automatiques, test de restauration et plan de reprise d\'activité.',
      outils: ['Veeam', 'Synology DSM', 'rsync', 'Proxmox Backup'],
    },
    {
      icon: 'document',
      titre: 'Documentation technique',
      desc: 'Rédaction de procédures d\'installation, de fiches techniques, de schémas réseau et de rapports d\'audit pour assurer la traçabilité et la transmission des savoirs.',
      outils: ['Draw.io', 'Markdown', 'Word/LibreOffice', 'Confluence'],
    },
  ],
};

// ============================================
// ÉTAT GLOBAL
// ============================================

let activeSection = 'accueil';

// ============================================
// ROUTING & NAVIGATION
// ============================================

function getDefaultSection() {
  const rawHash = window.location.hash.slice(1);
  if (!rawHash) return 'accueil';
  const sections = ['accueil', 'bts-sio', 'projets', 'veille', 'patrimoine', 'formations', 'compétences', 'contact', 'openclassrooms'];
  let decodedHash = rawHash;
  try {
    decodedHash = decodeURIComponent(rawHash);
  } catch (e) {
    decodedHash = rawHash;
  }
  return sections.includes(decodedHash) ? decodedHash : 'accueil';
}

function goToSection(sectionId) {
  if (!sectionId) return;
  activeSection = sectionId;
  updateActiveSection();
  try {
    window.location.hash = '#' + encodeURIComponent(sectionId).replace(/%E2%80%8B/g, '');
  } catch (e) {
    window.location.hash = '#' + sectionId;
  }
}

function updateActiveSection() {
  // Mettre à jour les sections visibles
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const targetSection = document.getElementById(activeSection);
  if (targetSection) {
    targetSection.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Mettre à jour les boutons de navigation
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.dataset.section === activeSection) {
      btn.classList.add('active');
    }
  });

  // Mettre à jour le titre et la meta description
  updateSEO();
}

function updateSEO() {
  const seoData = {
    accueil: {
      title: 'Amine IT - Portfolio BTS SIO SISR | Administrateur Réseaux & Systèmes',
      description: 'Portfolio d\'Amine, étudiant en BTS SIO option SISR. Découvrez mes projets, compétences et formations en administration de réseaux, systèmes et cybersécurité.',
    },
    'bts-sio': {
      title: 'BTS SIO SISR - Portfolio Amine IT',
      description: 'Présentation du BTS SIO option SISR : objectifs, compétences clés et spécialisation en Solutions d\'Infrastructure, Systèmes et Réseaux.',
    },
    projets: {
      title: 'Projets SISR - Portfolio Amine IT',
      description: 'Explorez mes projets techniques en infrastructure, virtualisation, réseau et sécurité réalisés dans le cadre de ma formation BTS SIO SISR.',
    },
    veille: {
      title: 'Veille Technologique - Portfolio Amine IT',
      description: 'Ma veille technologique en cybersécurité et réseaux : outils, sources, articles de synthèse et impact sur ma pratique SISR.',
    },
    patrimoine: {
      title: 'Gestion du Patrimoine Informatique - Portfolio Amine IT',
      description: 'Inventaire, maintenance, sécurisation et supervision du parc informatique. Utilisation de GLPI, OCSInventory, Zabbix et autres outils de gestion de parc.',
    },
    formations: {
      title: 'Mon Parcours - Portfolio Amine IT',
      description: 'Mon parcours de formation, du Bac Pro Systèmes Numériques au BTS SIO SISR, en passant par des certifications OpenClassrooms et des MOOCs en cybersécurité.',
    },
    compétences: {
      title: 'Tableau de Synthèse des Compétences - Portfolio Amine IT',
      description: 'Tableau de synthèse des compétences BTS SIO SISR : compétences maîtrisées, niveau et preuves associées selon le référentiel officiel.',
    },
    contact: {
      title: 'Me Contacter - Portfolio Amine IT',
      description: 'Contactez-moi pour toute proposition de stage, de projet ou pour discuter d\'opportunités en lien avec l\'administration de systèmes et réseaux.',
    },
    openclassrooms: {
      title: 'Certifications OpenClassrooms - Portfolio Amine IT',
      description: 'Mes certifications et parcours de formation sur OpenClassrooms, validant mes compétences en TCP/IP, Windows Server, Git et plus encore.',
    },
  };

  const current = seoData[activeSection] || seoData.accueil;
  document.title = current.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', current.description);
  }
}

// ============================================
// INITIALISATION DES DONNÉES
// ============================================

// Mapping des couleurs Tailwind
const colorMap = {
  'blue-600': '#2563eb', 'blue-800': '#1e40af', 'blue-500': '#3b82f6',
  'purple-600': '#9333ea', 'purple-800': '#6b21a8', 'purple-500': '#a855f7',
  'emerald-600': '#059669', 'green-700': '#15803d', 'emerald-500': '#10b981',
  'amber-500': '#f59e0b', 'amber-600': '#d97706', 'orange-600': '#ea580c',
  'red-500': '#ef4444', 'red-600': '#dc2626', 'indigo-600': '#4f46e5',
  'orange-500': '#f97316', 'indigo-500': '#6366f1', 'indigo-700': '#4338ca',
  'sky-500': '#0ea5e9', 'sky-600': '#0284c7', 'cyan-500': '#06b6d4',
  'pink-600': '#db2777', 'fuchsia-500': '#d946ef', 'rose-600': '#e11d48',
  'pink-500': '#ec4899', 'violet-500': '#8b5cf6', 'slate-500': '#64748b',
  'gray-600': '#4b5563', 'teal-600': '#0d9488', 'green-500': '#22c55e',
};

function getColorValue(colorName) {
  return colorMap[colorName] || '#10b981';
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const mainProjects = projectsData.filter(p => !p.id);
  const ap1Project = projectsData.find(p => p.id === 'ap1Project');
  const sp1Project = projectsData.find(p => p.id === 'sp1Project');
  const bloc2Project = projectsData.find(p => p.id === 'bloc2Project');

  grid.innerHTML = mainProjects.map(project => {
    const iconSvg = getIcon(project.icon || 'terminal');
    return `
      <article class="project-card" onclick="alert('Détails de ce projet bientôt disponibles !')" title="Cliquer pour voir les détails">
        <div class="project-card-inner">
          <div class="project-head">
            <div style="color: var(--accent); width: 24px; height: 24px; margin-bottom: 1rem;">${iconSvg}</div>
          </div>
          <div>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-desc">${project.desc}</p>
          </div>
          <div class="project-card-tech">
            <div class="project-card-tech-list">
              ${project.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');

  if (ap1Project) {
    const ap1El = document.getElementById('ap1Project');
    if (ap1El) {
      ap1El.setAttribute('onclick', 'openPdfModal()');
      ap1El.setAttribute('title', 'Cliquer pour voir le sujet AP1 (PDF)');
      ap1El.style.cursor = 'pointer';
      ap1El.innerHTML = `
        <div class="project-card-inner">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 1rem;">
            <div style="color: var(--accent); width: 28px; height: 28px;">${getIcon('server')}</div>
            <div class="project-validated-badge">✅ Compétence validée</div>
          </div>
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem;">
            <h3 class="project-card-title">${ap1Project.title}</h3>
            <div class="project-card-view-btn">
              ${getIcon('document')}
            </div>
          </div>
          <p class="project-card-desc">${ap1Project.desc}</p>
          <div class="project-card-tech mt-auto">
            <div class="project-card-tech-list">
              ${ap1Project.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  if (sp1Project) {
    const sp1El = document.getElementById('sp1Project');
    if (sp1El) {
      sp1El.setAttribute('onclick', 'openSp1PdfModal()');
      sp1El.setAttribute('title', 'Cliquer pour voir le document SP1 (PDF)');
      sp1El.style.cursor = 'pointer';
      sp1El.innerHTML = `
        <div class="project-card-inner">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 1rem;">
            <div style="color: var(--accent); width: 28px; height: 28px;">${getIcon('globe')}</div>
            <div class="project-validated-badge">✅ Compétence validée</div>
          </div>
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem;">
            <h3 class="project-card-title">${sp1Project.title}</h3>
            <div class="project-card-view-btn">
              ${getIcon('document')}
            </div>
          </div>
          <p class="project-card-desc">${sp1Project.desc}</p>
          <div class="project-card-tech mt-auto">
            <div class="project-card-tech-list">
              ${sp1Project.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  if (bloc2Project && bloc2Project.pdfs) {
    const bloc2El = document.getElementById('bloc2Project');
    if (bloc2El) {
      bloc2El.setAttribute('onclick', 'openBloc2ContextModal()');
      bloc2El.setAttribute('title', 'Cliquer pour voir le projet IMDEO (PDF)');
      bloc2El.style.cursor = 'pointer';
      const [ctx, work] = bloc2Project.pdfs;
      bloc2El.innerHTML = `
        <div class="project-card-inner">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem; margin-bottom: 1rem;">
            <div style="color: var(--accent); width: 28px; height: 28px;">${getIcon('shield')}</div>
            <div class="project-validated-badge">✅ Compétence validée</div>
          </div>
          <h3 class="project-card-title">${bloc2Project.title}</h3>
          <p class="project-card-desc">${bloc2Project.desc}</p>
          <div class="project-card-tech">
            <div class="project-card-tech-list">
              ${bloc2Project.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            </div>
          </div>
          <div class="project-card-pdf-buttons mt-auto">
            <button type="button" onclick="openBloc2ContextModal()" class="project-pdf-btn">
              ${getIcon('document')}
              ${ctx.label}
            </button>
            <button type="button" onclick="openBloc2WorkModal()" class="project-pdf-btn">
              ${getIcon('document')}
              ${work.label}
            </button>
          </div>
        </div>
      `;
    }
  }
}


function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = skillsData.map(skill => {
    const [start] = skill.color.replace('from-', '').replace('to-', '').split(' to-');
    const accentColor = getColorValue(start);
    return `
      <div class="skill-card" style="--card-accent: ${accentColor};">
        <div class="skill-card-inner">
          <div class="skill-header">
            <div class="skill-icon skill-icon-svg">${getIcon(skill.icon)}</div>
            <div class="skill-info">
              <h3>${skill.name}</h3>
              <p>${skill.level}%</p>
            </div>
          </div>
          <div class="skill-progress">
            <div class="skill-progress-header">
              <span>Maîtrise</span>
              <span>${skill.level}%</span>
            </div>
            <div class="skill-progress-bar">
              <div class="skill-progress-fill" style="width: ${skill.level}%"></div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

const competencesTableData = [
  { competence: 'Installer et configurer un poste de travail', niveau: 'Avancé', preuve: 'Stage – déploiement Windows 10/11' },
  { competence: 'Administrer un réseau local', niveau: 'Intermédiaire', preuve: 'Projet AP1 – maquette Cisco Packet Tracer' },
  { competence: 'Maintenir et dépanner une infrastructure', niveau: 'Intermédiaire', preuve: 'Projet SP1 – gestion infrastructure réseau' },
  { competence: 'Gérer la virtualisation (VMs & conteneurs)', niveau: 'Avancé', preuve: 'Lab Proxmox VE – VMs, LXC, clustering' },
  { competence: 'Sécuriser une infrastructure réseau', niveau: 'Intermédiaire', preuve: 'OPNsense – VLANs, DMZ, règles firewall' },
  { competence: 'Administrer Active Directory & GPO', niveau: 'Intermédiaire', preuve: 'Windows Server 2019 – AD DS, GPO, DNS, DHCP' },
  { competence: 'Mettre en place une politique de sauvegarde', niveau: 'Intermédiaire', preuve: 'Projet Sauvegarde – Veeam, Synology, rsync' },
  { competence: 'Superviser un parc informatique', niveau: 'Débutant', preuve: 'Formation Nagios/Zabbix – OpenClassrooms' },
  { competence: 'Gérer les tickets et incidents (GLPI)', niveau: 'Intermédiaire', preuve: 'Projet AP1 – déploiement outil de tickets' },
  { competence: 'Réaliser une veille technologique', niveau: 'Avancé', preuve: 'Veille cybersécurité – ANSSI, CVE, Bleeping Computer' },
  { competence: 'Documenter et rédiger des procédures', niveau: 'Avancé', preuve: 'Rapports de projets PPE, fiches techniques' },
  { competence: 'Scripting & automatisation', niveau: 'Débutant', preuve: 'Scripts PowerShell/Bash – sauvegardes, déploiements' },
];

const niveauColors = {
  'Avancé': '#10b981',
  'Intermédiaire': '#f59e0b',
  'Débutant': '#ef4444',
};

function renderCompetencesTable() {
  const container = document.getElementById('competencesTable');
  if (!container) return;

  container.innerHTML = `
    <h3 class="comp-table-title">Tableau de synthèse — Référentiel BTS SIO SISR</h3>
    <div class="comp-table-wrapper">
      <table class="comp-table">
        <thead>
          <tr>
            <th>Compétence (référentiel BTS SIO)</th>
            <th>Niveau</th>
            <th>Preuve / Contexte</th>
          </tr>
        </thead>
        <tbody>
          ${competencesTableData.map(row => `
            <tr>
              <td>${row.competence}</td>
              <td><span class="comp-niveau" style="--niveau-color: ${niveauColors[row.niveau] || '#6366f1'}">${row.niveau}</span></td>
              <td class="comp-preuve">${row.preuve}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="comp-legend">
      <span class="comp-niveau" style="--niveau-color: #10b981">Avancé</span>
      <span class="comp-niveau" style="--niveau-color: #f59e0b">Intermédiaire</span>
      <span class="comp-niveau" style="--niveau-color: #ef4444">Débutant</span>
    </div>
  `;
}

function renderBtsSio() {
  const container = document.getElementById('btsSioContent');
  if (!container) return;

  container.innerHTML = `
    <div class="bts-intro-card">
      <p class="bts-intro-text">${btsSioData.description}</p>
      <div class="bts-tags">
        ${btsSioData.competencesCles.map(t => `<span class="bts-tag">${t}</span>`).join('')}
      </div>
    </div>
    <h3 class="bts-objectifs-title">Objectifs de la formation SISR</h3>
    <div class="bts-objectifs-grid">
      ${btsSioData.objectifs.map(obj => `
        <div class="bts-objectif-card">
          <div class="bts-objectif-icon">${getIcon(obj.icon)}</div>
          <div>
            <h4>${obj.label}</h4>
            <p>${obj.desc}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

async function renderVeille() {
  const container = document.getElementById('veilleContent');
  if (!container) return;

  // Squelette de chargement
  container.innerHTML = `
    <div class="veille-intro-card">
      <div class="veille-sujet-label">Sujet de veille</div>
      <h3 class="veille-sujet-title">${veilleData.sujet}</h3>
      <p class="veille-sujet-desc">${veilleData.accroche}</p>
    </div>
    <div class="veille-two-col">
      <div>
        <h3 class="veille-section-title">Outils de veille utilisés</h3>
        <div class="veille-outils-list">
          ${veilleData.outils.map(o => `
            <a href="${o.url}" target="_blank" rel="noopener noreferrer" class="veille-outil-card">
              <div class="veille-outil-icon">${getIcon('search')}</div>
              <div>
                <strong>${o.name}</strong>
                <p>${o.desc}</p>
              </div>
            </a>
          `).join('')}
        </div>
      </div>
      <div>
        <h3 class="veille-section-title">
          Flux en direct
          <span class="veille-live-badge">
            <span class="veille-live-dot"></span>Live
          </span>
        </h3>
        <div id="veilleFlux" class="veille-articles-list">
          <div class="veille-loading">
            <div class="veille-loading-spinner"></div>
            Récupération des derniers articles…
          </div>
        </div>
      </div>
    </div>
    <div class="veille-impact-card">
      <div class="veille-impact-icon">${getIcon('target')}</div>
      <div>
        <h4>Impact sur ma pratique professionnelle</h4>
        <p>${veilleData.impact}</p>
      </div>
    </div>
  `;

  // Tenter de charger les articles depuis l'API Vercel
  const fluxContainer = document.getElementById('veilleFlux');
  if (!fluxContainer) return;

  try {
    const response = await fetch('/api/veille?limit=10');
    console.log('Veille API Status:', response.status);

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    console.log('Veille Articles received:', data.articles ? data.articles.length : 0);
    const articles = data.articles || [];

    if (articles.length === 0) {
      fluxContainer.innerHTML = `
        <div class="veille-empty">
          <p>Aucun article trouvé dans la base Neon.</p>
          <p style="font-size: 0.8rem; margin-top: 0.5rem;">Lancez une synchronisation via curl pour remplir la base.</p>
        </div>
      `;
      return;
    }

    // Affichage des articles dynamiques
    fluxContainer.innerHTML = articles.map(a => {
      const date = new Date(a.pub_date);
      const formattedDate = date.toLocaleDateString('fr-FR', {
        day: 'numeric', month: 'short', year: 'numeric'
      });

      return `
        <a href="${a.link}" target="_blank" rel="noopener noreferrer" class="veille-article-card veille-article-link" title="Lire l'article complet sur ${a.source}">
          <div class="veille-article-meta">
            <span class="veille-article-source">${a.source}</span>
            <span>${formattedDate}</span>
          </div>
          <h4>${a.title}</h4>
          ${a.description ? `<p>${a.description}</p>` : ''}
          <div class="veille-article-tags">
            <span class="veille-tag">${a.category || 'Veille Cyber'}</span>
            <span class="veille-tag" style="background: rgba(16, 185, 129, 0.05);">Détails →</span>
          </div>
        </a>
      `;
    }).join('');

  } catch (_err) {
    // Fallback si l'API n'est pas encore disponible (local ou premier déploiement)
    renderVeilleStatic(fluxContainer);
  }
}

function renderVeilleStatic(container) {
  container.innerHTML = veilleData.articles.map(a => `
    <div class="veille-article-card">
      <div class="veille-article-meta">${a.date}</div>
      <h4>${a.titre}</h4>
      <p>${a.resume}</p>
      <div class="veille-article-tags">
        ${a.tags.map(t => `<span class="veille-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}


function renderPatrimoine() {
  const container = document.getElementById('patrimoineContent');
  if (!container) return;

  container.innerHTML = `
    <div class="patrimoine-intro-card">
      <p>${patrimoineData.intro}</p>
    </div>
    <div class="patrimoine-grid">
      ${patrimoineData.activites.map(a => `
        <div class="patrimoine-card">
          <div class="patrimoine-card-header">
            <div class="patrimoine-icon">${getIcon(a.icon)}</div>
            <h4>${a.titre}</h4>
          </div>
          <p>${a.desc}</p>
          <div class="patrimoine-outils">
            ${a.outils.map(o => `<span class="patrimoine-outil-tag">${o}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function renderFormations() {
  const grid = document.getElementById('formationsGrid');
  if (!grid) return;

  const btnColorMap = {
    blue: 'formation-btn-blue',
    indigo: 'formation-btn-indigo',
    emerald: 'formation-btn-emerald',
    purple: 'formation-btn-purple',
    rose: 'formation-btn-rose',
  };

  grid.innerHTML = formationsData.map((formation, index) => {
    const [start] = formation.gradient.replace('from-', '').replace('to-', '').split(' to-');
    const accentColor = getColorValue(start);
    return `
      <div class="formation-card" style="--card-accent: ${accentColor};">
        <div class="formation-card-inner">
          <div>
            <h3 class="formation-title">${formation.title}</h3>
            <p class="formation-subtitle">${formation.subtitle}</p>
          </div>
          ${(formation.cta || formation.certificate) ? `
            <div class="formation-actions">
              ${formation.cta ? (formation.cta.type === 'link' ? `
                <a href="${formation.cta.href}" target="_blank" rel="noopener noreferrer" class="formation-btn ${btnColorMap[formation.cta.color] || 'formation-btn-blue'}">
                  ${formation.cta.label}
                </a>
              ` : `
                <button type="button" onclick="goToSection('openclassrooms')" class="formation-btn ${btnColorMap[formation.cta.color] || 'formation-btn-indigo'}">
                  ${formation.cta.label}
                </button>
              `) : ''}
              ${formation.certificate ? `
                <button type="button" onclick="openCertModalByIndex(${index})" class="formation-btn ${btnColorMap[formation.certificate.color] || 'formation-btn-blue'}">
                  ${formation.certificate.label}
                </button>
              ` : ''}
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderOpenClassrooms() {
  const grid = document.getElementById('openclassroomsGrid');
  if (!grid) return;

  grid.innerHTML = openclassroomsCerts.map((cert, index) => {
    // Échapper les caractères spéciaux pour éviter les erreurs JavaScript
    const titleEscaped = cert.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const descEscaped = cert.description.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    const tagsEscaped = JSON.stringify(cert.tags).replace(/'/g, "\\'");

    return `
    <article class="oc-card">
      <div class="oc-card-inner">
        <div class="oc-card-image-container" onclick="openOcModalByIndex(${index})">
          <img src="${cert.image}" alt="${cert.title}" class="oc-card-image" loading="lazy">
          <div class="oc-card-image-overlay"></div>
          <span class="oc-card-badge">Certifié</span>
          <button type="button" onclick="event.stopPropagation(); openOcModalByIndex(${index})" class="oc-card-view-btn" title="Voir la certification">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="height: 0.875rem; width: 0.875rem;">
              <path d="M1.5 12s3.5-6.5 10.5-6.5S22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
        </div>
        <div class="oc-card-content">
          <div>
            <h3 class="oc-card-title">${cert.title}</h3>
            <p class="oc-card-description">${cert.description}</p>
          </div>
          <div class="oc-card-tags">
            ${cert.tags.map(tag => `<span class="oc-card-tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
    </article>
    `;
  }).join('');
}

// ============================================
// MODALS
// ============================================

function openPdfModal() {
  const modal = document.getElementById('pdfModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closePdfModal() {
  const modal = document.getElementById('pdfModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function openSp1PdfModal() {
  const modal = document.getElementById('sp1PdfModal');
  if (modal) {
    modal.classList.add('active');
  }
}

function closeSp1PdfModal() {
  const modal = document.getElementById('sp1PdfModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function openBloc2ContextModal() {
  const modal = document.getElementById('bloc2ContextModal');
  if (modal) modal.classList.add('active');
}

function closeBloc2ContextModal() {
  const modal = document.getElementById('bloc2ContextModal');
  if (modal) modal.classList.remove('active');
}

function openBloc2WorkModal() {
  const modal = document.getElementById('bloc2WorkModal');
  if (modal) modal.classList.add('active');
}

function closeBloc2WorkModal() {
  const modal = document.getElementById('bloc2WorkModal');
  if (modal) modal.classList.remove('active');
}

function openCertModalByIndex(index) {
  const formation = formationsData[index];
  if (!formation || !formation.certificate) return;

  openCertModal(
    formation.title,
    formation.subtitle,
    formation.certificate.label,
    formation.certificate.href
  );
}

function openCertModal(title, subtitle, label, href) {
  const modal = document.getElementById('certModal');
  if (!modal) {
    console.error('Modal certModal non trouvé');
    return;
  }

  const titleElement = document.getElementById('certModalTitle');
  const subtitleElement = document.getElementById('certModalSubtitle');
  const descElement = document.getElementById('certModalDescription');
  const container = document.getElementById('certModalContent');

  if (!titleElement || !subtitleElement || !descElement || !container) {
    console.error('Éléments du modal non trouvés');
    return;
  }

  titleElement.textContent = `${title} — Certificat`;
  subtitleElement.textContent = subtitle;
  descElement.textContent = `Visualisation en lecture seule de la certification : ${label}.`;

  const isPdf = href.toLowerCase().endsWith('.pdf');

  if (isPdf) {
    container.innerHTML = `
      <object data="${href}" type="application/pdf" width="100%" height="100%">
        <p class="modal-fallback">
          Votre navigateur ne peut pas afficher ce PDF.
          <a href="${href}" target="_blank" rel="noopener noreferrer">Télécharger le certificat</a>
        </p>
      </object>
    `;
  } else {
    // Pour les images, on utilise une balise img avec gestion d'erreur
    container.innerHTML = `
      <img src="${href}" alt="${label}" onerror="this.onerror=null; this.parentElement.innerHTML='<p class=\\'modal-fallback\\'>Image non trouvée. <a href=\\'${href}\\' target=\\'_blank\\' rel=\\'noopener noreferrer\\'>Ouvrir l\\'image</a></p>';" style="max-height: 100%; max-width: 100%; object-fit: contain; border-radius: 1rem; display: block; margin: 0 auto;">
    `;
  }

  modal.classList.add('active');
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  if (modal) {
    modal.classList.remove('active');
    modal.onclick = null;
  }
}

function openOcModalByIndex(index) {
  const cert = openclassroomsCerts[index];
  if (!cert) return;

  openOcModal(cert.title, cert.description, cert.image, cert.tags);
}

function openOcModal(title, description, image, tags) {
  const modal = document.getElementById('ocModal');
  if (!modal) return;

  // S'assurer que tags est un tableau
  const tagsArray = Array.isArray(tags) ? tags : [];

  const imgElement = document.getElementById('ocModalImage');
  const titleElement = document.getElementById('ocModalTitle');
  const descElement = document.getElementById('ocModalDescription');
  const tagsContainer = document.getElementById('ocModalTags');

  if (imgElement) imgElement.src = image;
  if (imgElement) imgElement.alt = title;
  if (titleElement) titleElement.textContent = title;
  if (descElement) descElement.textContent = description;
  if (tagsContainer) {
    tagsContainer.innerHTML = tagsArray.map(tag => `<span class="modal-oc-tag">${tag}</span>`).join('');
  }

  modal.classList.add('active');

  // Fermer en cliquant en dehors
  modal.onclick = (e) => {
    if (e.target === modal) closeOcModal();
  };
}

function closeOcModal() {
  const modal = document.getElementById('ocModal');
  if (modal) {
    modal.classList.remove('active');
    modal.onclick = null;
  }
}


// ============================================
// INITIALISATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Routing
  activeSection = getDefaultSection();
  updateActiveSection();

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    const decodedHash = decodeURIComponent(hash);
    if (decodedHash) {
      activeSection = decodedHash;
      updateActiveSection();
    }
  });

  // Navigation : délégation d’événements sur le menu pour que chaque clic change bien de section
  const navMenu = document.getElementById('nav-menu');
  const navToggle = document.getElementById('nav-toggle');

  function closeNavMenu() {
    if (navMenu) {
      navMenu.classList.remove('is-open');
      navMenu.setAttribute('aria-hidden', 'true');
    }
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Ouvrir le menu');
    }
    document.body.classList.remove('nav-open');
  }

  function openNavMenu() {
    if (navMenu) {
      navMenu.classList.add('is-open');
      navMenu.setAttribute('aria-hidden', 'false');
    }
    if (navToggle) {
      navToggle.setAttribute('aria-expanded', 'true');
      navToggle.setAttribute('aria-label', 'Fermer le menu');
    }
    document.body.classList.add('nav-open');
  }

  function toggleNavMenu() {
    const isOpen = navMenu && navMenu.classList.contains('is-open');
    if (isOpen) closeNavMenu();
    else openNavMenu();
  }

  if (navToggle) {
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleNavMenu();
    });
  }

  if (navMenu) {
    navMenu.addEventListener('click', function (e) {
      const btn = e.target && e.target.closest ? e.target.closest('.nav-btn') : null;
      if (btn && btn.dataset.section) {
        e.preventDefault();
        e.stopPropagation();
        goToSection(btn.dataset.section);
        closeNavMenu();
      }
      if (e.target === navMenu) closeNavMenu();
    });
  }

  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      if (this.dataset.section) goToSection(this.dataset.section);
    });
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) closeNavMenu();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-open')) closeNavMenu();
  });

  // Render data
  renderProjects();
  renderSkills();
  renderCompetencesTable();
  renderFormations();
  renderOpenClassrooms();
  renderBtsSio();
  renderVeille();
  renderPatrimoine();

  // Year
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Lien mail : mailto fonctionne sur Windows, Mac et Linux (ouvre le client mail par défaut)
  const contactMailBtn = document.getElementById('contact-mail-btn');
  if (contactMailBtn && CONTACT_EMAIL) {
    const subject = encodeURIComponent(CONTACT_SUBJECT || 'Contact depuis portfolio BTS SIO');
    contactMailBtn.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject;
  }
});