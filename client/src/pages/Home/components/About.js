import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import SectionTitle from '../../../components/SectionTitle';

export const About = () => {
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
