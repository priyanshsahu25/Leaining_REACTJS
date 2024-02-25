import { useEffect, useState,useRef } from 'react'

import './App.css'

function App() {

  let a= useRef(0);
  const btnRef=useRef();
  let [count, setCount] = useState(0);
  const IncreaseHanlder=()=>{
    count++;
    setCount(count);
  }
  const DecreaseHanlder=()=>{
    count--;
    setCount(count);
  }
  useEffect(()=>{
    console.log("Value of a is " , a.current);
    if(a.current%2===0) btnRef.current.style.backgroundColor="red";
    else btnRef.current.style.backgroundColor="yellow";
    a.current++;

  },[count]);

  return (
    <>
    <h1>The count is {count}</h1>
    <button ref={btnRef} onClick={IncreaseHanlder}>Increase +</button> {"    "}
    <button onClick={DecreaseHanlder}>Decrease -</button>
    </>
  )
}

export default App
