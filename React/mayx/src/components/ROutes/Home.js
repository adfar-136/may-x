import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [count,setCount] = useState(0)
    const navigate = useNavigate()
  return (
    <div>
        <Navbar/>
         <button onClick={()=>navigate(-1)}>Prev</button>
         <h1>Home's Componnet</h1>
         <h1>COunt:{count}</h1>
    <button onClick={()=>setCount(count+1)}>+</button>
    </div>
  )
}
