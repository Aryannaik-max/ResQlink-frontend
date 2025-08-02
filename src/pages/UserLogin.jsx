import React, { useState } from 'react'
import logo from '../assets/logo.png' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {

  const navigation = useNavigate();

  const [userData, setUserData] = useState({
    email:'',
    password:''
  });

  const handleChange = (e) => {
    e.preventDefault();
    const {name,value} = e.target;
    setUserData(prevData => ({...prevData, [name]: value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL_USER}/api/v1/login`, userData);
    console.log(response);
    navigation('/dashboard');

  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 '>
      <div className='border-2  w-[25%] h-[70%] rounded-2xl flex  items-center flex-col p-10 space-y-5 pb-20 bg-white shadow-black shadow-2xl'>
        <img src={logo} alt='logo' className='w-40' />
        <h2 className='text-2xl font-semibold mb-5'>Login to your ResQlink account</h2>
        <form onSubmit={handleSubmit} className=' h-[100%] flex flex-col '>
          <div className='flex flex-col items-center justify-around space-y-3 h-[70%]'>
              <input type='text' placeholder='Email' value={userData.email} onChange={handleChange} name='email' className='w-80 h-15 rounded-lg px-3 border-2 border-black' />
              <input type='password' placeholder='Password' value={userData.password} onChange={handleChange} name='password' className='w-80 h-15 rounded-lg px-3 border-2 border-black' />
          </div>
          <div>
              <button className='bg-blue-600 hover:bg-blue-700 text-white w-80 h-13 rounded-lg mt-5 border-2' type='submit'>Login</button>
          </div>
        </form>
            <div className='flex flex-col items-center'>
                <p className='mt-5'>Don't have an account? <a href='/signup' className='text-blue-500'>Sign Up</a></p>
            </div>
      </div>
    </div>
  )
}

export default UserLogin
