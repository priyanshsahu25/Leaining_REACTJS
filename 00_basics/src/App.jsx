import { useEffect, useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10);
  const Inc =()=>{
    counter = counter+ 1;
    // console.log("count is",counter);
    setCounter(counter);
  }
  useEffect (()=>{
    console.log("Counter inrease");
  },[])

  return (
    <>
    <h1>Count is {counter}</h1>
    <button onClick={Inc} style={{backgroundColor:"black", color:"white"}}>Incaresae</button>
    </>
      
  )
}

export default App
