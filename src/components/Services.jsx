import React from 'react'

export default function Services() {
  const services = [
    {
      id: 1,
      category: 'Onglerie',
      title: 'Manucure Professionnelle',
      description: 'Soins complets des mains avec produits premium et finitions impeccables.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="3" width="10" height="12" rx="2" fill="#D4AF37" opacity="0.15"/>
          <rect x="9" y="1" width="6" height="4" rx="1" fill="#D4AF37"/>
          <path d="M8 15v2a2 2 0 002 2h4a2 2 0 002-2v-2" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 2,
      category: 'Onglerie',
      title: 'Nail Art',
      description: 'Designs créatifs et personnalisés pour vos ongles. Gel semi-permanent haute qualité.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="8" fill="#D4AF37" opacity="0.12"/>
          <path d="M7.5 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 8a.75.75 0 11-1.5 0A.75.75 0 0112 8zM16.5 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill="#D4AF37"/>
        </svg>
      ),
    },
    {
      id: 3,
      category: 'Coiffure',
      title: 'Brushing',
      description: 'Coiffure élégante pour un style lisse et parfait. Techniques professionnelles.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 7c0-2 3-4 6-4s6 2 6 4-3 4-6 4-6-2-6-4z" fill="#D4AF37" opacity="0.12"/>
          <path d="M7 5c1.5 0 3 .6 4 1.6" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 12c1-1 2-1.5 3-1.5" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 4,
      category: 'Coiffure',
      title: 'Lissage aux Plaques',
      description: 'Transformation complète avec soin profond. Résultats durables et brillants.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="6" width="18" height="3" rx="1" fill="#D4AF37" opacity="0.12"/>
          <path d="M6 9l3 8h6l3-8" stroke="#D4AF37" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      id: 5,
      category: 'Coiffure',
      title: 'Mèches Lumineuses',
      description: 'Éclaircissement naturel pour sublimer votre teint. Technique douce et professionnelle.',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l1.5 3 3.5.5-2.6 2 0.6 3L12 10.5 8.5 11l.6-3L6.5 5.5 10 5 12 2z" fill="#D4AF37" opacity="0.16"/>
          <path d="M12 2l1.5 3 3.5.5-2.6 2 .6 3L12 10.5" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-dark/70">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="calligraphic-title text-white mb-4">
            Nos <span className="text-gold">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez notre gamme complète de prestations haut de gamme, conçues pour vous offrir une expérience luxe inoubliable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="flex items-start gap-4">
                <div className="text-4xl">{service.icon}</div>
                <div className="flex-1">
                  <p className="text-gold text-sm font-semibold uppercase tracking-wide mb-2">
                    {service.category}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gold/20">
                <button className="text-gold hover:text-gold-light font-semibold transition-colors flex items-center gap-2">
                  En savoir plus <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Prêt à vous sentir magnifique ?</p>
          <button className="btn-primary text-lg">
            Réservez une consultation gratuite
          </button>
        </div>
      </div>
    </section>
  )
}
