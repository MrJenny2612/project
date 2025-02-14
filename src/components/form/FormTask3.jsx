import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask3 = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const validationSchema = {
        emailValidation:{
            required:{
                value:true,
                message:"Email is required"
            },
            min:{
                value:8,
                message:"min character 8"
            },
            max:{
                value:10,
                message:"max character 10"
            },
            minLength:{
                value:10,
                message:"Email minlength 10"
            },
            maxLength:{
                value:28,
                message:"Email maxlength 25"
            }
        }
    } 

  return (
    <div style={{textAlign:"center"}}>
        <h1>Bug Report Form</h1>
        <form  onSubmit={handleSubmit(submitHandler)}>
        <div class="mb-3">
            <label >Your Name:</label>
            <input type="text" name="reporter_name" {...register("Name : ")}/>
        </div>

        <div class="mb-3">
            <label >Your Email:</label>
            <input type="email" name="reporter_email"  {...register("email",validationSchema.emailValidation)}/>
            <span style={{color:"red"}}>{errors.email?.message}</span>
        </div>


        <div class="mb-3">
            <label >Bug Title:</label>
            <input type="text" name="bug_title"  {...register("Bug : ")} />
        </div>

        <div class="mb-3">
            <label >Bug Description:</label>
            <textarea name="bug_description"  rows="4" {...register("Bud Des :")} ></textarea>
        </div>

        <div class="mb-3">
            <label >Steps to Reproduce:</label>
            <textarea name="bug_steps"  rows="3" {...register("Steps : ")} ></textarea>
        </div>

        <div class="mb-3">
            <label >Expected Behavior:</label>
            <textarea name="expected_behavior"  rows="3" {...register("Exp Behaviour : ")}></textarea>
        </div>

        <div class="mb-3">
            <label >Actual Behavior:</label>
            <textarea name="actual_behavior" rows="3" {...register("Actual Behaviour : ")}></textarea>
        </div>

        <div class="mb-3">
            <label >Issue Severity:</label>
            <select name="severity" {...register("Issue : ")} >
                <option value="low">Low - Minor Issue</option>
                <option value="medium">Medium - Needs Attention</option>
                <option value="high">High - Critical Issue</option>
            </select>
        </div>

        <div class="mb-3">
            <label >Browser/OS:</label>
            <input type="text" name="browser_os"  placeholder="e.g., Chrome on Windows 11" {...register("Browser : ")}/>
        </div>

        <div class="mb-3">
            <label >Upload Screenshot (Optional):</label>
            <input type="file" name="screenshot"  {...register("Upload : ")}/>
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" name="terms"/>
            <label>I confirm that the above details are correct.</label>
        </div>

        <button type="submit" class="btn btn-primary ">Submit Bug Report</button>
        </form>
    </div>
  )
}
