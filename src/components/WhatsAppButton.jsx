import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton({ number = '212643808254', message = 'Bonjour, je voudrais prendre rendez-vous chez Marwa Twin' }) {
  const handleClick = () => {
    const text = encodeURIComponent(message)
    window.open(`https://wa.me/${number}?text=${text}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-rosegold-dark border-2 border-gold rounded-full flex items-center justify-center shadow-xl whatsapp-pulse hover:scale-105 transition-transform z-50 text-gold"
      title="Prendre rendez-vous sur WhatsApp"
    >
      <FaWhatsapp className="text-2xl" />
    </button>
  )
}
