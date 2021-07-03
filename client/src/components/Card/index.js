import React from 'react';
import './Card.scss';

export const Card = ({ item }) => {
    const { title, subtitle, summary, link, button, publication, logo } = item;
    return (
        <div className='card'>
            <div className='card__desc'>
                <div className='card__title'>{title}</div>
                <div className='card__subtitle'>{subtitle}</div>
                <div className='card__summary'>{summary}</div>
                {link && (
                    <div>
                        <a
                            href={link.url}
                            className='btn'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {link.label}
                        </a>
                    </div>
                )}
                {button && (
                    <div>
                        <button
                            onClick={button.onClick}
                            className='btn'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {button.label}
                        </button>
                    </div>
                )}
            </div>
            {logo && (
                <div className='card__logo'>
                    <img src={logo} alt={publication} />
                </div>
            )}
        </div>
    );
};
