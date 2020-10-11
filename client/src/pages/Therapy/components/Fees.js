import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';

export const Fees = () => {
    return (
        <section className='Fees' id='fees'>
            <div className='Therapy__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'white',
                            subtitle: '',
                            title: (
                                // <span>
                                //     Many people find that <b>regular</b>{' '}
                                //     meetings provide a sense of safety and{' '}
                                //     <b>continuity</b>
                                // </span>
                                <span>
                                    FINDING A THERAPIST YOU FEEL{' '}
                                    <b>COMFORTABLE</b> WITH SHOULD ALWAYS COME{' '}
                                    <b>FIRST AND FOREMOST</b>
                                </span>
                            ),
                        }}
                    />
                    <p>
                        Regular weekly sessions are of 50 minutes duration, and
                        are charged at £70 per session. I am happy to accept
                        payment by debit or credit card, cash or bank transfer.{' '}
                    </p>
                    <p>
                        I also keep a couple of low cost places for those who
                        have difficulty in being able to afford therapy.{' '}
                    </p>
                    <Link to='/contact#form' className='btn' smooth>
                        Get In Touch
                    </Link>
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        All therapy sessions are chargeable including the
                        initial consultation. Some therapists offer a reduced
                        fee or initial consultation at no charge. I feel the
                        first session is an important part of the work and I
                        provide the same level of service during that session as
                        all others so my charges reflect this.
                    </p>
                    <p>
                        Our preliminary sessions are an opportunity for us to
                        meet each other and explore whether therapy might be
                        helpful to you. There is no commitment to ongoing work.
                    </p>
                    <p>
                        If you decide you would like to continue, we will agree
                        a regular day and time to meet on an ongoing basis. The
                        establishment of regular sessions is important to
                        facilitate, and give momentum to the therapeutic
                        process. Many people find that regular meetings provide
                        a sense of safety and continuity whilst they are working
                        on their emotional difficulties.
                    </p>
                </div>
            </div>
        </section>
    );
};
