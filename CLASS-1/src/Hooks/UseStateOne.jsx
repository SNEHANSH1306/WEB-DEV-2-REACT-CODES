import React from 'react'
import { useState } from 'react'

const UseStateOne = () => {

    const[count,setCount] = useState(0);
    console.log(count);

    function increase(){
        // console.log("inside function");
        setCount(count+1) // Will update the count value in the count state
    }
    function decrease(){
        // console.log("inside function");
        setCount(count-1) // Will update the count value in the count state
    }

    
  return (
    <>
    <div>UseStateOne</div>
    Count: {count}
    <br></br>
    <button onClick={increase}>INCREASE</button>
    <button onClick={decrease}>DECREASE</button>
    </>
  )
}

export default UseStateOne
