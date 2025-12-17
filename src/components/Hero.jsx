// Hero.jsx

import React from 'react'

const Hero = ({ onGoProjects, onGoSkills }) => {
  return (
    // J'ai ajouté l'ID ici
    <section id="accueil" className="relative flex min-h-screen items-center justify-center px-4 pt-28 pb-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[3fr,2fr] items-center">
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
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-blue-900/40 backdrop-blur-xl transform-gpu perspective-1000 rotate-y-[-8deg]">
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