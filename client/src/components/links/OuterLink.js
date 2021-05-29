import React from 'react';

export default function OuterLink({ href, text }) {
    return (
        <a
            href={href}
            className='link'
            target='_blank'
            rel='noopener noreferrer'
        >
            {text}
        </a>
    );
}
