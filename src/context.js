import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [repeatePassword, setRepeatePassword] = useState("")


    return <AppContext.Provider value={{
        email, setEmail, password, setPassword, repeatePassword, setRepeatePassword
    }}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}