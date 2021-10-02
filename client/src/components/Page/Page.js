import React from 'react';
import './Page.scss';

import Header from './Header';
import Footer from './Footer';

export default function Page({ page, headerContent, children, newHeader }) {
    return (
        <div className={'Page ' + page}>
            <Header
                page={page}
                headerContent={headerContent}
                newHeader={newHeader}
            />
            <main id='main'>{children}</main>
            <Footer />
        </div>
    );
}
