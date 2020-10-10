import React, { Component, Fragment } from 'react';
import DocumentMeta from 'react-document-meta';
import { NavHashLink as Link } from 'react-router-hash-link';
import './Therapy.scss';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

import { TherapyIntro } from './components/TherapyIntro';
import { IntegrativeTherapy } from './components/IntegrativeTherapy';
import { FAQ } from './components/FAQ';
import { Fees } from './components/Fees';
import { Insurance } from './components/Insurance';

const meta = {
    title: 'Therapy | Nujoji Calvocoressi Counselling and Psychotherapy',
    description:
        'Welcome to my counselling and psychotherapy practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives. I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://www.calvocoressi.com/therapy',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling and psychotherapy, integrative therapy, London',
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
