import React, { useState } from 'react';
import logo from '../assets/logo.png'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ServiceRegistration = () => {

  const navigate = useNavigate();

  const [formData,setFormData] = useState({
    name: '',
    type: '',
    registrationNumber: '',
    password: '',
    phoneNumber: '',
    email: '',
    address: '',
    // ambulance 
    AmbulanceType: '',
    AmbulanceCount: '',
    ServiceArea: '',
    // hospital
    TotalBeds: '',
    TotalDoc: '',
    registrationCertificate: ''
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if(type==='file') {
      setFormData({...formData, [name]: files[0]});
    }else{
      setFormData({...formData, [name]: value});
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = import.meta.env.VITE_BASE_URL_USER;
    const data = new FormData();
    data.append('name', formData.name);
    data.append('type', formData.type);
    data.append('registrationNumber', formData.registrationNumber);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('email', formData.email);
    data.append('address', formData.address);
    data.append('password', formData.password);

    data.append('registrationCertificate', formData.registrationCertificate);

    const response = await axios.post(`${url}/api/v1/organization/register`, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    console.log(response.data);
    const token = response.data.data;
    localStorage.setItem('orgtoken', token)
    console.log(response.data);
    navigate('/organization-dashboard'); 

  }

  return (
   <div className='w-full h-screen flex justify-center items-center bg-gradient-to-tl from-gray-700 to-gray-900 overflow-x-hidden'>
    <div className='bg-white w-[45%] h-[95%] p-5 flex flex-col rounded-2xl shadow-2xl shadow-black items-center  overflow-y-auto'>
      <div className='flex flex-col items-center justify-center mb-5'>
        <img src={logo} alt='logo'  className='w-20'/>
        <h2 className='text-3xl font-bold text-gray-900 pl-10'>Register as a Service Provider</h2>
      </div>
      <hr className='border-gray-300 mb-10 w-full'/>
      <div className='flex flex-col w-full'> 
        <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
            <label className='text-lg font-medium text-gray-900 mb-5'>Organization Details</label>
            <label className='text-sm font-medium text-gray-900 mb-2' >Organization Name</label>
            <input 
              type='text' 
              name='name'
              value={formData.name}
              placeholder='Enter your location'
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
              onChange={handleChange}
            />
            <label className='text-sm font-medium text-gray-900 mb-2'>Organization Type</label>
            <select 
              className='border border-gray-300 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-purple-600 p-3' 
              type='text'
              value={formData.type}
              name='type'
              onChange={handleChange}
            
            >
            <option value='' disabled>Choose service</option>
            <option value="AMBULANCE_SERVICE">Ambulance</option>
            <option value="HOSPITAL">Hospital</option>
          </select>
            <input 
              type='text' 
              name='registrationNumber'
              value={formData.registrationNumber}
              placeholder='Official License/Registration Number'
              className='p-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
              onChange={handleChange}
            />
            <label className='text-sm font-medium text-gray-900 mb-2'>Password</label>
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Enter your password'
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
              required
            />
            {formData.type==='HOSPITAL' && (
              <>
                <label className='text-sm font-medium text-gray-900 mb-2'>Total Beds</label>
                <input 
                  type='text' 
                  name='TotalBeds'
                  value={formData.TotalBeds}
                  onChange={handleChange}
                  placeholder='e.g., 100'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
                />
                <label className='text-sm font-medium text-gray-900 mb-2'>Total Doctors</label>
                <input 
                  type='text' 
                  name='TotalDoc'
                  value={formData.TotalDoc}
                  onChange={handleChange}
                  placeholder='e.g., 25'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
                />
              </>
            )}
            {formData.type==='AMBULANCE_SERVICE' && (
              <>
                <label className='text-sm font-medium text-gray-900 mb-2'>Ambulance Type</label>
                <input 
                  type='text' 
                  name='AmbulanceType'
                  value={formData.AmbulanceType}
                  onChange={handleChange}
                  placeholder='e.g., Basic Life Support (BLS), Advanced Life Support (ALS)'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
                />
                <label className='text-sm font-medium text-gray-900 mb-2'>Ambulance Count</label>
                <input 
                  type='text' 
                  name='AmbulanceCount'
                  value={formData.AmbulanceCount}
                  onChange={handleChange}
                  placeholder='e.g., 5'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
                />
                <label className='text-sm font-medium text-gray-900 mb-2'>Service Area</label>
                <input 
                  type='text' 
                  name='ServiceArea'
                  value={formData.ServiceArea}
                  onChange={handleChange}
                  placeholder='e.g., City, Region'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
                />
              </>
            )}
            <label className='text-lg font-medium text-gray-900 mb-5 mt-10'>Contact Details</label>
            <label className='text-sm font-medium text-gray-900 mb-2'>Email</label>
            <input 
              type='text' 
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
            />
            <label className='text-sm font-medium text-gray-900 mb-2'>Phone Number</label>
            <input 
              type='text' 
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder='Phone Number'
              className='p-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full'
            />
            <label  className='text-sm font-medium text-gray-900 mb-2'>Address</label>
            <textarea
                type='text'
                value={formData.address}
                onChange={handleChange}
                name='address'
                placeholder='Organization Address...'
                className='w-full h-30 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 mb-10'
            ></textarea>
            <label className='text-lg font-medium text-gray-900 mb-5'>Upload Documents</label>
            <label className='text-sm font-medium text-gray-900 mb-2'>License/Certification Document</label>
            <input
              type='file'
              name='registrationCertificate'
              onChange={handleChange}
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100'
            />
            <div className='flex w-full justify-center items-center px-10'>
              <button className='bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 w-full'>Submit Registration</button>
            </div>
        </form>
      </div>
    </div>
   </div>
  )
};

export default ServiceRegistration;