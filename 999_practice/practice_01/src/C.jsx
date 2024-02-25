import React from 'react'
import useUI from './Context/UIContext'

function C() {
    const {str,addUI}=useUI();
  return (
    <>
    <button onClick={addUI} > Text is {str}</button>
    </>
    
  
    
  )
}

export default C