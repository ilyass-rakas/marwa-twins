import React, { useEffect, useState } from 'react'

const CONSENT_KEY = 'marwa_cookie_consent'

export default function CookieConsent() {
  const [consent, setConsent] = useState(() => localStorage.getItem(CONSENT_KEY))

  useEffect(() => {
    if (consent === 'accepted') {
      // load Plausible if not already loaded
      if (!document.querySelector('script[data-plausible]')) {
        const script = document.createElement('script')
        script.setAttribute('data-plausible', '1')
        script.async = true
        script.defer = true
        script.src = 'https://plausible.io/js/plausible.outbound-links.js'
        document.head.appendChild(script)
      }
    }
  }, [consent])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
  }

  if (consent === 'accepted') return null

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 z-50">
      <div className="bg-emerald-dark/90 border border-gold/20 text-gray-100 p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-3">
        <div className="flex-1 text-sm">
          Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic. En acceptant, vous autorisez l'utilisation d'outils analytiques.
        </div>
        <div className="flex gap-2">
          <button onClick={accept} className="btn-primary">Accepter</button>
        </div>
      </div>
    </div>
  )
}
