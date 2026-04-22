import React from 'react'

const IfElse = () => {
    
    let msg;
    const age = 20;
    if(age >= 18){
       msg = "You are an adult.";
    }
    else{
        msg = "You are a minor.";
    }

  return (
    <>
    <div>IfElse</div>
    <h1>{msg}</h1>
    </>
  )
}

export default IfElse