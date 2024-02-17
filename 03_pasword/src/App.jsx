
import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [number,setNumber]=useState(false);
  const [char,setChar]=useState(false);
  const [password,setPassword]=useState("");
  const pwd_generator= useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str+="0123456789";
    if (char) str+="!@#$%^&*()";
    for(let i=1;i<=length;i++){
      let token= Math.floor((Math.random()*str.length) +1);
      pass +=str.charAt(token);
    }
    setPassword(pass);
  },[length,number,char]);
  useEffect(()=>{
    pwd_generator();
  },[length,number,char,pwd_generator])

  return (
    <>
      <input type='text'placeholder='password' value={password} readOnly /> <button>Copy</button> <br/><br/>
      <input  type='range' onChange={(e)=>{setLength(e.target.value)}} min={6} max={100} /> <label >Length ({length})</label><br/><br/>
      <input type="checkbox" onChange={()=>{
        setNumber((prev)=>!prev)
      }} /> <label >Number</label> <br/><br/>
      <input type="checkbox" onChange={()=>{
        setChar((prev)=>!prev)
      }} /><label >Special Charachter</label>  <br/>


    </>
  )
}

export default App
