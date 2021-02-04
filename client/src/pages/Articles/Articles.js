import React from 'react';
import './Articles.scss';

import DocumentMeta from 'react-document-meta';
import Page from '../../components/Page/Page';

import { articles } from './components/articles';

import { Intro } from './components/Intro';
import { FeaturedArticles } from './components/FeaturedArticles';
import { OtherArticles } from './components/OtherArticles';

import {
    TITLE_ARTICLES,
    DESCRIPTION_ARTICLES,
    AUTHOR,
    OG_IMG_HOME,
    KEYWORDS_ARTICLES,
    CANONICAL_ARTICLES,
} from '../../metaData';

let meta = {
    title: TITLE_ARTICLES,
    description: DESCRIPTION_ARTICLES,
    canonical: CANONICAL_ARTICLES,
    meta: {
        name: {
            author: AUTHOR,
            keywords: KEYWORDS_ARTICLES,
        },
        property: {
            'og:title': TITLE_ARTICLES,
            'og:url': CANONICAL_ARTICLES,
            'og:image': OG_IMG_HOME,
            'og:description': DESCRIPTION_ARTICLES,
        },
    },
};

export const Articles = () => {
    const { location } = window;
    const { hash } = location;
    if (hash && articles[hash.slice(1)]) {
        const article = articles[hash.slice(1)];

        const TITLE =
            article.title +
            ' | Articles | Nujoji Calvocoressi Counselling and Psychotherapy';
        const URL = 'http://www.calvocoressi.com/articles' + hash;

        meta.title = TITLE;
        meta.description = article.summary;
        meta.canonical = URL;
        meta.meta = {
            ...meta.meta,
            property: {
                'og:title': TITLE,
                'og:url': URL,
                'og:image': require('../../imgs/' + article.img),
                'og:description': article.summary,
            },
        };
    }
    return (
        <DocumentMeta {...meta}>
            <Page page='Articles'>
                <Intro />
                <FeaturedArticles />
                <OtherArticles />
            </Page>
        </DocumentMeta>
    );
};

export default Articles;
