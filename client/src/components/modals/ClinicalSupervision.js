import React from 'react';
import Popup from 'reactjs-popup';
import './modals.scss';
import img from '../../imgs/nc-bw.jpg';

export default function ClinicalSupervision({
    btnText = 'open',
    btnClass = '',
}) {
    const page = window.location.pathname.slice(1);
    return (
        <Popup
            trigger={<a className={`trigger ${btnClass}`}> {btnText} </a>}
            modal
            position='center center'
            lockScroll
        >
            {(close) => (
                <div className={`modal clinic-supervision ${page}`}>
                    <div className='close'>
                        <button
                            className='close'
                            onClick={close}
                            aria-label='close pop-up'
                        >
                            &times;
                        </button>
                    </div>
                    <div className='cols'>
                        <div className='text'>
                            <h1 className='section__title'>
                                Clinical Supervision
                            </h1>
                            <h2>
                                I am a UKCP registered clinical supervisor and
                                integrative psychotherapist offering online
                                supervision. My Diploma in Supervision was
                                awarded by The Institute of Group Analysis. I
                                have experience supervising trainees, qualified
                                practitioners, and people working with a
                                therapeutic intention, individually and in
                                groups. I support a range of thinking models,
                                including humanistic, relational, and
                                psychodynamic.
                            </h2>
                            <p>
                                I work as a psychotherapist and clinical
                                supervisor in the offender personality disorder
                                pathway. I have experience working with both men
                                and women in prison. I also have an independent
                                practice. I am a visiting lecturer on a
                                postgraduate psychotherapy training, and I am
                                jointly researching about the experience of
                                women in prison.
                            </p>
                            <p>
                                As a clinical supervisor, I offer supervision
                                sessions to individual and group practitioners
                                working in independent practice and frontline
                                staff and managers across organisations. I
                                provide a collaborative, supportive and
                                reflective supervisory space to ensure that
                                supervision is dynamic, challenging, supporting,
                                and motivating for yourself and your clients.
                            </p>

                            <p>
                                Supervision is an essential component of the
                                ongoing professional development of
                                practitioners. The primary purpose of
                                supervision is to throw light on the
                                relationship between the client and practitioner
                                and maintain high standards of care. Supervision
                                fosters ongoing growth and development and is
                                valuable for providing your clients with
                                effective, ethical, and culturally responsive
                                care.
                            </p>
                            <p>
                                I have experience supervising practitioners
                                working in independent practice, the emergency
                                services and in the fields of child sexual
                                abuse, forensic mental health, and personality
                                difficulties.
                            </p>
                            <p>
                                <strong>
                                    {' '}
                                    Individual supervision sessions last one
                                    hour, and group supervision lasts 90
                                    minutes. I charge £60 for supervision.
                                </strong>
                            </p>
                        </div>

                        <img
                            src={img}
                            alt='Nujoji Calvocoressi'
                            className='nc-img'
                        />
                    </div>
                </div>
            )}
        </Popup>
    );
}
