import React from 'react';

import NavLinks from './NavLinks';
import linkedin from './../../imgs/in.png';
import fb from './../../imgs/fb.png';

export default function Nav({ toggleMobileMenu }) {
    return (
        <nav className='Nav' sria-label='main navigation'>
            <div className='Nav__hum' onClick={toggleMobileMenu}>
                <span />
                <span />
                <span />
            </div>
            <NavLinks toggleMobileMenu={toggleMobileMenu} />
            <a href='tel:+442086759754' className='Nav__num'>
                0208 675 9754
            </a>
            <a
                href='http://www.linkedin.com/in/calvocoressi'
                target='_blank'
                rel='noopener noreferrer'
                className='Nav__media'
            >
                <img src={linkedin} alt='LinkedIn' />
            </a>
            <a
                href='https://www.facebook.com/calvocoressi'
                target='_blank'
                rel='noopener noreferrer'
                className='Nav__media'
            >
                <img src={fb} alt='Facebook' />
            </a>
        </nav>
    );
}
