import React, { Component, Fragment } from 'react';
import DocumentMeta from 'react-document-meta';

import './Contact.scss';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

import person from '../../imgs/person.png';
import mail from '../../imgs/mail.png';
import tel from '../../imgs/tel.png';
import pen from '../../imgs/pen7.png';
import mailSent from '../../imgs/mailSent.png';

import { Office } from './components/Office';
import { Directions } from './components/Directions';
import { Form } from './components/Form';
import { RadioInput } from './components/RadioInput';

import {
    TITLE_CONTACT,
    DESCRIPTION_CONTACT,
    AUTHOR,
    CANONICAL_CONTACT,
    KEYWORDS_CONTACT,
    OG_IMG_HOME,
} from '../../metaData';

const meta = {
    title: TITLE_CONTACT,
    description: DESCRIPTION_CONTACT,
    canonical: CANONICAL_CONTACT,
    meta: {
        name: {
            author: AUTHOR,
            keywords: KEYWORDS_CONTACT,
        },
        property: {
            'og:title': TITLE_CONTACT,
            'og:url': CANONICAL_CONTACT,
            'og:image': OG_IMG_HOME,
            'og:description': DESCRIPTION_CONTACT,
        },
    },
};

class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sent: false,
            name: '',
            mail: '',
            mobile: '',
            message: '',
            err: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const name = e.target.name;
        this.setState({
            err: '',
            [name]: e.target.value,
            sent: false,
        });
    }
    handleSubmit = async (e) => {
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
                sent: false,
            });
        }

        let fakeMail = t.mail2.value;
        if (fakeMail) {
            return;
        }

        let name = stripHTML(t.name.value);
        let mail = stripHTML(t.mail.value);
        let mobile = stripHTML(t.mobile.value);
        let message = stripHTML(t.message.value);
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
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                mail,
                mobile,
                location,
                message,
            }),
        })
            .then((res) => res.json())
            .then((json) => {
                // console.log('json', json);
                const locationInputs =
                    document.querySelectorAll('.RadioInput__fake');
                if (json.success) {
                    this.setState({
                        sent: true,
                        name: '',
                        mail: '',
                        mobile: '',
                        message: '',
                        err: '',
                    });

                    for (var i = 0; i < locationInputs.length; i++) {
                        locationInputs[i].classList.remove('clicked');
                    }
                } else {
                    this.setState({
                        err: json.message,
                        sent: false,
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
                <Page page='Contact'>
                    <Office />
                    <Directions />
                    <Form>
                        {!sent && (
                            <Fragment>
                                <SectionTitle
                                    data={{
                                        divider: '',
                                        subtitle: '',
                                        title: (
                                            <span>
                                                TAKING THE
                                                <b className='nowrap'>
                                                    {' '}
                                                    FIRST STEP
                                                </b>
                                            </span>
                                        ),
                                    }}
                                />
                                <p
                                    className='Form__err'
                                    style={{
                                        color: 'crimson',
                                        marginBottom: 80,
                                    }}
                                >
                                    IMPORTANT NOTICE:
                                    <br /> We are experiencing some issues with
                                    our mail servers right now. Please send your
                                    enquiries directly to
                                    nujoji@calvocoressi.com.
                                </p>

                                <form
                                    className={formCls}
                                    onSubmit={this.handleSubmit}
                                    autocomplete
                                >
                                    <label htmlFor='name'>
                                        <img src={person} alt='' />
                                        <b>*</b>
                                        <span className='sr-only'>Name: *</span>
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        id='name'
                                        onChange={this.handleChange}
                                        value={this.state.name}
                                    />
                                    <label htmlFor='mail'>
                                        <img src={mail} alt='' />
                                        <b>*</b>
                                        <span className='sr-only'>
                                            Email: *
                                        </span>
                                    </label>
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
                                        onMouseDown={(e) => e.preventDefault()}
                                    />
                                    <label htmlFor='mobile'>
                                        <img src={tel} alt='' />
                                        <b>*</b>
                                        <span className='sr-only'>
                                            Mobile: *
                                        </span>
                                    </label>
                                    <input
                                        type='text'
                                        name='mobile'
                                        id='mobile'
                                        onChange={this.handleChange}
                                        value={this.state.mobile}
                                    />
                                    <label htmlFor='message'>
                                        <img src={pen} alt='' />
                                        <b>*</b>
                                        <span className='sr-only'>
                                            Message: *
                                        </span>
                                    </label>
                                    <textarea
                                        name='message'
                                        id='message'
                                        onChange={this.handleChange}
                                        value={this.state.message}
                                        rows='4'
                                    />
                                    <fieldset className='Form__locations'>
                                        {/* <legend>
                                            <img src={location} alt='' />
                                            Which location is the most
                                            convenient?*
                                        </legend> */}
                                        <RadioInput
                                            value='Tokenhouse Yard'
                                            text='Tokenhouse Yard (City of London)'
                                            clearErr={() => {
                                                this.setState({
                                                    err: '',
                                                    sent: false,
                                                });
                                            }}
                                        />
                                        <RadioInput
                                            value='Nassau Street'
                                            text='Nassau Street (West End)'
                                            clearErr={() => {
                                                this.setState({
                                                    err: '',
                                                    sent: false,
                                                });
                                            }}
                                        />
                                        {/* <RadioInput
                                            value='any office'
                                            text='Either Location'
                                            clearErr={() => {
                                                this.setState({
                                                    err: '',
                                                    sent: false,
                                                });
                                            }}
                                        /> */}
                                        <RadioInput
                                            value='online'
                                            text='Online'
                                            clearErr={() => {
                                                this.setState({
                                                    err: '',
                                                    sent: false,
                                                });
                                            }}
                                        />
                                    </fieldset>

                                    <div className='text_cntr'>
                                        <button type='submit' className='btn'>
                                            Get In Touch
                                        </button>
                                    </div>

                                    {!err && (
                                        <div className='text_side text_cntr'>
                                            *REQUIRED FIELDS. Please choose at
                                            least one method of contact.
                                        </div>
                                    )}
                                    <div className='Form__err'>
                                        {err && (
                                            <p className='Form__message_err text_cntr'>
                                                <span>*</span>
                                                {err}
                                            </p>
                                        )}
                                    </div>
                                </form>
                            </Fragment>
                        )}
                        {sent && (
                            <div className='Form__message_sent text_cntr'>
                                <img src={mailSent} alt='' />
                                <b>THANK YOU!</b>
                                Your message has been sent and I will get back
                                to you within 24 hours.
                                <button
                                    className='btn'
                                    onClick={() =>
                                        this.setState({ sent: false })
                                    }
                                >
                                    Back to Form
                                </button>
                            </div>
                        )}
                    </Form>
                </Page>
            </DocumentMeta>
        );
    }
}
export default Contact;

// const changePlaceholder = (e, text, color) => {
//     e.target.placeholder = text;
//     e.target.style.color = color;
// };
const stripHTML = (text) => {
    text = text.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return text.trim();
};
