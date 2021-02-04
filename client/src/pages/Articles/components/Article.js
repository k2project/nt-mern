import React, { useState, useEffect } from 'react';

import { ArticlePost } from './ArticlePost';
import { articles } from './articles';

export const Article = ({ article, odd = false }) => {
    const [open, setOpen] = useState(false);

    // useEffect(() => {
    //     const { location } = window;
    //     if (location.hash && location.hash === '#' + article.id) {
    //         setOpen(true);
    //         document.getElementById(article.id).scrollIntoView();
    //     }
    // }, []);

    const onOpen = () => {
        const allPosts = document.querySelectorAll('.post');
        Array.from(allPosts).forEach((post) => {
            post.classList.remove('open');
        });
        document.getElementById(article.id).scrollIntoView();
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        document.getElementById(article.id).scrollIntoView();
    };

    const openCls = open ? ' open ' : '';

    return (
        <div
            id={article.id}
            className={'Article post ' + article.cls + openCls}
        >
            <ArticlePost
                article={article}
                openCls={openCls}
                onOpen={onOpen}
                onClose={onClose}
                odd={odd}
            />
        </div>
    );
};
