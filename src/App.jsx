import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import UserSignup from './pages/UserSignup'
import UserLogin from './pages/UserLogin'
import UserDashboard from './pages/UserDashboard'
import CreateEmergency from './pages/CreateEmergency'
import ServiceRegistration from './pages/ServiceRegistration'
import CrewRegistration from './pages/CrewRegistration'
import Profile from './pages/Profie'
import DriverDashboard from './pages/DriverDashboard'
import DriverProfile from './pages/DriverProfile'
import OrganizationDashboard from './pages/OrganizationDashboard'



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/dashboard' element={<UserDashboard />} />
        <Route path='/create-emergency' element={<CreateEmergency />} />
        <Route path='/service-registration' element={<ServiceRegistration />} />
        <Route path='/crew-registration' element={<CrewRegistration />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/driver-dashboard' element={<DriverDashboard />} />
        <Route path='/driver-profile' element={<DriverProfile />} />
        <Route path='/organization-dashboard' element={<OrganizationDashboard />} />
      </Routes>
    </>
  )
}

export default App
