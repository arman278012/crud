import React, { createContext, useState } from 'react'
export const AuthContextProvider = createContext();


const AuthoContext = ({ children }) => {

    const [userData, setUserData] = useState([])
    const [showmore, setShowmore] = useState(0)
    return (
        <AuthContextProvider.Provider value={{ userData, setUserData,showmore, setShowmore }}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export default AuthoContext