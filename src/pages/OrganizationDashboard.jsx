import React, { useState } from 'react'
import logo from '../assets/logo.png'

const OrganizationDashboard = () => {
  const [organizationData, setOrgainzationData] = useState({
    organizationType: 'HOSPITAL',
    verifiedStatus: true,
    totalAmbulance: 50,
    bedsAvailable: 20
  });
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
        <div className='bg-white rounded-2xl shadow-black shadow-2xl h-[80%] w-[60%] p-5 overflow-auto'>
            <div className='flex justify-between itmes-center'>
                <div className='flex items-center '>
                    <img src={logo} className='w-20'/>
                    <span className='text-3xl font-semibold text-gray-800'>Welcome, Aryan Naik</span>
                </div>
                <div className='flex items-center justify-center  w-[20%] border-black'>
                   <button className='border-2 h-[40px] w-[100px] rounded-xl'>Log Out</button>
                </div>
            </div>
            <hr className='border-gray-300 mb-4 w-full' />
            <div className=' grid grid-cols-3 w-full h-[80%] '>
              <div className='flex justify-center items-center '>
                <div className='h-[90%] w-[90%] flex flex-col items-center rounded-2xl p-5 border-2 '>
                  <div className='font-bold text-2xl w-full   pb-5'>Organization Overview</div>
                  <div className='flex flex-col w-full '>
                    <span>Type: HOSPITAL</span>
                    <span>Status: VERIFIED</span>
                    <span>Total Ambulances: 50</span>
                    <span>Beds Available: 150</span>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center '>
                <div className='h-[90%] w-[90%] flex flex-col items-center justify-between rounded-2xl px-2 py-5 border-2'>
                  <div className=' w-full '>
                    <div className='font-bold text-xl w-full pl-2 pb-5'>Resource Management</div>
                    <div className='flex flex-col w-full pl-2'>
                      <span className='mb-3'>Manage your ambulance vehicles and medical crew.</span>
                      <div className='flex flex-col '>
                        <span>Active Ambulance: 50</span>
                        <span>Verified Drivers: 150</span>
                      </div>
                    </div>
                  </div>
                  <button className='w-[80%] rounded-xl border-2 h-10'>Manage Resources</button>
                </div>
              </div>
              {organizationData.organizationType==='HOSPITAL'?(
                <div className='flex justify-center items-center '>
                <div className='h-[90%] w-[90%] flex flex-col items-center justify-between rounded-2xl px-2 py-5 border-2'>
                  <div className=' w-full '>
                    <div className='font-bold text-2xl w-full pl-2 pb-5'>Hospital Services</div>
                    <div className='flex flex-col w-full pl-2'>
                       <span className='mb-3'>Manage hospital details.</span>
                    </div>
                  </div>
                  <button className='w-[80%] rounded-xl border-2 h-10'>Update Details</button>
                </div>
              </div>
              ):null}
              <div className=' flex justify-center items-center '>
                <div className='h-[90%] w-[90%] flex flex-col items-center justify-between rounded-2xl px-2 py-5 border-2'>
                  <div className=' w-full '>
                    <div className='font-bold text-2xl w-full pl-2 pb-5'>Dispatch History</div>
                    <div className='flex flex-col w-full pl-2'>
                      <span className='mb-3'>View all emergency dispatches assigned to your organization.</span>
                      <div className='flex flex-col '>
                        <span>Total Dispatch: 50</span>
                      </div>
                    </div>
                  </div>
                  <button className='w-[80%] rounded-xl border-2 h-10'>View History</button>
                </div>
              </div>
              <div className=' flex justify-center items-center'>
                <div className='h-[90%] w-[90%] flex flex-col items-center justify-between rounded-2xl px-2 py-5 border-2'>
                  <div className=' w-full '>
                    <div className='font-bold text-2xl w-full pl-2 pb-5'>Organization Profile</div>
                    <div className='flex flex-col w-full pl-2'>
                      <span className='mb-3'>View and update your organization's registered details.</span>
                    </div>
                  </div>
                  <button className='w-[80%] rounded-xl border-2 h-10'>Edit Organization</button>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default OrganizationDashboard
