import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/Context.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='1005445855253-kma3rn2gmbcgh9tk7lkd6eqea0kf4cch.apps.googleusercontent.com' useOneTap>
      <ContextProvider>
        <App />
      </ContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
