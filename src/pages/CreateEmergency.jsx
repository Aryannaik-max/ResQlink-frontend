import React from 'react'
import logo from '../assets/logo.png'

const CreateEmergency = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
       <div className='bg-white rounded-2xl w-[90%] md:w-[70%] lg:w-[40%] min-h-[93%] flex flex-col justify-center items-center px-10 pb-2 shadow-black shadow-2xl'>
         <div className='flex flex-col items-center mb-5 justify-center'>
            <img src={logo} alt='ResQlink Logo' className='w-20' />
            <h2 className='text-3xl font-bold text-gray-900 pl-10'>Report an Emergency</h2>
         </div>
         <hr className='border-gray-300 mb-4 w-full' />
         <div className='w-full flex flex-col'>
            <form  className='flex flex-col space-y-4'>
                <label className='text-lg font-medium text-gray-900 mb-2'>Emergency Type</label>
                <div className='flex flex-wrap '>
                  <label className='flex items-center mr-6 '>
                    <input type='radio' 
                      name='emergencyType'
                      value={'fire'}
                      // checked={emergencyType === 'medical'}
                      // onChange={(e) => setEmergencyType(e.target.value)}
                      className='mr-2 text-blue-500' 
                    />
                    <span className='text-gray-700'>Fire</span>
                  </label>
                  <label className='flex items-center mr-6 '>
                    <input 
                      type='radio' 
                      name='emergencyType'
                      value={'medical'}
                      // checked={emergencyType === 'medical'}
                      // onChange={(e) => setEmergencyType(e.target.value)}
                      className='mr-2 text-blue-500'
                    />
                    <span className='text-gray-700'>Medical</span>
                  </label>
                  <label className='flex items-center mr-6 '>
                    <input type='radio' 
                    name='emergencyType'
                    value={'security'}
                    // checked={emergencyType === 'medical'}
                    // onChange={(e) => setEmergencyType(e.target.value)}
                    className='mr-2 text-blue-500'
                     />
                    <span className='text-gray-700'>Security</span>
                  </label>
                  <label className='flex items-center mr-6 '>
                    <input type='radio' 
                    name='emergencyType'
                    value={'other'}
                    // checked={emergencyType === 'medical'}
                    // onChange={(e) => setEmergencyType(e.target.value)}
                    className='mr-2 text-blue-600'
                     />
                    <span className='text-gray-700'>Other</span>
                  </label>
                </div>
                <label className='text-lg font-medium text-gray-900 mb-2'>Location</label>
                <div className='flex items-center space-x-5 mb-2'>
                  <input 
                    type='text' 
                    placeholder='Enter your location'
                    className='w-[80%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  />
                  <button className='border-2 rounded-xl text-sm h-12 w-[20%] bg-blue-600 text-white hover:bg-blue-700'>Current Location</button>
                </div>
                <div className='w-[100%] bg-gray-300 h-60 rounded-lg mb-4 flex items-center justify-center'>
                  <p className='text-gray-600'>Map Placeholder</p>
                </div>
                <label className='text-lg font-medium text-gray-900 mb-2'>Description</label>
                <textarea
                  placeholder='Describe the emergency...'
                  className='w-full h-30 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  // value={description}
                  // onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <label className='text-lg font-medium text-gray-900 mb-2'>Contact Number</label>
                <input
                  type='text'
                  placeholder='Enter your contact number'
                  className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600'
                  // value={contactNumber}
                  // onChange={(e) => setContactNumber(e.target.value)}
                />
                <button className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200'>
                  Submit Emergency
                </button>
            </form>
         </div>
       </div>
    </div>
  )
}

export default CreateEmergency
