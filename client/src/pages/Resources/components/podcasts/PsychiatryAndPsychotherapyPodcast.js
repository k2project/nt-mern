import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import img from '../../../../imgs/ppp.jpeg';

const link =
    'https://podcasts.apple.com/gb/podcast/psychiatry-psychotherapy-podcast/id1335892956';

export default function PsychiatryAndPsychotherapyPodcast(props) {
    return (
        <section className='podcasts'>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by David M. Puder, MD',
                            title: (
                                <span>
                                    Psychiatry and <b>Psychotherapy</b> Podcast
                                </span>
                            ),
                        }}
                    >
                        <a
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={img}
                                alt='Psychiatry and Psychotherapy Podcast '
                                className='resources__img resources__img--no-shadow'
                            />
                        </a>
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        David Puder covers different topics on psychiatry and
                        psychotherapy. He draws from the wisdom of his mentors,
                        research, in-session therapy and psychiatry experience,
                        and his own journey through mental health to discuss
                        topics that affect mental health professionals and
                        popsychology enthusiasts alike. Through interviews, he
                        dialogues with medical students, residents and expert
                        psychiatrists and psychotherapists, and people who have
                        been through their own mental health journey. This
                        podcast was created to help others in their journey to
                        becoming wise, empathic, genuine, and connected in their
                        personal and professional lives.
                    </p>
                    <a
                        href={link}
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
