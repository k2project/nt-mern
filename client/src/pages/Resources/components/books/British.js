import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import british from '../../../../imgs/british.jpg';

function British(props) {
    return (
        <section className='section__reverse'>
            <div className='Resources__bg_themed '>
                <div className='section__wrapper'>
                    <p>
                        Afua Hirsch is British. Her parents are British. She was
                        raised, educated, and socialised in Britain. Her
                        partner, her daughter, her sister, and most of her
                        friends are British. So why is her identity and sense of
                        belonging a subject of debate? The reason is simply
                        because of the colour of her skin.
                    </p>
                    <p>
                        Blending history, memoir and individual experiences,
                        Afua Hirsch reveals the identity crisis at the heart of
                        Britain today. Far from affecting only minority people,
                        Britain is a nation in denial about its past and its
                        present.
                    </p>
                </div>
            </div>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Afua Hirsch',
                            title: (
                                <span>
                                    Brit<b>(ish)</b>: On Race, <b>Identity</b>{' '}
                                    and Belonging
                                </span>
                            ),
                        }}
                    >
                        <img
                            src={british}
                            alt='Brit(ish): On Race, Identity and Belonging'
                            className='resources__img'
                        />
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default British;
