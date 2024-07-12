import React, { useEffect, useState } from 'react'

export default function App() {
  const [count,setCount] =useState(0)
 
  useEffect(()=>{
    function fun(){
      console.log("Adfar")
    }
    document.addEventListener("click",fun)
    return ()=>{
      document.removeEventListener("click",fun)
    }
  }) 
  return (
    <div>
      <h1>React App</h1>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      
    </div>
  )
}
