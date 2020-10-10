import React from 'react';
import SectionTitle from '../../../components/SectionTitle';

export const Directions = () => {
    return (
        <section className='Directions'>
            <div className='Contact__bg_themed '>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'white',
                            subtitle: '',
                            title: 'Getting here',
                        }}
                    />
                    <p>
                        CITY OF LONDON Tokenhouse Yard is a four-minute walk
                        from Bank Tube Station (Waterloo and City, DLR,
                        Northern, Central Line) and is situated just behind the
                        Bank of England off Lothbury.
                    </p>
                    {/* <div className="Nt4__text_center">
                            <img src={require('./../../imgs/stations.png')} alt='Nujoji' className="Directions__img"/>
                        </div> */}
                    <p>
                        {/* <b>Bank Tube Station: </b>Waterloo and City, DLR, Northern, Central Line.<br/>
                                <b>Moorgate Tube Station: </b>Northern, Hammersmith and City, Circle, Metropolitan lines.<br/>
                                <b>Buses: </b> 21, 43, 76, 141.<br/> */}
                        Pay and display parking on Old Jewry and Coleman Street.
                        Secure bike racks available. Taxi Rank Queen Victoria
                        Street.
                    </p>
                    <p>
                        WEST END Nassau Street is located a few minutes’ walk
                        from Tottenham Court Road London Underground (Northern
                        and Central Lines) and Oxford Circus London Underground
                        (Victoria, Central and Bakerloo Lines).
                    </p>
                </div>
            </div>
            <div className='Office__bg_img' />
        </section>
    );
};
