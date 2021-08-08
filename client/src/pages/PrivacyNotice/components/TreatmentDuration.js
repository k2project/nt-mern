import React from 'react';
import OuterLink from '../../../components/links/OuterLink';
import { UKCP } from '../../../config';

const confidentialLink = (
    <OuterLink href={UKCP.urlCodeOfEthics} text={UKCP.alternativeEthicsTitle} />
);

export default function TreatmentDuration() {
    return (
        <>
            <h4
                id='gdpr-treatment-duration'
                className='PrivacyNotice-subheading'
            >
                While you are accessing psychotherapy
            </h4>
            <p>
                Everything you discuss with me is {confidentialLink}. That
                confidentiality will only be broken if you tell me something
                that{' '}
                <b>
                    suggests your safety, or the safety of others is in danger
                </b>
                . In this case I would discuss my concerns with you and any
                other professionals that I might need to contact. I would hope
                to do this, wherever possible, <b>with your agreement</b>.
            </p>
            <p>
                I will keep a record of your personal details to help the
                psychotherapy run effectively. These details are kept securely
                in a{' '}
                <b>
                    locked filing cabinet, in a locked room or on a password
                    protected device
                </b>
                .
            </p>
            <p>
                I may keep written notes of each session, these are kept
                securely in a locked filing cabinet.
            </p>
            <p>
                For security reasons{' '}
                <b>I do not retain text messages for more than one year</b>. If
                there is relevant information contained in a text message, I
                will retain a digital copy. Likewise, any{' '}
                <b>
                    email correspondence will be deleted after one year if it is
                    not important
                </b>
                . If necessary, I will retain the email.
            </p>
        </>
    );
}
