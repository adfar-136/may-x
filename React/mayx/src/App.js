import React from 'react'

export default function App() {
  // var skills = ["a","b","c","d"]
  var skills= [
    ["HTML","CSS","JS"],
    ["Cooking","Dancing","Singing"],
    [10,9,8]
  ]
  var data = [
      {name:"A",age:10,salary:2000},
      {name:"B",age:20,salary:3000},
      {name:"C",age:30,salary:4000},
      {name:"D",age:40,salary:5000},
  ]
  return (
    <div>
      <table>
       <thead>
       <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Salary</th>
        </tr>
       </thead>
        <tbody>
          {data.map((item,index)=>{
              return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.salary}</td>
              </tr>
          })}
        </tbody>
      </table>
      <ul>
        {skills.map((item,index)=>{
          return item.map((itemm,indexx)=>{
            return <li key={indexx}>{itemm}</li>
          })
        })}
      </ul>
       {/* <ul>
        {skills.map((item,index)=>{
          return <li key={index}>{item}</li>
        })}
       </ul> */}
       
    </div>
  )
}
