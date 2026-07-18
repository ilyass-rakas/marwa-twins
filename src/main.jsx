import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Simple IntersectionObserver to reveal elements with the .reveal class
function initReveal() {
  if (typeof window === 'undefined' || !window.IntersectionObserver) return
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view')
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
}

setTimeout(initReveal, 400)
