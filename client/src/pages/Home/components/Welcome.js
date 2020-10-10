import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import SectionTitle from '../../../components/SectionTitle';

export const Welcome = () => {
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
