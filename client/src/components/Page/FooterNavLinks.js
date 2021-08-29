import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

export default function FooterNavLinks() {
    const scrollToTop = () => window.scrollTo(0, 0);
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
            <Link
                to='/privacy-notice'
                target='_blank'
                rel='noopener noreferrer'
                className='FooterNavLinks__link'
            >
                Privacy Notice
            </Link>
        </ul>
    );
}
