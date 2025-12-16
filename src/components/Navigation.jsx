import React from 'react'

const Navigation = ({ activeSection, setActiveSection }) => {
  const items = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'projets', label: 'Projets' },
    { id: 'formations', label: 'Formations' },
    { id: 'compétences', label: 'skills' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-4 pt-4">
        <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 backdrop-blur-xl shadow-lg shadow-blue-500/20 border border-white/10">
          <div className="text-sm sm:text-base font-semibold tracking-wide text-blue-400 uppercase">
            Étudiant BTS SIO SISR
          </div>
          <nav className="hidden md:flex gap-2">
            {items.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-sm transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-blue-500 text-white shadow-md shadow-blue-500/40'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navigation