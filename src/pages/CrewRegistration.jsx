import React, { useState } from 'react'
import logo from '../assets/logo.png'

const CrewRegistration = () => {
    const [formData, setFormData] = useState({
        OrgName: '',
        OrgAddress: '',
        FullName: '',
        PersonalEmail: '',
        PhoneNumber: '',
        Password: '',
        CheckPassword: '',
    });


    const [isVerified, setIsVerified] = useState(false);
    const [verificationError, setVerificationError] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    const handleVerification = (e) => {
        e.preventDefault();
        
        
    }

    const handleSubmitRegistration = (e) => {
      e.preventDefault();

    }



  return (

    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
      <div className='bg-white rounded-2xl w-[90%] md:w-[70%] lg:w-[40%] min-h-[93%] flex flex-col justify-center items-center px-10 pb-2 shadow-black shadow-2xl'>
        <div className='flex flex-col justify-center items-center mb-5'> 
            <img src={logo} alt='logo' className='w-40' />
            <h2 className='text-3xl font-bold text-gray-900 pl-10'>Crew Account Setup</h2>
        </div>
        <hr className='border-gray-300 mb-4 w-full'/>
        {!isVerified? (
          <>
          <div className='flex justify-center text-center items-center'>
            <span className='text-2xl font-medium mb-10'>Please verifiy your details to set up your account</span>
          </div>
          <div className='w-full flex flex-col '>
            <form onSubmit={handleVerification} className='flex flex-col space-y-5'>
              <label className='text-sm font-medium text-gray-900 mb-2' >Organization Name</label>
              <input 
                type='text' 
                name='OrganizationName'
                value={formData.OrgName}
                placeholder='Your Organization Name'
                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                onChange={handleChange}
              />
              <label className='text-sm font-medium text-gray-900 mb-2' >Organization Address</label>
              <input 
                type='text' 
                name='OrgAddress'
                value={formData.OrgAddress}
                placeholder='Your Organization Address'
                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                onChange={handleChange}
              />
              <label className='text-sm font-medium text-gray-900 mb-2' >Your Name</label>
              <input 
                type='text' 
                name='FullName'
                value={formData.FullName}
                placeholder='Your Full Name'
                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                onChange={handleChange}
              />
              <label className='text-sm font-medium text-gray-900 mb-2' >Email</label>
              <input 
                type='text' 
                name='PersonalEmail'
                value={formData.PersonalEmail}
                placeholder='Your Personal Email'
                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                onChange={handleChange}
              />
              <div className='mt-auto pt-6'>
              <button type='submit' className='w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors duration-200 shadow-md'>
                Verify Account
              </button>
            </div>
            </form>
          </div>
          </>
        ) : (
        <>
          <div className='flex justify-center text-center items-center'>
            <span className='text-2xl font-medium mb-10'>Verification successful! Now set up your password</span>
          </div>
          <div className='w-full flex flex-col '>
            <form onSubmit={handleSubmitRegistration} className='flex flex-col space-y-5'>
              <label className='text-sm font-medium text-gray-900 mb-2' >Password</label>
              <input 
                type='text' 
                name='Password'
                value={formData.Password}
                placeholder='Your Organization Name'
                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                onChange={handleChange}
              />
              <label className='text-sm font-medium text-gray-900 mb-2' >Confirm Password</label>
              <input 
                type='text' 
                name='CheckPassword'
                value={formData.CheckPassword}
                placeholder='Your Organization Address'
                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                onChange={handleChange}
              />
              <label className='text-sm font-medium text-gray-900 mb-2' >Phone Number</label>
              <input 
                type='text' 
                name='PhoneNumber'
                value={formData.PhoneNumber}
                placeholder='Your Full Name'
                className='p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                onChange={handleChange}
              />
              <div className='mt-auto pt-6'>
              <button type='submit' className='w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-xl hover:bg-blue-700 transition-colors duration-200 shadow-md'>
                Complete Registration
              </button>
            </div>
            </form>
          </div>
        </>
      )}
      </div>
    </div>
  )
}

export default CrewRegistration
