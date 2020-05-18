import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { NavHashLink as Link } from 'react-router-hash-link';

import './Home.scss';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

import bacp from './../../imgs/bacp.PNG';
import ukcp from './../../imgs/ukcp.png';
import iafp from './../../imgs/iafp.png';
import dbs from './../../imgs/dbs.png';
import truthproject from './../../imgs/tp.png';
import graduation from './../../imgs/ok2.png';

const meta = {
    title:
        'Nujoji Calvocoressi Counselling and Psychotherapy | City of London & West End Therapy',
    description:
        'Welcome to my counselling and psychotherapy practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives. I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://www.calvocoressi.com/',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling, psychotherapy therapy, London',
        },
    },
};

class Home extends Component {
    render() {
        return (
            <DocumentMeta {...meta}>
                <Page page='Home'>
                    <Welcome />
                    <About />
                    <Nujoji />
                    <ProfessionalBodies />
                </Page>
            </DocumentMeta>
        );
    }
}
export default Home;

const Welcome = () => {
    return (
        <section className='Welcome'>
            <div className='Home__bg_themed Home__bg_hello'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: '',
                            title: (
                                <span>
                                    <b>Change</b> happens when you allow
                                    yourself to look at <b>life</b> in a new way
                                </span>
                            ),
                        }}
                    />
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        It is not uncommon to feel lost or confused from time to
                        time, or to experience symptoms, unhelpful behaviours or
                        a lack of confidence. These are things that we can all
                        experience.
                    </p>
                    <p>
                        {' '}
                        Therapy is about creating a safe and non-judgemental
                        space where you can reflect, explore and understand the
                        difficulties in your life.
                    </p>
                    {/* <p>However you can always break the cycle of anger, anxiety, addiction, distrust and    unhealthy behaviour if you want. It all starts with you... Make a choice today!</p> */}
                    <Link to='/contact#form' className='btn' smooth>
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
};
const About = () => {
    return (
        <section className='About' id='about'>
            <div className='Page__bg_grey'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'themed',
                            subtitle: '',
                            title: (
                                <span>
                                    When was the last time you felt{' '}
                                    <b>understood</b>?
                                </span>
                            ),
                        }}
                    />

                    <p>
                        Hello, my name is Nujoji and I am a counsellor and
                        psychotherapist in London. I am passionate about my work
                        and firmly believe that therapy can bring about positive
                        change to people’s lives.
                    </p>
                    <Link
                        to='/therapy#integrative-therapy'
                        className='btn'
                        smooth
                    >
                        More About Therapy
                    </Link>
                </div>
            </div>
            <div className='About__bg_therapist'>
                <div className='cover'>
                    {/* <SectionTitle data={{divider:'',subtitle:'',title:'My name is Nujoji'}}/> */}
                </div>
            </div>
        </section>
    );
};
const Nujoji = () => {
    return (
        <section className='Nujoji'>
            <div className='Home__bg_themed Page__bg_blue'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'white',
                            subtitle: '',
                            title: (
                                <span>
                                    Two people <b>sitting</b> down{' '}
                                    <b>together</b>
                                </span>
                            ),
                        }}
                    />

                    <p>
                        I have been trained in{' '}
                        <Link to='/therapy/#integrative-therapy'>
                            integrative therapy
                        </Link>
                        , this is a progressive form of therapy that combines
                        different therapeutic tools and approaches to fit the
                        needs of the individual client. By combining elements
                        drawn from different schools of psychological theory and
                        research, integrative therapy becomes a flexible and
                        inclusive approach to understanding. Each person is
                        considered as an individual and counselling and
                        psychotherapy techniques are tailored to their
                        individual needs and personal circumstances.
                    </p>
                    <p className='mob-hidden'>
                        I place importance on the therapeutic relationship. My
                        practice is particularly informed by psychodynamic and
                        attachment theory, systemic thinking and underpinned
                        with a trauma informed approach.
                    </p>
                </div>
            </div>
            <div>
                {/* <img
                    src={require('./../../imgs/homeText.pt2.png')}
                    alt='Nujoji Calvocoressi'
                    className='Page__top_img part2'
                /> */}
                <div className='section__wrapper'>
                    <p>
                        {' '}
                        I trained for four years at{' '}
                        <a
                            href='https://www.minstercentre.ac.uk'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            The Minster Centre
                        </a>{' '}
                        in London, a leading integrative psychotherapy training
                        in the United Kingdom. Courses meet high academic and
                        professional standards and are validated by the main
                        professional bodies the{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            UKCP
                        </a>{' '}
                        and{' '}
                        <a
                            href='https://www.bacp.co.uk/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            BACP
                        </a>
                        .
                    </p>
                    <p>I obtained the following qualifications:</p>
                    <p>
                        <span className='qualifications'>
                            <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            />
                            Master of Arts in Counselling and Psychotherapy
                        </span>
                        <span className='qualifications'>
                            <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            />
                            Advanced Post Graduate Diploma in Counselling and
                            Psychotherapy
                        </span>
                        <span className='qualifications'>
                            <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            />
                            Post Graduate Diploma in Counselling
                        </span>
                    </p>
                    <p>
                        I am experienced working one to one with individual
                        clients with differing cultures, identities and belief
                        systems in my private practice. I also work in the
                        National Health Service with men in the secure forensic
                        estate who engage in violent, harmful and criminal
                        behaviour.
                    </p>
                    <p>
                        <a
                            href='https://www.truthproject.org.uk/i-will-be-heard'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={truthproject}
                                alt='I will be heard. Truth project.'
                                className='tp__logo'
                            />
                        </a>
                        Aside from my work as a psychotherapist I am a member of
                        the Victims and Survivors’ Consultative Panel at the{' '}
                        <a
                            href='https://www.truthproject.org.uk/i-will-be-heard'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Independent Inquiry into Child Sexual Abuse
                        </a>
                        .
                    </p>
                </div>
            </div>
        </section>
    );
};

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
const ProfessionalBodies = () => {
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
