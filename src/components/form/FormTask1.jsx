import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask1 = () => {

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
                message:"Email character min 8"
            },
            max:{
                value:10,
                message:"Email character max 10"
            },
            // minLength:{
            //     value:5,
            //     message:"Email minlength 8"
            // },
            // maxLength:{
            //     value:12,
            //     message:"Email maxlength 10"
            // }
        },
        contactValidation:{
            minLength:{
                value:10,
                message:"Mobile minlength 8"
            },
            maxLength:{
                value:12,
                message:"Mobile maxlength 12"
            }
        }
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Vehicle Service Request Form</h1>

        <form onSubmit={handleSubmit(submitHandler)}>

        <div class="mb-3">
            <label >Full Name:</label>
            <input type="text" {...register("fname")} />
        </div>

        <div class="mb-3">
            <label >Email:</label>
            <input type="email" {...register("email",validationSchema.emailValidation)} />
            <span style={{color:"red"}}>{errors.email?.message}</span>
        </div>

        <div class="mb-3">
            <label >Phone Number:</label>
            <input type="tel"  {...register("contact",validationSchema.contactValidation)} />
            <span style={{color:"red"}}>{errors.contact?.message}</span>
        </div>

        
        <div class="mb-3">
            <label >Vehicle Type : </label>
            <input type="radio" name="make" value="Two" {...register("Vehicle : ")} /> Two-Wheelers 
            <input type="radio" name="make" value="Four" {...register("Vehicle : ")}/> Four-Wheelers
        </div>
        <div class="mb-3">
            <label >Vehicle Make:</label>
            <input type="text" name="make"  {...register("Vehicle : ")} />
        </div>

        <div class="mb-3">
            <label >Vehicle Model:</label>
            <input type="text" name="model"  {...register("V. Model : ")} />
        </div>

        <div class="mb-3">
            <label >Year of Manufacture:</label>
            <input type="number" name="year"  {...register("Manufacture : ")} />
        </div>

        <div class="mb-3">
            <label>License Plate Number:</label>
            <input type="text" name="plate"  {...register("Licence : ")} />
        </div>

        <div class="mb-3">
            <label>VIN (Vehicle Identification Number):</label>
            <input type="text" name="vin"  {...register("VIN : ")}/>
        </div>


        <div class="mb-3">
            <label >Type of Service:</label>
            <select name="service_type" class="form-select" {...register("Type of Service : ")}>
                <option value="general_repair">General Repair</option>
                <option value="oil_change">Oil Change</option>
                <option value="tire_rotation">Tire Rotation</option>
                <option value="brake_service">Brake Service</option>
            </select>
        </div>

        <div class="mb-3">
            <label >Preferred Service Date:</label>
            <input type="date" name="service_date"  {...register("Prefered Service : ")}/>
        </div>

        <div class="mb-3">
            <label >Preferred Time Slot:</label>
            <input type="time" name="service_time"  {...register("Prefered Time Slot : ")}/>
        </div>

        <div class="mb-3">
            <label >Additional Requests:</label>
            <textarea name="requests"  {...register("Add requirement: ")}></textarea>
        </div>

        {/* <h4 class="mt-4">Payment & Confirmation</h4>

        <div class="mb-3">
            <label class="form-label">Estimated Budget ($):</label>
            <input type="number" name="budget" class="form-control" {...register("Estimate : ")}/>
        </div>

        <div class="mb-3">
            <label class="form-label d-block">Payment Method:</label>
            <div class="form-check form-check-inline">
                <input type="radio" name="payment" value="card" class="form-check-input" {...register("Payment : ")}/>
                <label class="form-check-label">Card</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="radio" name="payment" value="cash" class="form-check-input" {...register("Cash : ")}/>
                <label class="form-check-label">Cash</label>
            </div>
            <div class="form-check form-check-inline">
                <input type="radio" name="payment" value="online" class="form-check-input" {...register("Online Payment : ")}/>
                <label class="form-check-label">Online Payment</label>
            </div>
        </div> */}

        <div class="mb-3 form-check">
            <input type="checkbox" name="terms"  />
            <label >I agree to the terms and conditions.</label>
        </div>

        <button type="submit" class="btn btn-primary ">Submit Request</button>


        </form>
    </div>
  )
}
