import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import race from '../../../../imgs/race.jpg';

function Race(props) {
    return (
        <section className='podcasts'>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Reni Eddo-Lodge',
                            title: <span>About Race </span>,
                        }}
                    >
                        <a
                            href='https://podcasts.apple.com/gb/podcast/about-race-with-reni-eddo-
lodge/id1353151856'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={race}
                                alt='About Race podcast'
                                className='resources__img resources__img--no-shadow'
                            />
                        </a>
                    </SectionTitle>
                </div>
            </div>
            <div className='Resources__bg_themed '>
                <div className='section__wrapper'>
                    <p>
                        Reni Eddo-Lodge is a London-based, award-winning
                        journalist. She has written for the New York Times, the
                        Voice, Daily Telegraph, Guardian, Independent, Stylist,
                        the Pool, Dazed and Confused and the New Humanist. Why
                        I’m No Longer Talking to White People About Race is her
                        first book. It was chosen as Foyles Non-Fiction Book of
                        the Year and Blackwell’s Non-Fiction Book of the Year,
                        longlisted for the Baillie Gifford Prize and shortlisted
                        for the Jhalak Prize and Books Are My Bag Readers Award
                        for Non-Fiction.
                    </p>
                    <a
                        href='https://podcasts.apple.com/gb/podcast/about-race-with-reni-eddo-
lodge/id1353151856'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn'
                    >
                        {' '}
                        Listen now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Race;
