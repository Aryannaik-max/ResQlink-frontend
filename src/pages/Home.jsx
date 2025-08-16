import React from 'react'
import logo from '../assets/logo.png'
import organization from '../assets/organization.png'
import truck from '../assets/truck.png'
import user1 from '../assets/user1.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-gray-700 to-gray-900 py-8'>
      <div className='border-2 border-white bg-white w-[90%] md:w-[70%] lg:w-[60%] min-h-[60%] rounded-2xl flex flex-col justify-center items-center p-8 md:p-10 shadow-black shadow-2xl text-center'>
        <img src={logo} alt='ResQlink Logo' className='w-32 md:w-40 mb-6 md:mb-8' /> 
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight'>
          Your Lifeline in Every Emergency
        </h1>
        <p className='text-lg md:text-xl text-gray-700 mb-8 md:mb-10 max-w-2xl'>
          Connecting you instantly to the right help, when every second counts.
        </p>
        <div className='w-full max-w-4xl mb-8'>
          <h2 className='text-2xl md:text-3xl font-semibold text-gray-800 mb-6'>
            Join ResQlink Today
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6'>
            <div className='bg-gradient-to-b from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105'>
              <div className='text-blue-600 mb-4'>
                <img src={user1} alt='User Icon' className='w-12 h-12 mx-auto' />
              </div>
              <h3 className='text-xl font-bold text-gray-800 mb-3'>Individual User</h3>
              <p className='text-gray-600 mb-4 text-sm'>
                Get emergency help when you need it most. Quick access to rescue services.
              </p>
              <Link
                to="/user-signup" 
                className='bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-md block'
              >
                Register as User
              </Link>
            </div>
            <div className='bg-gradient-to-b from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-lg transition-all duration-300 hover:scale-105'>
              <div className='text-green-600 mb-4'>
                <img src={truck} alt='Driver Icon' className='w-12 h-12 mx-auto' />
              </div>
              <h3 className='text-xl font-bold text-gray-800 mb-3'>Emergency Driver</h3>
              <div className='mb-9'>
                <p className='text-gray-600 mb-4 text-sm'>
                  Be a hero on the road. Help transport people during emergencies.
                </p>
              </div>
              <Link
                to="/driver-signup" 
                className='bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 shadow-md block'
              >
                Register as Driver
              </Link>
            </div>
            <div className='bg-gradient-to-b from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-lg transition-all duration-300 hover:scale-105'>
              <div className='text-purple-600 mb-4'>
                <img src={organization}  className='w-12 h-12 mx-auto'/>
              </div>
              <h3 className='text-xl font-bold text-gray-800 mb-3'>Organization</h3>
              <p className='text-gray-600 mb-4 text-sm'>
                Hospitals, rescue teams, and emergency services. Manage emergency responses.
              </p>
              <Link
                to="/organization-signup" 
                className='bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200 shadow-md block'
              >
                Register Organization
              </Link>
            </div>
          </div>
        </div>
        <div className='text-sm text-gray-600 max-w-2xl'>
          <p className='mb-2'>
            <span className='font-semibold'>Already have an account?</span>{' '}
            <Link to='/login' className='text-blue-600 hover:text-blue-800 font-semibold underline'>
              Sign In Here
            </Link>
          </p>
          <p>
            Join thousands of users, drivers, and organizations making emergency response faster and more efficient.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home