import React, { useState } from 'react'
import { projectsData } from '../data/projects'

const Projects = () => {
  const [showPdf, setShowPdf] = useState(false)

  const mainProjects = projectsData.filter(
    (project) => !project.title.startsWith('AP1')
  )
  const ap1Project = projectsData.find((project) =>
    project.title.startsWith('AP1')
  )

  return (
    <section
      id="section-projets"
      className="relative min-h-screen px-4 pt-28 pb-16 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full">
        {/* Projets */}
        <div className="mb-6 text-center animate-slide-in">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-2">
            Projets
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Projets techniques{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SISR
            </span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {mainProjects.map((project) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${project.color} p-[1px] shadow-xl shadow-blue-900/40`}
            >
              <div className="flex h-full flex-col justify-between rounded-3xl bg-black/80 p-5 backdrop-blur-xl">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  {project.title.startsWith('AP1') && (
                    <button
                      type="button"
                      onClick={() => setShowPdf(true)}
                      className="ml-2 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-1.5 text-xs text-gray-100 hover:bg-white/20 transition"
                      title="Afficher le sujet AP1 (PDF)"
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
                  )}
                </div>
                <p className="text-xs text-gray-200 mb-4">{project.desc}</p>
                <div className="mt-auto">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-300">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-gray-100 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Carte AP1 en pleine largeur pour éviter une ligne trop haute pour les autres projets */}
        {ap1Project && (
          <article
            className={`mt-6 group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${ap1Project.color} p-[1px] shadow-xl shadow-blue-900/40`}
          >
            <div className="flex h-full flex-col justify-between rounded-3xl bg-black/80 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-sm font-semibold text-white mb-2">
                  {ap1Project.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setShowPdf(true)}
                  className="ml-2 inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-1.5 text-xs text-gray-100 hover:bg-white/20 transition"
                  title="Afficher le sujet AP1 (PDF)"
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
              <p className="text-xs text-gray-200 mb-4">{ap1Project.desc}</p>
              <div className="mt-auto">
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-300">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {ap1Project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-gray-100 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Prévisualisation du PDF AP1 en petit écran (affichée uniquement quand on clique sur l'œil) */}
        {showPdf && (
          <div className="mt-10 max-w-3xl mx-auto animate-fade-in">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-gray-100">
                Détail du projet AP1 (PDF officiel)
              </h3>
              <button
                type="button"
                onClick={() => setShowPdf(false)}
                className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-200 bg-white/5 hover:bg-white/15 transition"
              >
                Fermer
              </button>
            </div>
            <p className="mb-4 text-xs text-gray-300">
              Visualisation en lecture seule du sujet&nbsp;: «&nbsp;2025 BTS SIO PLC - AP1 - SP0 - Architecture
              de prototypage pour le site du BTS réalisé par les SLAM&nbsp;».
            </p>
            <div className="w-full h-80 overflow-hidden rounded-2xl border border-white/10 bg-black/60">
              <iframe
                src="/ap1-bts-sio-plc-ap1-sp0.pdf"
                title="AP1 - Architecture de prototypage BTS SIO"
                className="w-full h-full"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
