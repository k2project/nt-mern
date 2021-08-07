import React from 'react';
import './Bullet.scss';

import logo from '../../imgs/butterfly.png';

export const Bullet = ({ type }) => {
    switch (type) {
        case 'img':
            return (
                <span className='bullet-img'>
                    <img src={logo} alt='' />
                </span>
            );
        case 'square':
            return <span className='bullet'>&#9635;</span>;
        case 'romboid':
            return <span className='bullet'>&#x25C8;</span>;
        case 'tick':
            return <span className='bullet'>&#10004;</span>;
        case 'eyefish':
            return <span className='bullet'>&#9673;</span>;

        default:
            return <span className='bullet-circle' />;
    }
};
