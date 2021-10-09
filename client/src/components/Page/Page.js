import React from 'react';
import './Page.scss';

import Header from './Header';
import Footer from './Footer';

export default function Page({ page, headerContent, children }) {
    return (
        <div className={'Page ' + page}>
            <Header page={page} headerContent={headerContent} />
            <main id='main'>{children}</main>
            <Footer />
        </div>
    );
}
