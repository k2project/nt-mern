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
                Nujoji Calvocoressi Counselling &amp; Psychotherapy <wbr />
                City of London &amp; West End &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
}
