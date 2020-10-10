import React from 'react';
import SectionTitle from '../../../components/SectionTitle';

export const IntegrativeTherapy = () => {
    return (
        <section className='IntegrativeTherapy' id='integrative-therapy'>
            <div className='Therapy__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'white',
                            subtitle: '',
                            title: 'Integrative Therapy',
                        }}
                    />
                    <p>
                        Integrative therapy is a progressive form of therapy
                        that combines different therapeutic tools and approaches
                        to fit the needs of the individual client. By combining
                        elements drawn from different schools of psychological
                        theory and research, integrative therapy becomes a
                        flexible and inclusive approach to understanding
                        emotional difficulties.
                    </p>
                </div>
            </div>
            <div className='IntegrativeTherapy__bg_respect'>
                <div className='section__wrapper'>
                    <p>
                        In therapy, what you say will be treated with respect
                        and compassion. Therapy takes place in a private and
                        confidential setting where we can explore thoughts and
                        feelings together in a context different to most
                        every-day settings. It is a dedicated time set aside by
                        both you and me.
                    </p>
                    {/* <p className='mob-hidden'>
                        {' '}
                        The setting and regularity of our meetings as well as
                        our therapeutic relationship will be the container
                        within which you will be free to express whatever is on
                        your mind.
                    </p> */}
                    <p>
                        Starting therapy can be a source of comfort as well as
                        worry. The below FAQ may help you reach a decision about
                        whether now is the right time for you.
                    </p>
                </div>
            </div>
        </section>
    );
};
