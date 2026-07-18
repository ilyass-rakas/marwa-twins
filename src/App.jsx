import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Prices from './components/Prices'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="bg-emerald-dark min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Prices />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
