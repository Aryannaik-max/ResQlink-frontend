import React, { createContext, useState, useEffect, useContext} from 'react'
import axios from 'axios';



export const OrgContext = createContext()

const OrgProvider = ({ children }) => {

    const [orgDetails, setOrgDetails] = useState(null);
    const [isOrganization, setIsOrganization] = useState(true);

    useEffect( () => {
        const fetchUser = async () => {
            const url = `${import.meta.env.VITE_BASE_URL_USER}/api/v1/organization/me`;
            const token = localStorage.getItem('orgtoken');
            if(!token) return;
            try {
                const res = await axios.get(url, {
                headers: {
                        authorization: `Bearer ${token}`
                    }
                });

                setOrgDetails(res.data.data);
                setIsOrganization(true);
            } catch (error) {
                console.error('Error fetching user:', error);
                setOrgDetails(null);
                setIsOrganization(false);
            }
        }

        fetchUser();
    },[]);

    return (
        <div>
            <OrgContext.Provider value={{ orgDetails, setOrgDetails, isOrganization, setIsOrganization }}>
                {children}
            </OrgContext.Provider>
        </div>
    )
}

export default OrgProvider;