import React from 'react';
import dayjs from 'dayjs';

export const ArticlePost = ({ article, onOpen, onClose, odd }) => {
    return (
        <div className='Article-post'>
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
