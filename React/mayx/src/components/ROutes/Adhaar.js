import React from 'react'
import { useParams } from 'react-router-dom'

export default function Adhaar() {
    const {id,no}  = useParams();
    
  return (
    <div>
        {id==="user1" && no === "123" && (<h1>Adfar Adhaar number is 34567654</h1>)}
        {id==="user2" && no === "123" && (<h1>Nani Adhaar number is 876567876</h1>)}
        {id==="user1" && no === "321" && (<h1>Priyanshu Adhaar number is 9876543</h1>)}
        {id==="user2" && no === "321" && (<h1>Chetan Adhaar number is 435346</h1>)}
    </div>
  )
}
