import React from 'react'

export const ArrayDemo1 = () => {

    var users = ["Jenish", "Patel", "Male"]
  return (
    <div style={{textAlign:"center"}}>
        <h1>ArrayDemo 1</h1>
        {
            users.map((user)=>{
                return (<div>
                  <li>{user}</li>
                </div>
                ) 
            })
        }
    </div>
  )
}
