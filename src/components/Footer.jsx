import React from 'react'
import { FaInstagram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Footer() {
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Bonjour, je voudrais prendre rendez-vous chez Marwa Twin")
    window.open(`https://wa.me/212643808254?text=${message}`, '_blank')
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
            <h4 className="text-lg font-bold text-white flex items-center gap-2"><FaMapMarkerAlt className="text-gold" /> Nous Localiser</h4>
            <div className="text-gray-300 space-y-2">
              <p className="font-semibold text-gold">Tiflet, Maroc</p>
              <p className="text-sm">Venez nous visiter pour une expérience de beauté incomparable.</p>
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
                <FaPhone className="text-2xl text-gold" />
                <span>Prendre rendez-vous</span>
              </button>
              <button
                onClick={handleInstagram}
                className="btn-secondary justify-center w-full flex items-center gap-3"
              >
                <FaInstagram className="text-2xl text-gold" />
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
            <p className="text-gray-300">Contact: <a href="tel:+212643808254" className="text-gold font-semibold">+212 643-808254</a></p>
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
