import React from 'react'
import { useForm } from 'react-hook-form'

export const FormTask1 = () => {

    const {register, handleSubmit} = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }
    
  return (
    <div style={{textAlign:"center"}}>
        <h1>Vehicle Service Request Form</h1>

        <form onSubmit={handleSubmit(submitHandler)}>

        <div class="mb-3">
            <label >Full Name:</label>
            <input type="text" name="fullname" class="form-control" {...register("Full Name : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Email:</label>
            <input type="email" name="email" class="form-control" {...register("Email : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Phone Number:</label>
            <input type="tel" name="phone" class="form-control" {...register("Contact No :")} required/>
        </div>

        <h4 class="mt-4">Vehicle Details</h4>
        
        <div class="mb-3">
            <label class="form-label">Vehicle Type : </label>
            <input type="radio" name="make" value="Two" {...register("Vehicle : ")} required/> Two-Wheelers 
            <input type="radio" name="make" value="Four" {...register("Vehicle : ")} required/> Four-Wheelers
        </div>
        <div class="mb-3">
            <label class="form-label">Vehicle Make:</label>
            <input type="text" name="make" class="form-control" {...register("Vehicle : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Vehicle Model:</label>
            <input type="text" name="model" class="form-control" {...register("V. Model : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">Year of Manufacture:</label>
            <input type="number" name="year" class="form-control" {...register("Manufacture : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">License Plate Number:</label>
            <input type="text" name="plate" class="form-control" {...register("Licence : ")} required/>
        </div>

        <div class="mb-3">
            <label class="form-label">VIN (Vehicle Identification Number):</label>
            <input type="text" name="vin" class="form-control" {...register("VIN : ")}/>
        </div>

        <h4 class="mt-4">Service Details</h4>

        <div class="mb-3">
            <label class="form-label">Type of Service:</label>
            <select name="service_type" class="form-select" {...register("Type of Service : ")}>
                <option value="general_repair">General Repair</option>
                <option value="oil_change">Oil Change</option>
                <option value="tire_rotation">Tire Rotation</option>
                <option value="brake_service">Brake Service</option>
            </select>
        </div>

        <div class="mb-3">
            <label class="form-label">Preferred Service Date:</label>
            <input type="date" name="service_date" class="form-control" required {...register("Prefered Service : ")}/>
        </div>

        <div class="mb-3">
            <label class="form-label">Preferred Time Slot:</label>
            <input type="time" name="service_time" class="form-control" required {...register("Prefered Time Slot : ")}/>
        </div>

        <div class="mb-3">
            <label class="form-label">Additional Requests:</label>
            <textarea name="requests" class="form-control" {...register("Add requirement: ")}></textarea>
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
            <input type="checkbox" name="terms" class="form-check-input" required/>
            <label class="form-check-label">I agree to the terms and conditions.</label>
        </div>

        <button type="submit" class="btn btn-primary w-100">Submit Request</button>


        </form>
    </div>
  )
}
