import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import ClinicalSupervision from '../../../components/modals/ClinicalSupervision';

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
                                    To <b>change</b> we must feel
                                    <b> listened</b> to
                                </span>
                            ),
                        }}
                    />

                    <p>
                        Hello, my name is Nujoji, and I am a psychotherapist and{' '}
                        <ClinicalSupervision
                            btnText='clinical supervisor'
                            btnClass='link link-underlined'
                        />{' '}
                        working in London, Brighton and{' '}
                        <Link to='/therapy#online' smooth className='link'>
                            online
                        </Link>
                        . I am passionate about my work, and I firmly believe
                        that therapy can bring about positive change to
                        people&#39;s lives.
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
