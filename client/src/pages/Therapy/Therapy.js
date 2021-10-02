import React from 'react';
import { useLocation } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import './Therapy.scss';
import Page from '../../components/Page/Page';

import { TherapyIntro } from './components/TherapyIntro';
import { IntegrativeTherapy } from './components/IntegrativeTherapy';
import { FAQ } from './components/FAQ';
import { Fees } from './components/Fees';
import { Insurance } from './components/Insurance';
import { Emdr } from './components/Emdr';

import {
    TITLE_THERAPY,
    DESCRIPTION_THERAPY,
    CANONICAL_THERAPY,
    KEYWORDS_THERAPY,
    OG_IMG_THERAPY,
} from '../../metaData';

const meta = {
    title: TITLE_THERAPY,
    description: DESCRIPTION_THERAPY,
    canonical: CANONICAL_THERAPY,
    meta: {
        name: {
            author: '@_k2project',
            keywords: KEYWORDS_THERAPY,
        },
        property: {
            'og:title': TITLE_THERAPY,
            'og:url': CANONICAL_THERAPY,
            'og:image': OG_IMG_THERAPY,
            'og:description': DESCRIPTION_THERAPY,
        },
    },
};

const Therapy = () => {
    const { search } = useLocation();
    const newHeader = search === '?new-header=true';

    return (
        <DocumentMeta {...meta}>
            <Page page='Therapy' newHeader={newHeader}>
                <TherapyIntro />
                <IntegrativeTherapy />
                <FAQ />
                <Emdr />
                <Fees />
                <Insurance />
            </Page>
        </DocumentMeta>
    );
};
export default Therapy;
