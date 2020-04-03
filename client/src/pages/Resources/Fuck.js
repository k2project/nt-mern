import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import fuck from '../../imgs/fuck.jpg';

function Fuck(props) {
    return (
        <section className='section__reverse'>
            <div className='Resources__bg_themed '>
                <div className='section__wrapper'>
                    <p>
                        Do your relationships tend to follow the same
                        destructive pattern? Do you feel trapped by your
                        family&#39;s expectations of you? Does your life seem
                        overwhelmingly governed by jealousy or competitiveness
                        or lack of confidence? In this ground- breaking book,
                        clinical psychologist Oliver James shows that it is the
                        way we were cared for in the first six years of life
                        that has a crucial effect on who we are and how we
                        behave. Nurture, in effect, shapes our very nature.
                        James combines the latest scientific research with
                        fascinating interviews to show that understanding your
                        past is the first step to controlling your present.
                    </p>
                </div>
            </div>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Oliver James',
                            title: (
                                <span>
                                    They F*** You Up: <br />
                                    How to <b>Survive </b> Family  Life
                                </span>
                            )
                        }}
                    >
                        <img src={fuck} alt='' className='resources__img' />
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default Fuck;
