import React, { useEffect, useState } from 'react';
import { routes } from '../../App';
import FooterNavLinks from './FooterNavLinks';
import { Redirect } from 'react-router-dom';

export default function Footer() {
    const [nextRoute, setNextRoute] = useState('');
    useEffect(() => {
        const footer = document.getElementById('footer');
        const handleScroll = (event) => {
            const rect = footer.getBoundingClientRect();
            if (rect.top + rect.height - 10 < window.innerHeight) {
                const currentRoutIndex = routes.findIndex(
                    (route) => route === window.location.pathname
                );
                if (currentRoutIndex !== -1) {
                    //navigate to the next route
                    setNextRoute(routes[currentRoutIndex + 1]);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (nextRoute) {
        window.scrollTo(0, 0);
        return <Redirect to={nextRoute} />;
    }

    return (
        <footer id='footer'>
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
