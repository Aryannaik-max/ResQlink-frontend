import React, { useState } from 'react';
import logo from '../assets/logo.png'; 

const ServiceRegistration = () => {

  const [formData,setFormData] = useState({
    OrganizationName: '',
    OrganizationType: '',
    LicenseNumber: '',
    ContactNumber: '',
    ContactEmail: '',
    Address: '',
    // ambulance 
    AmbulanceType: '',
    AmbulanceCount: '',
    ServiceArea: '',
    // hospital
    TotalBeds: '',
    TotalDoc: '',
    LicenseDocument: '',
    TermsAndConditions: ''
  });

  const handleChange = (e) => {
    const { name, type, value, files } = e.target;
    if(type==='file') {
      setFormData({...formData, [name]: files[0]});
    }else{
      setFormData({...formData, [name]: value});
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
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
              name='OrganizationName'
              value={formData.OrganizationName}
              placeholder='Enter your location'
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
              onChange={handleChange}
            />
            <label className='text-sm font-medium text-gray-900 mb-2'>Organization Type</label>
            <select
             className='border border-gray-300 rounded-lg w-full h-12 focus:outline-none focus:ring-2 focus:ring-blue-600 p-3' 
             type='text'
             value={formData.OrganizationType}
             name='OrganizationType'
             onChange={handleChange}
            >
              <option value="" disabled selected>Select Type</option> 
              <option value="hospital">Hospital</option>
              <option value="ambulance-service">Ambulance service</option>  
            </select>
            <input 
              type='text' 
              name='LicenseNumber'
              value={formData.LicenseNumber}
              placeholder='Official License/Registration Number'
              className='p-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
              onChange={handleChange}
            />
            {formData.OrganizationType==='hospital' && (
              <>
                <label className='text-sm font-medium text-gray-900 mb-2'>Total Beds</label>
                <input 
                  type='text' 
                  name='ContactEmail'
                  value={formData.TotalBeds}
                  placeholder='e.g., 100'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                />
                <label className='text-sm font-medium text-gray-900 mb-2'>Total Doctors</label>
                <input 
                  type='text' 
                  name='ContactEmail'
                  value={formData.TotalDoc}
                  placeholder='e.g., 25'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                />
              </>
            )}
            {formData.OrganizationType==='ambulance-service' && (
              <>
                <label className='text-sm font-medium text-gray-900 mb-2'>Ambulance Type</label>
                <input 
                  type='text' 
                  name='AmbulanceType'
                  value={formData.AmbulanceType}
                  placeholder='e.g., Basic Life Support (BLS), Advanced Life Support (ALS)'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                />
                <label className='text-sm font-medium text-gray-900 mb-2'>Ambulance Count</label>
                <input 
                  type='text' 
                  name='AmbulanceCount'
                  value={formData.AmbulanceCount}
                  placeholder='e.g., 5'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                />
                <label className='text-sm font-medium text-gray-900 mb-2'>Service Area</label>
                <input 
                  type='text' 
                  name='ServiceArea'
                  value={formData.ServiceArea}
                  placeholder='e.g., City, Region'
                  className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                />
              </>
            )}
            <label className='text-lg font-medium text-gray-900 mb-5 mt-10'>Contact Details</label>
            <label className='text-sm font-medium text-gray-900 mb-2'>Email</label>
            <input 
              type='text' 
              name='ContactEmail'
              value={formData.ContactEmail}
              placeholder='Email'
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />
            <label className='text-sm font-medium text-gray-900 mb-2'>Phone Number</label>
            <input 
              type='text' 
              name='ContactNumber'
              value={formData.ContactNumber}
              placeholder='Phone Number'
              className='p-3  border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
            />
            <label  className='text-sm font-medium text-gray-900 mb-2'>Address</label>
            <textarea
                type='text'
                value={formData.Address}
                name='Address'
                placeholder='Organization Address...'
                className='w-full h-30 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mb-10'
            ></textarea>
            <label className='text-lg font-medium text-gray-900 mb-5'>Upload Documents</label>
            <label className='text-sm font-medium text-gray-900 mb-2'>License/Certification Docukment</label>
            <input
              type='file'
              name='LicenseDocument'
              value={formData.LicenseDocument}
              className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
            />
            <div className='flex w-full justify-center items-center px-10'>
              <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-full'>Submit Registration</button>
            </div>
        </form>
      </div>
    </div>
   </div>
  )
};

export default ServiceRegistration;