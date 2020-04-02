import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import files from '../../imgs/files.png';

function Files(props) {
    return (
        <section className='section__reverse podcasts podcasts'>
            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        The Psych Files is a Psychology podcast hosted by
                        Michael A. Britt, Ph.D.. Michael received his Ph.D. from
                        the University at Albany and was Assistant Professor of
                        Psychology for many years at Marist College in
                        Poughkeepsie, NY. He started The Psych Files in 2007 and
                        thus one of the longest running podcasts. It is aimed at
                        anyone curious about human behaviour, though students
                        taking a course in psychology, those majoring in
                        psychology, and instructors of psychology will find the
                        podcast particularly of interest.
                    </p>
                    <a
                        href='https://podcasts.apple.com/gb/podcast/the-psych-files/id215516451'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn'
                    >
                        Listen now
                    </a>
                </div>
            </div>
            <div className='resources__title '>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Michael A. Britt',
                            title: <span>The Psych Files Podcast</span>
                        }}
                    >
                        <img
                            src={files}
                            alt=''
                            className='resources__img resources__img--border'
                        />
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default Files;
