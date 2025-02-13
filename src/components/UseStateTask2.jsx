import React, { useState } from 'react'

export const UseStateTask2 = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [mobile, setmobile] = useState("")
    const [role, setrole] = useState("")
    const [password, setpassword] = useState("")
    const input = (email) => {
        setemail(email.target.value)
        console.log(email.target.value)
    }
  return (
    <div style={{textAlign:"center"}}>
        <hr />
        <h1>User Admin</h1>
        <div>
            <input type="text"  placeholder='Enter Name'  onChange={(event)=>{setname(event.target.value)}}></input>
        </div>
        <div>
            <input type="text"  placeholder='Enter Email'  onChange={(email)=>{input(email)}}></input>
        </div>
        <div>
            <input type="tel"  placeholder='Enter Contact no'  onChange={(event)=>{setmobile(event.target.value)}}></input>
        </div>
        <div>
            <select onChange={(event)=>{setrole(event.target.value)}}>
                <option value="Select Role ">Select Role </option>
                <option value="User">User</option>
                <option value="admin">Admin</option>
            </select>
        </div>
        <div>
            <input type="text"  placeholder='Enter Strong Password'  onChange={(event)=>{setpassword(event.target.value)}}></input>
        </div>
        <h4>Name:{name}</h4>
        <h4>Email:{email}</h4>
        <h4>Contact No:{mobile}</h4>
        <h4>Role:{role}</h4>
        <h4>Password:{password}</h4>
    </div>
  )
}
