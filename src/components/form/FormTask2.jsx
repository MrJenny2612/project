import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask2 = () => {

    const {register, handleSubmit, formState:{errors}} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const validationSchema = {
        emailValidation:{
            required:{
                value:true,
                message:"Age is required"
            },
            min:{
                value:18,
                message:"minimum character"
            },
            max:{
                value:62,
                message:"maximum character"
            },
            // minLength:{
            //     value:10,
            //     message:"age minLength 10"
            // },
            // maxLength:{
            //     value:28,
            //     message:"age maxLength 18"
            // }
        }
    }

  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleSubmit(submitHandler)}>
        <div class="mb-3">
            <label>Full Name:</label>
            <input type="text" name="fullname"  {...register("Name:")} />
        </div>

        <div class="mb-3">
            <label >Date of Birth:</label>
            <input type="date" name="dob"  {...register("DOB : ")} />
        </div>

        <div class="mb-3">
            <label >AGE:</label>
            <input type="text" name="email"  {...register("email",validationSchema.emailValidation)} />
            <span style={{color:"red"}}>{errors.email?.message}</span>
        </div>

        <div class="mb-3">
            <label >Phone Number:</label>
            <input type="tel" name="phone"  {...register("Contact No : ")} />
        </div>

        <div class="mb-3">
            <label >Address:</label>
            <textarea name="address"  rows="3" {...register("Address : ")} ></textarea>
        </div>


        <div class="mb-3">
            <label >Select ID Proof:</label>
            <select name="id_proof" class="form-select" {...register("Select ID :")} >
                <option value="passport">Passport</option>
                <option value="aadhaar">Aadhaar Card</option>
                <option value="voter">Voter ID</option>
                <option value="driving">Driving License</option>
            </select>
        </div>

        <div class="mb-3">
            <label >Upload ID Proof:</label>
            <input type="file" name="id_document"   {...register("Upload ID : ")} />
        </div>

        <div class="mb-3">
            <label >Upload Address Proof:</label>
            <input type="file" name="address_document"  {...register("Upload Address : ")} />
        </div>


        <div class="mb-3">
            <label >Account Number:</label>
            <input type="text" name="account_number"  {...register("Account No : ")} />
        </div>

        <div class="mb-3">
            <label >IFSC Code:</label>
            <input type="text" name="ifsc"  {...register("IFSC : ")} />
        </div>

        <div class="mb-3">
            <label >Bank Name:</label>
            <input type="text" name="bank_name"  {...register("Bank Name : ")} />
        </div>

        <div class="mb-3 form-check">
            <input type="checkbox" name="terms" />
            <label >I confirm that the details provided are accurate.</label>
        </div>

        <button type="submit" class="btn btn-primary">Submit KYC</button>

        </form>
    </div>
  )
}
