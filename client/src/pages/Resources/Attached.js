import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import attached from '../../imgs/attached.jpg';

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
                                    Attached: Are you Anxious, Avoidant or
                                    Secure?
                                </span>
                            )
                        }}
                    >
                        <img src={attached} alt='' className='resources__img' />
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed'>
                <div className='section__wrapper'>
                    <p>
                        Is there a science to love? In this ground-breaking
                        book, psychiatrist and neuroscientist Amir Levine and
                        psychologist Rachel S. F. Heller reveal how an
                        understanding of attachment theory – the most advanced
                        relationship science in existence today – can help us
                        find and sustain love.
                    </p>
                    <p>
                        Pioneered by psychologist John Bowlby in the 1950s, the
                        field of attachment explains that each of us behaves in
                        relationships in one of three distinct ways: <br />
                        <b>Anxious </b> people are often preoccupied with their
                        relationships and tend to worry about their partner’s
                        ability to love them back. <br />
                        <b>Avoidant </b>people equate intimacy with a loss of
                        independence and constantly try to minimize closeness.{' '}
                        <br />
                        <b>Secure  </b>people feel comfortable with intimacy and
                        are usually warm and loving.
                    </p>
                    <p>
                        With fascinating psychological insight, quizzes and case
                        studies, Dr Amir Levine and Rachel Heller help you
                        understand the three attachment styles, identify your
                        own and recognize the styles of others so that you can
                        find compatible partners or improve your existing
                        relationship. An insightful look at the science behind
                        love, Attached offers readers a road map for building
                        stronger, more fulfilling connections.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Attached;
