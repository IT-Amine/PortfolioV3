// ============================================
// DONNÉES
// ============================================

const projectsData = [
  {
    title: 'Migration Système – Gestion des utilisateurs',
    desc: 'Migration vers un nouveau système de gestion des utilisateurs, avec planification et déploiement sans interruption de service.',
    tech: ['Windows Server', 'AD', 'Migration'],
    color: 'from-blue-600 to-blue-800',
  },
  {
    title: 'Serveur RAID',
    desc: 'Configuration d\'un serveur RAID pour assurer la redondance et la sécurité des données.',
    tech: ['RAID', 'Stockage', 'Sécurité'],
    color: 'from-purple-600 to-purple-800',
  },
  {
    title: 'Politique de Sauvegarde',
    desc: 'Mise en place d\'une stratégie de sauvegarde automatique des données critiques.',
    tech: ['Sauvegarde', 'Automatisation'],
    color: 'from-emerald-600 to-green-700',
  },
  {
    title: 'Portfolio',
    desc: 'Conception et développement de ce portfolio 3D interactif en React (Vite + Tailwind), déployé sur Vercel.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    color: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Windows Server 2019',
    desc: 'Déploiement et configuration complète d\'un environnement Windows Server 2019 incluant la gestion centralisée des services réseau (DNS, DHCP) et l\'administration des utilisateurs via Active Directory Domain Services',
    tech: ['Active Directory', 'Windows Server 2019', 'DNS', 'DHCP', 'AD DS', 'GPO'],
    color: 'from-red-500 to-indigo-600',
  },
  {
    title: 'Proxmox VE',
    desc: 'Mise en œuvre d\'une infrastructure de virtualisation hautement disponible avec Proxmox VE pour l\'hébergement et la gestion de machines virtuelles et conteneurs LXC en environnement de production',
    tech: ['Proxmox', 'Virtualisation', 'KVM', 'LXC', 'ZFS', 'Clustering'],
    color: 'from-orange-500 to-red-600',
  },
  {
    title: 'AP1 – Architecture de prototypage BTS SIO (Infra & Tickets)',
    desc: 'Projet complet couvrant la maquette réseau du site BTS SIO, le déploiement d\'un serveur Web/FTP et d\'un outil de tickets d\'incidents, la mise en production sur NUTANIX et l\'automatisation des sauvegardes vers un NAS avec transferts sécurisés (SFTP/FTPS).',
    tech: [
      'Cisco Packet Tracer',
      'VirtualBox',
      'Serveur Web / FTP',
      'NUTANIX (hyperviseur type 1)',
      'Outil de gestion de tickets',
      'NAS',
      'Sauvegardes automatisées',
      'SFTP / FTPS',
    ],
    color: 'from-sky-600 to-indigo-700',
  },
];

const skillsData = [
  { name: 'Administration Serveurs', level: 90, color: 'from-blue-500 to-cyan-500', icon: '🖥️' },
  { name: 'Réseaux & Infrastructure', level: 85, color: 'from-purple-500 to-pink-500', icon: '🌐' },
  { name: 'Cybersécurité', level: 80, color: 'from-red-500 to-orange-500', icon: '🛡️' },
  { name: 'Scripting (PowerShell, Bash)', level: 75, color: 'from-green-500 to-emerald-500', icon: '💻' },
  { name: 'Active Directory & GPO', level: 70, color: 'from-indigo-500 to-blue-600', icon: '📋' },
  { name: 'Sauvegarde & PRA', level: 60, color: 'from-purple-500 to-pink-600', icon: '💾' },
  { name: 'Supervision (Zabbix, Nagios)', level: 55, color: 'from-green-500 to-emerald-600', icon: '📊' },
  { name: 'VPN & Accès Distant', level: 65, color: 'from-cyan-500 to-teal-600', icon: '🔐' },
  { name: 'Ansible & Automatisation', level: 50, color: 'from-red-500 to-orange-600', icon: '⚙️' },
  { name: 'Ticketing (GLPI, ServiceNow)', level: 55, color: 'from-amber-500 to-yellow-600', icon: '🎫' },
  { name: 'Protocoles Réseau (OSPF, BGP)', level: 60, color: 'from-violet-500 to-purple-600', icon: '📡' },
  { name: 'Stockage NAS', level: 55, color: 'from-slate-500 to-gray-600', icon: '💿' },
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
    image: 'public/TCP:IP.png',
    tags: ['Réseaux', 'TCP/IP', 'Protocoles'],
  },
  {
    title: 'Windows Server',
    description: 'Administration et gestion de serveurs Windows Server en environnement professionnel.',
    image: 'public/Windows Server.png',
    tags: ['Windows Server', 'Administration', 'Serveurs'],
  },
  {
    title: 'Gérer Git & GitHub',
    description: 'Contrôle de version et collaboration avec Git et GitHub sur des projets informatiques.',
    image: 'public/gérer du code avec git & Github.jpg',
    tags: ['Git', 'GitHub', 'Version Control'],
  },
  {
    title: 'Déployez Windows 10',
    description: 'Déploiement et configuration de Windows 10 en contexte entreprise.',
    image: 'public/déployez Win10.png',
    tags: ['Windows 10', 'Déploiement', 'Entreprise'],
  },
  {
    title: 'Montez un PC',
    description: 'Assemblage et configuration complète d\'un ordinateur personnel.',
    image: 'public/Montez un PC.png',
    tags: ['Hardware', 'Assemblage', 'PC'],
  },
  {
    title: 'Utiliser ChatGPT',
    description: 'Utilisation de l\'IA conversationnelle pour la productivité et l\'assistance technique.',
    image: 'public/utiliser ChatGPT.png',
    tags: ['IA', 'ChatGPT', 'Productivité'],
  },
  {
    title: 'Centralisez et sécurisez avec Active Directory',
    description: 'Administration et configuration d\'Active Directory pour centraliser et sécuriser la gestion des utilisateurs et ressources.',
    image: 'public/Centralisez et sécuriser avec Active Directory.jpg',
    tags: ['Active Directory', 'Windows Server', 'Sécurité'],
  },
  {
    title: 'Initiez-vous à Linux',
    description: 'Découverte et apprentissage de Linux pour l\'administration système et les serveurs.',
    image: 'public/initiez-vous à linux.jpg',
    tags: ['Linux', 'Administration', 'Systèmes'],
  },
  {
    title: 'Optimisez avec des Conteneurs Docker',
    description: 'Maîtrise de Docker pour conteneuriser et déployer des applications de manière efficace.',
    image: 'public/Optimisez avec des Conteneur Docker.jpg',
    tags: ['Docker', 'Conteneurs', 'DevOps'],
  },
  {
    title: 'Simulez des schémas avec Cisco Packet Tracer',
    description: 'Conception et simulation de réseaux avec Cisco Packet Tracer pour la configuration et le dépannage.',
    image: 'public/cisco.jpg',
    tags: ['Réseaux', 'Cisco', 'Simulation'],
  },
  {
    title: 'Virtualisez vos environnements de travail',
    description: 'Mise en place d\'environnements virtuels pour tester et déployer des infrastructures.',
    image: 'public/virtualiser vos environnement travail.jpg',
    tags: ['Virtualisation', 'Infrastructure', 'VMware'],
  },
];

// ============================================
// ÉTAT GLOBAL
// ============================================

let activeSection = 'accueil';

// ============================================
// ROUTING & NAVIGATION
// ============================================

function getDefaultSection() {
  const hash = window.location.hash.slice(1);
  const sections = ['accueil', 'projets', 'formations', 'compétences', 'contact', 'openclassrooms'];
  const decodedHash = decodeURIComponent(hash);
  return sections.includes(decodedHash) ? decodedHash : 'accueil';
}

function goToSection(sectionId) {
  activeSection = sectionId;
  window.location.hash = '#' + sectionId;
  updateActiveSection();
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
    projets: {
      title: 'Projets SISR - Portfolio Amine IT',
      description: 'Explorez mes projets techniques en infrastructure, virtualisation, réseau et sécurité réalisés dans le cadre de ma formation BTS SIO SISR.',
    },
    formations: {
      title: 'Mon Parcours - Portfolio Amine IT',
      description: 'Mon parcours de formation, du Bac Pro Systèmes Numériques au BTS SIO SISR, en passant par des certifications OpenClassrooms et des MOOCs en cybersécurité.',
    },
    compétences: {
      title: 'Compétences Techniques - Portfolio Amine IT',
      description: 'Mes compétences en administration système (Windows Server, Debian), virtualisation (Proxmox, Docker), réseau (OPNsense, VLAN) et automatisation.',
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
  return colorMap[colorName] || '#3b82f6';
}

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const mainProjects = projectsData.filter(p => !p.title.startsWith('AP1'));
  const ap1Project = projectsData.find(p => p.title.startsWith('AP1'));

  grid.innerHTML = mainProjects.map(project => {
    const [start, end] = project.color.replace('from-', '').replace('to-', '').split(' to-');
    const startColor = getColorValue(start);
    const endColor = getColorValue(end);
    return `
      <article class="project-card" style="background: linear-gradient(to bottom right, ${startColor}, ${endColor});">
        <div class="project-card-inner">
          <div>
            <h3 class="project-card-title">${project.title}</h3>
            <p class="project-card-desc">${project.desc}</p>
          </div>
          <div class="project-card-tech">
            <p class="project-card-tech-label">Technologies</p>
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
      const [start, end] = ap1Project.color.replace('from-', '').replace('to-', '').split(' to-');
      const startColor = getColorValue(start);
      const endColor = getColorValue(end);
      ap1El.style.background = `linear-gradient(to bottom right, ${startColor}, ${endColor})`;
      ap1El.innerHTML = `
        <div class="project-card-inner">
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 0.5rem;">
            <h3 class="project-card-title">${ap1Project.title}</h3>
            <button type="button" onclick="openPdfModal()" class="project-card-view-btn" title="Afficher le sujet AP1 (PDF)">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="height: 0.875rem; width: 0.875rem;">
                <path d="M1.5 12s3.5-6.5 10.5-6.5S22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
          </div>
          <p class="project-card-desc">${ap1Project.desc}</p>
          <div class="project-card-tech">
            <p class="project-card-tech-label">Technologies</p>
            <div class="project-card-tech-list">
              ${ap1Project.tech.map(t => `<span class="project-tech-tag">${t}</span>`).join('')}
            </div>
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
    const [start, end] = skill.color.replace('from-', '').replace('to-', '').split(' to-');
    const startColor = getColorValue(start);
    const endColor = getColorValue(end);
    return `
      <div class="skill-card" style="background: linear-gradient(to bottom right, ${startColor}, ${endColor});">
        <div class="skill-card-inner">
          <div class="skill-header">
            <div class="skill-icon">${skill.icon}</div>
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
    const [start, end] = formation.gradient.replace('from-', '').replace('to-', '').split(' to-');
    const startColor = getColorValue(start);
    const endColor = getColorValue(end);
    return `
      <div class="formation-card" style="background: linear-gradient(to bottom right, ${startColor}, ${endColor});">
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

  // Navigation buttons
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      goToSection(btn.dataset.section);
    });
  });

  // Render data
  renderProjects();
  renderSkills();
  renderFormations();
  renderOpenClassrooms();

  // Year
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});
