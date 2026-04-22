import React from 'react'
import { useState } from 'react'
function FormHandling() {
    const [name, setName] = useState("");

    function handleChange(e) {
        console.log(e) 
        setName(e.target.value);
    }
  return (
    <>
    <div>FormHandling</div>
    <div>
      <input
        type="text"
        placeholder="Enter name"
        onChange={handleChange}
        />
      <h2>Hello, {name}</h2>
    </div>
    </>
  )
}

export default FormHandling