import {useRef} from 'react'

function App() {
  
  const getdata = () => {
    // Define the API URL
    const apiUrl = "https://www.gamespot.com/api/games/?api_key=986ad2ae746866e2d600d4cbf49b2735608fc336&format=jsonp&json_callback=processData";
  
    // Create a script element
    const script = document.createElement('script');
  
    // Define the callback function
    window.processData = function(data) {
      console.log(data.results);
      let arr = data.results;
      arr.forEach(element => (
        console.log(element.description)
      ));
  
      // Clean up: remove the script tag and callback function
      document.body.removeChild(script);
      delete window.processData;
    };
  
    // Set the script source to the API URL
    script.src = apiUrl;
  
    // Append the script tag to the document to initiate the JSONP request
    document.body.appendChild(script);
  };
  

  
 
  return (
    <>
    <button  className='bg-green-500'  onClick={getdata}> Get dataaaa </button>
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-black-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    
    </>
  )
}

export default App