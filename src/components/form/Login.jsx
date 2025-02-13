import React from 'react'

export const Login = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()

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
            }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Login Form</h1>
        <form onSubmit="submit"></form>
    </div>
  )
}
