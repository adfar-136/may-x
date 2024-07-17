import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/ROutes/Home'
import About from './components/ROutes/About'
import Contact from './components/ROutes/Contact'
import Users from './components/ROutes/Users'
import Adfar from './components/ROutes/Adfar'
import UserDetails from './components/ROutes/UserDetails'
import Adhaar from './components/ROutes/Adhaar'

export default function App() {

  return (
    <>
    
    <BrowserRouter>

       <Routes>
         <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='/users' element={<Users/>}/>
         <Route path='/users/:id' element={<UserDetails/>}/>
         <Route path='/users/:id/adhaar/:no' element={<Adhaar/>}/>
         <Route path='/contact/adfar' element={<Adfar/>}/>
       </Routes>
    </BrowserRouter>
    </>
    
  )
}
