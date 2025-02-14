import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo7 = () => {

    const {register, handleSubmit} = useForm()
    const [output, setoutput] = useState()
    const [submitted, setsubmitted] = useState(false) 

    const submitHandler = (data)=> {
        console.log(data)
        setsubmitted(true)
        setoutput(data)
    }



  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type="text" {...register("name")}/>
            </div>
            <div>
                <label>Birth Date:</label>
                <input type="date" {...register("birthdate")} />
            </div>
            <div>
                <label>Greeting: </label>
                <input type="text" {...register("greet")}/>
            </div>
            <div>
                <label>colors:</label>
                <input type="color" {...register("color")}/>
            </div>
            <div> 
                <input type="submit" />
            </div>
        </form>
        {
            submitted == true ?
        <div style={{color:output.color}}>
            <h2>Name:{output?.name}</h2>
            <h2>Date of Birth:{output?.birthdate}</h2>
            <h2>Greet:{output?.greet}</h2>
            <h2>Colors:{output?.color}</h2>
        </div>
        : ""
        }
    </div>
  )
}
