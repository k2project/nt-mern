import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function NavLinks({ toggleMobileMenu }) {
    return (
        <ul className='NavLinks' aria-label='main navigation links'>
            <img
                src={require('../../imgs/menu.png')}
                alt=''
                className='Nav-mob__img'
            />
            <NavLink
                to='/'
                exact
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                Home
            </NavLink>
            <NavLink
                to='/therapy'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                Therapy
            </NavLink>
            <NavLink
                to='/#about'
                // activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                About Me
            </NavLink>
            <NavLink
                to='/therapy#FAQ'
                // activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                FAQ
            </NavLink>
            <NavLink
                to='/therapy#fees'
                // activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                Fees
            </NavLink>
            <NavLink
                to='/contact'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                Location
            </NavLink>
            <NavLink
                to='/contact#form'
                // activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                Contact
            </NavLink>

            <NavLink
                to='/resources'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                Resources
            </NavLink>
            <NavLink
                to='/blog'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
                className='NavLinks__link'
            >
                Blog
            </NavLink>
        </ul>
    );
}
