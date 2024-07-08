import React, { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(10)
    const [bgroundColor,setBackgroundColor] = useState("pink")
    function handleIncrement(){
        setCount(count+1)
    }
    
  return (
    <div style={{
        color: 'red',
        fontSize: '30px',
        backgroundColor:bgroundColor
    }}>
        <button onClick={()=>setBackgroundColor("red")}>Red</button>
        <button onClick={()=>setBackgroundColor("blue")}>Blue</button>
        <button onClick={()=>setBackgroundColor("gray")}>Gray</button>
        <button onClick={()=>setBackgroundColor("green")}>Green</button>
        <h1>Counter :{count}</h1>
        <button onClick={handleIncrement}>Increment Counter</button>
    </div>
  )
}
