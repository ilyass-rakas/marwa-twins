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
          <div className="hidden md:flex justify-center">
            <div className="w-full max-w-md aspect-square bg-gradient-to-br from-gold/20 to-rosegold-dark rounded-2xl border-2 border-gold/30 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-32 h-32 mx-auto text-gold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-gold text-lg font-semibold mt-4">Votre Beauté, Notre Passion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
