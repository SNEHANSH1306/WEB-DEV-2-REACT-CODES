import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Fitness = () => {

    const FitnessData = Data.filter((item) => item.category==="Fitness");
    console.log(FitnessData)

  return (
    <div>
      {FitnessData.map((fitnessdata)=>(
                  <>
                    <Link to={`/post/${fitnessdata.id}`}>
                      <h1>{fitnessdata.title}</h1>
                      <img src={fitnessdata.img_url} />
                    </Link>
                  </>
              ))}
    </div>
  )
}

export default Fitness