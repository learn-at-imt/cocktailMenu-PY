import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="nav-center">
       <Link to="/">
       <h3>The Cocktail Hub</h3>
       </Link>
       <ul className='nav-links'> 
           <li>
               <Link to="/">Home</Link>
           </li>
           <li>
               <Link to="/about">About us</Link>
           </li>
       </ul>
        </div>
    </nav>
  )
}

export default Navbar