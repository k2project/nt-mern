import React from 'react';

import { ArticlePost } from './ArticlePost';

export const Article = ({ article, odd = false }) => {
    // useEffect(() => {
    //     const { location } = window;
    //     if (location.hash && location.hash === '#' + article.id) {
    //         setOpen(true);
    //         document.getElementById(article.id).scrollIntoView();
    //     }
    // }, []);

    const onOpen = (id) => {
        const allPosts = document.querySelectorAll('.post');
        Array.from(allPosts).forEach((post) => {
            post.classList.remove('open');
        });
        const article = document.getElementById(id);
        article.scrollIntoView();
        article.classList.add('open');
    };

    const onClose = (id) => {
        const article = document.getElementById(id);
        article.scrollIntoView();
        article.classList.remove('open');
    };

    return (
        <div id={article.id} className={'Article post ' + article.cls}>
            <ArticlePost
                article={article}
                onOpen={onOpen}
                onClose={onClose}
                odd={odd}
            />
        </div>
    );
};
