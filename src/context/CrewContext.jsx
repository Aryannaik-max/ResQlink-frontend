import React, { createContext, useState } from 'react'

export const CrewDataContext = createContext()


const CrewContext = ({ children }) => {

    const [ crew, setCrew ] = useState({
        orgName:'',
        email: '',
        name:'',
        role:'DRIVER',
        phoneNumber:''
    })

    return (
        <div>
            <CrewDataContext.Provider value={{ crew, setCrew }}>
                {children}
            </CrewDataContext.Provider>
        </div>
    )
}

export default CrewContext