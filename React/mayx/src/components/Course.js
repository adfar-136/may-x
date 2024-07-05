import React from 'react'

export default function Course(props) {
    // const list = props.skills.map((item,index)=>{
    //       return <li>{item}</li>
    // })
   
  return (
    <div>
        <h1>Course page</h1>
        <h3>Age :{props.age}</h3>
        <ul>
             {props.skills.map((item,index)=>{
                return <li key={index}>{item}</li>
             })}
        </ul>
    </div>
  )
}
