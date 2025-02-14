import React from 'react'
import { useForm } from 'react-hook-form'

export const Login = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const validationSchema = {
        emailValidation:{
            required:{
                value:true,
                message:"email is required"
            }
        },
        passwordValidation:{
            required:{
                value:true,
                message:"password is required"
            },
            min:{
                value:5,
                message:"password minimum 5"
            },
            max:{
                value:10,
                message:"password maximum 10"
            },
            minLength:{
                value:5,
                message:"password minLength 5"
            },
            maxLength:{
                value:8,
                message:"password maxLength 8"
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label> Email: </label>
                <input type="text" {...register("email",validationSchema.emailValidation)} />
                <span style={{color:"red"}}>{errors.email?.message}</span>
            </div>
            <div>
                <label> Password: </label>
                <input type="password" {...register("password",validationSchema.passwordValidation)}/>
                <span style={{color:"red"}}>{errors.password?.message}</span>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
