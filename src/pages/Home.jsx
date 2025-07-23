import React from 'react'
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900'>
      <div className='border-2 border-white bg-white w-[90%] md:w-[70%] lg:w-[50%] min-h-[50%] rounded-2xl flex flex-col justify-center items-center p-10 pb-20 shadow-black shadow-2xl text-center'>
        <img src={logo} alt='ResQlink Logo' className='w-40 mb-8' /> 
        <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight'>
          Your Lifeline in Every Emergency
        </h1>
        <p className='text-lg md:text-xl text-gray-700 mb-10 max-w-2xl'>
          Connecting you instantly to the right help, when every second counts.
        </p>
        <a
          href="/signup" 
          className='bg-blue-600 text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-blue-700 transition-colors duration-200 shadow-md'
        >
          Get Started Now
        </a>
      </div>
    </div>
  )
}

export default Home
