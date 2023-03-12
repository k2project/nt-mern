import React from 'react';
import './Page.scss';
import ReactGA from 'react-ga4';

import Header from './Header';
import Footer from './Footer';

export default function Page({ page, headerContent, children }) {
    React.useEffect(() => {
        ReactGA.send('pageview');
    }, []);

    return (
        <div className={'Page ' + page}>
            <Header page={page} headerContent={headerContent} />
            <main id='main'>{children}</main>
            <Footer />
        </div>
    );
}
