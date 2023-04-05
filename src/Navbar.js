import React from 'react'

export default function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>
            Task Mate
        </a>
        <ul>
            <li className='active'>
                <a href='/'>Home</a>
            </li>
            <li className='active'>
                <a href='/pricing'>Pricing</a>
            </li>
            <li className='active'>
                <a href='/about'>About</a>
            </li>
        </ul>
    </nav>
  )
}
