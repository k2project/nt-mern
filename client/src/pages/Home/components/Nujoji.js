import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import SectionTitle from '../../../components/SectionTitle';

import truthproject from './../../../imgs/tp.png';
import graduation from './../../../imgs/ok2.png';

export const Nujoji = () => {
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
                        <Link
                            to='/therapy/#integrative-therapy'
                            className='link'
                        >
                            integrative psychotherapy
                        </Link>
                        , this is a progressive form of therapy that combines
                        different therapeutic tools and approaches to fit the
                        needs and personal circumstances of the individual
                        client. By combining elements drawn from different
                        schools of psychological theory and research,
                        integrative therapy becomes a flexible and inclusive
                        approach.
                    </p>
                    <p className='mob-hidden'>
                        I place importance on the therapeutic relationship. My
                        practice is particularly informed by{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/what-is-psychotherapy/types-of-psychotherapy/#psychodynamic'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            psychodynamic
                        </a>{' '}
                        and{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/what-is-psychotherapy/types-of-psychotherapy/#attachment-based-psychotherapy'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            attachment theory
                        </a>
                        ,{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/what-is-psychotherapy/types-of-psychotherapy/#relational'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            relational concepts
                        </a>{' '}
                        and underpinned with a trauma informed approach.
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
                        I have trained for four years at{' '}
                        <a
                            href='https://www.minstercentre.ac.uk'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            The Minster Centre,
                        </a>{' '}
                        a leading psychotherapy training in the United Kingdom.
                        Courses meet high academic and professional standards
                        and are validated by the main professional bodies the{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            UKCP
                        </a>{' '}
                        and{' '}
                        <a
                            href='https://www.bacp.co.uk/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
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
                        I have also undertaken further training in Critical
                        Incident Debriefing, this is a highly effective
                        intervention to deal with the adverse psychological
                        impact of critical incidents. I am currently completing
                        a Mentalization-Based Treatment clinical training at{' '}
                        <a
                            href='https://www.annafreud.org'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            The Anna Freud Centre
                        </a>
                        .
                    </p>
                    <p>
                        I have experience working one to one with individual
                        clients who have differing belief systems and
                        backgrounds including those identifying on the{' '}
                        <Link to='/therapy/#inclusive-therapy' className='link'>
                            spectrum of gender, sexuality and relationship
                            diversity
                        </Link>
                        . I also work in the National Health Service with men in
                        the secure forensic estate who engage in violent,
                        harmful and criminal behaviour.
                    </p>

                    {/* <p>
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
                    </p> */}
                </div>
            </div>
        </section>
    );
};
