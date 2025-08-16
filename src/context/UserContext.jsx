import axios from 'axios';
import React, { createContext, useContext, useState, useEffect } from 'react'

export const UserContext = createContext()


const UserProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect( () => {
        const fetchUser = async () => {
            const url = `${import.meta.env.VITE_BASE_URL_USER}/api/v1/me`;
            const token = localStorage.getItem('token');
            if(!token) return;
            try {
                const res = await axios.get(url, {
                headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                setUser(res.data.data);
                setIsAuthenticated(true);
            } catch (error) {
                console.error('Error fetching user:', error);
                setUser(null);
                setIsAuthenticated(false);
            }
        }

        fetchUser();
    },[]);

    return (
        <div>
            <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated }}>
                {children}
            </UserContext.Provider>
        </div>
    )
}

export default UserProvider;