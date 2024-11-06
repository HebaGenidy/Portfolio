import React from 'react'
import './Nav.css'

function Navbar () {
  return (
    <div className='cls-navbar'>
        <img src="" alt="" />
        <ul className='cls-nav-menu'>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
        <div className="cls-contact-btn">Connect With Me</div>
    </div>
  )
}

export default Navbar;