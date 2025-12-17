// src/components/Portfolio3D.jsx

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // 1. Importez Helmet

import ParticleBackground from './ParticleBackground'
import Navigation from './Navigation'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Education from './Education'
import OpenClassrooms from './OpenClassrooms'

// 2. Créez un objet pour stocker les informations SEO de chaque section
const seoData = {
  accueil: {
    title: "Amine IT - Portfolio BTS SIO SISR | Administrateur Réseaux & Systèmes",
    description: "Portfolio d'Amine, étudiant en BTS SIO option SISR. Découvrez mes projets, compétences et formations en administration de réseaux, systèmes et cybersécurité."
  },
  projets: {
    title: "Projets SISR - Portfolio Amine IT",
    description: "Explorez mes projets techniques en infrastructure, virtualisation, réseau et sécurité réalisés dans le cadre de ma formation BTS SIO SISR."
  },
  formations: {
    title: "Mon Parcours - Portfolio Amine IT",
    description: "Mon parcours de formation, du Bac Pro Systèmes Numériques au BTS SIO SISR, en passant par des certifications OpenClassrooms et des MOOCs en cybersécurité."
  },
  compétences: {
    title: "Compétences Techniques - Portfolio Amine IT",
    description: "Mes compétences en administration système (Windows Server, Debian), virtualisation (Proxmox, Docker), réseau (OPNsense, VLAN) et automatisation."
  },
  contact: {
    title: "Me Contacter - Portfolio Amine IT",
    description: "Contactez-moi pour toute proposition de stage, de projet ou pour discuter d'opportunités en lien avec l'administration de systèmes et réseaux."
  },
  openclassrooms: {
    title: "Certifications OpenClassrooms - Portfolio Amine IT",
    description: "Mes certifications et parcours de formation sur OpenClassrooms, validant mes compétences en TCP/IP, Windows Server, Git et plus encore."
  }
};

const defaultSection = () => {
  const hash = window.location.hash.slice(1);
  const SECTIONS = [
    'accueil', 'projets', 'formations', 'compétences', 'contact', 'openclassrooms'
  ];
  const decodedHash = decodeURIComponent(hash);
  return SECTIONS.includes(decodedHash) ? decodedHash : 'accueil';
}

const Portfolio3D = () => {
  const [activeSection, setActiveSection] = useState(defaultSection());
  const [isInternalHashChange, setIsInternalHashChange] = useState(false);

  // 3. Utilisez un useEffect pour mettre à jour les balises meta
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById(activeSection);
      if (element) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [activeSection]);

  useEffect(() => {
    setIsInternalHashChange(true);
    window.location.hash = '#' + activeSection;
  }, [activeSection]);

  useEffect(() => {
    const onHashChange = () => {
      if (isInternalHashChange) {
        setIsInternalHashChange(false);
        return;
      }
      const hash = window.location.hash.slice(1);
      const decodedHash = decodeURIComponent(hash);
      setActiveSection(decodedHash || 'accueil');
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [isInternalHashChange]);

  // 4. Récupérez les données SEO pour la section active
  const currentSeo = seoData[activeSection];

  return (
    <>
      {/* 5. Ajoutez le composant Helmet avec les données dynamiques */}
      <Helmet>
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:type" content="website" />
        {/* Vous pouvez ajouter d'autres balises ici, comme og:image */}
      </Helmet>

      <div className="relative w-full min-h-screen bg-black text-white">
        <ParticleBackground />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        {/* Le reste de votre code reste inchangé... */}
        {activeSection === 'accueil' && (
          <Hero
            onGoProjects={() => setActiveSection('projets')}
            onGoSkills={() => setActiveSection('compétences')}
          />
        )}
        {activeSection === 'compétences' && <Skills />}
        {activeSection === 'formations' && (
          <Education setActiveSection={setActiveSection} />
        )}
        {activeSection === 'openclassrooms' && <OpenClassrooms />}
        {activeSection === 'projets' && <Projects />}
        {activeSection === 'contact' && <Contact />}
      </div>
    </>
  )
}

export default Portfolio3D