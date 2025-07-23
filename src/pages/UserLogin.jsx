import React from 'react'
import logo from '../assets/logo.png' // Assuming you have a logo image

const UserLogin = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 '>
      <div className='border-2  w-[25%] h-[70%] rounded-2xl flex justify-between items-center flex-col p-10 pb-20 bg-white shadow-black shadow-2xl'>
        <img src={logo} alt='logo' className='w-40' />
        <div className='flex flex-col items-center justify-evenly h-[40%]'>
            <input type='text' placeholder='Email' className='w-80 h-15 rounded-lg px-3 border-2 border-black' />
            <input type='text' placeholder='Password' className='w-80 h-15 rounded-lg px-3 border-2 border-black' />
        </div>
        <div>
            <button className='bg-black text-white w-80 h-13 rounded-lg mt-5 border-2'>Login</button>
        </div>
            <div className='flex flex-col items-center'>
                <p className='mt-5'>Don't have an account? <a href='/signup' className='text-blue-500'>Sign Up</a></p>
            </div>
      </div>
    </div>
  )
}

export default UserLogin
