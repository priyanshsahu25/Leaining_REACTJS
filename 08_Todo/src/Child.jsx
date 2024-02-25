import React from 'react'
import useData from './Context/DataContext'


function Child() {
    const {str,addData}=useData();
    
  return (
  <>
  <h1>{str}</h1> 
  </>
  )
}

export default Child