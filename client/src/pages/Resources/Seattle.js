import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import seattle from '../../imgs/seattle.jpg';
import book from '../../imgs/book.png';
import books from '../../imgs/books.png';

function Seattle(props) {
    return (
        <section>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Kirk Honda ',
                            title: <span>Psychology in Seattle </span>
                        }}
                    >
                        <img
                            src={seattle}
                            alt=''
                            className='resources__img resources__img--no-shadow'
                        />
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed'>
                <img src={books} alt='' className='books-inline-watermark' />
                <div className='section__wrapper'>
                    <p>
                        The Psychology In Seattle Podcast has been producing
                        weekly podcasts about psychology and psychotherapy since
                        2008. This psychology podcast is both educational and
                        entertaining. We have around 100,000 dedicated
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
