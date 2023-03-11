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
                        <b>CITY OF LONDON: Tokenhouse Yard</b> is a four-minute
                        walk from <b>Bank Tube Station</b> (Waterloo and City,
                        DLR, Northern, Central Line) and is situated just behind
                        the Bank of England off Lothbury.
                    </p>

                    <p>
                        Pay and display parking on Old Jewry and Coleman Street.
                        Secure bike racks available. Taxi Rank Queen Victoria
                        Street.
                    </p>
                    <p>
                        <b>WEST END: Nassau Street</b> is located a few minutes’
                        walk from <b>Tottenham Court Road</b> London Underground
                        (Northern and Central Lines) and <b>Oxford Circus</b>{' '}
                        London Underground (Victoria, Central and Bakerloo
                        Lines).
                    </p>
                </div>
            </div>
            <div className='Office__bg_img' />
        </section>
    );
};
