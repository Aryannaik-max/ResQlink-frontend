import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react'

export const DriverContext = createContext()


const DriverProvider = ({ children }) => {

    const [driver, setDriver] = useState(null);
    const [isDriver, setIsDriver] = useState(false);
    const [incomingDispatch, setIncomingDispatch] = useState([]);
    const [activeDispatch, setActiveDispatch] = useState(null);

    const toggleDriverStatus = () => {
        const newStatus = driverStatus === 'ONLINE'? 'OFFLINE':'ONLINE'
        setDriverStatus(newStatus);
        if (newStatus === 'OFFLINE' && activeDispatch) {
        setActiveDispatch(null);    
        setIncomingDispatch(null);
      }
    }

    useEffect( () => {
        const fetchUser = async () => {
            const url = `${import.meta.env.VITE_BASE_URL_USER}/api/v1/driver/me`;
            const token = localStorage.getItem('token');
            if(!token) return;
            try {
                const res = await axios.get(url, {
                headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                setDriver(res.data.data);
                setIsDriver(true);
            } catch (error) {
                console.error('Error fetching user:', error);
                setDriver(null);
                setIsDriver(false);
            }
        }

        fetchUser();
    },[]);

    return (
        <div>
            <DriverContext.Provider value={{ driver, setDriver, isDriver, setIsDriver, incomingDispatch, setIncomingDispatch, activeDispatch, setActiveDispatch, toggleDriverStatus }}>
                {children}
            </DriverContext.Provider>
        </div>
    )
}

export default DriverProvider;