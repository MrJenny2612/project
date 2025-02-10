import React from 'react'

export const ArrayDemo2 = () => {
    var user = [
        {
            name:'Jenish',
            age:22,
            marks:74,
        },
        {
            name: 'John',
            age:25,
            marks:82
        },
        {
            name:'Bhoomik',
            age:'24',
            marks:90
        },
    ]//Array json object
  return (
    <div style={{textAlign:"center "}}>
      <hr/>
        <h1>Array Demo 2</h1>
        {
            user.map((u1)=>{
                return <div>
                    <li>{u1.name}</li>
                    <li>{u1.age}</li>
                    <li>{u1.marks}</li>
                    <hr />
                </div>
            })
        }
    </div>
  )
}
