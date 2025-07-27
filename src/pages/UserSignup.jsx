import React ,{ useState } from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const UserSignup = () => {
  
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
          email:'',
          password:'',
          name:'',
          phoneNumber:''
  });

  const handelChange =  (e) => {
    e.preventDefault();
    const {name, value} = e.target;
    setUserData(prevData => ({ ...prevData, [name]: value }));
  }

  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL_USER}/api/v1/createUser`, userData);
    console.log(response);
    navigate('/dashboard')
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-tl from-gray-700 to-gray-900'>
          <div className='border-2 bg-white  w-[25%] h-[70%] rounded-2xl flex  items-center flex-col p-10 pb-20 shadow-black shadow-2xl'>
            <img src={logo} alt='logo' className='w-40' />
            <h2 className='text-2xl font-semibold mb-5'>Create your ResQlink account</h2>
              <form onSubmit={handelSubmit} className='h-[100%] flex flex-col'>
                <div className='flex flex-col items-center justify-around space-y-3 h-[70%]'>
                  <input type='text' name='email' value={userData.email} placeholder='Email' className='w-80 h-15 rounded-lg px-3  border-2 border-black' onChange={handelChange} />
                  <input type='password' name='password' value={userData.password} placeholder='Password' className='w-80 h-15 rounded-lg px-3  border-2 border-black' onChange={handelChange} />
                  <input type='text' name='name' value={userData.name} placeholder='Name' className='w-80 h-15 rounded-lg px-3  border-2 border-black' onChange={handelChange}  />
                  <input type='text' name='phoneNumber' value={userData.phoneNumber}placeholder='Phone Number' className='w-80 h-15 rounded-lg px-3  border-2 border-black' onChange={handelChange}  />
                </div>
            <div>
                <button className='bg-blue-600 hover:bg-blue-700 text-white w-80 h-13 rounded-lg mt-5 border-2 ' type='submit'>SignUp</button>
            </div>
                
              </form>
                <div className='flex flex-col items-center'>
                    <p className='mt-2'>Already have an account? <a href='/login' className='text-blue-500'>Login</a></p>
                </div>
          </div>
        </div>
  )
}

export default UserSignup
