import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import allInTheMind from '../../../../imgs/allInTheMind.jpg';

const link ='https://podcasts.apple.com/gb/podcast/all-in-the-mind/id643660675'

function AllInTheMind(props) {
    return (
        <section className='section__reverse  podcasts'>
            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        Podcast exploring the limits and potential of the human mind.
                    </p>
                    <p>
                        All in the Mind is a half-hour magazine radio programme about psychology and psychiatry, broadcast in weekly episodes on Radio 4 and produced by the BBC's Science Unit.
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
                            subtitle:
                                'by BBC Radio Four',
                            title: <span>All in the Mind</span>,
                        }}
                    >
                        <a
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={allInTheMind}
                                alt='All in the mind podcast'
                                className='resources__img resources__img--no-shadow'
                            />
                        </a>
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default AllInTheMind;
