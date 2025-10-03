import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Register a basic service worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(err => {
      console.warn('Service worker registration failed:', err)
    })
  })
}

createRoot(document.getElementById('root')).render(<App />)
