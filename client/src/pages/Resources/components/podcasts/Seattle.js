import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import seattle from '../../../../imgs/seattle.jpg';
import podcasts from '../../../../imgs/podcasts.png';

function Seattle(props) {
    return (
        <section className='podcasts'>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Kirk Honda ',
                            title: <span><b>Psychology</b> in Seattle </span>,
                        }}
                    >
                        <a
                            href='https://podcasts.apple.com/gb/podcast/psychology-in-seattle-podcast/id767626637'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={seattle}
                                alt='Psychology in Seattle  podcast'
                                className='resources__img resources__img--no-shadow'
                            />
                        </a>
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed'>
                <img
                    src={podcasts}
                    alt=''
                    className='podcasts-inline-watermark'
                />
                <div className='section__wrapper'>
                    <p>
                        The Psychology In Seattle Podcast has been producing
                        weekly podcasts about psychology and psychotherapy since
                        2008. This psychology podcast is both educational and
                        entertaining. They have around 100,000 dedicated
                        listeners. The host, Dr. Kirk Honda, is a licensed
                        therapist and a professor. Co-host Humberto provides the
                        layperson&#39;s voice.
                    </p>
                    <a
                        href='https://podcasts.apple.com/gb/podcast/psychology-in-seattle-podcast/id767626637'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn'
                    >
                        Listen now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Seattle;
