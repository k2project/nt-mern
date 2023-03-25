import React from 'react';

export default function OuterLink({ href, text, target = '_blank', italics }) {
    return (
        <a
            href={href}
            className={`link ${italics ? 'italics' : ''}`}
            target={target}
            rel='noopener noreferrer'
        >
            {text}
        </a>
    );
}
