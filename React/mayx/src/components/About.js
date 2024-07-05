import React from 'react'
import Contact from './Contact'
import Section from './Section'

export default function About({firstName,phone}) {
    
  return (
    <div>
        <h1>About Component</h1>
        <h1>First Name is {firstName}</h1>
        <h3>My Phone number is:{phone}</h3>
        {/* <Contact age="45" secondName="rashid"
         fName={props.firstName} phone={props.phone}/> */}
        <Contact>
            <Section/>
        </Contact>
    </div>
  )
}
