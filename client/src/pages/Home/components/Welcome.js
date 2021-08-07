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
                                    yourself to look at life in a <b>new way</b>
                                </span>
                            ),
                        }}
                    />
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        It is natural to feel lost or confused when facing
                        emotional difficulties, such as the ending of a
                        relationship, when going through big change or you are
                        feeling overwhelmed by past events. You are not alone if
                        you are experiencing anxiety, unhelpful behaviours or
                        you are feeling isolated. These are human experiences
                        that we can all go through.
                    </p>
                    <p>
                        Psychotherapy provides a calm and non-judgemental space
                        where you can reflect, explore and deal with the
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
