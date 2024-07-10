import React, { useState } from 'react'

export default function App() {
  const [input,setInput] = useState({
    name:"",
    email:"",
    password:"",
  })
  return (
    <div>
      <form>
        <input type="text" placeholder='Enter Your Name'
        value={input.name} 
        onChange={(e)=>setInput((prev)=>({...prev,name:e.target.value}))}/>
        <br /><br />
        <input type="email" placeholder='Enter your Email' 
        value={input.email} 
        onChange={(e)=>setInput((prev)=>({...prev,email:e.target.value}))}/>
        <br /><br />
        <input type="password" placeholder='Enter Your Password'
        value={input.password} 
        onChange={(e)=>setInput((prev)=>({...prev,password:e.target.value}))}/>
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
     
        <div>

        <h1>My Name is {input.name}</h1>
        <h1>My Email is {input.email}</h1>
        <h1>My Password is {input.password}</h1>
      </div>
    </div>
  )
}
