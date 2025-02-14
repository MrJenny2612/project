import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo6 = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const submitHandler = (data) =>{
        console.log(data)
    }

    const validationSchema = {
        nameValidation:{
            required:{
                value:true,
                message:"Name is required"
            }
        },
        contactValidation:{
            required:{
                value:true,
                message:"Conatact is required"
            }
        },
        codeValidation:{
            validate:(value)=>{
                return value == "royal" || "code must be royal"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name : </label>
                <input type="text" {...register("name",validationSchema.nameValidation)} />
                <span style={{color:"red"}}>{errors.name?.message}</span>
            </div>
            <div>
                <label>Contact:</label>
                <input type="text" {...register("contact",validationSchema.codeValidation)}/>
                <span style={{color:"red"}}>{errors.contact?.message}</span>
            </div>
            <div>
                <label>Enter code</label>
                <input type="text" placeholder='enter code' {...register("code")} />
                <span style={{color:"red"}}>{errors.code?.message}</span>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
