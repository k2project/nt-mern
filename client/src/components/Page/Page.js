import React from 'react';
import './Page.scss';

import Header from './Header';
import Footer from './Footer';

export default function Page({ page, children }) {
    return (
        <div className={'Page ' + page}>
            <Header page={page} />
            <main id='main'>{children}</main>
            <Footer />
        </div>
    );
}
