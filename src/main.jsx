import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Analytics } from '@vercel/analytics/react'

// If the user refreshes while on a section anchor (e.g. /#gallery),
// the browser will keep the hash and jump to that section on load.
// To always start at the landing page on refresh, clear the hash
// and reset scroll before React mounts.
if (typeof window !== 'undefined' && window.location.hash) {
  // Remove the hash from the URL without reloading the page
  history.replaceState(null, '', window.location.pathname + window.location.search)
  // Ensure we're at the top of the page
  window.scrollTo(0, 0)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  <Analytics />
  </StrictMode>,
)
