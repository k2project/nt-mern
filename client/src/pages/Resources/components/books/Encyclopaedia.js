import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import encyclopaedia from '../../../../imgs/encyclopaedia.jpg';

function Encyclopaedia(props) {
    return (
        <section className='section__reverse'>
            <div className='Resources__bg_themed book-watermark'>
                <div className='section__wrapper'>
                    <p>
                        The Book of Human Emotions is a gleeful, thoughtful
                        collection of 156 feelings, both rare and familiar. Each
                        has its own story, and reveals the strange forces which
                        shape our rich and varied internal worlds. In reading
                        it, you&#39;ll discover feelings you never knew you had
                        (like basorexia, the sudden urge to kiss someone),
                        uncover the secret histories of boredom and  confidence,
                        and gain unexpected insights into why we feel the way we
                        do.
                    </p>
                </div>
            </div>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Tiffany Watt Smith',
                            title: (
                                <span>
                                    The Book of Human <b>Emotions</b>
                                </span>
                            ),
                        }}
                    >
                        <img
                            src={encyclopaedia}
                            alt=''
                            className='resources__img'
                        />
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default Encyclopaedia;
