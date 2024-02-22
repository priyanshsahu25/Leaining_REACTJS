import './App.css'
import UserContextProivder from './context/UserContextProivder'
import Login from './Login'
import Profile from './Profile'

function App() {


  return (
    <>
     <UserContextProivder>
     <Profile/>
      <Login/>
      
     </UserContextProivder>
    </>
  )
}

export default App
