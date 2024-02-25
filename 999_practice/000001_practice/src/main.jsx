import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from  './Components/Layout.jsx'
import Home from  './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import News from './Components/News/News.jsx'

import{Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'

const router=createBrowserRouter(
  createRoutesFromElements(
 <>
    <Route path="/" element={<Layout/>} >
      <Route path=''  element={<Home/>} />
      
      <Route path='about'  element={<About/>} > 
      <Route path='news'  element={<News/>} />
       </Route>
    </Route>
    
 </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
   <>
    <RouterProvider router={router}/>
   </>
 
)
