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
                                    To <b>change</b> we first need to feel 
                                    <b> understood</b>?
                                </span>
                            ),
                        }}
                    />

                    <p>
                        Hello, my name is Nujoji and I am a psychotherapist and counsellor working in London and online. I am passionate about my work and I firmly believe that therapy can bring about positive change to people's lives.
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
