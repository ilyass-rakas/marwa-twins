import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Prices from './components/Prices'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Gallery from './components/Gallery'
import CookieConsent from './components/CookieConsent'

function App() {
  return (
    <div className="bg-rosegold-dark min-h-screen">
      <a href="#accueil" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-gold text-rosegold-dark px-3 py-2 rounded">Aller au contenu</a>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Prices />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  )
}

export default App
