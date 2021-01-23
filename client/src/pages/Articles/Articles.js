import React from 'react';
import './Articles.scss';

import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';

import { articles } from './components/articles';

import { Intro } from './components/Intro';
import { Article } from './components/Article';

const meta = {
    title: 'Articles | Nujoji Calvocoressi Counselling and Psychotherapy',
    description: '',
    canonical: 'http://www.calvocoressi.com/articles',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling, psychotherapy, therapy, London, resources',
        },
    },
};

export const Articles = () => {
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
