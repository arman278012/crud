import React, { createContext, useState } from 'react'
export const AuthContextProvider = createContext();

const AuthoContext = ({ children }) => {

    const [userData, setUserData] = useState([])
    const [showmore, setShowmore] = useState(0)
    const [dt, setDt] = useState([])
    return (
        <AuthContextProvider.Provider value={{ userData, setUserData, showmore, setShowmore, dt, setDt }}>
            {children}
        </AuthContextProvider.Provider>
    )
}

export default AuthoContext