// Portfolio3D.jsx (VERSION FINALE CORRIGÉE)
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
  const hash = window.location.hash.slice(1); // slice(1) est plus propre
  const SECTIONS = [
    'accueil', 'projets', 'formations', 'compétences', 'contact', 'openclassrooms'
  ];
  // On décode le hash au cas où l'URL serait partagée avec des caractères encodés
  const decodedHash = decodeURIComponent(hash);
  return SECTIONS.includes(decodedHash) ? decodedHash : 'accueil';
}

const Portfolio3D = () => {
  const [activeSection, setActiveSection] = useState(defaultSection());
  // Ce flag nous permettra de savoir si le changement de hash vient de notre code ou de l'utilisateur
  const [isInternalHashChange, setIsInternalHashChange] = useState(false);

  // === SOLUTION DE DÉFILEMENT ROBUSTE ===
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById(activeSection);
      if (element) {
        // On remonte en haut de la page, car les sections se remplacent
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [activeSection]);

  // === SOLUTION DE SYNCHRONISATION URL SANS CONFLIT ===
  useEffect(() => {
    // On indique que le changement de hash qui va suivre est déclenché par notre code
    setIsInternalHashChange(true);
    window.location.hash = '#' + activeSection;
  }, [activeSection]);

  // === GESTION DU CHANGEMENT D'URL PAR L'UTILISATEUR (boutons retour/avant) ===
  useEffect(() => {
    const onHashChange = () => {
      // Si le changement vient de notre propre code, on l'ignore pour éviter une boucle
      if (isInternalHashChange) {
        setIsInternalHashChange(false); // On réinitialise le flag pour la prochaine fois
        return;
      }

      // Sinon, c'est une action utilisateur (bouton retour/avant, ou modification manuelle de l'URL)
      const hash = window.location.hash.slice(1);
      // On décode l'URL pour retrouver 'compétences' à partir de 'comp%C3%A9tences'
      const decodedHash = decodeURIComponent(hash);
      setActiveSection(decodedHash || 'accueil');
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [isInternalHashChange]); // On dépend du flag pour savoir quand réagir

  return (
    <div className="relative w-full min-h-screen bg-black text-white">
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