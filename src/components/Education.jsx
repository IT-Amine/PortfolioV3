// Education.jsx

import React from 'react'

const Education = ({ setActiveSection }) => {
  return (
    // J'ai ajouté l'ID ici
    <section id="formations" className="relative min-h-screen px-4 pt-28 pb-16 flex items-center">
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-8 text-center animate-slide-in">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-2">
            Mes Formations
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Parcours de formation
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600 to-cyan-600 p-[1px] shadow-lg shadow-blue-900/40">
            <div className="rounded-3xl bg-black/80 px-5 py-4 flex flex-col gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                  BTS SIO SISR
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Lycée Paul-Louis Courier, Tours — 2025–2026
                </p>
              </div>
              <div className="mt-1">
                <a
                  href="https://nizar-it.github.io/formation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-blue-400/60 bg-blue-500/10 px-3 py-1 text-[11px] font-semibold text-blue-200 hover:bg-blue-500/20 transition"
                >
                  En savoir plus sur le BTS SIO
                </a>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-amber-500 to-orange-600 p-[1px] shadow-lg shadow-amber-900/40">
            <div className="rounded-3xl bg-black/80 px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                Bac Pro Systèmes Numériques
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Lycée Henri Becquerel, Tours — 2025 — Mention Bien
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-600 to-pink-600 p-[1px] shadow-lg shadow-purple-900/40">
            <div className="rounded-3xl bg-black/80 px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                Club EBIOS - MOOC
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Lycée Paul-Louis Courier, Tours — 2025
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-green-500 to-emerald-600 p-[1px] shadow-lg shadow-emerald-900/40">
            <div className="rounded-3xl bg-black/80 px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                MOOC ANSSI — Cybersécurité
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Lycée Paul-Louis Courier, Tours — 2025
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px] shadow-lg shadow-sky-900/40">
            <div className="rounded-3xl bg-black/80 px-5 py-4 flex flex-col gap-2">
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                  OpenClassrooms
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Mes certifications sur OpenClassrooms
                </p>
              </div>
              <div className="mt-1">
                <button
                  type="button"
                  onClick={() => setActiveSection && setActiveSection('openclassrooms')}
                  className="inline-flex items-center rounded-full border border-indigo-400/60 bg-indigo-500/10 px-3 py-1 text-[11px] font-semibold text-indigo-200 hover:bg-indigo-500/20 transition"
                >
                  Voir mes cours OpenClassrooms
                </button>
              </div>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-500 to-rose-600 p-[1px] shadow-lg shadow-rose-900/40">
            <div className="rounded-3xl bg-black/80 px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                GIP Pix - PIX
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Lycée Henri Becquerel, Tours — 2025
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-red-500 to-orange-600 p-[1px] shadow-lg shadow-red-900/40">
            <div className="rounded-3xl bg-black/80 px-5 py-4">
              <h3 className="text-sm sm:text-base font-semibold text-white mb-1">
                SST
              </h3>
              <p className="text-xs sm:text-sm text-gray-300">
                Lycée Henri Becquerel, Tours — 2024–2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education