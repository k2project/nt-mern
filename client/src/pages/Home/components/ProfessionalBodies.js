import React from 'react';

import bacp from './../../../imgs/bacp.PNG';
import ukcp from './../../../imgs/ukcp.png';
import iafp from './../../../imgs/iafp.png';
import dbs from './../../../imgs/dbs.png';

const professionalBodiesData = [
    {
        logo: bacp,
        link:
            'https://www.bacp.co.uk/profile/8fb9f46e-e25c-e811-8108-3863bb351d40/therapist?location=City%20of%20London',
        name: 'bacp',
    },
    {
        logo: ukcp,
        link:
            'https://www.psychotherapy.org.uk/therapist/nujoji-calvocoressi/?back%5Btherapist_name%5D=nujoji&amp;back%5Bsubmitted%5D=1&amp;back%5Bseed%5D=1054133881',
        name: 'ukcp',
    },
    {
        logo: iafp,
        link: 'https://forensicpsychotherapy.com/',
        name: 'iafp',
    },
    {
        logo: dbs,
        link:
            'https://www.gov.uk/government/organisations/disclosure-and-barring-service/',
        name: 'dbs',
    },
];

export const ProfessionalBodies = () => {
    const logos = professionalBodiesData.map((b) => {
        return (
            <a
                href={b.link}
                key={'professional_body_' + b.name}
                target='_blank'
                rel='noopener noreferrer'
            >
                <img
                    src={b.logo}
                    alt={b.name}
                    className={'ProfessionalBodies__logo ' + b.name}
                />
            </a>
        );
    });
    return (
        <div className='ProfessionalBodies'>
            <div className='wrapper'>
                <div className='ProfessionalBodies__logos'>{logos}</div>
                <p>
                    I am a registered member of the United Kingdom Council for
                    Psychotherapy (UKCP) and adhere to their{' '}
                    <a
                        href='https://www.psychotherapy.org.uk/wp-content/uploads/2019/06/UKCP-Code-of-Ethics-and-Professional-Practice-2019.pdf'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Code of Ethics and Professional Practice
                    </a>
                    . I am a member of the International Association for
                    Forensic Psychotherapy (IAFP) and the British Association of
                    Counsellors and Psychotherapists (BACP). I hold an enhanced
                    certificate from the Disclosure and Barring Service.
                </p>
            </div>
        </div>
    );
};
