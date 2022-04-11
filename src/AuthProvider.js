import { createContext, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => { // check to see if its actual user
    const [auth, setAuth] = useState({}); 

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children} 
        </AuthContext.Provider>
    )
}

export default AuthContext;