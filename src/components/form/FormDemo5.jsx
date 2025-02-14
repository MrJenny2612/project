import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo5 = () => {

    const {register,handleSubmit, formState:{errors}}= useForm()

    const submitHandler = (data) => {
        alert("Submitted")
        console.log(data)
    }

    const validationSchema = {
    ageValidator:{
        required:{
            value:true,
            message:"email is required"
        },
        min:{
            value:18,
            message:"min age 18"
        },
        max:{
            value:60,
            message:"max age 60"
        }
    }
}

  return (
    <div style={{textAlign:"center"}}>
        <h1>FormDemo 5</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label> Name :</label>
                <input type="text" {...register("name",{required:{value:true, message:"name is required"}})}/>
                 {/* {errors.name.message} */}
                {/* {
                errors.name && errors.name.message
            } */}
                <span style={{color:"red"}}>{errors.name?.message}</span>
            </div>
            <div>
                <label> Age :</label>
                <input type="text" {...register("ageZ",validationSchema.ageValidator)} />
                <span style={{color:"red"}}>{errors.age?.message}</span>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
