import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import mental from '../../../../imgs/mental.jpg';

function Mental(props) {
    return (
        <section className='section__reverse  podcasts'>
            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        Mental was created by Bobby Temps to break down mental health stigma and discrimination. The podcast is a safe space to hear honest and insightful mental health interviews in the hope listeners will feel more empowered to go on and continue the conversation with others.
                    </p>
                    <p>
                        You’ll also better understand different conditions from first-hand experience, with inspiring guests and surprising statistics. Whether you have experienced mental illness or not, there will be something to relate to in each episode.
                    </p>
                    <a
                        href='https://podcasts.apple.com/gb/podcast/the-partially-examined-life/id318345767'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn'
                    >
                        Listen now
                    </a>
                </div>
            </div>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle:
                                'by Bobby Temps',
                            title: <span>Mental - The Podcast to Destigmatise Mental Health</span>,
                        }}
                    >
                        <a
                            href='https://podcasts.apple.com/gb/podcast/the-partially-examined-life/id318345767'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={mental}
                                alt='Mental podcast'
                                className='resources__img resources__img--no-shadow'
                            />
                        </a>
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default Mental;
