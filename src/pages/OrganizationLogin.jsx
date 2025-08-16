import React, { useState, useContext } from 'react';
import logo from '../assets/logo.png';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { OrgContext } from '../context/OrgContext';

const OrganizationLogin = () => {
  const navigate = useNavigate();
  const { setOrganization, setIsOrganization } = useContext(OrgContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const base = import.meta.env.VITE_BASE_URL_ORG || import.meta.env.VITE_BASE_URL_USER;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const loginRes = await axios.post(`${base}/api/v1/organization/login`, formData);

      const token = loginRes.data.data;
      if (!token) {
        throw new Error('No token returned from server. Check backend response shape.');
      }

      localStorage.setItem('orgtoken', token);


      const profileRes = await axios.get(`${base}/api/v1/organization/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });

      const organization = profileRes.data?.data || profileRes.data?.organization || null;

      
      if (setOrganization) setOrganization(organization);
      if (setIsOrganization) setIsOrganization(true);

    
      navigate('/organization-dashboard');
    } catch (err) {
      console.error('Organization login failed:', err);
      const msg = 'Login failed';
      setError(msg);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <img src={logo} alt="logo" className="w-32 mx-auto" />
        <h2 className="text-2xl text-center font-bold my-4">Organization Login</h2>

        {error && <div className="text-red-600 mb-3">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border rounded"
            required
          />
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border rounded"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <Link to='/service-registration' className="text-blue-500">Create organization account</Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationLogin;
