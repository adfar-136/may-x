import React, { useContext } from 'react'
import { myContext } from '../../App'
export default function Comp3() {
    const value = useContext(myContext)
    console.log(value)
  return (
    <div>
        <h1>Hello {value.count}</h1>
        <button onClick={()=>value.setCount(value.count+1)}>+++</button>
    </div>
  )
}
