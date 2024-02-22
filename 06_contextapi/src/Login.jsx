import React from 'react'
import { useState,useContext } from 'react'
import UserContext from './context/UserContext';

function Login() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const {setUser}=useContext(UserContext);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setUser(username);
    }
  return (
    <>
    <input type='text' value={username} onChange={(e)=> setUsername(e.target.value)} placeholder='user name'/>
    <input type='text' value={password} onChange={(e)=> setPassword(e.target.value)} placeholder='password'/>
    <button onClick={handleSubmit}> SUbmit</button>
    </>
  )
}

export default Login