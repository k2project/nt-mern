import React from 'react';
import './Articles.scss';

import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';

import { articles } from './components/articles';

import { Intro } from './components/Intro';
import { Article } from './components/Article';

let meta = {
    title: 'Articles | Nujoji Calvocoressi Counselling and Psychotherapy',
    description: '',
    canonical: 'http://www.calvocoressi.com/articles',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling, psychotherapy, therapy, London, resources',
        },
        property: {
            'og:title': 'Samvikshana',
            'og:url': 'https://samvikshana.weebly.com/',
            // 'og:image': imageUri,
            'og:description': 'New Perspective of Exploration',
        },
    },
};

// <meta
// property='og:title'
// content='About Nicola Moore | Counselling and Psychotherapy'
// />
// <meta
// property='og:url'
// content='https://www.nicolamooretherapy.co.uk/about'
// />
// <meta property='og:type' content='website' />
// <meta
// property='og:description'
// content='I am a fully qualified Psychotherapist (registered with UKCP and FPC). I help with anxiety, depressed mood, anger, trauma, relationship dissatisfaction, attachment issues, grief, body dysmorphia, issues with sexuality and gender, low self-esteem and self-identity, and more. I have worked within the NHS and charities seeing a diverse group of service users.'
// />
// <meta
// property='og:image'
// content='https://www.nicolamooretherapy.co.uk/imgs/nicola_moore_small.png'
// />

export const Articles = () => {
    const { location } = window;
    const { hash } = location;
    if (hash && articles[hash.slice(1)]) {
        const article = articles[hash.slice(1)];
        meta.title =
            article.title +
            ' | Articles | Nujoji Calvocoressi Counselling and Psychotherapy';
        meta.description = article.summary;
        meta.canonical = 'http://www.calvocoressi.com/articles' + hash;
        meta.meta = {
            ...meta.meta,
            property: {
                'og:title': 'Samvikshana',
                'og:url': 'https://samvikshana.weebly.com/',
                // 'og:image': imageUri,
                'og:description': 'New Perspective of Exploration',
            },
        };
    }
    return (
        <DocumentMeta {...meta}>
            <Page page='Articles'>
                <Intro />
                <div className='Articles-featured'>
                    {articles
                        .filter((a) => a.featured)
                        .map((a, i) => (
                            <Article key={a.id} article={a} odd={i % 2} />
                        ))}
                </div>
            </Page>
        </DocumentMeta>
    );
};

export default Articles;
