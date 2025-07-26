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



function App() {
  const [count, setCount] = useState(0)

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
      </Routes>
    </>
  )
}

export default App
