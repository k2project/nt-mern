import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import tiger from '../../../../imgs/tiger.jpg';

function Tiger(props) {
    return (
        <section className='section__reverse'>
            <div className='Resources__bg_themed '>
                <div className='section__wrapper'>
                    <p>
                        Waking the Tiger offers a new and hopeful vision of
                        trauma. It views the human animal as a unique being,
                        endowed with an instinctual capacity. It asks and
                        answers an intriguing question: Why are animals in the
                        wild, though threatened routinely, rarely traumatized?
                        By understanding the dynamics that make wild animals
                        virtually immune to traumatic symptoms, the mystery of
                        human trauma is revealed.
                    </p>
                    <p className='mob-hidden'>
                        Waking the Tiger normalizes the symptoms of trauma and
                        the steps needed to heal them. People are often
                        traumatized by seemingly ordinary experiences. The
                        listener is taken on a guided tour of the subtle, yet
                        powerful impulses that govern our responses to
                        overwhelming life events. To do this, it employs a
                        series of exercises that help us focus on bodily
                        sensations. Through heightened awareness of these
                        sensations’ trauma can be healed.
                    </p>
                </div>
            </div>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Peter A. Levine',
                            title: (
                                <span>
                                    Waking the Tiger: <wbr /> Healing{' '}
                                    <b>Trauma</b>
                                </span>
                            ),
                        }}
                    >
                        <img src={tiger} alt='' className='resources__img' />
                    </SectionTitle>
                </div>
            </div>
        </section>
    );
}

export default Tiger;
