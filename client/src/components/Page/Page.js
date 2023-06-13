import React from 'react';
import './Page.scss';
import ReactGA from 'react-ga4';

import Header from './Header';
import Footer from './Footer';

export default function Page({ page, headerContent, children }) {
    React.useEffect(() => {
        const page = document.getElementById('page');

        if (window.location.search.includes('anim') && page) {
            document.body.style.overflow = 'hidden';
            page.style.opacity = 0;
            page.classList.remove('loading');
            setTimeout(() => {
                page.style.opacity = 1;
                page.classList.add('loading');
            }, 0);
            setTimeout(() => {
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                document.body.style.overflow = 'auto';
            }, 500);
        }
    }, []);

    React.useEffect(() => {
        // ReactGA.send('pageview');
    }, []);

    return (
        <div className={'Page ' + page} id='page'>
            <Header page={page} headerContent={headerContent} />
            <main id='main'>{children}</main>
            <Footer />
        </div>
    );
}
