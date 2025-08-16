import React, { useState } from 'react'
import logo from '../assets/logo.png'

const Profile = () => {

    const [userData, setUserData] = useState({
            name: 'Aryan Naik',
            email: 'aryannaik365@gmail.com',
            phoneNumber: '1234567890',
            address: 'kurla, kajupada, pipeline road, mumbai, maharashtra',
            emergencyContacts: '8652149377',
            medicalHistory: '',  
    });


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
      <div className='bg-white h-[95%] w-[40%] rounded-2xl shadow-black shadow-2xl p-10 overflow-auto'>
        <div className='flex flex-col w-[100%] justify-center items-center pb-5'>
            <img src={logo} alt='logo' className='w-30' />
            <h2 className='text-3xl font-bold text-gray-900'>My Profile</h2>
        </div>
        <hr className='border-gray-300 mb-4 w-full '/>
        <div className='w-full flex flex-col'>
          <form className='flex flex-col'>
            <div className='flex flex-col my-2'>
              <label className='text-lg font-medium text-gray-900 mb-5'>Basic Information</label>
                <label className='text-sm font-medium text-gray-900 ' >Name</label>
                <input 
                  type='text' 
                  name='name'
                  value={userData.name}
                  className='p-3 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'  
                  readOnly
                />
                <label className='text-sm font-medium text-gray-900 ' >Email Address</label>
                <input 
                  type='text' 
                  name='email'
                  value={userData.email}
                  className='p-3 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'  
                  readOnly
                />
            </div>
            <div className='flex flex-col'>
              <div className='flex flex-col my-2'>
                <label className='text-lg font-medium text-gray-900 mb-2'>Phone Number</label>
                <input 
                  type='text' 
                  name='phoneNumber'
                  value={userData.phoneNumber}
                  className='p-3 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                  readOnly  
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-lg font-medium text-gray-900 mb-2'>Address</label>
                <input 
                  type='text' 
                  name='address'
                  value={userData.address}
                  className='p-3 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'  
                  readOnly
                />
              </div>
              <div className='flex flex-col my-2'>
                <label className='text-lg font-medium text-gray-900 mb-2'>Emergency Contacts</label>
                  <input 
                  type='text' 
                  name='emergencyContacts'
                  value={userData.emergencyContacts}
                  className='p-3 my-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 w-full'
                  readOnly  
                />
              </div>
              <div className='w-full flex justify-center items-center mt-2'>
                <button className='border-2 p-2 rounded-xl'>Edit Profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile
