import React from 'react'

export default function WhatsAppButton({ number = '212612345678', message = 'Bonjour, je voudrais prendre rendez-vous chez Marwa Twin' }) {
  const handleClick = () => {
    const text = encodeURIComponent(message)
    window.open(`https://wa.me/${number}?text=${text}`, '_blank')
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-16 h-16 bg-emerald-dark border-2 border-gold rounded-full flex items-center justify-center shadow-xl whatsapp-pulse hover:scale-105 transition-transform z-50"
      title="Prendre rendez-vous sur WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.92 11.92 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.116.553 4.084 1.52 5.83L0 24l6.36-1.52A11.937 11.937 0 0 0 12 24c6.627 0 12-5.373 12-12 0-3.22-1.255-6.22-3.48-8.52z" fill="#25D366"/>
        <path d="M17.473 14.848c-.293-.147-1.73-.853-1.998-.951-.268-.098-.463-.147-.66.147s-.756.951-.928 1.148c-.17.197-.34.221-.633.074-.293-.147-1.238-.455-2.356-1.45-.872-.78-1.46-1.742-1.63-2.036-.17-.293-.018-.452.13-.6.134-.133.293-.347.439-.52.146-.175.195-.293.293-.488.098-.197.049-.37-.025-.52-.074-.147-.66-1.59-.905-2.178-.238-.57-.48-.492-.66-.5l-.56-.01c-.197 0-.52.074-.794.37s-1.04 1.02-1.04 2.48 1.064 2.876 1.212 3.074c.146.197 2.094 3.2 5.076 4.487 2.244 1.01 2.464.83 2.91.78.446-.049 1.73-.707 1.977-1.39.248-.683.248-1.268.173-1.39-.074-.123-.268-.197-.56-.344z" fill="#fff"/>
      </svg>
    </button>
  )
}
