import React from 'react';

export default function Footer() {
    return (
        <footer>
            <button
                className='btn'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Back To Top
            </button>
            <p>
                Nujoji Calvocoressi Psychotherapy & Counselling | City of London
                & West End &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
}
