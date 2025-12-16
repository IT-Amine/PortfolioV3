import React, { useState, useEffect } from 'react';
import ParticleBackground from './ParticleBackground'
import Navigation from './Navigation'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Education from './Education'
import OpenClassrooms from './OpenClassrooms'

const defaultSection = () => {
  const hash = window.location.hash.replace('#', '');
  const SECTIONS = [
    'accueil', 'projets', 'formations', 'compétences', 'contact', 'openclassrooms'
  ];
  return SECTIONS.includes(hash) ? hash : 'accueil';
}

const Portfolio3D = () => {
  const [activeSection, setActiveSection] = useState(defaultSection());

  // Synchronise l'URL au changement de section
useEffect(() => {
  window.location.hash = '#' + activeSection;
}, [activeSection]);

// Gère le cas où on clique "Retour"/"Suivant" de l'historique et rafraîchi le state
useEffect(() => {
  const onHashChange = () => {
    const hash = window.location.hash.replace('#', '');
    setActiveSection(hash || 'accueil');
  };
  window.addEventListener('hashchange', onHashChange);
  return () => window.removeEventListener('hashchange', onHashChange);
}, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black text-white">
      <ParticleBackground />
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
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
  )
}

export default Portfolio3D