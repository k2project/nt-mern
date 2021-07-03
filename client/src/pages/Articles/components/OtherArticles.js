import React, { useState } from 'react';
import { articles } from './articles';
import { ArticleRow } from './ArticleRow';

const LIMIT_ARTICLES_DISPLAY = 5;

export const OtherArticles = () => {
    const others = articles
        .filter((a) => !a.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const OPINIONS = 'Opinion piece';
    const LETTERS = 'Letter to the Editor';
    const QUOTES = 'Quoted in articles';

    const getArticlesByCat = (category) =>
        others.filter((a) => a.category === category);

    return (
        <>
            <ArticlesListByCategory
                category={OPINIONS}
                articles={getArticlesByCat(OPINIONS)}
            />
            <ArticlesListByCategory
                category={LETTERS}
                articles={getArticlesByCat(LETTERS)}
            />
            <ArticlesListByCategory
                category={QUOTES}
                articles={getArticlesByCat(QUOTES)}
            />
        </>
    );
};

const ArticlesListByCategory = ({ category, articles }) => {
    const [rest, showRest] = useState(false);
    const initShownArticles = articles.slice(0, LIMIT_ARTICLES_DISPLAY);
    const restArticles = articles.slice(LIMIT_ARTICLES_DISPLAY);

    if (!articles.length) return null;

    return (
        <div className='Articles-others'>
            <div className='Articles-category'>
                <h3>
                    <b>{category}</b>
                    <span className='budge'>{articles.length}</span>
                </h3>
                {articles.length > LIMIT_ARTICLES_DISPLAY && (
                    <button
                        onClick={() => showRest(!rest)}
                        className='btn_square'
                    >
                        {rest ? 'Hide' : 'Show all'}
                    </button>
                )}
            </div>
            {initShownArticles.map((a, i) => (
                <ArticleRow key={a.id} article={a} id={a.id} />
            ))}

            {rest &&
                restArticles.map((a, i) => (
                    <ArticleRow key={a.id} article={a} id={a.id} />
                ))}

            {articles.length > LIMIT_ARTICLES_DISPLAY && (
                <button
                    onClick={() => showRest(!rest)}
                    className='btn btn-center '
                >
                    {rest ? 'Hide older' : 'Show all'}
                </button>
            )}
        </div>
    );
};
