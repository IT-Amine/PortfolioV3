// Petit utilitaire générique pour le système de particules du fond
// (séparé ici pour pouvoir le réutiliser plus tard ou le tester plus facilement)

/**
 * Initialise un tableau de particules aléatoires pour un canvas donné.
 * @param {number} count - Nombre de particules à générer
 * @param {number} width - Largeur du canvas
 * @param {number} height - Hauteur du canvas
 * @returns {Array<{x:number,y:number,vx:number,vy:number,size:number}>}
 */
export function initParticles(count, width, height) {
  const particles = []
  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 2 + 1,
    })
  }
  return particles
}

