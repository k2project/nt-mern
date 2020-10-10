import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import attached from '../../../../imgs/attached.jpg';
import books from '../../../../imgs/books.png';

function Attached(props) {
    return (
        <section>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Amir Levine and Rachel Heller',
                            title: (
                                <span>
                                    <b>Attached</b>: Are you Anxious, Avoidant
                                    or Secure?
                                </span>
                            ),
                        }}
                    >
                        <img src={attached} alt='' className='resources__img' />
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed'>
                <img src={books} alt='' className='books-inline-watermark' />
                <div className='section__wrapper'>
                    <p>
                        Is there a science to love? In this ground-breaking
                        book, psychiatrist and neuroscientist Amir Levine and
                        psychologist Rachel S. F. Heller reveal how an
                        understanding of attachment theory – the most advanced
                        relationship science in existence today – can help us
                        find and sustain love.
                    </p>
                    <p className='mob-hidden'>
                        With fascinating psychological insight, quizzes and case
                        studies, Dr Amir Levine and Rachel Heller help you
                        understand the three attachment styles, identify your
                        own and recognize the styles of others so that you can
                        find compatible partners or improve your existing
                        relationship. An insightful look at the science behind
                        love, <q>Attached</q> offers readers a road map for
                        building stronger, more fulfilling connections.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Attached;
