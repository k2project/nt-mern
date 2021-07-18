import React, { memo } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';
import OuterLink from '../../../components/links/OuterLink';

const WHOlink = (
    <OuterLink
        href='https://apps.who.int/iris/bitstream/handle/10665/85119/9789241505406_eng.pdf;jsessionid=D18F74315719C3DD67886ED369CDD620?sequence=1'
        text='World Health Organisation'
    />
);
const NIHCElink = (
    <OuterLink
        href='https://www.nice.org.uk/guidance/ng116/chapter/recommendations'
        text='National Institute for Health and Care Excellence'
    />
);

export const Emdr = memo(() => {
    return (
        <section className='Emdr'>
            <div>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'themed',
                            subtitle: '',
                            title: (
                                <span>
                                    What is <b>EMDR </b>?
                                </span>
                            ),
                        }}
                    />
                    <p>
                        <b>Eye Movement Desensitization and Reprocessing</b> is
                        a psychotherapy that helps people to recover from the
                        symptoms and emotional distress leftover from
                        frightening and overwhelming life experiences. It
                        involves using side to side eye movements combined with
                        talking therapy in a specific and structured format.
                    </p>
                    <p>
                        EMDR requires specific training and specialist skills to
                        deliver it safely and competently. It is recognised by
                        the {NIHCElink} and the {WHOlink} as a treatment for
                        PTSD.
                    </p>

                    <Link to='/resources#emdr-video' className='btn' smooth>
                        More About EMDR
                    </Link>
                </div>
            </div>
            <div className='Therapy__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        EMDR was originally developed for treating
                        post-traumatic stress disorder but can also help with a
                        wide range of other mental health conditions such as
                        anxiety, depression, addictions, behavioural
                        difficulties, relationship issues and even more enduring
                        mental illnesses.
                    </p>

                    <p>
                        Tipically, after the assessment of your current symptoms
                        and your readiness for EMDR, as well as understanding
                        how your past has impacted your present, we will start
                        bilateral stimulation to help you access your
                        unconscious mind and process the memory. This involves
                        stimulating either side of your brain in a rhythmic
                        left-right pattern achieved by making eye movements from
                        side to side, listening to sounds in headphones that
                        alternate from one ear to the other, or by tapping
                        either side of your body.
                    </p>
                    <p>
                        Sessions are held weekly and last up to ninety minutes.
                        Studies show very positive outcomes for most people
                        after six to twelve sessions.
                    </p>
                </div>
            </div>
        </section>
    );
});
