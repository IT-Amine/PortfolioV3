// OpenClassrooms.jsx

import React, { useState } from 'react'

const openclassroomsCerts = [
  {
    title: 'TCP/IP',
    description:
      'Maîtrise des protocoles TCP/IP et des bases des réseaux informatiques.',
    image: '/TCP:IP.png',
    tags: ['Réseaux', 'TCP/IP', 'Protocoles'],
  },
  {
    title: 'Windows Server',
    description:
      'Administration et gestion de serveurs Windows Server en environnement professionnel.',
    image: '/Windows Server.png',
    tags: ['Windows Server', 'Administration', 'Serveurs'],
  },
  {
    title: 'Gérer Git & GitHub',
    description:
      'Contrôle de version et collaboration avec Git et GitHub sur des projets informatiques.',
    image: '/Gérer Git & GitHub.png',
    tags: ['Git', 'GitHub', 'Version Control'],
  },
  {
    title: 'Déployez Windows 10',
    description:
      'Déploiement et configuration de Windows 10 en contexte entreprise.',
    image: '/déployez Win10.png',
    tags: ['Windows 10', 'Déploiement', 'Entreprise'],
  },
  {
    title: 'Montez un PC',
    description:
      "Assemblage et configuration complète d'un ordinateur personnel.",
    image: '/Montez un PC.png',
    tags: ['Hardware', 'Assemblage', 'PC'],
  },
  {
    title: 'Utiliser ChatGPT',
    description:
      "Utilisation de l'IA conversationnelle pour la productivité et l'assistance technique.",
    image: '/utiliser ChatGPT.png',
    tags: ['IA', 'ChatGPT', 'Productivité'],
  },
]

const OpenClassrooms = () => {
  const [activeCert, setActiveCert] = useState(null)

  return (
    // J'ai ajouté l'ID ici
    <section id="openclassrooms" className="relative min-h-screen px-4 pt-28 pb-16 flex items-center">
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-8 text-center animate-slide-in">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-2">
            Certifications OpenClassrooms
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Parcours en ligne orienté{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              infrastructure
            </span>
          </h2>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto">
            Sélection de formations OpenClassrooms validées autour des réseaux,
            systèmes, automatisation et outils modernes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {openclassroomsCerts.map((cert) => (
            <article
              key={cert.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-[1px] shadow-xl shadow-blue-900/40"
            >
              <div className="rounded-3xl bg-black/85 h-full flex flex-col overflow-hidden">
                <div
                  className="relative h-32 w-full overflow-hidden cursor-pointer"
                  onClick={() => setActiveCert(cert)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute top-2 left-2 rounded-full bg-emerald-500/90 px-2 py-0.5 text-[10px] font-semibold text-white">
                    Certifié
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="absolute top-2 right-2 inline-flex items-center justify-center rounded-full bg-black/60 border border-white/40 p-1.5 text-[10px] text-gray-100 hover:bg-black/80 transition"
                    title="Voir la certification"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="h-3.5 w-3.5"
                    >
                      <path d="M1.5 12s3.5-6.5 10.5-6.5S22.5 12 22.5 12 19 18.5 12 18.5 1.5 12 1.5 12Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-3 p-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-gray-200">{cert.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-gray-100 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto text-center text-xs text-gray-400">
          Ces certifications complètent ma formation BTS SIO SISR en renforçant ma
          pratique des réseaux, des systèmes Microsoft et des outils de
          productivité modernes.
        </div>

        {activeCert && (
          <div
            className="fixed inset-0 z-30 flex items-center justify-center bg-black/70"
            onClick={() => setActiveCert(null)}
          >
            <div
              className="relative w-[90vw] max-w-xl rounded-3xl border border-white/10 bg-black/90 p-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="absolute right-3 top-3 rounded-full border border-white/30 bg-white/10 px-2 py-0.5 text-[11px] text-gray-100 hover:bg-white/20 transition"
              >
                Fermer
              </button>
              <div className="overflow-hidden rounded-2xl mb-3">
                <img
                  src={activeCert.image}
                  alt={activeCert.title}
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                {activeCert.title}
              </h3>
              <p className="text-xs text-gray-300 mb-2">
                {activeCert.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {activeCert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] text-gray-100 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default OpenClassrooms