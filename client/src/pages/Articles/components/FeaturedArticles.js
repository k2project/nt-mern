import React from 'react';
import { articles } from './articles';

import { Article } from './Article';

export const FeaturedArticles = () => {
    return (
        <div className='Articles-featured'>
            {articles
                .filter((a) => a.featured)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((a, i) => (
                    <Article key={a.id} article={a} odd={i % 2} />
                ))}
        </div>
    );
};
