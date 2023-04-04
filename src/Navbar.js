import React from 'react'

export default function Navbar() {
  return (
    <nav className='nav'>
        <a href='/' className='site-title'>
            Task Mate
        </a>
        <ul>
            <li className='active'>
                <a href='/test1'>test1</a>
            </li>
            <li className='active'>
                <a href='/test2'>test2</a>
            </li>
        </ul>
    </nav>
  )
}
