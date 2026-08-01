import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// Self-hosted fonts (no Google Fonts request — GDPR-safe)
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/600.css'
import '@fontsource/kanit/700.css'
import '@fontsource/kanit/800.css'
import '@fontsource/kanit/900.css'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import './index.css'

// A small hello for the curious (recruiters with DevTools open, I see you)
console.log(
  '%cHej! Nysgerrig? God stil. \u{1F50D}%c\nKig dig omkring, og skriv endelig: alirezadk2016@gmail.com\n\u2014 Alireza',
  'color:#C9A96E;font-size:14px;font-weight:bold;',
  'color:#8a8a8a;font-size:12px;'
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
