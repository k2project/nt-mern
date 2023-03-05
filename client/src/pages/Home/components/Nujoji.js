import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';
// import graduation from './../../../imgs/diploma2-min.png';
import OuterLink from '../../../components/links/OuterLink';
import { UKCP, BACP, IGA } from '../../../config';

const ukcpLink = <OuterLink href={UKCP.url} text={UKCP.acronym} />;
const bacpLink = <OuterLink href={BACP.url} text={BACP.acronym} />;
const igaLink = <OuterLink href={IGA.url} text={IGA.acronym} />;

const therapiesTypesLinkPsychodynamic = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='psychodynamic' />
);
const therapiesTypesLinkPsychodynamicAttachmentTheory = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='attachment theory' />
);
const therapiesTypesLinkPsychodynamicRelationalConcepts = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='relational concepts' />
);
const theAFNC = (
    <OuterLink
        href='https://www.annafreud.org'
        text='The Anna Freud National Centre for Children and
    Families'
    />
);
const EMDR = (
    <OuterLink
        href='https://emdrassociation.org.uk/become-an-accredited-therapist/training/standard-accredited/'
        text='EMDR UK'
    />
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
                                    Two people <br /> <b>THINKING TOGETHER</b>
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
                        underpinned by a trauma informed model.
                    </p>

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
                        Alongside my independent practice, I work as a visiting
                        lecturer on a psychotherapy postgraduate training. I
                        also conduct a therapy group for women in prison
                        convicted of violent crimes. Previously, I have worked
                        as a senior psychotherapist in the NHS with men in the
                        secure forensic estate who engage in violent, harmful,
                        and criminal behaviour.
                    </p>
                </div>
            </div>
            <div>
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
                    <ul>
                        <li className='qualifications'>
                            {/* <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            /> */}
                            <span className='qualification-num'>1</span>
                            <p>
                                Master of Arts degree in psychotherapy and
                                counselling
                            </p>
                        </li>
                        <li className='qualifications'>
                            {/* <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            /> */}
                            <span className='qualification-num'>2</span>
                            <p>
                                Advanced post graduate diploma in psychotherapy
                                and counselling
                            </p>
                        </li>
                        <li className='qualifications'>
                            {/* <img
                                src={graduation}
                                alt=''
                                className='graduation'
                            /> */}
                            <span className='qualification-num'>3</span>
                            <p>Diploma in Counselling</p>
                        </li>
                    </ul>
                    <p>
                        I obtained a postgraduate diploma in clinical
                        supervision at the {igaLink}.
                    </p>
                    <p>
                        I have also undertaken further training in
                        Mentalization-Based Treatment training to support people
                        with personality difficulties at the {theAFNC}. I am
                        also completing an {EMDR} standard accredited training
                        to deliver Eye Movement Desensitisation and Reprocessing
                        which is a powerful therapy designed to help people
                        recover from adverse experiences.
                    </p>
                </div>
            </div>
        </section>
    );
};
