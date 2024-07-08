import React from 'react'
import Counter from './components/Counter';

export default function App() {
  let count = 0;
  function handleAdd(){
    console.log("adfar")
    count++;
  }
  return (
    <div>
      <Counter/>
      <h1>Count: {count}</h1>
      <button onClick={handleAdd}>Add One</button>
    </div>
  )
}
