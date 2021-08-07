import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';

import chair from '../../../imgs/chair.png';

export const Intro = () => {
    return (
        <section className='Intro'>
            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: '',
                            title: (
                                <span>
                                    Looking for a{' '}
                                    <b>written, visual or audible</b> resource?
                                </span>
                            ),
                        }}
                    />
                    <Link to='/therapy/#FAQ'>
                        <button className='btn'>What is therapy?</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        The below selection is not designed to substitute
                        psychotherapy, rather to support your curiosity and
                        decision making about whether now is the right time for
                        you to start therapy.
                    </p>
                    <div className='chair'>
                        <p>
                            They are all resources I have chosen because they
                            have been helpful to my own personal and
                            professional development.
                        </p>
                        <img src={chair} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};
