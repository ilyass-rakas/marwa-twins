import React from 'react'

export default function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je voudrais prendre rendez-vous chez Marwa Twin")
    window.open(`https://wa.me/212612345678?text=${message}`, '_blank')
  }

  const handleInstagram = () => {
    window.open('https://instagram.com/marwa_anbar____', '_blank')
  }

  return (
    <footer id="contact" className="bg-black/50 border-t border-gold/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-calligraphic text-gold">Marwa Twin</h3>
            <p className="text-gray-300 leading-relaxed">
              Votre destination pour la beauté luxe et le bien-être à Tiflet. Excellence et élégance à chaque visite.
            </p>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">📍 Nous Localiser</h4>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-gold">Tiflet, Maroc</p>
              <p className="text-sm">
                Venez nous visiter pour une expérience de beauté incomparable.
              </p>
              <p className="text-sm pt-2">
                <span className="font-semibold">Horaires:</span><br />
                Lun-Sam: 10h - 20h<br />
                Dimanche: Sur rendez-vous
              </p>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white">Nous Contacter</h4>
            <div className="flex flex-col gap-3">
              <button
                onClick={handleWhatsApp}
                className="btn-primary justify-center w-full flex items-center gap-2"
              >
                <span>💬</span> Prendre rendez-vous
              </button>
              <button
                onClick={handleInstagram}
                className="btn-secondary justify-center w-full flex items-center gap-2"
              >
                <span>📸</span> @marwa_anbar____
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Marwa Twin. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Politique de confidentialité
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">
                Conditions d'utilisation
              </a>
            </div>
          </div>
        </div>

        {/* Float Action Button */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-3">
          <button
            onClick={handleWhatsApp}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
            title="Contacter sur WhatsApp"
          >
            <span className="text-2xl">💬</span>
          </button>
          <button
            onClick={handleInstagram}
            className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-110"
            title="Suivre sur Instagram"
          >
            <span className="text-2xl">📸</span>
          </button>
        </div>
      </div>
    </footer>
  )
}
