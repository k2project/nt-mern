import React from 'react';
import './Resources.scss';
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

import chair from '../../imgs/chair.png';

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
            <Page page={pageDetails}>
                <Intro />
            </Page>
        </DocumentMeta>
    );
};

export default Resources;

const Intro = () => {
    return (
        <section className='Intro'>
            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: '',
                            title: (
                                <span>
                                    <b>Looking</b> for a written, visual or
                                    audible <b>resource</b>?
                                </span>
                            )
                        }}
                    ></SectionTitle>
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        <img src={chair} alt='' className='chair' />
                        The below selection is not designed to substitute
                        counselling or psychotherapy, rather to support your
                        curiosity and decision making about whether now is the
                        right time for you to start therapy. They are all
                        resources I have chosen because they have been useful to
                        my own personal and professional development.
                    </p>
                </div>
            </div>
        </section>
    );
};
