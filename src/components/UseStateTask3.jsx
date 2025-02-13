import React, { useState } from 'react'

export const UseStateTask3 = () => {
    const [name, setname] = useState("")
    const [role, setrole] = useState("")
    const [age, setage] = useState("")
    const [mobile, setmobile] = useState("")
    const [date, setdate] = useState("")
    
  return (
    <div style={{textAlign:"center"}}>
        <hr />
        <h1>Blood Donation</h1>
        <div>
            <input type="text"  placeholder='Enter Name'  onChange={(event)=>{setname(event.target.value)}}></input>
        </div>
        <div>
            <select onChange={(event)=>{setrole(event.target.value)}}>
                <option value="Select Blood Group">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
        </div>
        <div>
            <input type="text"  placeholder='Enter Age'  onChange={(event)=>{setage(event.target.value)}}></input>
        </div>
        <div>
            <input type="tel"  placeholder='Enter Contact Number' onChange={(event)=>{setmobile(event.target.value)}}></input>
        </div>
        <div>
        <input type="date" onChange={(event)=>{setdate(event.target.value)}}></input>
      </div>
      <h4>Name:{name}</h4>
      <h4>Role:{role}</h4>
      <h4>Age:{age}</h4>
      <h4>Contact No:{mobile}</h4>
      <h4>Last Donation Date:{date}</h4>
    </div>
  )
}
