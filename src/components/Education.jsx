import React, { useState } from 'react'

const CTA_STYLES = {
  blue: 'border-blue-400/60 bg-blue-500/10 text-blue-200 hover:bg-blue-500/20',
  indigo: 'border-indigo-400/60 bg-indigo-500/10 text-indigo-200 hover:bg-indigo-500/20',
  emerald: 'border-emerald-400/60 bg-emerald-500/10 text-emerald-200 hover:bg-emerald-500/20',
  purple: 'border-purple-400/60 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20',
  rose: 'border-rose-400/60 bg-rose-500/10 text-rose-200 hover:bg-rose-500/20',
}

const formations = [
  {
    title: 'BTS SIO SISR',
    subtitle: 'Lycée Paul-Louis Courier, Tours — 2025–2026',
    gradient: 'from-blue-600 to-cyan-600',
    shadow: 'shadow-blue-900/40',
    cta: {
      type: 'link',
      label: 'En savoir plus sur le BTS SIO',
      href: 'https://nizar-it.github.io/formation/',
      color: 'blue',
    },
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
    certificate: {
      label: 'Voir le certificat EBIOS',
      href: '/certif/EBIOS.pdf',
      color: 'purple',
    },
  },
  {
    title: 'MOOC ANSSI — Cybersécurité',
    subtitle: 'Lycée Paul-Louis Courier, Tours — 2025',
    gradient: 'from-green-600 to-emerald-600',
    shadow: 'shadow-emerald-900/40',
    certificate: {
      label: 'Voir l’attestation ANSSI',
      href: '/certif/MOOC.jpg',
      color: 'emerald',
    },
  },
  {
    title: 'OpenClassrooms',
    subtitle: 'Mes certifications sur OpenClassrooms',
    gradient: 'from-sky-500 to-indigo-600',
    shadow: 'shadow-sky-900/40',
    cta: {
      type: 'action',
      label: 'Voir mes cours OpenClassrooms',
      color: 'indigo',
    },
  },
  {
    title: 'GIP Pix - PIX',
    subtitle: 'Lycée Henri Becquerel, Tours — 2025',
    gradient: 'from-fuchsia-500 to-rose-600',
    shadow: 'shadow-rose-900/40',
    certificate: {
      label: 'Voir le certificat PIX',
      href: '/certif/PIX.jpg',
      color: 'rose',
    },
  },
  {
    title: 'SST',
    subtitle: 'Lycée Henri Becquerel, Tours — 2024–2025',
    gradient: 'from-red-500 to-orange-600',
    shadow: 'shadow-red-900/40',
  },
]

const Education = ({ setActiveSection }) => {
  const [showCertModal, setShowCertModal] = useState(false)
  const [activeCert, setActiveCert] = useState(null)

  const openCertificate = (formation) => {
    if (!formation.certificate) return
    setActiveCert({
      title: formation.title,
      subtitle: formation.subtitle,
      ...formation.certificate,
    })
    setShowCertModal(true)
  }

  const isPdf = activeCert?.href?.toLowerCase().endsWith('.pdf')

  return (
    <section id="formations" className="relative min-h-screen px-4 pt-28 pb-16 flex items-center">
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-8 text-center animate-slide-in">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-2">
            Mes Formations
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">Parcours de formation</h2>
          <p className="mt-3 text-sm text-gray-300">
            Un parcours orienté réseaux, systèmes et cybersécurité, avec des formations complémentaires.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {formations.map((formation) => (
            <div
              key={formation.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${formation.gradient} p-[1px] shadow-lg ${formation.shadow}`}
            >
              <div className="rounded-3xl bg-black/80 px-5 py-4 flex flex-col gap-2">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-1">{formation.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-300">{formation.subtitle}</p>
                </div>
                {(formation.cta || formation.certificate) && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {formation.cta &&
                      (formation.cta.type === 'link' ? (
                        <a
                          href={formation.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold transition ${
                            CTA_STYLES[formation.cta.color] || CTA_STYLES.blue
                          }`}
                        >
                          {formation.cta.label}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setActiveSection && setActiveSection('openclassrooms')}
                          className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold transition ${
                            CTA_STYLES[formation.cta.color] || CTA_STYLES.indigo
                          }`}
                        >
                          {formation.cta.label}
                        </button>
                      ))}
                    {formation.certificate && (
                      <button
                        type="button"
                        onClick={() => openCertificate(formation)}
                        className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold transition ${
                          CTA_STYLES[formation.certificate.color] || CTA_STYLES.blue
                        }`}
                      >
                        {formation.certificate.label}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {showCertModal && activeCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
            <div className="relative w-full max-w-4xl mx-auto animate-fade-in">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-100">
                    {activeCert.title} — Certificat
                  </h3>
                  <p className="text-xs text-gray-300">{activeCert.subtitle}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowCertModal(false)}
                  className="text-xs px-2 py-1 rounded-full border border-white/20 text-gray-200 bg-white/5 hover:bg-white/15 transition"
                >
                  Fermer
                </button>
              </div>
              <p className="mb-4 text-xs text-gray-300">
                Visualisation en lecture seule de la certification&nbsp;: {activeCert.label}.
              </p>
              <div className="w-full h-[70vh] overflow-hidden rounded-2xl border border-white/10 bg-black/60 flex items-center justify-center">
                {isPdf ? (
                  <object
                    data={activeCert.href}
                    type="application/pdf"
                    width="100%"
                    height="100%"
                    className="rounded-2xl"
                  >
                    <p className="p-4 text-center text-gray-300">
                      Votre navigateur ne peut pas afficher ce PDF.
                      Vous pouvez le télécharger en cliquant sur ce lien :
                      <a
                        href={activeCert.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-blue-400 hover:underline"
                      >
                        Télécharger le certificat
                      </a>
                    </p>
                  </object>
                ) : (
                  <img
                    src={activeCert.href}
                    alt={activeCert.label}
                    className="max-h-full max-w-full object-contain rounded-2xl"
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Education