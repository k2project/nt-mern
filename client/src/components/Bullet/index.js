import React from 'react';
import './Bullet.scss';

import logo from '../../imgs/butterfly.png';

export const Bullet = ({ type = 'eyefish' }) => {
    switch (type) {
        case 'img':
            return (
                <span className='bullet-img'>
                    <img src={logo} alt='' />
                </span>
            );
        case 'square':
            return <span>&#9635;</span>;
        case 'romboid':
            return <span>&#x25C8;</span>;
        case 'eyefish':
        default:
            return <span>&#9673;</span>;
    }
};
