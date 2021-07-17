import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';
import OuterLink from '../../../components/links/OuterLink';
import { IICSA } from '../../../config';

const iicsaLink = <OuterLink href={IICSA.urlHome} text={IICSA.name} />;

export const Intro = () => {
    return (
        <section className='Intro'>
            <div className='Articles__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: '',
                            title: (
                                <span>
                                    Writing about my <b> work </b> and{' '}
                                    <b>experience</b>
                                </span>
                            ),
                        }}
                    />
                    <Link to='/#about'>
                        <button className='btn'>More About Nujoji</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        I am aware of the difficulties that some victims and
                        survivors of child sexual abuse face in finding
                        effective and compassionate psychological support with
                        well-trained and trauma-informed clinicians. It is
                        unacceptable that far too frequently the needs of
                        victims and survivors are not being met. Access to
                        justice, accountability, reparation, and emotional
                        wellbeing remains out of reach for many.
                    </p>
                    <p>
                        As a past member of the Victims and Survivors’
                        Consultative Panel at the {iicsaLink} it remains my firm
                        belief that the work of the Inquiry is imperative to
                        better understand to what degree institutions have
                        failed in their duty to safeguard children from sexual
                        abuse and to help protect children in the future. At
                        various times I wrote and contributed to pieces
                        discussing this important subject.
                    </p>
                </div>
            </div>
        </section>
    );
};
