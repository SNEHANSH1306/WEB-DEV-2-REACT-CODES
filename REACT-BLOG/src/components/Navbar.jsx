import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
     <Link to="/" className="navbar-brand">PULSE<span>X</span></Link>
    <Link to="/bollywood">Bollywood</Link>
    <Link to="/hollywood">Hollywood</Link>
    <Link to="/technology">Technology</Link>
    <Link to="/fitness">Fitness</Link>
    <Link to="/food">Food</Link>
    </div>
  )
}

export default Navbar