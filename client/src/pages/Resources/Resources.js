import React from 'react';
import './Resources.scss';
import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

const meta = {
    title: 'Resources | Nujoji Calvocoressi Counselling and Psychotherapy',
    description:
        'Looking for a written, visual or audible resource? The below selection is not designed to substitute counselling or psychotherapy, rather to support your curiosity and decision making about whether now is the right time for you to start therapy. They are all resources I have chosen because they have been useful to my own personal and professional development.',
    canonical: 'http://www.calvocoressi.com/contact',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling, psychotherapy, therapy, London, resources'
        }
    }
};
const pageDetails = {
    name: 'Resources',
    img: {
        imgName: '',
        imgAlt: ''
    }
};

export const Resources = () => {
    return (
        <DocumentMeta {...meta}>
            <Page page={pageDetails}></Page>
        </DocumentMeta>
    );
};
