import React from 'react';

import aetna from './../../../imgs/aetna.jpg';
import aviva from './../../../imgs/aviva.png';
import axa from './../../../imgs/axa.png';
import cigna from './../../../imgs/cigna.png';
import healix from './../../../imgs/healix.png';
import validium from './../../../imgs/validium.png';
import vitality from './../../../imgs/vitality.png';

const insuranceLogos = [
    {
        logo: axa,
        link: 'https://www.axappphealthcare.co.uk',
        name: 'Axa PPP',
    },
    {
        logo: aetna,
        link: 'https://www.aetna.com',
        name: 'Aetna',
    },
    {
        logo: aviva,
        link: 'https://www.aviva.co.uk/health/health-products/',
        name: 'Aviva',
    },
    {
        logo: vitality,
        link: 'https://www.vitality.co.uk',
        name: 'Vitality',
    },
    {
        logo: healix,
        link: 'https://healix.com',
        name: 'Healix',
    },
    {
        logo: validium,
        link: 'https://www.validium.com',
        name: 'Validium',
    },
    {
        logo: cigna,
        link: 'https://www.cigna.co.uk/',
        name: 'Cigna',
    },
];

export const Insurance = () => {
    const logos = insuranceLogos.map((i) => (
        <a href={i.link} key={i.name} target='_blank' rel='noopener noreferrer'>
            <img
                src={i.logo}
                className='Insurance__logo'
                alt={i.name}
                key={`insuranceLogo_${i.name}`}
            />
        </a>
    ));
    return (
        <div className='Insurance'>
            <div className='wrapper'>
                <div className='Insurance__logos'>{logos}</div>
                <p>
                    If you have a private health insurance policy, it is often
                    possible that you can fund some or all your psychotherapy
                    sessions through your health insurance policy. I am
                    recognised with several medical insurers including Aetna,
                    Aviva, Axa PPP, Cigna, Healix, Validium and Vitality Health.
                </p>
            </div>
        </div>
    );
};
