import React from 'react'

const reviews = [
  { id: 1, name: 'Sara', text: 'Meilleur brushing de Tiflet ! Le résultat tient toute la semaine.', rating: 5 },
  { id: 2, name: 'Nora', text: "Ongles parfaits et qui tiennent longtemps. L'équipe est très professionnelle.", rating: 5 },
  { id: 3, name: 'Imane', text: 'Ambiance chaleureuse et service haut de gamme — je recommande !', rating: 5 },
  { id: 4, name: 'Laila', text: 'Couleur et mèches sublimes, résultat naturel.', rating: 5 },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex text-gold">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 .587l3.668 7.431L23.327 9.6l-5.659 5.518L18.997 24 12 20.201 5.003 24l1.329-8.882L.673 9.6l7.659-1.582L12 .587z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-dark/40 reveal">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="calligraphic-title text-white mb-4">Avis de <span className="text-gold">clientes</span></h2>
        <p className="text-gray-300 mb-8">Quelques retours chaleureux de nos clientes satisfaites.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.id} className="bg-emerald-dark/60 border border-gold/20 rounded-lg p-6 text-left shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="text-white font-semibold">{r.name}</p>
                  <p className="text-sm text-gray-300">Cliente fidèle</p>
                </div>
                <Stars count={r.rating} />
              </div>
              <p className="text-gray-200">“{r.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
