import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask3 = () => {

    const {register, handleSubmit} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Bug Report Form</h1>
        <form  onSubmit={handleSubmit(submitHandler)}>
        <div class="mb-3">
            <label class="form-label">Your Name:</label>
            <input type="text" name="reporter_name" class="form-control" {...register("Name : ")}required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Your Email:</label>
            <input type="email" name="reporter_email" class="form-control" {...register("Email : ")}required/>
        </div>

        <h3 class="mt-4">Bug Details</h3>

        <div class="mb-3">
            <label class="form-label">Bug Title:</label>
            <input type="text" name="bug_title" class="form-control" {...register("Bug : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Bug Description:</label>
            <textarea name="bug_description" class="form-control" rows="4" {...register("Bud Des :")} required></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Steps to Reproduce:</label>
            <textarea name="bug_steps" class="form-control" rows="3" {...register("Steps : ")} required></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Expected Behavior:</label>
            <textarea name="expected_behavior" class="form-control" rows="3" {...register("Exp Behaviour : ")}></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Actual Behavior:</label>
            <textarea name="actual_behavior" class="form-control" rows="3" {...register("Actual Behaviour : ")}></textarea>
        </div>

        <div class="mb-3">
            <label class="form-label">Issue Severity:</label>
            <select name="severity" class="form-select" {...register("Issue : ")} required>
                <option value="low">Low - Minor Issue</option>
                <option value="medium">Medium - Needs Attention</option>
                <option value="high">High - Critical Issue</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label">Browser/OS:</label>
            <input type="text" name="browser_os" class="form-control" placeholder="e.g., Chrome on Windows 11" {...register("Browser : ")}/>
        </div>

        <div class="mb-3">
            <label class="form-label">Upload Screenshot (Optional):</label>
            <input type="file" name="screenshot" class="form-control" {...register("Upload : ")}/>
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" name="terms" class="form-check-input" required/>
            <label class="form-check-label">I confirm that the above details are correct.</label>
        </div>

        <button type="submit" class="btn btn-primary w-100">Submit Bug Report</button>
        </form>
    </div>
  )
}
