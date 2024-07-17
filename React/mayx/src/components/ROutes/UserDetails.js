import React from 'react'
import { useParams } from 'react-router-dom'
import User1 from './User1'
import Use2 from './Use2'

export default function UserDetails() {
    const {id} = useParams()
    
  return (
    <div>
        <h1>User Details</h1>
        {id==="user1" && <User1/>}
        {id === "user2" && <Use2/>}
    </div>
  )
}
