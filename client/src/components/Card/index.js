import React from 'react';
import './Card.scss';

export const Card = ({ item }) => {
    const { title, subtitle, summary, link, button, icon } = item;
    return (
        <div className='card'>
            <div className='card__desc'>
                <div className='card__title'>{title}</div>
                <div className='card__subtitle'>{subtitle}</div>
                <div>{summary}</div>
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
            {link && (
                <a
                    href={link.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='card__icon'
                >
                    {icon && <img src={icon} alt='' />}
                    <span className='sr-only'>{title}</span>
                </a>
            )}
            {button && icon && (
                <span className='card__icon'>
                    <img src={icon} alt='' />
                </span>
            )}
        </div>
    );
};
