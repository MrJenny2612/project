import React, { useState } from 'react'

export const UseStateDemo1 = () => {

    const[count, setCount]= useState(0)

    function increaseCount(){
            // count++;
            setCount(count+1)
            console.log("count = ", count);
    }
  return (
    <div>
        <hr />
        <h1 style={{textAlign:"center"}}>Use State Demo 1</h1>
        <h2>Count = {count}</h2>
        <button onClick={()=>{increaseCount()}}>count = </button>
    </div>
  )
}
