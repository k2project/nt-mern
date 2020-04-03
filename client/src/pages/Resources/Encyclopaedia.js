import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import encyclopaedia from '../../imgs/encyclopaedia.jpg';

function Encyclopaedia(props) {
    return (
        <section>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Tiffany Watt Smith',
                            title: <span>The Book of Human Emotions</span>
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

            <div className='Resources__bg_themed book-watermark'>
                <div className='section__wrapper'>
                    <p>
                        Is your heart fluttering in <b>anticipation</b>? Is your
                        stomach tight with <b>nerves</b>? Are you falling in 
                        <b>love</b>? Feeling <b>a bit miffed</b>? Are you 
                        <b>curious</b> (perhaps about this book)? Do you have
                        the heebie-jeebies? Are you antsy with iktsuarpok? Or
                        giddy with dépaysement?
                    </p>
                    <p>
                        The Book of Human Emotions is a gleeful, thoughtful
                        collection of 156 feelings, both rare and familiar. Each
                        has its own story, and reveals the strange forces which
                        shape our rich and varied internal worlds. In reading
                        it, you&#39;ll discover feelings you never knew you had
                        (like basorexia, the sudden urge to kiss someone),
                        uncover the secret histories of <b>boredom</b> and 
                        <b>confidence</b>, and gain unexpected insights into why
                        we feel the way we do.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Encyclopaedia;
