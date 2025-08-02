import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const DriverDashboard = () => {
    const [driverStatus, setDriverStatus] = useState('ONLINE');
    const [activeDispatch, setActiveDispatch] = useState(null);
    const [incomingDispatch, setIncomingDispatch] = useState(null);




    const toggleOnlineStatus = () => {
        const newStatus = driverStatus === 'ONLINE'? 'OFFLINE':'ONLINE'
        setDriverStatus(newStatus);
        if (newStatus === 'OFFLINE' && activeDispatch) {
        setActiveDispatch(null); 
        setIncomingDispatch(null);
      }
    }


    










  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
        <div className='bg-white rounded-2xl shadow-black shadow-2xl h-[80%] w-[60%] p-5 overflow-auto'>
            <div className='flex justify-between itmes-center'>
                <div className='flex items-center '>
                    <img src={logo} className='w-20'/>
                    <span className='text-3xl font-semibold text-gray-800'>Welcome, Aryan Naik</span>
                </div>
                <div className='flex items-center justify-between  w-[30%] border-black'>
                   {
                    <div className='flex items-center justify-evenly w-[100%]'>
                       <div> Status: {driverStatus} </div>
                       <button className='border-2 h-[40px] w-[100px] rounded-xl' onClick={toggleOnlineStatus}> Go {driverStatus==='ONLINE'? 'OFFLINE':'ONLINE'} </button>
                    </div>
                    }
                   <button className='border-2 h-[40px] w-[100px] rounded-xl'>Log Out</button>
                </div>
            </div>
            <hr className='border-gray-300 mb-4 w-full' />
            {!incomingDispatch? (
                <div className='flex justify-center items-center flex-col  h-[40%] text-xl text-gray-500 font-semibold'>
                    <span>No active dispatch</span>
                    <span>waiting for emergency....</span>
                </div>
            ):(
                <div className='flex justify-center items-center flex-col  h-[55%] text-xl text-gray-500 font-semibold'>
                    <div className='flex flex-col justify-between items-center border-2 rounded-2xl h-[80%] p-2 '>
                        <div className='flex flex-col justify-center h-[100%] p-5  '>
                            <span>Emergency Type: FIRE</span>
                            <span>Address: Kurla, Kajupada, pipeline road, mumbai, maharashtra</span>
                            <span> Patients : 2</span>
                        </div>
                        <button className='border-2 bg-red-600 text-white font-semibold text-xl w-40 rounded-xl h-12'>ACCEPT</button>
                    </div>
                </div>
            )
            }
            <div className='w-[100%] bg-gray-300 h-72 rounded-lg mb-4 flex items-center justify-center'>
                  <p className='text-gray-600'>Map</p>
            </div>
            <div className='flex w-full justify-center items-center  '>
            <Link to='/driver-profile' className=' border-2 p-2 '>Your Profile</Link>
            </div>
        </div>
    </div>
  )
}

export default DriverDashboard
