import React, { useState } from 'react'

export const InputDemo1 = () => {

    const [first, setfirst] = useState("")
    const [email, setemail] = useState("")

    const input = (event) => {
        console.log(event.target.value)
        setfirst(event.target.value)
    }



  return (
    <div style={{textAlign:"center"}}>
        <hr />
        <h1>Input Demo 1</h1>
        <div>
        <label >Name: </label>
        <input type="text" onChange={(event)=>{input(event)}}></input>
        {first}
        </div> 
        <div>
            <label >Email:</label>
            <input type="text" placrholder="enter email" onChange={(event)=>{setemail(event.target.value)}}/>
            {email}
        </div>
    </div>
  )
}
