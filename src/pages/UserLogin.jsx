import React, { useState, useContext } from 'react'
import logo from '../assets/logo.png' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const UserLogin = () => {
  const navigation = useNavigate();
  const { setUser, setIsAuthenticated } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${import.meta.env.VITE_BASE_URL_USER}`;
      const response = await axios.post(`${url}/api/v1/login`, userData);

      const token = response.data.data;
      localStorage.setItem('token', token);

      const userResponse = await axios.get(`${url}/api/v1/me`, {
        headers: { authorization: `Bearer ${token}` }
      });

      setUser(userResponse.data.data);  
      setIsAuthenticated(true);

      navigation('/dashboard');
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900'>
      <div className='border-2 w-[25%] h-[75%] rounded-2xl flex items-center flex-col p-10 space-y-5 pb-20 bg-white shadow-black shadow-2xl'>
        
        <img src={logo} alt='logo' className='w-40' />
        <h2 className='text-2xl font-semibold mb-5'>Login to your ResQlink account</h2>
        
        <form onSubmit={handleSubmit} className='h-[100%] flex flex-col'>
          <div className='flex flex-col items-center justify-around space-y-3 h-[70%]'>
            <input 
              type='text' 
              placeholder='Email' 
              value={userData.email} 
              onChange={handleChange} 
              name='email' 
              className='w-80 h-15 rounded-lg px-3 border-2 border-black' 
            />
            <input 
              type='password' 
              placeholder='Password' 
              value={userData.password} 
              onChange={handleChange} 
              name='password' 
              className='w-80 h-15 rounded-lg px-3 border-2 border-black' 
            />
          </div>
          <div>
            <button 
              className='bg-blue-600 hover:bg-blue-700 text-white w-80 h-13 rounded-lg mt-5 border-2' 
              type='submit'
            >
              Login as User
            </button>
          </div>
        </form>

        {/* Driver and Organization Buttons */}

        <div className='flex flex-col items-center'>
          <p className='mt-5'>
            Don't have an account? <a href='/signup' className='text-blue-500'>Sign Up</a>
          </p>
        </div>
        <div className='flex justify-center w-full items-center mt-12'>
          <button 
            onClick={() => navigation('/organization-login')}
            className='bg-blue-600 hover:bg-blue-700 text-white w-70 h-13 rounded-lg border-2'
          >
            Login as Organization
          </button>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
