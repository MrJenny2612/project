import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask2 = () => {

    const {register, handleSubmit} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1 class="mb-3">KYC Form in Banking</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div class="mb-3">
            <label class="form-label">Full Name:</label>
            <input type="text" name="fullname" class="form-control" {...register("Name:")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Date of Birth:</label>
            <input type="date" name="dob" class="form-control" {...register("DOB : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Email:</label>
            <input type="email" name="email" class="form-control" {...register("Email : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Phone Number:</label>
            <input type="tel" name="phone" class="form-control" {...register("Contact No : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Address:</label>
            <textarea name="address" class="form-control" rows="3" {...register("Address : ")} required></textarea>
        </div>

        <h3 class="mt-4">Identity Verification</h3>

        <div class="mb-3">
            <label class="form-label">Select ID Proof:</label>
            <select name="id_proof" class="form-select" {...register("Select ID :")} required>
                <option value="passport">Passport</option>
                <option value="aadhaar">Aadhaar Card</option>
                <option value="voter">Voter ID</option>
                <option value="driving">Driving License</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label">Upload ID Proof:</label>
            <input type="file" name="id_document"  class="form-control" {...register("Upload ID : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Upload Address Proof:</label>
            <input type="file" name="address_document" class="form-control" {...register("Upload Address : ")} required/>
        </div>

        <h3 class="mt-4">Bank Account Details</h3>

        <div class="mb-3">
            <label class="form-label">Account Number:</label>
            <input type="text" name="account_number" class="form-control" {...register("Account No : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">IFSC Code:</label>
            <input type="text" name="ifsc" class="form-control" {...register("IFSC : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Bank Name:</label>
            <input type="text" name="bank_name" class="form-control" {...register("Bank Name : ")} required/>
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" name="terms" class="form-check-input" required/>
            <label class="form-check-label">I confirm that the details provided are accurate.</label>
        </div>

        <button type="submit" class="btn btn-primary w-100">Submit KYC</button>

        </form>
    </div>
  )
}
