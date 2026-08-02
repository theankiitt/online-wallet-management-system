import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Supports weights 200-800
import '@fontsource-variable/manrope/wght.css';
// Supports weights 400-700
import '@fontsource-variable/libre-baskerville/wght.css';
import '@fontsource/dm-serif-display';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   
  </StrictMode>,
)
