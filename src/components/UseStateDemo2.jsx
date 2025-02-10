import React, { useState } from 'react'

export const UseStateDemo2 = () => {

    const[isLoading, setisLoading] =useState(true)

    const stopLoader = () => {
        setisLoading(false)
    }

  return (
    <div>
        <hr/>
        <h1 style={{textAlign:"center"}}>Use State Demo 2</h1>
        {
            isLoading == true ? "Loading" : " "
        }
        <button onClick={()=>{stopLoader()}}>Loader</button>
    </div>
  )
}
