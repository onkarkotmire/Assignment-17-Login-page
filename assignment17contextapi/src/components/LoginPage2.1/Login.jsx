//Using the context API 

import React, { useState } from 'react'
import { useContext } from 'react'
import AuthContext from './Context'

export default function Login() {
    const{login} = useContext(AuthContext)
    const[user, setUser] = useState({
       username: "",
       password: "",
    })

    const verifyCredentials = () =>{
        if(user.username === "onkar" && user.password === "onkar@123"){
            login()
        }else{
            alert("Enter proper login credentials")
        }
    }
    
  return (
    <div style={{width:"400px", height: "200px",boxShadow:"0 0 10px black", display:"flex", flexDirection:"column",alignItems:"center", justifyContent:"space-around", marginLeft:"450px", marginTop:"100px"}}>
      <div style={{display:"flex", gap:"10px"}}>
      <h3>UserName</h3>
      <input type="text" onChange={(e)=>{
       setUser({
        ...user,
        username: e.target.value,
       })
      }}/>
      </div>
      <div style={{display:"flex",gap:"10px"}}>
      <h3>Password</h3>
      <input type="password" onChange={(e)=>{
      setUser({
        ...user,
        password: e.target.value,
       })
      }}/>
      </div>
     <button style={{padding:"10px"}} onClick={verifyCredentials}>Login</button>
    </div>
  )
}