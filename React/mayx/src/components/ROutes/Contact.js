import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
    const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
         <h1>Contact's Componnet</h1>
         <button onClick={()=>navigate("/about")}>About</button>
    </div>
  )
}
