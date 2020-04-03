import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import attached from '../../imgs/attached.jpg';
import books from '../../imgs/books.png';

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
                            )
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
                </div>
            </div>
        </section>
    );
}

export default Attached;
