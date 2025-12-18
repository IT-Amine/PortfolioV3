import React from 'react'
import { Server, Shield, FileText, Network, Search } from 'lucide-react'

const Contact = () => {
  const missionsRecherchees = [
    { icon: Server, label: 'Stage BTS SISR', detail: '6 semaines' },
    { icon: Network, label: 'Projets infrastructure réseau', detail: 'Configuration & optimisation' },
    { icon: Shield, label: 'Administration systèmes', detail: 'Linux/Windows' },
    { icon: Search, label: 'Missions cybersécurité', detail: 'Audit & sécurisation' },
  ]

  const competencesApportees = [
    { icon: Server, title: 'Configuration serveurs & virtualisation', desc: 'Proxmox, VMware, Windows Server' },
    { icon: Network, title: 'Mise en place solutions réseau', desc: 'VLAN, Routage, Firewall' },
    { icon: Shield, title: 'Audit sécurité', desc: 'Analyse vulnérabilités & hardening' },
    { icon: FileText, title: 'Documentation technique', desc: 'Procédures & rapports détaillés' },
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen px-4 pt-28 pb-16 flex items-center"
    >
      <div className="mx-auto max-w-5xl w-full">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-2">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Discutons ensemble sur le thème {' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              SISR
            </span>
          </h2>
          <p className="mb-8 text-sm text-gray-300">
            Disponible pour des stages ou projets orientés réseaux, systèmes et sécurité.
            N&apos;hésitez pas à me contacter pour échanger sur vos besoins.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            🎯 Missions recherchées
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {missionsRecherchees.map((mission, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 p-4 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 border border-blue-400/30">
                    <mission.icon className="h-6 w-6 text-blue-400" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-1">
                    {mission.label}
                  </h4>
                  <p className="text-xs text-gray-400">{mission.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">
            🔧 Ce que je peux apporter
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competencesApportees.map((comp, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/50 to-slate-800/50 p-5 hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 border border-cyan-400/30">
                    <comp.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      {comp.title}
                    </h4>
                    <p className="text-xs text-gray-400">{comp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

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

        <p className="text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Étudiant BTS SIO SISR — Portfolio 3D.
        </p>
      </div>
    </section>
  )
}

export default Contact