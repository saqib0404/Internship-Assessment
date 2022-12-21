import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex gap-4 mt-5 md:ml-3 justify-center md:justify-start'>
            <NavLink to='/' className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'} >Layout 1</NavLink>
            <NavLink to='/layout2' className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'}>Layout 2</NavLink>
            <NavLink to='/layout3' className={({ isActive }) => isActive ? 'active-nav-link' : 'nav-link'}>Layout 3</NavLink>
        </nav>
    );
};

export default Navbar;