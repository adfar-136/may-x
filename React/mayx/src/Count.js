import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, setBgColor } from './components/Redux/action'

export default function Count() {
    const count = useSelector((state)=>state.count)
    const bgColor = useSelector((state)=>state.bgColor)
    console.log(bgColor)
    const dispatch = useDispatch()
  return (
    <div style={{backgroundColor:bgColor.backgroundColor}}>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch(increment())}>+++</button>
        <button onClick={()=>dispatch(decrement())}>---</button>
        <button onClick={()=>dispatch(setBgColor("blue"))}>Blue</button>

    </div>
  )
}
