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
                            <span className='nowrap'>
                                {' '}
                                <b>02034 420 284</b>
                            </span>
                        </a>
                        .{' '}
                    </p>
                    <p>
                        If you prefer to contact me by email,{' '}
                        <a href='#contact-form' className='link'>
                            please complete the contact form
                        </a>
                        . Both methods are confidential.
                    </p>
                    <p>
                        Please be aware that if I am with clients I will be
                        unable to answer your call. In that case please leave me
                        a message or use the quick contact form. I will get back
                        to you as soon as possible and within 24 hours.{' '}
                    </p>
                    <p>
                        <b>In case of emergency:</b> If you are experiencing
                        thoughts about taking your life or you are in danger it
                        is important to tell someone.{' '}
                        <a
                            href='https://www.nhs.uk/conditions/suicide/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='link'
                        >
                            <b>Help</b> and support is available <b>free</b> and{' '}
                            <b>24 hours</b> a day.
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
