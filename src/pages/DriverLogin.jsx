import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { DriverContext } from '../context/CrewContext'; 

const DriverLogin = () => {
  const navigate = useNavigate();
  const { setDriver, setIsDriver } = useContext(DriverContext);

  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const base = import.meta.env.VITE_BASE_URL_DRIVER;
      
      const res = await axios.post(`${base}/api/v1/driver/login`, formData);

      const token = res.data.data; 
      if (!token) throw new Error('No token returned from server');

      
      localStorage.setItem('driverToken', token);

      
      const profileRes = await axios.get(`${base}/api/v1/driver/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const driver = profileRes.data.data;
      if (setDriver) setDriver(driver);
      if (setIsDriver) setIsDriver(true);

      navigate('/driver-dashboard');
    } catch (err) {
      console.error('Driver login failed', err);
    //   setError(err.response?.data?.message || err.message || 'Login failed');
    }
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
      <div className='bg-white p-8 rounded-2xl shadow-md w-96'>
        <img src={logo} alt="logo" className='w-30 mx-auto' />
        <h2 className='text-2xl text-center font-bold my-4'>Driver Login</h2>

        {/* {error && <div className='text-red-600 mb-2'>{error}</div>} */}

        <form onSubmit={handleSubmit} className='space-y-4'>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className='w-full p-2 border rounded' />
          <input name="password" type="password" value={formData.password} onChange={handleChange} placeholder="Password" className='w-full p-2 border rounded' />
          <button type="submit" className='w-full bg-blue-600 text-white py-2 rounded'>Login</button>
        </form>
        <div className='flex flex-col items-center'>
            <p className='mt-5'>Don't have an account? <a href='/crew-registration' className='text-blue-500'>Register now</a></p>
        </div>
      </div>
    </div>
  );
}

export default DriverLogin;
