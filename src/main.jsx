import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserContext.jsx'
import DriverProvider from './context/CrewContext.jsx'
import OrgProvider from './context/OrgContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UserProvider>
      <DriverProvider>
        <OrgProvider>
      <App />
        </OrgProvider>
      </DriverProvider>
    </UserProvider>
    </BrowserRouter>
  </StrictMode>
)
