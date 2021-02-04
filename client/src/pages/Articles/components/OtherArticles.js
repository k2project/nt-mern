import React from 'react';
import { articles } from './articles';

import { ArticleRow } from './ArticleRow';

export const OtherArticles = () => {
    return (
        <div className='Articles-others'>
            {articles
                .filter((a) => !a.featured)
                .map((a, i) => (
                    <ArticleRow key={a.id} article={a} id={a.id} />
                ))}
        </div>
    );
};
