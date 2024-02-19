import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {userid} =useParams();
    // useParams return object to exrtract any particular key we use {}
    // console.log(useParams());
    // console.log(userid);
  return (
    <>
    <h3> User: {userid} </h3>
    </>
  )
}

export default User