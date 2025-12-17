import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 pt-28 pb-16 flex items-center"
    >
      <div className="mx-auto max-w-3xl w-full text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-2">
          Contact
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Discutons de votre{' '}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            infrastructure
          </span>
        </h2>
        <p className="mb-8 text-sm text-gray-300">
          Disponible pour des stages ou projets orientés réseaux, systèmes et sécurité.
          N&apos;hésitez pas à me contacter pour échanger sur vos besoins.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="mailto:kadaamine37@hotmail.com"
            className="rounded-full bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/40 hover:bg-blue-400 transition"
          >
            📧 Me contacter par mail
          </a>
          <a
            href="https://github.com/IT-Amine"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-200 hover:bg-white/10 transition"
          >
            💻 Voir mon GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kada-amine"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-blue-400/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-100 hover:bg-blue-500/20 transition"
          >
            💼 Profil LinkedIn
          </a>
        </div>

        <p className="text-xs text-gray-500">
          © {new Date().getFullYear()} Étudiant BTS SIO SISR — Portfolio 3D.
        </p>
      </div>
    </section>
  )
}

export default Contact
