import React from 'react';

const SectionTitle = props => {
    const { title, subtitle, divider } = props.data;
    return (
        <div className='section__body'>
            <div>{props.children}</div>
            <div>
                {divider && (
                    <div className={'section__divider ' + divider}></div>
                )}
                <div className='section__title'>{title}</div>
                {subtitle && (
                    <div className={'section__subtitle'}>{subtitle}</div>
                )}
            </div>
        </div>
    );
};

export default SectionTitle;
