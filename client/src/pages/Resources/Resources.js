import React from 'react';
import './Resources.scss';

import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';

import { Intro } from './components/Intro';
import Attached from './components/books/Attached';
import Tiger from './components/books/Tiger';
import Encyclopaedia from './components/books/Encyclopaedia';
import Fuck from './components/books/Fuck';
import Videos from './components/videos/Videos';
import Seattle from './components/podcasts/Seattle';
import Race from './components/podcasts/Race';
import Partially from './components/podcasts/Partially';
import Files from './components/podcasts/Files';

const meta = {
    title: 'Resources | Nujoji Calvocoressi Counselling and Psychotherapy',
    description:
        'Looking for a written, visual or audible resource? The below selection is not designed to substitute counselling or psychotherapy, rather to support your curiosity and decision making about whether now is the right time for you to start therapy. They are all resources I have chosen because they have been useful to my own personal and professional development.',
    canonical: 'http://www.calvocoressi.com/contact',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling, psychotherapy, therapy, London, resources',
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
                <Fuck />
                {/* videos */}
                <Videos />
                {/* podcasts */}
                <Seattle />
                <Partially />
                <Race />
                <Files />
            </Page>
        </DocumentMeta>
    );
};

export default Resources;
