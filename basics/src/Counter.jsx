import { useState } from "react";

function Counter(){

const [count,setCounter]=useState(15);
function increase(){
    count =count +1;
    setCounter(count);
    console.log("New count is",count);
}

function decrease(){
    count =count -1
    setCounter(count);
    console.log("New count is",count);
}

    

    return(
   <>
   <h1>Count is {count}</h1>
   <button onClick={increase} >Incarese Counter </button>
   <br></br>
   <br></br>
   <button onClick={decrease} > Decrease Counter </button>
   </>
);

}

export default Counter;