import React, { useState } from 'react'

const faqs = [
  { id: 1, q: 'Faut-il réserver à l\'avance ?', a: 'Oui, nous recommandons la réservation pour garantir votre créneau, surtout le week-end.' },
  { id: 2, q: 'Combien de temps dure une pose de gel ?', a: 'Comptez en moyenne 60 à 90 minutes selon la décoration et la préparation des ongles.' },
  { id: 3, q: 'Quels produits utilisez-vous pour les mèches ?', a: 'Nous utilisons des marques professionnelles et des produits doux pour protéger la fibre capillaire.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 reveal">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-white mb-6">Foire aux <span className="text-gold">Questions</span></h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <div key={f.id} className="bg-rosegold-dark/50 border border-gold/20 rounded-md overflow-hidden">
              <button
                onClick={() => setOpen(open === f.id ? null : f.id)}
                className="w-full text-left px-4 py-3 flex justify-between items-center"
              >
                <span className="text-white font-medium">{f.q}</span>
                <span className="text-gold">{open === f.id ? '−' : '+'}</span>
              </button>
              <div className={`px-4 pb-4 transition-max-h duration-300 ${open === f.id ? 'max-h-40' : 'max-h-0 overflow-hidden'}`}>
                <p className="text-gray-300">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
