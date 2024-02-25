import React, { useContext, useState } from 'react'
import useUI, { UIContextProvider } from './Context/UIContext'
import A from './A';




const App1 = () => {
    const {str}=useUI();
    const addUI =()=>{
        console.log('add UI is called');
    }

  return (
  <UIContextProvider value={{str,addUI}}>
        <A/>
  </UIContextProvider>

  )
}

export default App1