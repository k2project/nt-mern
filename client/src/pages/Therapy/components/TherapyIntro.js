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
                                    How will PSYCHOTHERAPY <br /> <b>help me</b>
                                    ?
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
                        It is natural to feel uncertain or worried about seeking
                        help. For many people, asking for help can feel a big
                        step to take.
                    </p>
                    <p>
                        It is equally common to feel apprehensive about starting
                        therapy after a previously unhelpful or disappointing
                        experience.
                    </p>
                    <p>
                        In addition, there are many different therapeutic
                        approaches available, making it confusing to decide
                        which one is best suited for you.
                    </p>
                    <Link to='/#about' className='btn' smooth>
                        More About Me
                    </Link>
                </div>
            </div>
        </section>
    );
};
