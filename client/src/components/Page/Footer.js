import React from 'react';
import FooterNavLinks from './FooterNavLinks';

export default function Footer() {
    return (
        <footer>
            {/* <button
                className='btn'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Back To Top
            </button> */}
            <FooterNavLinks />
            <p>
                Nujoji Calvocoressi Psychotherapy &copy;{' '}
                {new Date().getFullYear()}
            </p>
        </footer>
    );
}
