import React from 'react';
import SectionTitle from '../../../components/SectionTitle';

import location from '../../../imgs/location.png';

export const Office = () => {
    return (
        <section className='Office'>
            <div className='Directions__bg_map'>
                <div className='cover'>
                    <div className='cover_ctr'>
                        <span className='themed-font'>
                            <b> Find directions with Google Maps</b>
                        </span>
                        <a
                            href='https://www.google.com/maps/dir//Tokenhouse+Yard,+London+EC2R+7AS/@51.5153851,-0.0907049,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x48761cab515b7a57:0xa9652d3756affe10!2m2!1d-0.0885162!2d51.5153851!3e3'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn'
                        >
                            <b>Tokenhouse Yard - City of London</b>
                        </a>
                        <a
                            href='https://www.google.com/maps/dir//Nassau+St,+Fitzrovia,+London+W1W+7AF/@51.5188268,-0.1412905,17z/data=!4m17!1m7!3m6!1s0x48761b2a47340f1d:0x7122f29f93bdb1e8!2sNassau+St,+Fitzrovia,+London+W1W+7AF!3b1!8m2!3d51.5188268!4d-0.1391018!4m8!1m0!1m5!1m1!1s0x48761b2a47340f1d:0x7122f29f93bdb1e8!2m2!1d-0.1391018!2d51.5188268!3e3'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn'
                        >
                            <b>Nassau Street – West End</b>
                        </a>
                    </div>
                </div>
            </div>

            <div className='Contact__bg_themed Directions__bg_lnd'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'themed',
                            subtitle: '',
                            title: (
                                <span>
                                    A <b>calm</b> and <b>confidential</b> place
                                </span>
                            ),
                        }}
                    />
                    <div className='addresses'>
                        <div className='address'>
                            <img src={location} alt='' />
                            <b>
                                11-12 Tokenhouse Yard, City of London, London,
                                <span className='nowrap'> EC2R 7AS</span>
                            </b>
                        </div>
                        <div className='address'>
                            <img src={location} alt='' />
                            <b>
                                19 Nassau Street, West End, London,{' '}
                                <span className='nowrap'>W1W 7AF</span>
                            </b>
                        </div>
                    </div>

                    <p>
                        I see clients for appointments, <b>Monday to Friday </b>
                        throughout the year except public holidays. Appointments
                        are available between
                        <b className='nowrap'> 10am – 8pm</b>.
                    </p>
                </div>
            </div>
        </section>
    );
};
