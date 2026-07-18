import React, { useState, useCallback, useEffect } from 'react'

const images = [
  { id: 1, src: '/gallery/1.jpg', alt: 'Manucure élégante' },
  { id: 2, src: '/gallery/2.jpg', alt: 'Brushing professionnel' },
  { id: 3, src: '/gallery/3.jpg', alt: 'Nail art créatif' },
  { id: 4, src: '/gallery/4.jpg', alt: 'Couleur et mèches' },
]

export default function Gallery() {
  const [index, setIndex] = useState(null)

  const open = useCallback((i) => setIndex(i), [])
  const close = useCallback(() => setIndex(null), [])

  const onKey = useCallback((e) => {
    if (index === null) return
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowRight') setIndex((v) => (v === null ? 0 : Math.min(images.length - 1, v + 1)))
    if (e.key === 'ArrowLeft') setIndex((v) => (v === null ? 0 : Math.max(0, v - 1)))
  }, [index, close])

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onKey])

  return (
    <section id="galerie" className="py-16 px-4 sm:px-6 lg:px-8 reveal">
      <div className="max-w-6xl mx-auto">
        <h2 className="calligraphic-title text-white mb-6">Galerie de <span className="text-gold">réalisations</span></h2>
        <p className="text-gray-300 mb-6">Un aperçu de nos prestations—cliquez pour agrandir.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button key={img.id} onClick={() => open(i)} className="overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-gold" aria-label={`Ouvrir image ${i + 1}`}>
              <img src={img.src} alt={img.alt} className="w-full h-44 object-cover transform hover:scale-105 transition-transform" />
            </button>
          ))}
        </div>

        {index !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4" role="dialog" aria-modal="true">
            <button onClick={close} className="absolute top-6 right-6 text-white text-2xl" aria-label="Fermer la vue agrandie">✕</button>
            <button onClick={() => setIndex((i) => Math.max(0, i - 1))} className="absolute left-6 text-white text-3xl" aria-label="Image précédente">‹</button>
            <img src={images[index].src} alt={images[index].alt} className="max-h-[80vh] max-w-full rounded-lg shadow-lg" />
            <button onClick={() => setIndex((i) => Math.min(images.length - 1, i + 1))} className="absolute right-6 text-white text-3xl" aria-label="Image suivante">›</button>
          </div>
        )}
      </div>
    </section>
  )
}
