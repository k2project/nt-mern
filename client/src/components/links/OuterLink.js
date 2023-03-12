import React from 'react';

export default function OuterLink({ href, text, target = '_blank' }) {
    return (
        <a
            href={href}
            className='link'
            target={target}
            rel='noopener noreferrer'
        >
            {text}
        </a>
    );
}
