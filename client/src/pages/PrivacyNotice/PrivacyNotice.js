import React from 'react';
import DocumentMeta from 'react-document-meta';

import {
    TITLE,
    DESCRIPTION,
    CANONICAL,
    AUTHOR,
    KEYWORDS_HOME,
    OG_IMG_HOME,
} from '../../metaData';

import './PrivacyNotice.scss';
import Page from '../../components/Page/Page';
import Header from './components/Header';
import Summary from './components/Summary';
import Introduction from './components/Introduction';
import LawfulBasis from './components/LawfulBasis';
import DataUse from './components/DataUse';
import TreatmentDuration from './components/TreatmentDuration';
import TreatmentEnd from './components/TreatmentEnd';
import ThirdParty from './components/ThirdParty';
import QA from './components/QA';

const meta = {
    title: TITLE,
    description: DESCRIPTION,
    canonical: CANONICAL,
    meta: {
        name: {
            author: AUTHOR,
            keywords: KEYWORDS_HOME,
        },
        property: {
            'og:title': TITLE,
            'og:url': CANONICAL,
            'og:image': OG_IMG_HOME,
            'og:description': DESCRIPTION,
        },
    },
};

const PrivacyNotice = () => {
    return (
        <DocumentMeta {...meta}>
            <Page page='PrivacyNotice' headerContent={<Header />}>
                <div className='PrivacyNotice-main'>
                    <div className='wrapper'>
                        <Summary />
                        <Introduction />
                        <LawfulBasis />
                        <DataUse />
                        <TreatmentDuration />
                        <TreatmentEnd />
                        <ThirdParty />
                        <QA />
                    </div>
                </div>
            </Page>
        </DocumentMeta>
    );
};
export default PrivacyNotice;
