import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

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

class Home2 extends Component {
    render() {
        return (
            <DocumentMeta {...meta}>
                <Page page='Home2' headerContent={<NewHeader />}>
                    <Welcome />
                    <About />
                    <Nujoji />
                    <ProfessionalBodies />
                </Page>
            </DocumentMeta>
        );
    }
}
export default Home2;

const NewHeader = () => {
    return (
        <div className='NewHeader'>
            <div className='blob' />
            <h2>Psychotherapy</h2>
            <h1>
                <span>Nujoji</span>Calvocoressi
            </h1>
        </div>
    );
};
