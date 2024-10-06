import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { UserProvider } from './contexts/UserContext.jsx'
import { ClientProvider } from './contexts/ClientContext.jsx'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './services/persistQueryClient.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ClientProvider>
          <App />
        </ClientProvider>
      </UserProvider>
    </QueryClientProvider>
  </StrictMode>,
)
