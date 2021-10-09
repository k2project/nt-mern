import React from 'react';
import './Page.scss';

import Header from './Header';
import Footer from './Footer';

export default function Page({ page, headerContent, children, newHeader }) {
    const cls = newHeader ? 'msin newH' : 'main';
    return (
        <div className={'Page ' + page}>
            <Header
                page={page}
                headerContent={headerContent}
                newHeader={newHeader}
            />
            <main id='main' className={cls}>
                {children}
            </main>
            <Footer />
        </div>
    );
}
