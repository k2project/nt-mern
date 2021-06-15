import React from 'react';
import './CardWithThumbnail.scss';

export const CardWithThumbnail = ({ item }) => {
    const { title, subtitle, summary, link, button, thumbnail } = item;
    const backgroundImage = thumbnail
        ? 'url(' + require('../../imgs/' + thumbnail) + ')'
        : 'none';
    return (
        <div className='cardWithThumbnail'>
            <div className='cardWithThumbnail__desc'>
                <div className='cardWithThumbnail__title'>{title}</div>
                <div className='cardWithThumbnail__subtitle'>{subtitle}</div>
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
            {thumbnail && (
                <div className='thumbnail' style={{ backgroundImage }}>
                    <a
                        href={link.url}
                        className='cover'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Watch youtube video: <q>{title}</q>
                    </a>
                </div>
            )}
        </div>
    );
};
