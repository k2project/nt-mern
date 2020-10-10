import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';

export const TherapyIntro = () => {
    return (
        <section className='TherapyIntro'>
            <div>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'themed',
                            subtitle: '',
                            title: (
                                <span>
                                    How will therapy <b>help</b>?
                                </span>
                            ),
                        }}
                    />
                    <img
                        src={require('./../../../imgs/chairs.png')}
                        alt='Therapy room'
                        className='TherapyIntro__img'
                    />
                </div>
            </div>
            <div className='Therapy__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        It is not unusual to feel hesitant or unsure about
                        seeking help. For some people, asking for help can be a
                        difficult place to start.
                    </p>
                    <p>
                        {' '}
                        There are many different therapeutic approaches
                        available and it can be confusing to decide which one is
                        suited for you.
                    </p>
                    <Link to='/#about' className='btn' smooth>
                        More About Me
                    </Link>
                </div>
            </div>
        </section>
    );
};
