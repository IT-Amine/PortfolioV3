import React from 'react'
import { skillsData } from '../data/skills'

const Skills = () => {
  return (
    <section
      id="section-competences"
      className="relative min-h-screen px-4 pt-28 pb-16 flex items-center"
    >
      <div className="mx-auto max-w-6xl w-full">
        <div className="mb-8 text-center animate-slide-in">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400 mb-2">
            Compétences techniques
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Ce que je sais faire en{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              SISR
            </span>
          </h2>
          <p className="mt-3 text-sm text-gray-300 max-w-2xl mx-auto">
            Administration de serveurs, réseaux, sécurité et automatisation pour des
            infrastructures fiables et sécurisées.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {skillsData.map((skill) => (
            <div
              key={skill.name}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${skill.color} p-[1px] shadow-lg shadow-blue-900/30`}
            >
              <div className="flex h-full flex-col justify-between rounded-3xl bg-black/70 p-5 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/60 border border-white/10">
                    <skill.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-gray-300">
                      Niveau : {skill.level}%
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="mb-1 flex justify-between text-[11px] text-gray-300">
                    <span>Progression</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-white/80 transition-all duration-700 group-hover:bg-white"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
