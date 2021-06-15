import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';

import SectionTitle from '../../../components/SectionTitle';

import truthproject from './../../../imgs/tp.png';
import graduation from './../../../imgs/butterfly.png';
import OuterLink from '../../../components/links/OuterLink';
import { UKCP, BACP } from '../../../config';

const ukcpLink = <OuterLink href={UKCP.url} text={UKCP.acronym} />;
const bacpLink = <OuterLink href={BACP.url} text={BACP.acronym} />;

const therapiesTypesLinkPsychodynamic = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='psychodynamic' />
);
const therapiesTypesLinkPsychodynamicAttachmentTheory = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='attachment theory' />
);
const therapiesTypesLinkPsychodynamicRelationalConcepts = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='relational concepts' />
);

export const Nujoji = () => {
    return (
        <section className='Nujoji'>
            <div className='Home__bg_themed Page__bg_blue'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'white',
                            subtitle: '',
                            title: (
                                <span>
                                    Two people <b>sitting</b> down{' '}
                                    <b>together</b>
                                </span>
                            ),
                        }}
                    />
                    <p>
                        My approach attempts to fit the needs and personal
                        circumstances of each person and the therapeutic
                        relationship I develop with you is an important part of
                        how I work.{' '}
                        <Link
                            to='/therapy/#integrative-therapy'
                            className='link'
                        >
                            Integrative psychotherapy
                        </Link>{' '}
                        combines elements drawn from different schools of
                        psychological theory and research to become a flexible
                        and inclusive approach. My practice is particularly
                        informed by {therapiesTypesLinkPsychodynamic} and{' '}
                        {therapiesTypesLinkPsychodynamicAttachmentTheory},{' '}
                        {therapiesTypesLinkPsychodynamicRelationalConcepts} and
                        underpinned with a trauma informed model.
                    </p>
                    {/* <p>
                        The therapeutic relationship I develop with you is an
                        important part of how I work.
                        <Link
                            to='/therapy/#integrative-therapy'
                            className='link'
                        >
                            {' '}
                            Integrative psychotherapy{' '}
                        </Link>
                        combines elements drawn from different schools of
                        psychological theory and research to become a flexible
                        and inclusive approach. My practice is particularly
                        informed by{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/what-is-psychotherapy/types-of-psychotherapy/#psychodynamic'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            psychodynamic
                        </a>{' '}
                        and{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/what-is-psychotherapy/types-of-psychotherapy/#attachment-based-psychotherapy'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            attachment theory
                        </a>
                        ,{' '}
                        <a
                            href='https://www.psychotherapy.org.uk/what-is-psychotherapy/types-of-psychotherapy/#relational'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            relational concepts
                        </a>{' '}
                        and underpinned with a trauma informed model. My
                        approach fits the needs and personal circumstances of
                        each person.
                    </p> */}

                    {/* <p>
                        The people who come to my practice hold many different
                        beliefs and come from all walks of life, including those
                        identifying on the
                        <Link to='/therapy/#inclusive-therapy' className='link'>
                            {' '}
                            spectrum of gender, sexuality and relationship
                            diversity
                        </Link>
                        . I also work as a senior psychotherapist in the
                        National Health Service with men in the secure forensic
                        estate who engage in violent, harmful and criminal
                        behaviour.
                    </p> */}
                    <p>
                        The people who come to my practice hold many different
                        beliefs and come from all walks of life, including those
                        identifying on the{' '}
                        <Link to='/therapy/#inclusive-therapy' className='link'>
                            spectrum of gender, sexuality and relationship
                            diversity
                        </Link>
                        .
                    </p>
                    <p>
                        I also work as a senior psychotherapist in the National
                        Health Service with men in the secure forensic estate
                        who engage in violent, harmful and criminal behaviour.
                    </p>
                </div>
            </div>
            <div>
                {/* <img
                    src={require('./../../imgs/homeText.pt2.png')}
                    alt='Nujoji Calvocoressi'
                    className='Page__top_img part2'
                /> */}
                <div className='section__wrapper'>
                    <p>
                        {' '}
                        I have trained for four years at{' '}
                        <a
                            href='https://www.minstercentre.ac.uk'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            The Minster Centre,
                        </a>{' '}
                        a leading psychotherapy training institute in the United
                        Kingdom. Courses meet the highest academic and
                        professional standards and are validated by the main
                        professional bodies the {ukcpLink} and {bacpLink}.
                    </p>
                    <p>I obtained the following qualifications:</p>
                    <p>
                        <span className='qualifications'>
                            <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            />
                            Master of Arts degree in Counselling and
                            Psychotherapy
                        </span>
                        <span className='qualifications'>
                            <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            />
                            Advanced Post Graduate Diploma in Counselling and
                            Psychotherapy
                        </span>
                        <span className='qualifications'>
                            <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            />
                            Diploma in Counselling
                        </span>
                    </p>
                    <p>
                        I have also undertaken further training in Critical
                        Incident Debriefing, a highly effective intervention to
                        deal with the adverse psychological impact of
                        overwhelmingly stressful incidents in the workplace. I
                        am also completing a Mentalization-Based Treatment
                        training at{' '}
                        <a
                            href='https://www.annafreud.org'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            The Anna Freud National Centre for Children and
                            Families
                        </a>
                        .
                    </p>

                    {/* <p>
                        <a
                            href='https://www.truthproject.org.uk/i-will-be-heard'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={truthproject}
                                alt='I will be heard. Truth project.'
                                className='tp__logo'
                            />
                        </a>
                        Aside from my work as a psychotherapist I am a member of
                        the Victims and Survivors’ Consultative Panel at the{' '}
                        <a
                            href='https://www.truthproject.org.uk/i-will-be-heard'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            Independent Inquiry into Child Sexual Abuse
                        </a>
                        .
                    </p> */}
                </div>
            </div>
        </section>
    );
};
