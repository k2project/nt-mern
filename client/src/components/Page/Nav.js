import React from 'react';

import NavLinks from './NavLinks';
import linkedin from './../../imgs/in.png';
import fb from './../../imgs/fb.png';

export default function Nav({ toggleMobileMenu, mobileMenuOpen }) {
    return (
        <nav className='Nav' sria-label='main navigation'>
            <button
                className='Nav__hum'
                onClick={toggleMobileMenu}
                onMouseDown={(e) => e.preventDefault()}
            >
                <div>
                    <span />
                    <span />
                    <span />
                </div>
                <span className='sr-only'>
                    {mobileMenuOpen ? 'Close menu' : 'Open menu'}
                </span>
            </button>
            <NavLinks toggleMobileMenu={toggleMobileMenu} />
            <a href='tel:+442086759754' className='Nav__num'>
                <span className='sr-only'>To book enquiries please call </span>
                0208 675 9754
            </a>
            <a
                href='http://www.linkedin.com/in/calvocoressi'
                target='_blank'
                rel='noopener noreferrer'
                className='Nav__media'
            >
                <img src={linkedin} alt='' />
                <span className='sr-only'>LinkedIn</span>
            </a>
            <a
                href='https://www.facebook.com/calvocoressi'
                target='_blank'
                rel='noopener noreferrer'
                className='Nav__media'
            >
                <img src={fb} alt='' />
                <span className='sr-only'>Facebook</span>
            </a>
        </nav>
    );
}
