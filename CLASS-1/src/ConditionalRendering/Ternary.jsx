import React from 'react'

const Ternary = () => {

    const isLoggedin = true;


  return (
    <>
    <div>Ternary</div>
    <h1>{isLoggedin?"Dashboard Access Given":"Access Denied"}</h1>

    </>
  )
}

export default Ternary