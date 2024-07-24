import React, { createContext, useState } from 'react'
import Comp1 from './components/context/Comp1'

const myContext = createContext()
export default function App() {
  const [count,setCount] = useState(0)
  return (
    <div>
      <myContext.Provider value={{count,setCount}}>
         <Comp1 />
      </myContext.Provider>
    </div>
  )
}
export {myContext}