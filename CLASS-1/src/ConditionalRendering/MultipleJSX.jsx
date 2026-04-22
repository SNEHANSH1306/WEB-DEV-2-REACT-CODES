import React from 'react'

const MultipleJSX = () => {

    const isStudent = true;

  return (
    <>
        <div>MultipleJSX</div>
        {isStudent?(
            <div>
            <h2>Student Dashboard</h2>
            <p>Welcome, student!</p>
            </div>
        ):(
            <div>
                <h2>Guest Dashboard</h2>
                <p> Please Enroll in the course</p>
            </div>
        )}
    </>
  )
}

export default MultipleJSX