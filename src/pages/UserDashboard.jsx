import React from 'react'
import logo from '../assets/logo.png'
import user from '../assets/user.png'
import serviceProvider from '../assets/serviceProvider.png'
import history from '../assets/history.png'
import driver from '../assets/driver.png'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const UserDashboard = () => {
  const navigate = useNavigate();

 
  return (
    <div className=' h-screen flex flex-col items-center justify-center bg-gradient-to-tl from-gray-700 to-gray-900'>
      <div className='bg-white rounded-2xl flex flex-col w-[75%] h-[90%] shadow-black shadow-2xl p-10'>
        <div className='flex items-center justify-between mb-5'>
          <div className='flex items-center'>
            <img src={logo} alt='ResQlink Logo' className='w-20 mr-4' />
            <h1 className='text-3xl font-bold text-gray-900'>Welcome, Aryan</h1>
          </div>
          <button className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200'>Logout</button>
        </div>
        <hr className='border-gray-300 mb-10' />
        <div className='flex h-[100%] space-x-10'>
          <div className='rounded-2xl w-[20%] mt-10 flex flex-col shadow-black shadow-2xl bg-white'>
            <div className='flex items-center text-center  py-4 px-4'>
              <img src={user} alt='User Icon' className='w-7 mb-1' />
              <Link to='/profile' className='text-gray-900 hover:text-blue-600 ml-2 text-sm'> My Profile</Link>
            </div>
            <div className='flex items-center text-center py-4 px-4'>
              <img src={serviceProvider} alt='Service Provider Icon' className='w-7 mb-1' />
              <Link to='/service-registration' name='service-registration'  className='text-gray-900 hover:text-blue-600 ml-2 text-sm'>Register as service provider</Link>
            </div>
            <div className='flex items-center p-4'>
              <img src={history} alt='History Icon' className='w-7 mb-1' />
              <Link to='/history' className='text-gray-900 hover:text-blue-600 ml-2 text-sm'>History</Link>
            </div>
            <div className='flex items-center p-4'>
              <img src={driver} alt='History Icon' className='w-7 mb-1' />
              <Link to='/crew-registration' className='text-gray-900 hover:text-blue-600 ml-2 text-sm'>Crew Register</Link>
            </div>
          </div>
          <div className='flex flex-col rounded-2xl  flex-grow items-center justify-center mt-10 text-center p-6 shadow-black shadow-2xl'>
            <h1 className='text-4xl font-bold text-gray-900 mb-9'>
              What do you need help with ?
            </h1>
            <Link to='/create-emergency' className='bg-blue-600 text-white px-12 py-4 rounded-lg text-2xl font-bold hover:bg-blue-700 transition-colors duration-200' name='create-emergency'>Report Emergency</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard
