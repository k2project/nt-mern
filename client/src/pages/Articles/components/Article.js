import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export const Article = ({ article, odd = false }) => {
    const [open, setOpen] = useState(false);
    console.log(open);

    useEffect(() => {
        const { location } = window;
        if (location.hash && location.hash === '#' + article.id) {
            setOpen(true);
            document.getElementById(article.id).scrollIntoView();
        }
    }, []);

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

    const openCls = open ? ' open' : '';
    console.log(odd);
    return (
        <div
            className={'Article post ' + article.cls + openCls}
            id={article.id}
        >
            <div className='Article-header'>
                <div className='Article-header-info'>
                    <h3 className='article-title'>{article.title}</h3>
                    <p>
                        by <b>{article.author}</b> - posted on{' '}
                        <b>{dayjs(article.date).format('MMM D, YYYY')}</b>
                    </p>
                    <p className='article-summary'>{article.summary}</p>

                    <button className='btn' onClick={onOpen}>
                        Read on
                    </button>
                </div>
                <div
                    className={
                        odd ? 'Article-header-img' : 'Article-header-img odd'
                    }
                    style={{
                        backgroundImage: `url("${require('./../../../imgs/' +
                            article.img)}")`,
                    }}
                >
                    <div className='cover' />
                </div>
            </div>
            <div className='Article-content'>
                {article.content}
                <button className='btn' onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};
