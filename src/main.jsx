import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './context/Context.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId='1005445855253-v9hceger0bc37dqsh290s93k665q7jlk.apps.googleusercontent.com'>
      <ContextProvider>
        <App />
      </ContextProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
