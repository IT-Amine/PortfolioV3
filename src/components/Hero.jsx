import React, { useState, useEffect } from 'react' // 1. Importez useEffect
import Spline from '@splinetool/react-spline'

const Hero = ({ onGoProjects, onGoSkills }) => {
  const [splineError, setSplineError] = useState(false)
  
  const handleSplineError = () => {
    console.error("Erreur lors du chargement de la scène Spline");
    setSplineError(true);
  }

  // Nettoyage spécifique des liens Spline (watermark)
  useEffect(() => {
    // Cette fonction ne cible que les liens (balises <a>) qui ont un href contenant "spline.design"
    const removeSplineBranding = () => {
      // Utilise querySelectorAll pour trouver TOUTES les occurrences
      const splineLinks = document.querySelectorAll(
        '#spline-robot-container a[href*=\"spline.design\"]'
      )

      // Boucle sur chaque lien trouvé et le supprime
      splineLinks.forEach((link) => {
        console.log('Watermark Spline trouvé et supprimé :', link)
        link.remove()
      })
    }

    // On donne un peu plus de temps à Spline pour s'initialiser et créer son watermark
    const timerId = setTimeout(removeSplineBranding, 3000) // 3 secondes

    // On vérifie aussi périodiquement, au cas où il apparaît plus tard
    const intervalId = setInterval(removeSplineBranding, 2000) // Toutes les 2 secondes

    // Nettoyage des timers pour éviter les fuites de mémoire
    return () => {
      clearTimeout(timerId)
      clearInterval(intervalId)
    }
  }, []) // [] assure que l'effet ne s'exécute qu'au montage du composant

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16 overflow-hidden"
    >
      {/* Fond 3D Spline en arrière-plan */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        {!splineError ? (
          <Spline 
            scene="https://prod.spline.design/Klpx81nknK2Jw6oc/scene.splinecode"
            onError={handleSplineError}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-b from-blue-900/20 to-indigo-900/20"></div>
        )}
      </div>

      {/* Légère surcouche sombre pour garder la lisibilité du texte */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Robot animé en bas à droite */}
      <div id="spline-robot-container" className="absolute bottom-8 right-8 w-32 h-32 md:w-40 md:h-40 z-20 pointer-events-auto">
        {!splineError ? (
          <Spline 
            scene="https://prod.spline.design/Klpx81nknK2Jw6oc/scene.splinecode"
            onError={handleSplineError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-blue-500/10 rounded-full border border-blue-400/30">
            <div className="text-blue-300 text-xs text-center">
              Robot<br/>indisponible
            </div>
          </div>
        )}
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 md:grid-cols-[3fr,2fr] items-center">
        {/* Bloc texte principal */}
        <div className="space-y-6 animate-slide-in">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
            BTS SIO • Option SISR
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Étudiant en{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
              Administration Réseaux & Systèmes
            </span>
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-gray-300">
            En formation pour devenir administrateur réseau et systèmes. Mise en place
            d&apos;infrastructures sécurisées, virtualisation, segmentation réseau et
            automatisation des tâches d&apos;exploitation.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onGoProjects}
              className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 hover:bg-blue-400 transition"
            >
              Voir mes projets
            </button>
            <button
              onClick={onGoSkills}
              className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-200 hover:bg-white/10 transition"
            >
              Compétences techniques
            </button>
            <a
              href="https://cvdesignr.com/p/6808a706550eb?hl=fr_FR"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-blue-400/60 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-200 hover:bg-blue-500/20 transition"
            >
              Mon CV
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
            <span className="uppercase tracking-[0.25em] text-gray-500">
              STACK
            </span>
            <span>Proxmox • OPNsense • Debian • Windows Server • Docker</span>
          </div>
        </div>

        {/* Carte 3D style dashboard SISR */}
        <div className="relative animate-float">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-tr from-blue-500/20 via-cyan-400/10 to-purple-500/20 blur-3xl" />
          <div className="relative rounded-3xl border border-white/10 bg-black/40 p-5 shadow-2xl shadow-blue-900/40 backdrop-blur-xl transform-gpu perspective-1000 rotate-y-[-8deg]">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
              Aperçu de mes tâches SISR
            </h2>
            <div className="space-y-3 text-xs">
              <div className="rounded-2xl bg-black/40 p-3 border border-blue-500/30">
                <p className="font-semibold text-blue-200 mb-1">
                  Virtualisation & Infrastructure
                </p>
                <p className="text-gray-300">
                  Proxmox VE, VMs, LXC, stockage ZFS, accès distant sécurisé via VPN.
                </p>
              </div>
              <div className="rounded-2xl bg-black/40 p-3 border border-cyan-500/30">
                <p className="font-semibold text-cyan-200 mb-1">
                  Réseaux & Sécurité
                </p>
                <p className="text-gray-300">
                  OPNsense, VLANs, DMZ, filtrage DNS (AdGuard), règles firewall avancées.
                </p>
              </div>
              <div className="rounded-2xl bg-black/40 p-3 border border-indigo-500/30">
                <p className="font-semibold text-indigo-200 mb-1">
                  Services & Conteneurs
                </p>
                <p className="text-gray-300">
                  Docker, Portainer, Nginx, certificats SSL/TLS, services web sécurisés.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero