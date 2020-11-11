import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import body from '../../../../imgs/body.jpg';

function WhenTheBodySaysNo(props) {
    return (
        <section className='section__reverse'>
            <div className='Resources__bg_themed '>
                <div className='section__wrapper'>
                    
                    <p>
                        In this wonderful book, Gabor Maté clearly explains the factors causing stress in the
                        first place and opens real possibilities to tackle the root causes of diseases rather
                        than just their symptoms. This in itself provides the possibility for sustainable, long-
                        term recovery.
                    </p>
                    <p>
                        This book equips the reader with some precious intellectual self-defense in
                        recognizing faulty assumptions about the relationship between body, emotions and
                        illness. For example, it becomes clear to the reader that tackling chronic illnesses by
                        treating only the bodily symptoms is not the optimal approach; similarly, Maté
                        clarifies that relying just on will power (mind over matter) can be dangerous too,
                        especially when one‘s inner resources are over-estimated.
                    </p>
                    <p>
                    This book is not only useful for people affected by chronic diseases. It is extremely
                        helpful also for the ‘healthy‘ person to live their life more fully and more vibrantly by
                        understanding and embracing the principles that allow them to embark in the natural
                        development journey and maximizing the chance of long-term health.
                    </p>
                </div>
            </div>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Dr Gabor Maté',
                            title: (
                                <span>
                                    When the Body Says No:<br />
                                    The Cost of Hidden Stress
                                </span>
                            ),
                        }}
                    >
                        <img src={body} alt='' className='resources__img' />
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default WhenTheBodySaysNo;
