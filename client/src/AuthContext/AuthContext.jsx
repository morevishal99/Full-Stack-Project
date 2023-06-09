import React from "react"
import { useState } from "react"
export const AuthContext = React.createContext();
function AuthContextProvider({ children }) {
    const [state, setState] = useState({
        isAuth: true,
        token: null
    })
    const loginUser = (token) => {
        setState({ ...state, isAuth: true, token: token })
    }
    const logoutUser = () => {
        setState({ ...state, isAuth: false, token: null })
    }
    return (
        <>
            <AuthContext.Provider value={{ authState: state,  }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthContextProvider;