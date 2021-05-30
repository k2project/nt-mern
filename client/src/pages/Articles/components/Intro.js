import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';

import truthproject from './../../../imgs/tp.png';

export const Intro = () => {
    return (
        <section className='Intro'>
            <div className='Articles__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: '',
                            title: (
                                <span>
                                    Writing about my <b> work </b>
                                    and <b> experience</b>
                                </span>
                            ),
                        }}
                    />
                    <Link to='/#about'>
                        <button className='btn'>More About Nujoji</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p className='Articles-intro'>
                        {/* <a
                            href='https://www.truthproject.org.uk/i-will-be-heard'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={truthproject}
                                alt='I will be heard. Truth project.'
                            />
                        </a> */}
                        Aside from my work as a psychotherapist I am a member of
                        the Victims and Survivors’ Consultative Panel at the{' '}
                        <a
                            href='https://www.truthproject.org.uk/i-will-be-heard'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
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
