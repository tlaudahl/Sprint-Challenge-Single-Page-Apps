import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <nav>
            <NavLink className='navLink' exact to={'/'}>Home</NavLink>
            <NavLink className='navLink' exact to={'/characters'}>Characters</NavLink>
        </nav>
    )
}
