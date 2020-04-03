import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import './Contact.scss';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

import location from '../../imgs/location.png';

const meta = {
    title:
        'City of London & West End| Nujoji Calvocoressi Counselling and Psychotherapy',
    description:
        'Bookings: 07855 846 580 | Office:11-12 Tokenhouse Yard, City of London, London EC2R 7AS',
    canonical: 'http://www.calvocoressi.com/contact',
    meta: {
        name: {
            author: '@_k2project',
            keywords:
                'Nujoji Calvocoressi, counselling, psychotherapy, therapy, London'
        }
    }
};
const pageDetails = {
    name: 'Contact',
    img: {
        imgName: 'contactText.pt1.png',
        imgAlt: 'Contact Page'
    }
};

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sent: false,
            name: '',
            mail: '',
            mobile: '',
            err: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const name = e.target.name;
        this.setState({
            err: '',
            [name]: e.target.value,
            sent: false
        });
    }
    handleSubmit = async e => {
        e.preventDefault();

        const t = e.target;
        if (this.state.err) {
            t.classList = 'Contact__form';
            setTimeout(() => {
                t.classList = 'Contact__form shake';
            }, 500);
        }
        if (this.state.sent) {
            this.setState({
                sent: false
            });
        }

        let fakeMail = t.mail2.value;
        if (fakeMail) {
            return;
        }

        let name = stripHTML(t.name.value);
        let mail = stripHTML(t.mail.value);
        let mobile = stripHTML(t.mobile.value);
        let location = null;

        const locations = document.getElementsByName('location');
        for (var i = 0; i < locations.length; i++) {
            if (locations[i].checked) {
                location = locations[i].value;
            }
        }

        await fetch('/mail/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                mail,
                mobile,
                location
            })
        })
            .then(res => res.json())
            .then(json => {
                console.log('json', json);
                const locationInputs = document.querySelectorAll(
                    '.RadioInput__fake'
                );
                if (json.success) {
                    this.setState({
                        sent: true,
                        name: '',
                        mail: '',
                        mobile: '',
                        err: ''
                    });

                    for (var i = 0; i < locationInputs.length; i++) {
                        locationInputs[i].classList.remove('clicked');
                    }
                } else {
                    this.setState({
                        err: json.message,
                        sent: false
                    });
                }
            });
    };

    render() {
        const { err, sent } = this.state;
        let formCls = 'Contact__form';
        if (err) {
            formCls = 'Contact__form shake';
        }
        return (
            <DocumentMeta {...meta}>
                <Page page={pageDetails}>
                    <Office />
                    <Directions />
                    <Form>
                        <form className={formCls} onSubmit={this.handleSubmit}>
                            <label htmlFor='name'>Name: *</label>
                            <input
                                type='text'
                                name='name'
                                id='name'
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <label htmlFor='mail'>Email: *</label>
                            <input
                                type='text'
                                name='mail'
                                id='mail'
                                onChange={this.handleChange}
                                value={this.state.mail}
                            />
                            <input
                                type='email'
                                name='mail2'
                                id='mail2'
                                className='Contact__mail_fake'
                                onChange={this.handleChange}
                                onMouseDown={e => e.preventDefault()}
                            />
                            <label htmlFor='mobile'>Mobile: *</label>
                            <input
                                type='text'
                                name='mobile'
                                id='mobile'
                                onChange={this.handleChange}
                                value={this.state.mobile}
                            />
                            <fieldset className='Form__locations'>
                                <legend>
                                    What location is the most convenient? *
                                </legend>
                                <RadioInput
                                    value='Tokenhouse Yard'
                                    text='Tokenhouse Yard (City of London)'
                                    clearErr={() => {
                                        this.setState({
                                            err: '',
                                            sent: false
                                        });
                                    }}
                                />
                                <RadioInput
                                    value='Nassau Street'
                                    text='Nassau Street (West End)'
                                    clearErr={() => {
                                        this.setState({
                                            err: '',
                                            sent: false
                                        });
                                    }}
                                />
                                <RadioInput
                                    value='any office'
                                    text='Either Location'
                                    clearErr={() => {
                                        this.setState({
                                            err: '',
                                            sent: false
                                        });
                                    }}
                                />
                                <RadioInput
                                    value='online session'
                                    text='Online Session'
                                    clearErr={() => {
                                        this.setState({
                                            err: '',
                                            sent: false
                                        });
                                    }}
                                />
                            </fieldset>

                            <div className='text_cntr'>
                                <button type='submit' className='btn'>
                                    Get In Touch
                                </button>
                            </div>
                            <div className='Form__err'>
                                {err && (
                                    <p className='Form__message_err text_cntr'>
                                        <span>!</span>
                                        {err}
                                    </p>
                                )}
                                {sent && (
                                    <p className='Form__message_sent text_cntr'>
                                        <b>THANK YOU FOR CONTACTING ME.</b>{' '}
                                        <br />
                                        Your message has been sent. I will get
                                        back to you shortly.
                                    </p>
                                )}
                            </div>
                        </form>
                    </Form>
                </Page>
            </DocumentMeta>
        );
    }
}
export default Contact;

const RadioInput = props => {
    function handleClick(e) {
        props.clearErr();
        const sellectedRadioInput = document.querySelector(
            '.RadioInput__fake.clicked'
        );
        if (sellectedRadioInput) {
            sellectedRadioInput.classList.remove('clicked');
        }
        e.target.previousElementSibling.previousElementSibling.classList.add(
            'clicked'
        );
    }

    const hash = props.value
        .split(' ')
        .join('_')
        .toLowerCase();
    return (
        <div className='RadioInput'>
            <div className='RadioInput__fake'>
                <span className='RadioInput__box'>
                    <span className='RadioInput__box_check'>&#9632;</span>
                </span>
                <span className='RadioInput__text'>{props.text}</span>
            </div>
            <label htmlFor={hash} className='sr-only'>
                {props.text}
            </label>
            <input
                type='radio'
                name='location'
                id={hash}
                value={props.value}
                className='RadioInput__input'
                onClick={handleClick}
            />
        </div>
    );
};
const Office = () => {
    return (
        <section className='Office'>
            <div className='Office__bg_img'></div>
            <div className='Contact__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'themed',
                            subtitle: '',
                            title: (
                                <span>
                                    A <b>comfortable</b> and <b>confidential</b>{' '}
                                    place
                                </span>
                            )
                        }}
                    />
                    <div className='addresses'>
                        <div className='address'>
                            <img src={location} alt='' />
                            <span>
                                11-12 Tokenhouse Yard, City of London, London,
                                EC2R 7AS
                            </span>
                        </div>
                        <div className='address'>
                            <img src={location} alt='' />
                            <span>
                                19 Nassau Street, West End, London, W1W 7AF
                            </span>
                        </div>
                    </div>
                    {/* <div className='section__clm2'>
                        <p>
                            <b>
                                11-12 Tokenhouse Yard
                                <br />
                                City of London
                                <br />
                                London <br />
                                EC2R 7AS
                            </b>
                        </p>
                        <p>
                            <b>
                                19 Nassau Street
                                <br />
                                West End <br />
                                London <br />
                                W1W 7AF
                            </b>
                        </p>
                    </div> */}
                    <p>
                        I see clients for appointments, Monday to Friday
                        throughout the year except public holidays. Appointments
                        are available between
                        <span className='nowrap'> 8am – 8pm</span>.
                    </p>
                </div>
            </div>
        </section>
    );
};
const Directions = () => {
    return (
        <section className='Directions'>
            <div className='Contact__bg_themed Directions__bg_lnd'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: 'white',
                            subtitle: '',
                            title: 'Getting here'
                        }}
                    />
                    <p>
                        CITY OF LONDON. Tokenhouse Yard is a four-minute walk
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
                        WEST END. Nassau Street is located a few minutes’ walk
                        from Tottenham Court Road London Underground (Northern
                        and Central Lines) and Oxford Circus London Underground
                        (Victoria, Central and Bakerloo Lines).
                    </p>
                </div>
            </div>
            <div className='Directions__bg_map'>
                <div className='cover'>
                    <div className='cover_ctr'>
                        Find directions with Google Maps*
                        <a
                            href='https://www.google.com/maps/dir//Tokenhouse+Yard,+London+EC2R+7AS/@51.5153851,-0.0907049,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x48761cab515b7a57:0xa9652d3756affe10!2m2!1d-0.0885162!2d51.5153851!3e3'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn'
                        >
                            Tokenhouse Yard - City of London
                        </a>
                        <a
                            href='https://www.google.com/maps/dir//Nassau+St,+Fitzrovia,+London+W1W+7AF/@51.5188268,-0.1412905,17z/data=!4m17!1m7!3m6!1s0x48761b2a47340f1d:0x7122f29f93bdb1e8!2sNassau+St,+Fitzrovia,+London+W1W+7AF!3b1!8m2!3d51.5188268!4d-0.1391018!4m8!1m0!1m5!1m1!1s0x48761b2a47340f1d:0x7122f29f93bdb1e8!2m2!1d-0.1391018!2d51.5188268!3e3'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn'
                        >
                            Nassau Street – West End
                        </a>
                        <p>
                            <small>
                                <i>*Directions open up in a new tab.</i>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
const Form = props => {
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
                            )
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

                    {/* <p><a href="https://my.vsee.com/s/5bf7bbd27cfb4" target="_blank" rel="noopener noreferrer">
                        <img src={require('./../../imgs/vsee.png')} className="Vsee" alt="Vsee"/>
                        VSee Video calling.</a></p> */}
                </div>
            </div>
            <div className='Contact__bg_themed' id='contact-form'>
                {/* <img
                    src={require('./../../imgs/contactText.pt2.png')}
                    alt='Contact Page'
                    className='Page__top_img part2'
                /> */}
                <div className='section__wrapper'>{props.children}</div>
                <p className='text_side'>
                    <b>*REQUIRED. </b> Please choose at least one form of
                    contact.
                </p>
            </div>
        </section>
    );
};
const changePlaceholder = (e, text, color) => {
    e.target.placeholder = text;
    e.target.style.color = color;
};
const stripHTML = text => {
    text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return text.trim();
};
