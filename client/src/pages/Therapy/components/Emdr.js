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
                        symptoms and emotional distress leftover from upsetting
                        and overwhelming life events. It involves using side to
                        side eye movements combined with talking therapy in a
                        specific and structured format.
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
                        difficulties, and relationship issues.
                    </p>

                    <p>
                        EMDR has a specific structure, and I will work through
                        several stages with you. This includes a thorough
                        assessment of your current symptoms and your readiness
                        for EMDR.
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
