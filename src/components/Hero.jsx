import React from 'react'

export default function Hero() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je voudrais prendre rendez-vous chez Marwa Twin")
    window.open(`https://wa.me/212643808254?text=${message}`, '_blank')
  }

  return (
    <section id="accueil" className="hero-section pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="calligraphic-title text-white leading-tight">
                Révélez votre beauté avec <span className="gradient-gold">Marwa Twin</span>
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed max-w-lg">
                Bienvenue dans notre univers de luxe et de bien-être. Laissez-vous envelopper par notre expertise et notre passion pour sublimer votre beauté naturelle.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="btn-primary whitespace-nowrap"
              >
                Réserver mon moment
              </button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">100%</p>
                <p className="text-sm text-gray-300">Premium</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">Depuis</p>
                <p className="text-sm text-gray-300">2025</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-gold">Tiflet</p>
                <p className="text-sm text-gray-300">Maroc</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="flex justify-center">
            <div className="w-full max-w-md aspect-square relative rounded-[36px] overflow-hidden border border-gold/30 shadow-[0_30px_80px_rgba(212,175,55,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200&auto=format&fit=crop"
                alt="Beauté élégante"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rosegold-dark/20 via-rosegold-dark/10 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-8 text-left">
                <div className="max-w-[70%] bg-black/15 backdrop-blur-sm rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                  <span className="text-xs uppercase tracking-[0.45em] text-gold/90">Soin beauté premium</span>
                  <h3 className="mt-4 text-4xl md:text-5xl font-semibold text-white drop-shadow-[0_8px_16px_rgba(0,0,0,0.35)]">Une expérience luxe sur-mesure</h3>
                  <p className="mt-4 max-w-xs text-sm md:text-base leading-relaxed text-gray-200 opacity-95">Découvrez nos prestations haut de gamme pour sublimer chaque détail de votre beauté.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
