import React from 'react'

const Child = ({name,alert}) => {
  
  return (
    <>
    <div>Child</div>
    <h1>Rendered in Child Comp:{name}</h1>
    <button onClick={alert}>CLICK</button>
    </>
  )
}

export default Child