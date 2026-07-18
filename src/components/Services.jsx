import React from 'react'
import { FaCut, FaPaintBrush } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      id: 1,
      category: 'Onglerie',
      title: 'Manucure Professionnelle',
      description: 'Soins complets des mains avec produits premium et finitions impeccables.',
      icon: <FaPaintBrush className="text-3xl text-gold" />,
    },
    {
      id: 2,
      category: 'Onglerie',
      title: 'Nail Art',
      description: 'Designs créatifs et personnalisés pour vos ongles. Gel semi-permanent haute qualité.',
      icon: <FaPaintBrush className="text-3xl text-gold" />,
    },
    {
      id: 3,
      category: 'Coiffure',
      title: 'Brushing',
      description: 'Coiffure élégante pour un style lisse et parfait. Techniques professionnelles.',
      icon: <FaCut className="text-3xl text-gold" />,
    },
    {
      id: 4,
      category: 'Coiffure',
      title: 'Lissage aux Plaques',
      description: 'Transformation complète avec soin profond. Résultats durables et brillants.',
      icon: <FaCut className="text-3xl text-gold" />,
    },
    {
      id: 5,
      category: 'Coiffure',
      title: 'Mèches Lumineuses',
      description: 'Éclaircissement naturel pour sublimer votre teint. Technique douce et professionnelle.',
      icon: <FaCut className="text-3xl text-gold" />,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-rosegold-dark/70">
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
                <p className="text-gold font-semibold">Contactez-nous pour plus de détails</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-300 mb-6">Prêt à vous sentir magnifique ? Contactez-nous dès maintenant.</p>
        </div>
      </div>
    </section>
  )
}
