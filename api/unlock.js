/**
 * Point d'entrée API Vercel pour déverrouiller l'accès recruteur.
 * Cette version (Pro+) renvoie tous les certificats (techniques + OpenClassrooms)
 * avec leurs noms de fichiers obfusqués.
 */
export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: "Méthode non autorisée" });
  }

  const { code } = req.body;
  const SECRET_CODE = process.env.RECRUITER_CODE;

  if (!SECRET_CODE) {
    return res.status(500).json({ success: false, message: "Configuration serveur incomplète." });
  }

  if (code === SECRET_CODE) {
    return res.status(200).json({
      success: true,
      cvLink: process.env.CV_LINK || "https://cvdesignr.com/p/6808a706550eb?hl=fr_FR",
      certifications: [
        { id: 'pix', file: process.env.CERT_PIX_PATH || null },
        { id: 'mooc', file: process.env.CERT_MOOC_PATH || null },
        { id: 'ebios', file: process.env.CERT_EBIOS_PATH || null }
      ],
      openclassrooms: [
        { title: 'Active Directory', image: '/public/openclassroom/AD_z9v2l8.jpg' },
        { title: 'Docker', image: '/public/openclassroom/Docker_m5n1x4.jpg' },
        { title: 'TCP/IP', image: '/public/openclassroom/TCPIP_v8l2n3.png' },
        { title: 'Windows Server', image: '/public/openclassroom/WinServer_k9v1m4.png' },
        { title: 'Cisco Networking', image: '/public/openclassroom/Cisco_x2l9n3.jpg' },
        { title: 'Déploiement Win10', image: '/public/openclassroom/Win10_v5n1m8.png' },
        { title: 'Git & GitHub', image: '/public/openclassroom/GitGithub_z9v3l8.jpg' },
        { title: 'Git Fundamentals', image: '/public/openclassroom/Git_k2n5m4.png' },
        { title: 'Linux Administration', image: '/public/openclassroom/Linux_v8l1n3.jpg' },
        { title: 'Hardware PC', image: '/public/openclassroom/PC_x5v9m4.png' },
        { title: 'ChatGPT', image: '/public/openclassroom/ChatGPT_k8v2l9.png' },
        { title: 'Virtualisation Environnement', image: '/public/openclassroom/Virtualisation_m9n1x4.jpg' }
      ]
    });
  } else {
    return res.status(401).json({ success: false, message: "Code invalide" });
  }
}
