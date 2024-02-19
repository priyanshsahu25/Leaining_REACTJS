import React, { useEffect, useState } from 'react'

const useCurrencyinfo = ({currency="usd"}) => {

const [data,setData]=useState([]);

useEffect(()=>{
    const getData=async ()=>{
        let URL = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        let data= await URL.json();
        setData(data[currency]);
        // console.log(data);
    }
    getData();
   

},[currency]);

  return data;
}

export default useCurrencyinfo