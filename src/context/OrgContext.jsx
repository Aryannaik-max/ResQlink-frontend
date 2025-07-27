import React, { createContext, useState } from 'react'

export const OrgDataContext = createContext()


const OrgContext = ({ children }) => {

    const [ org, setOrg ] = useState({
        type:'',
        email: '',
        name:'',
        role:'',
        phoneNumber:'',
        registrationNumber:'',
        registrationCertificate:'',
        address:''
    })

    return (
        <div>
            <OrgDataContext.Provider value={{ org, setOrg }}>
                {children}
            </OrgDataContext.Provider>
        </div>
    )
}

export default OrgContext