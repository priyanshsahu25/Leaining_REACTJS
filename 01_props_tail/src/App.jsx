import './App.css'
import Card from './Components/Card'
function App() {
  let username=["priyansh","Jivesh"];
  let btn_msg=["Welcome"];
  return (
    <>
    <button className='bg-black mb-4 text-white'> CLick me....</button>
    {
   username.map((value)=>(
    <Card username={value} key={value} />
    // console.log(value);
   ))
   }

    
    
    
    
    
    
    </>






  );
}

export default App
