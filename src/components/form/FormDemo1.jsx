import React from 'react'
import { useForm } from 'react-hook-form'

export const FormDemo1 = () => {

    const {register, handleSubmit} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }
  return (
    <div style={{textAlign:"center"}}>
        <h1>Form Demo 1</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>Name:</label>
                <input type="text" {...register("Name:")} />
            </div>
            <div>
                <label>Age: </label>
                <input type="text" {...register("Age:")} />
            </div>
            <div>
                <select {...register("country")}>
                    <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="uk">Uk</option>
                </select>
            </div>
            <div>
                <input type="submit" />
            </div>
        </form>
    </div>
  )
}
