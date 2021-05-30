import React from 'react';

import ListeningToTheVoicesOfSurvivors from './articles/ListeningToTheVoicesOfSurvivors';
import AbuseKeptSecret from './articles/AbuseKeptSecret';

const dummyArticle = {
    id: 1,
    cls: 'dummy',
    featured: true,
    title: " Article's title goes here ",
    summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
    date: '2021-01-22',
    author: 'Nujoji Calvocoressi',
    publication: null,
    img: 'dummy.jpg',
    content: (
        <>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate.
            </p>
            <p className='article-subtitle'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </>
    ),
    comments: [],
};

export const articles = [ListeningToTheVoicesOfSurvivors, AbuseKeptSecret];
