import React, { useState } from 'react';
import { ArticlePost } from './ArticlePost';
import { Card } from '../../../components/Card';
import dayjs from 'dayjs';

export const ArticleRow = ({ article }) => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        const allPosts = document.querySelectorAll('.post');
        Array.from(allPosts).forEach((post) => {
            post.classList.remove('open');
        });
        document.getElementById(article.id).scrollIntoView();
        document.getElementById(article.id).classList.add('open');
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
        document.getElementById(article.id).scrollIntoView();
    };

    const openCls = open ? ' open ' : '';

    const item = {
        title: article.title,
        subtitle: (
            <p>
                by <b>{article.author}</b> - posted on{' '}
                <b>{dayjs(article.date).format('MMM D, YYYY')}</b>
            </p>
        ),
        summary: article.summary,
        button: {
            onClick: onOpen,
            label: 'Read on',
        },
        logo: article.logo ? require('../../../imgs/' + article.logo) : null,
        publication: article.publication,
    };

    return (
        <div
            id={article.id}
            className={'OtherArticle Article post ' + article.cls + openCls}
        >
            <ArticlePost
                article={article}
                openCls={openCls}
                onClose={onClose}
            />
            <Card item={item} />
        </div>
    );
};
