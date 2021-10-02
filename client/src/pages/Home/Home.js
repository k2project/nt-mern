import React from 'react';
import DocumentMeta from 'react-document-meta';
import { useLocation } from 'react-router-dom';

import {
    TITLE,
    DESCRIPTION,
    CANONICAL,
    AUTHOR,
    KEYWORDS_HOME,
    OG_IMG_HOME,
} from '../../metaData';

import './Home.scss';
import Page from '../../components/Page/Page';
import { Welcome } from './components/Welcome';
import { About } from './components/About';
import { Nujoji } from './components/Nujoji';
import { ProfessionalBodies } from './components/ProfessionalBodies';

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

const Home = () => {
    const { search } = useLocation();
    const newHeader = search === '?new-header=true';
    return (
        <DocumentMeta {...meta}>
            <Page page='Home' newHeader={newHeader}>
                <Welcome />
                <About />
                <Nujoji />
                <ProfessionalBodies />
            </Page>
        </DocumentMeta>
    );
};
export default Home;
