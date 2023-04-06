import React from 'react'
import './Navbar.css'

export default function Navbar() {

  return (
    <nav className='navbar'>
        <a href ='/' className='navbar-logo'>Task Mate</a>
        <ul className='nav-menu'>
            <li className='nav-item'>
                <a href='/' className='nav-links' >
                    Home
                </a>
            </li>
            <li className='nav-item'>
                <a href='/About' className='nav-links' >
                    About
                </a>
            </li>
            <li className='nav-item'>
                <a href='/Pricing' className='nav-links' >
                    Pricing 
                </a>
            </li>
        </ul>
    </nav>
  )
}
