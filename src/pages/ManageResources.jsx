import React, { useState } from 'react'

const ManageResources = () => {

    const [driverData, setDriverData] = useState([
        {
            drivername: 'aryan',
            employeeId: 'EMP123',
            dateOfBirth: '1990-01-01',
            licenseNumber: 'LIC456',
            insuranceExpiryDate: '2024-12-31',
            medicalCertNumber: 'MED789',
            medicalCertExpiryDate: '2025-01-01',
            phoneNumber: '1234567890',
            email: 'email@gmail.com',
            verificationStatus: 'Pending'
        },{
            drivername: 'aryan',
            employeeId: 'EMP123',
            dateOfBirth: '1990-01-01',
            licenseNumber: 'LIC456',
            insuranceExpiryDate: '2024-12-31',
            medicalCertNumber: 'MED789',
            medicalCertExpiryDate: '2025-01-01',
            phoneNumber: '1234567890',
            email: 'email@gmail.com',
            verificationStatus: 'Pending'
    }]);


  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900 overflow-hidden'>
        <div className='bg-white rounded-2xl shadow-black shadow-2xl h-[90%] w-[70%] p-5 overflow-auto'>
            <div className='flex justify-between itmes-center'>
                <div className='flex items-center m-5 '>
                    <span className='text-3xl font-semibold text-gray-800'>Manage Resources</span>
                </div>
             </div>
             <hr className='border-gray-300 mb-4 w-full' />   
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 flex-grow'>
                <div className='flex flex-col  h-full p-5 border-2 rounded-2xl'>
                    <div className='flex justify-between items-center mb-5'>
                        <span className='text-2xl font-semibold '>Add New Ambulance</span>
                    </div>
                    <form className='flex flex-col '>
                        <label className=''>Registration Number</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='registrationNumber'
                            // onChange={handleChange}
                        />
                        <label className=''>VIN (Vehical Id Number)</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='vehicalIdNumber'
                            // onChange={handleChange}
                        />
                        <label className=''>Ambulance Type</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='ambulanceType'
                            // onChange={handleChange}
                        />
                        <label className=''>Patient Capacity</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='patientCapacity'
                            // onChange={handleChange}
                        />
                        <label className=''>Status</label>
                        <select name="" id="" className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'>
                            <option>Available</option>
                            <option>Unavailable</option>
                        </select>
                        <label className=''>Insurance Expiry Date</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='insuranceExpiryDate'
                            // onChange={handleChange}
                        />
                        <label className=''>Last Maintenance Date</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='lastMaintenanceDate'
                            // onChange={handleChange}
                        />
                        <button type='submit' className='w-full rounded-xl h-[50px] text-white bg-blue-700 font-semibold '>Add Ambulance</button>
                    </form>
                    <div>
                        {driverData.map((driver, index)=>(
                            <div key={index} className='border-b border-gray-300 py-2'>
                                <p><strong>Name:</strong> {driver.drivername}</p>
                                <p><strong>Employee ID:</strong> {driver.employeeId}</p>
                                <p><strong>Date of Birth:</strong> {driver.dateOfBirth}</p>
                                <p><strong>License Number:</strong> {driver.licenseNumber}</p>
                                <p><strong>Insurance Expiry Date:</strong> {driver.insuranceExpiryDate}</p>
                                <p><strong>Medical Cert. Number:</strong> {driver.medicalCertNumber}</p>
                                <p><strong>Medical Cert. Expiry Date:</strong> {driver.medicalCertExpiryDate}</p>
                                <p><strong>Phone Number:</strong> {driver.phoneNumber}</p>
                                <p><strong>Email:</strong> {driver.email}</p>
                                <p><strong>Status:</strong> {driver.verificationStatus}</p>
                            </div>
                        ))}
                    </div>

                </div>
                <div className='flex flex-col  h-full p-5 border-2 rounded-2xl overflow-y-auto'>
                    <div>
                        <span className='text-2xl font-semibold '>Add New Driver</span>
                    </div>
                    <form className='flex flex-col '>
                        <label className=''>Driver Name</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='driverName'
                            // onChange={handleChange}
                        />
                        <label className=''>Employee Id</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='employeeId
                            // onChange={handleChange}
                        />
                        <label className=''>Date Of Birth</label>
                        <input 
                            type='date'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='dateOfBirth'
                            // onChange={handleChange}
                        />
                        <label className=''>License Number</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='licenseNumber'
                            // onChange={handleChange}
                        />
                        <label className=''>Insurance Expiry Date</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='insuranceExpiryDate'
                            // onChange={handleChange}
                        />
                        <label className=''>Medical Cert. Number (EMT/Paramedi)</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='lastMaintenanceDate'
                            // onChange={handleChange}
                        />
                        <label className=''>Medical Cert. Expiry Date</label>
                        <input 
                            type='date'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='lastMaintenanceDate'
                            // onChange={handleChange}
                        />
                        <label className=''>Phone Number</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='lastMaintenanceDate'
                            // onChange={handleChange}
                        />
                        <label className=''>Email</label>
                        <input 
                            type='text'
                            className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'
                            placeholder='Enter Registration Number'
                            // value={}
                            // name='lastMaintenanceDate'
                            // onChange={handleChange}
                        />
                        <label className=''>Verification Status</label>
                        <select className='p-3 my-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 w-full'>
                            <option>Pending</option>
                            <option>Verified</option>
                            <option>Rejected</option>
                        </select>
                        <button type='submit' className='w-full rounded-xl h-[50px] text-white bg-blue-700 font-semibold '>Add</button>
                    </form>
                    <div>
                        {driverData.map((driver, index)=>(
                            <div key={index} className='border-b border-gray-300 py-2'>
                                <p><strong>Name:</strong> {driver.drivername}</p>
                                <p><strong>Employee ID:</strong> {driver.employeeId}</p>
                                <p><strong>Date of Birth:</strong> {driver.dateOfBirth}</p>
                                <p><strong>License Number:</strong> {driver.licenseNumber}</p>
                                <p><strong>Insurance Expiry Date:</strong> {driver.insuranceExpiryDate}</p>
                                <p><strong>Medical Cert. Number:</strong> {driver.medicalCertNumber}</p>
                                <p><strong>Medical Cert. Expiry Date:</strong> {driver.medicalCertExpiryDate}</p>
                                <p><strong>Phone Number:</strong> {driver.phoneNumber}</p>
                                <p><strong>Email:</strong> {driver.email}</p>
                                <p><strong>Status:</strong> {driver.verificationStatus}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageResources
