import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import './Home.scss';
import Page from '../../components/Page/Page';
import { Welcome } from './components/Welcome';
import { About } from './components/About';
import { Nujoji } from './components/Nujoji';
import { ProfessionalBodies } from './components/ProfessionalBodies';

const meta = {
    title:
        'Nujoji Calvocoressi Counselling and Psychotherapy | City of London, West End & Online',
    description:
        'Welcome to my counselling and psychotherapy practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives. I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://www.calvocoressi.com/',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling, psychotherapy therapy, London, online',
        },
        // property: {
        //     'og:title': 'Samvikshana',
        //     'og:url': 'https://samvikshana.weebly.com/',
        //     // 'og:image': imageUri,
        //     'og:description': 'New Perspective of Exploration',
        // },
    },
};

class Home extends Component {
    render() {
        return (
            <DocumentMeta {...meta}>
                <Page page='Home'>
                    <Welcome />
                    <About />
                    <Nujoji />
                    <ProfessionalBodies />
                </Page>
            </DocumentMeta>
        );
    }
}
export default Home;
