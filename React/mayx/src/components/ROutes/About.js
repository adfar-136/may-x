import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function About() {
    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate('/contact')
    }
  return (
    <div>
        <Navbar/>
         <h1>ABout's Componnet</h1>
         <button onClick={handleNavigate}>Contact</button>
    </div>
  )
}
