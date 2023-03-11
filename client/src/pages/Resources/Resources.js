import React from 'react';
import './Resources.scss';
import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';

import { Intro } from './components/Intro';
import Attached from './components/books/Attached';
import Encyclopaedia from './components/books/Encyclopaedia';
import Videos from './components/videos/Videos';
import Seattle from './components/podcasts/Seattle';
import AllInTheMind from './components/podcasts/AllInTheMind';

import {
    TITLE_RESOURCES,
    DESCRIPTION_RESOURCES,
    AUTHOR,
    CANONICAL_RESOURCES,
    KEYWORDS_RESOURCES,
    OG_IMG_HOME,
} from '../../metaData';
import TravelsWithEpicurus from './components/books/TravelsWithEpicurus';
import British from './components/books/British';
import InTherapy from './components/podcasts/InTherapy';
import PsychiatryAndPsychotherapyPodcast from './components/podcasts/PsychiatryAndPsychotherapyPodcast';

const meta = {
    title: TITLE_RESOURCES,
    description: DESCRIPTION_RESOURCES,
    canonical: CANONICAL_RESOURCES,
    meta: {
        name: {
            author: AUTHOR,
            keywords: KEYWORDS_RESOURCES,
        },
        property: {
            'og:title': TITLE_RESOURCES,
            'og:url': CANONICAL_RESOURCES,
            'og:image': OG_IMG_HOME,
            'og:description': DESCRIPTION_RESOURCES,
        },
    },
};

const Resources = () => {
    return (
        <DocumentMeta {...meta}>
            <Page page='Resources'>
                <Intro />
                {/* books */}
                <TravelsWithEpicurus />
                <British />
                <Attached />
                <Encyclopaedia />
                {/* videos */}
                <Videos />
                {/* podcasts */}
                <Seattle />
                <InTherapy />
                <PsychiatryAndPsychotherapyPodcast />
                <AllInTheMind />
            </Page>
        </DocumentMeta>
    );
};

export default Resources;
