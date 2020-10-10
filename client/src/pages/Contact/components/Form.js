import React from 'react';

import SectionTitle from '../../../components/SectionTitle';

export const Form = (props) => {
    return (
        <section className='Form' id='form'>
            <div>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'themed',
                            subtitle: '',
                            title: (
                                <span>
                                    <b>Talking</b> can be a good place to{' '}
                                    <b>start</b>
                                </span>
                            ),
                        }}
                    />
                    <p>
                        {' '}
                        I am always happy to speak briefly on the telephone. You
                        can contact me on
                        <a href='tel:+442086759754'>
                            <b className='nowrap'> 0208 675 9754</b>
                        </a>
                        .{' '}
                    </p>
                    <p>
                        If you prefer to make contact with me by email, please
                        complete <a href='#contact-form'>the contact form.</a>
                    </p>
                    <p>
                        Please be aware that if I am with clients I will be
                        unable to answer your call. In that case please leave me
                        a message or use the quick contact form. Both methods
                        are confidential. I will get back to you as soon as
                        possible and within 24 hours.{' '}
                    </p>
                    <p>
                        If you are experiencing thoughts about taking your life
                        or you are in danger it is important to tell someone.{' '}
                        <a
                            href='https://www.nhs.uk/conditions/suicide/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            Help and support is available free and 24 hours a
                            day.
                        </a>
                    </p>
                </div>
            </div>
            <div className='Contact__bg_themed' id='contact-form'>
                <div className='section__wrapper'>{props.children}</div>
            </div>
        </section>
    );
};
