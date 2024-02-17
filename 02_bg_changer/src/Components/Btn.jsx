import React from 'react'

const Btn = ({btn_name, color_name}) => {
    const change_bg=()=>{
        let bg=document.querySelector('body');
        bg.style.backgroundColor=color_name;
      }

  return (
    <>
    <button className='mr-2' style={{backgroundColor:btn_name, color:"cyan"}} onClick={change_bg}>{btn_name}</button>
    </>
  )
}

export default Btn