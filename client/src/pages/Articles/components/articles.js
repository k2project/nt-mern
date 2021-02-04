import React from 'react';

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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </p>
        </>
    ),
    comments: [],
};
const dummySecondaryArticle = {
    id: 5,
    cls: 'dummy',
    title: " OTHER Article's title goes here 5 ",
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
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
            </p>
        </>
    ),
    comments: [],
};

export const articles = [
    dummyArticle,
    { ...dummyArticle, id: 2, img: 'dummy3.jpg' },
    { ...dummyArticle, id: 3, img: 'dummy2.jpg' },
    { ...dummyArticle, id: 4, img: 'dummy4.jpg' },
    dummySecondaryArticle,
    {
        ...dummySecondaryArticle,
        id: 6,
        img: 'dummy3.jpg',
        title: 'OTHER Article title goes here 6',
    },
    {
        ...dummySecondaryArticle,
        id: 7,
        img: 'dummy2.jpg',
        title: 'OTHER Article title goes here 7',
    },
    {
        ...dummySecondaryArticle,
        id: 8,
        img: 'dummy4.jpg',
        title: 'OTHER Article title goes here 8',
    },
];
