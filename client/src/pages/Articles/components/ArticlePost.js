import React from 'react';
import dayjs from 'dayjs';
import OuterLink from '../../../components/links/OuterLink';

export const ArticlePost = ({ article, onOpen, onClose, odd }) => {
    return (
        <div className='Article-post'>
            <div className='Article-header'>
                <div className='Article-header-info'>
                    <h3 className='article-title'>{article.title}</h3>
                    <p className='article-author'>
                        {article.author && (
                            <>
                                by <b>{article.author}</b> -{' '}
                            </>
                        )}
                        {article.pseudoauthor && (
                            <>
                                <b>{article.pseudoauthor}</b> -{' '}
                            </>
                        )}
                        {article.issue ? (
                            article.issue
                        ) : (
                            <>
                                posted on{' '}
                                <b>
                                    {dayjs(article.date).format('MMM D, YYYY')}
                                </b>
                            </>
                        )}
                    </p>
                    <p className='article-summary'>{article.summary}</p>

                    <button className='btn' onClick={() => onOpen(article.id)}>
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
                <div className='Article-footer'>
                    <p>
                        <OuterLink
                            href={article.sourceUrl}
                            text=' Read the original article here'
                        />
                        .{' '}
                    </p>
                    <button className='btn' onClick={() => onClose(article.id)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
