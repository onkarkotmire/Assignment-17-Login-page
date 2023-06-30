import { createContext, useState } from "react";

let AuthContext = createContext()

export default AuthContext;

export function CustomContextProvider({children}){
    const[isLoggedIn, setisLoggedIn]=useState(false)

     const login = () => {
      setisLoggedIn(true)
     }

     const home = () => {
      setisLoggedIn(false)
     }

     return (
        <AuthContext.Provider value={{isLoggedIn,login,home}}>
            {children}
        </AuthContext.Provider>
     )
}