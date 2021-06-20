import React, { useState } from 'react';
import { articles } from './articles';

import { ArticleRow } from './ArticleRow';

const LIMIT_ARTICLES_DISPLAY = 4;

export const OtherArticles = () => {
    const [rest, showRest] = useState(false);
    const others = articles
        .filter((a) => !a.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    const initShownArticles = others.slice(0, LIMIT_ARTICLES_DISPLAY);
    const restArticles = others.slice(LIMIT_ARTICLES_DISPLAY);

    return (
        <div className='Articles-others'>
            {initShownArticles.map((a, i) => (
                <ArticleRow key={a.id} article={a} id={a.id} />
            ))}
            {!rest && (
                <div className='Articles-others-btnContainer'>
                    <button onClick={() => showRest(true)} className='btn'>
                        Show more
                    </button>
                </div>
            )}
            {rest &&
                restArticles.map((a, i) => (
                    <ArticleRow key={a.id} article={a} id={a.id} />
                ))}
        </div>
    );
};
