/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className='nav-wrapper red darken-3'>
            <div className='container'>
                <a className='brand-logo'>Poketimes</a>
                <ul className='right'>
                    <li><Link to="/">Home</Link></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;