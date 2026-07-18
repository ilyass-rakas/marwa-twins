import React, { useState } from 'react'
import { FaInstagram, FaPhone } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="header-sticky fixed w-full top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo/Name */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/logo.png" alt="Marwa Twin" className="h-10 md:h-16 object-contain" onError={(e) => { e.currentTarget.style.display = 'none' }} />
          </div>

          {/* Desktop Menu */}
          <nav id="main-navigation" className="hidden md:flex gap-8 items-center">
            <a href="#accueil" className="text-gray-100 hover:text-gold transition duration-300 font-medium">
              Accueil
            </a>
            <a href="#services" className="text-gray-100 hover:text-gold transition duration-300 font-medium">
              Nos Services
            </a>
            <a href="#contact" className="text-gray-100 hover:text-gold transition duration-300 font-medium">
              Contact
            </a>
            <div className="flex items-center gap-4 ml-4">
              <a href="#contact" className="text-gold hover:text-gold-light text-lg"><FaPhone /></a>
              <a href="https://instagram.com/marwa_anbar____" target="_blank" rel="noreferrer" className="text-gold hover:text-gold-light text-lg"><FaInstagram /></a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            aria-label="Ouvrir le menu mobile"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav id="mobile-menu" className="md:hidden pb-4 flex flex-col gap-4" aria-label="Menu mobile">
            <a href="#accueil" className="text-gray-100 hover:text-gold transition duration-300 block">
              Accueil
            </a>
            <a href="#services" className="text-gray-100 hover:text-gold transition duration-300 block">
              Nos Services
            </a>
            <a href="#contact" className="text-gray-100 hover:text-gold transition duration-300 block">
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
