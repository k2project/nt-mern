import React from 'react';

const SectionTitle = props => {
    const { title, subtitle, divider } = props.data;
    return (
        <div>
            {divider && <div className={'section__divider ' + divider}></div>}
            {subtitle && <div className={'section__subtitle'}>{subtitle}</div>}
            <div className='section__title'>{title}</div>
            <div>{props.children}</div>
        </div>
    );
};

export default SectionTitle;
