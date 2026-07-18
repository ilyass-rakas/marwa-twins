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
    <footer id="contact" className="bg-black/50 border-t border-gold/20 py-16 px-4 sm:px-6 lg:px-8 reveal">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
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
                className="btn-primary justify-center w-full flex items-center gap-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.084 1.52 5.83L0 24l6.36-1.52A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.22-1.255-6.22-3.48-8.52z" fill="#25D366"/>
                  <path d="M17.473 14.848c-.293-.147-1.73-.853-1.998-.951-.268-.098-.463-.147-.66.147s-.756.951-.928 1.148c-.17.197-.34.221-.633.074-.293-.147-1.238-.455-2.356-1.45-.872-.78-1.46-1.742-1.63-2.036-.17-.293-.018-.452.13-.6.134-.133.293-.347.439-.52.146-.175.195-.293.293-.488.098-.197.049-.37-.025-.52-.074-.147-.66-1.59-.905-2.178-.238-.57-.48-.492-.66-.5l-.56-.01c-.197 0-.52.074-.794.37s-1.04 1.02-1.04 2.48 1.064 2.876 1.212 3.074c.146.197 2.094 3.2 5.076 4.487 2.244 1.01 2.464.83 2.91.78.446-.049 1.73-.707 1.977-1.39.248-.683.248-1.268.173-1.39-.074-.123-.268-.197-.56-.344z" fill="#fff"/>
                </svg>
                <span>Prendre rendez-vous</span>
              </button>
              <button
                onClick={handleInstagram}
                className="btn-secondary justify-center w-full flex items-center gap-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="ig" x1="0" x2="1" y1="0" y2="1">
                      <stop offset="0%" stopColor="#f58529"/>
                      <stop offset="50%" stopColor="#dd2a7b"/>
                      <stop offset="100%" stopColor="#8134af"/>
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig)"/>
                  <path d="M12 7.2a4.8 4.8 0 100 9.6 4.8 4.8 0 000-9.6zm0 7.92a3.12 3.12 0 110-6.24 3.12 3.12 0 010 6.24z" fill="#fff"/>
                  <circle cx="17.6" cy="6.4" r="0.88" fill="#fff"/>
                </svg>
                <span>@marwa_anbar____</span>
              </button>
            </div>
          </div>
        </div>
        {/* Map + Address */}
        <div className="grid md:grid-cols-2 gap-6 items-start mb-8">
          <div className="w-full h-64 bg-black/30 rounded-lg overflow-hidden border border-gold/20">
            <iframe
              title="Marwa Twin - Tiflet"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3316.1234567890123!2d-6.099999!3d33.900000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!2s0xd...!5e0!3m2!1sfr!2sma!4v0000000000000"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-bold text-white">Adresse</h4>
            <p className="text-gold font-semibold">Marwa Twin — Tiflet, Maroc</p>
            <p className="text-gray-300">Rue principale, Centre-ville — À deux pas de la place centrale.</p>
            <p className="text-gray-300">Horaires: Lun-Sam 10h - 20h</p>
            <p className="text-gray-300">Contact: <span className="text-gold font-semibold">+212 6 12 34 56 78</span></p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Marwa Twin. Tous droits réservés.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Politique de confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors text-sm">Conditions d'utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
