import React from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'

const Home = () => {

  const allData = Data;

  return (
    <div>
      {allData.map((item) => (
        <Link to={`/post/${item.id}`} key={item.id}>
          <h1>{item.title}</h1>
          <img src={item.img_url} alt={item.title} />
        </Link>
      ))}
    </div>
  )
}

export default Home