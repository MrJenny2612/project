import React, { useState } from 'react'

export const UseStateTask1 = () => {

  const [name, setname] = useState("")
  const [mobile, setmobile] = useState("")
  const [email, setemail] = useState("")
  const [date, setdate] = useState("")
  const [ticket, setticket] = useState("")

  const nameHolder = (event) => {
    console.log(event.target.value)
    setname(event.target.value)
  }

  return (
    <div style={{textAlign:"center"}}>
      <hr />
      <h1>Ticket Booking</h1>
      <div>
        <input type="text" placeholder='Enter Name' onChange={(event)=>{nameHolder(event)}}></input>
      </div>
      <div>
        <input type="tel" placeholder='Enter contact Number' onChange={(event)=>{setmobile(event.target.value)}}></input>
      </div>
      <div>
        <input type="text" placeholder='Enter email' onChange={(event)=>{setemail(event.target.value)}}></input>
      </div>
      <div>
        <input type="date" onChange={(event)=>{setdate(event.target.value)}}></input>
      </div>
      <div>
        <input type="text" placeholder='Enter Number of Ticket' onChange={(event)=>{setticket(event.target.value)}}></input>
      </div>
      <h4>Name: {name}</h4>
      <h4>Contact No: {mobile}</h4>
      <h4>Email: {email}</h4>
      <h4>Date: {date}</h4>
      <h4>Number of Ticket: {ticket}</h4>
    </div>
  )
}
