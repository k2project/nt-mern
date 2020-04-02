import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import partially from '../../imgs/partially.jpg';

function Partially(props) {
    return (
        <section>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: '',
                            title: <span>Partially Examined Life </span>
                        }}
                    >
                        <img
                            src={partially}
                            alt=''
                            className='resources__img resources__img--no-shadow'
                        />
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        Philosophy, philosophers and philosophical texts. The
                        format is an informal roundtable discussion, with each
                        episode loosely focused on a short reading that
                        introduces at least one &quot;big&quot; philosophical
                        question, concern, or idea.
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
        </section>
    );
}

export default Partially;
