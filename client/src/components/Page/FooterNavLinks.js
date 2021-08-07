import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function FooterNavLinks() {
    const { location } = window;
    const scrollToTop = () => window.scrollTop(0);
    return (
        <ul className='FooterNavLinks' aria-label='footer navigation links'>
            <NavLink
                to='/'
                exact
                className='FooterNavLinks__link'
                onClick={scrollToTop}
            >
                Home
            </NavLink>
            <NavLink
                to='/therapy'
                className='FooterNavLinks__link'
                onClick={scrollToTop}
            >
                Therapy
            </NavLink>
            <NavLink to='/#about' smooth className='FooterNavLinks__link'>
                About Me
            </NavLink>
            <NavLink to='/therapy#FAQ' smooth className='FooterNavLinks__link'>
                FAQ
            </NavLink>
            <NavLink to='/therapy#fees' smooth className='FooterNavLinks__link'>
                Fees
            </NavLink>
            <NavLink
                to='/therapy#online'
                smooth
                className='FooterNavLinks__link'
            >
                Online
            </NavLink>
            <NavLink
                to='/contact'
                className='FooterNavLinks__link'
                onClick={scrollToTop}
            >
                Location
            </NavLink>
            <NavLink to='/contact#form' smooth className='FooterNavLinks__link'>
                Contact
            </NavLink>

            <NavLink
                to='/resources'
                className='FooterNavLinks__link'
                onClick={scrollToTop}
            >
                Resources
            </NavLink>
            <NavLink
                to='/blog'
                className='FooterNavLinks__link'
                onClick={scrollToTop}
            >
                Blog
            </NavLink>
        </ul>
    );
}
