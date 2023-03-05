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
                            title: (
                                <span>
                                    WHAT CAN I <b>EXPECT</b>?
                                </span>
                            ),
                        }}
                    />
                    <p>
                        I believe that every person who I work with is unique
                        and benefits from an individual approach to therapy.
                        Therefore, instead of focusing on one single model, I
                        use an integrative approach to better understand how
                        people think and their emotional difficulties.
                    </p>
                </div>
            </div>
            <div className='IntegrativeTherapy__bg_respect'>
                <div className='section__wrapper'>
                    <p>
                        The integrative approach is a progressive form of
                        psychotherapy that combines elements drawn from
                        different schools of psychological theory and research,
                        making it a flexible and inclusive approach.
                    </p>
                    <p>
                        In therapy, what you say is treated with respect and
                        kindness. Therapy takes place in a calm and confidential
                        setting where we can explore together thoughts and
                        feelings patiently and without judgement.
                    </p>
                    <p>
                        Beginning therapy can be a source of relief as well as
                        anxiety. The below FAQ may help you reach a decision
                        about whether now is the right time for you.
                    </p>
                </div>
            </div>
        </section>
    );
};
