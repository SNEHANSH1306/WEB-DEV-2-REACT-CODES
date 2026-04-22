import React from 'react'
import Child from './Child'

const Parent = () => {

    const fullname = "Jaskirat Singh Rangi";

    function Alert(){
        alert("HOSLA ENDHAN BADLA");
    }

  return (
    <>
    <div>Parent</div>
    <h1> Rendered in Parent comp: {fullname}</h1>
    <Child name ={fullname} alert={Alert}/>

    </>
  )
}

export default Parent