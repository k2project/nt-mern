import React from 'react';
import { articles } from './articles';

import { ArticleRow } from './ArticleRow';

export const OtherArticles = () => {
    return (
        <div className='Articles-others'>
            {articles
                .filter((a) => !a.featured)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((a, i) => (
                    <ArticleRow key={a.id} article={a} id={a.id} />
                ))}
        </div>
    );
};
