import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import './Therapy.scss';
import Page from '../../components/Page/Page';

import { TherapyIntro } from './components/TherapyIntro';
import { IntegrativeTherapy } from './components/IntegrativeTherapy';
import { FAQ } from './components/FAQ';
import { Fees } from './components/Fees';
import { Insurance } from './components/Insurance';

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

class Therapy extends Component {
    render() {
        return (
            <DocumentMeta {...meta}>
                <Page page='Therapy'>
                    <TherapyIntro />
                    <IntegrativeTherapy />
                    <FAQ />
                    <Fees />
                    <Insurance />
                </Page>
            </DocumentMeta>
        );
    }
}
export default Therapy;
