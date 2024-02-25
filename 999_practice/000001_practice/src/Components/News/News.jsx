import React from 'react'
import { createElement, useEffect, useState } from 'react'

function News() {
    let [arr, setArr] = useState([]);
  useEffect(() => {
    const apiUrl = "https://www.gamespot.com/api/games/?api_key=986ad2ae746866e2d600d4cbf49b2735608fc336&format=jsonp&json_callback=processData";


    const script = document.createElement('script');


    window.processData = function (data) {
      console.log(data.results);

      arr = data.results;
      setArr(arr);
      console.log(arr);



      document.body.removeChild(script);
      delete window.processData;
    };
    script.src = apiUrl;
    document.body.appendChild(script);
  }, []);

  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(true);
  }
  return (
    <>
    <button className="bg-gray-500" onClick={clickHandler}>Click mee</button>
    {
    clicked && (
      arr.slice(0, 10).map((item, index) => (
        item.description !== "" && (  
         <>
         <br/>
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img class="w-full" src={item.image.square_small} alt="Sunset in the mountains"></img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base" key={index}> Data is:  {item.description.split(' ').slice(0, 10).join(' ')}..</p>
            </div>
          </div>
          
         </>
        )
      )))
    }
    
    </>
  )
}

export default News