


import { useEffect, useState } from "react";

function useCurrencyinfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
 
        const response = await fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
        const newData = await response.json();
        setData(newData[currency]);
     
    };

    fetchData(); // Invoke the inner function immediately
  }, [currency]);


  return data;
}

export default useCurrencyinfo;
