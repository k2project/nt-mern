import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import travelsWithEpicurus from '../../../../imgs/TravelsWithEpicurus.jpeg';

function TravelsWithEpicurus(props) {
    return (
        <section>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Daniel Klein',
                            title: (
                                <span>
                                    Travels with Epicurus: <b>Meditations </b>
                                    from a Greek Island on the Pleasures of{' '}
                                    <b>Old Age</b>
                                </span>
                            ),
                        }}
                    >
                        <img
                            src={travelsWithEpicurus}
                            alt='Travels with Epicurus: Meditations from a
                            Greek Island on the Pleasures of Old Age'
                            className='resources__img'
                        />
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed book-watermark'>
                <div className='section__wrapper'>
                    <p>
                        Our society worships at the fountain of youth. Each
                        year, we seek to avert the arrival of old age using
                        everything at our disposal, from extreme exercise and
                        Botox to Pilates and cosmetic dentistry. But in the
                        process, are we missing out on a distinct and
                        extraordinarily valuable stage of life?
                    </p>
                    <p>
                        Daniel Klein ponders whether it is better to be forever
                        young or to grin toothlessly and live an authentic old
                        age. He journeys to the Greek island of Hydra to
                        discover the secrets of ageing happily. Drawing on the
                        lives of octogenarian Greek locals, as well as
                        philosophers ranging from Epicurus to Sartre, he
                        uncovers the pleasures that are available only late in
                        life.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default TravelsWithEpicurus;
