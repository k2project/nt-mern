import React from 'react';
import './Resources.scss';
import { Link } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

import chair from '../../imgs/chair.png';

import Attached from './Attached';
import Tiger from './Tiger';
import Encyclopaedia from './Encyclopaedia';
import Fuck from './Fuck';
import Videos from './Videos';
import Seattle from './Seattle';
import Race from './Race';
import Partially from './Partially';
import Files from './Files';

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
                {/* books */}
                <Attached />
                <Tiger />
                <Encyclopaedia />
                <Fuck />
                {/* videos */}
                <Videos />
                {/* podcsasts */}
                <Seattle />
                <Race />
                <Partially />
                <Files />
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
                                    Looking for a{' '}
                                    <b>written, visual or audible</b> resource?
                                </span>
                            )
                        }}
                    ></SectionTitle>
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        The below selection is not designed to substitute
                        counselling or psychotherapy, rather to support your
                        curiosity and decision making about whether now is the
                        right time for you to start therapy.
                    </p>
                    <div className='chair'>
                        <p>
                            They are all resources I have chosen because they
                            have been useful to my own personal and professional
                            development.
                        </p>
                        <img src={chair} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};
