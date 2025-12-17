// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'; // 1. Importez HelmetProvider

import App from './App.jsx'
import './index.css'

// 2. Enveloppez votre composant App avec HelmetProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
)