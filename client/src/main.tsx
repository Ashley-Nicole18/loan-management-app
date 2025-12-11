import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.tsx'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <AuthProvider>
    <StrictMode>
    <App />
  </StrictMode>,
  </AuthProvider>
  </BrowserRouter>
)
