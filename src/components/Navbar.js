import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../logo1.png'

function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbar-center'>
                <Link to='/' className='navbar-brand'>
                    <img src={logo1} alt="logo" className='logo' />
                </Link>
                <ul className='navbar-links'>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='about'>
                            about
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar