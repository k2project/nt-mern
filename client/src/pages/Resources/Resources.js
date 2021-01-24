import React from 'react';
import './Resources.scss';

import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';

import { Intro } from './components/Intro';
import Attached from './components/books/Attached';
import Tiger from './components/books/Tiger';
import Encyclopaedia from './components/books/Encyclopaedia';
import WhenTheBodySaysNo from './components/books/WhenTheBodySaysNo';
import Videos from './components/videos/Videos';
import Seattle from './components/podcasts/Seattle';
import Mental from './components/podcasts/Mental';
import GoodAncestor from './components/podcasts/GoodAncestor';
import AllInTheMind from './components/podcasts/AllInTheMind';

import {
    TITLE_RESOURCES,
    DESCRIPTION_RESOURCES,
    AUTHOR,
    CANONICAL_RESOURCES,
    KEYWORDS_RESOURCES,
    OG_IMG_HOME,
} from '../../metaData';

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

export const Resources = () => {
    return (
        <DocumentMeta {...meta}>
            <Page page='Resources'>
                <Intro />
                {/* books */}
                <Attached />
                <Tiger />
                <Encyclopaedia />
                <WhenTheBodySaysNo />
                {/* videos */}
                <Videos />
                {/* podcasts */}
                <Seattle />
                <Mental />
                <GoodAncestor />
                <AllInTheMind />
            </Page>
        </DocumentMeta>
    );
};

export default Resources;
