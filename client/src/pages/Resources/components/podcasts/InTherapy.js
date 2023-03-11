import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import img from '../../../../imgs/inTherapy.jpeg';

const link = 'https://www.bbc.co.uk/programmes/b071c4cy/episodes/player';

export default function InTherapy(props) {
    return (
        <section className='section__reverse  podcasts'>
            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        Psychotherapist Susie Orbach explores the private
                        relationship between therapist and patient. We join
                        Susie in her consulting room. All of the clients are
                        played by actors, but these are not scripted scenes.
                        Each client profile has been carefully constructed by
                        therapist Susie, director Ian Rickson (former artistic
                        director at the Royal Court, and director of the highly
                        acclaimed Jerusalem) and radio producer Kevin Dawson.
                        The client profiles have been given to the actors who
                        have learned about the characters' lives, backgrounds,
                        and reasons for seeking therapy. The scenes have then
                        been improvised and recorded on concealed microphones at
                        Susie's surgery. Throughout the encounters in this
                        series, we get to hear the therapist at work,
                        experiencing what it's like to eavesdrop on the most
                        intimate of exchanges.
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
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Susie Orbach',
                            title: (
                                <span>
                                    In <b>Therapy</b>
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
                                alt='In therapy'
                                className='resources__img resources__img--no-shadow'
                            />
                        </a>
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}
