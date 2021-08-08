import React from 'react';
import OuterLink from '../../../components/links/OuterLink';
import { UKCP } from '../../../config';

const confidentialLink = (
    <OuterLink href={UKCP.urlCodeOfEthics} text={UKCP.alternativeEthicsTitle} />
);

export default function Disclosures() {
    return (
        <>
            <h4 id='gdpr-disclosures' className='PrivacyNotice-subheading'>
                Disclosures Required or Permitted Under Law
            </h4>
            <p id='dpr-disclosures-list'>
                The information that you provide to me is {confidentialLink}. In
                keeping with codes of ethics for psychotherapists, the
                information shared within the context of a psychotherapy
                relationship is treated in a strictly confidential manner and
                will not be divulged to others without your consent, except in
                the following exceptional circumstances:
            </p>
            <ol
                aria-labelledby='gdpr-disclosures-list'
                className='PrivacyNoticeIntro-list-with-roman-letters'
            >
                <li>
                    <abbr title='Roman numeral 1' aria-hidden='true'>
                        I.
                    </abbr>
                    If there is a{' '}
                    <b>
                        serious concern that there may be a threat to your
                        safety or life or that of another
                    </b>
                    .
                </li>
                <li>
                    <abbr title='Roman numeral 2' aria-hidden='true'>
                        II.
                    </abbr>
                    In the context of <b>criminal behaviour</b> and disclosures
                    required by legal process.
                </li>
            </ol>
            <p>
                Information to third parties is provided on a{' '}
                <b>need-to-know basis</b>
                and is done so with great sensitivity.
            </p>
        </>
    );
}
