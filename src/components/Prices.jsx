import React from 'react'

const prices = {
  Onglerie: [
    { name: 'Pose Gel', price: '250 MAD' },
    { name: 'Vernis Semi-Permanent', price: '120 MAD' },
    { name: 'Nail Art (dessin simple)', price: '40-80 MAD' },
  ],
  Coiffure: [
    { name: 'Brushing / Séchoir', price: '120 MAD' },
    { name: 'Lissage aux plaques', price: '250-400 MAD' },
    { name: 'Mèches (prix selon longueur)', price: '300-700 MAD' },
  ],
}

export default function Prices() {
  return (
    <section id="tarifs" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-dark/60 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="calligraphic-title text-white mb-2">Carte des <span className="text-gold">Tarifs</span></h2>
          <p className="text-gray-300 max-w-2xl mx-auto">Des prestations claires et transparentes pour un service premium.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(prices).map(([category, items]) => (
            <div key={category} className="bg-emerald-dark/40 border border-gold/20 rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gold mb-4">{category}</h3>
              <ul className="space-y-3">
                {items.map((it) => (
                  <li key={it.name} className="flex justify-between items-center">
                    <span className="text-white">{it.name}</span>
                    <span className="text-gold font-semibold">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
