import React from 'react';
import OuterLink from '../../../components/links/OuterLink';

const link = (
    <OuterLink
        href='https://ico.org.uk/your-data-matters/'
        text='https://ico.org.uk/your-data-matters/'
    />
);

const complaint_link = (
    <OuterLink
        href='https://ico.org.uk/make-a-complaint'
        text='ico.org.uk/make-a-complaint'
    />
);

export default function YourRights() {
    return (
        <>
            <h4 id='gdpr-your-rights' className='PrivacyNotice-subheading'>
                Your rights
            </h4>
            <p>
                I will try to be as transparent as I can be in terms of giving
                you access to your personal information. You have a right to ask
                me to delete your personal information, to limit how I use your
                personal information, or to stop processing your personal
                information. You also have a right to ask for a copy of any
                information that I hold about you and to object to the use of
                your personal data in some circumstances. You can read more
                about your rights at {link}.
            </p>
            <p id='dpr-rights'>If I do hold information about you I will:</p>
            <ol
                aria-labelledby='gdpr-rights'
                className='PrivacyNoticeIntro-list-with-roman-letters'
            >
                <li>
                    <abbr title='Roman numeral 1' aria-hidden='true'>
                        I.
                    </abbr>
                    give you a <b>description</b> of it and where it came from.
                </li>
                <li>
                    <abbr title='Roman numeral 2' aria-hidden='true'>
                        II.
                    </abbr>
                    tell you why I am holding it, tell you how long I will store
                    your data and how I made this decision.
                </li>
                <li>
                    <abbr title='Roman numeral 3' aria-hidden='true'>
                        III.
                    </abbr>
                    tell you who it could be <b>disclosed</b> to.
                </li>
                <li>
                    <abbr title='Roman numeral 4' aria-hidden='true'>
                        IV.
                    </abbr>
                    let you have a <b>copy</b> of the information in an
                    understandable format.
                </li>
            </ol>
            <p>
                You can also ask me at any time to correct any mistakes there
                may be in the personal information I hold about you.
            </p>
            <p>
                To make a request for any personal information I may hold about
                you, please put the request in writing addressing it to
                nujoji@calvocoressi.com.
            </p>
            <p>
                If you have a{' '}
                <b>complaint about how I handle your personal data</b>, please
                do not hesitate to get in touch with me by emailing my contact
                details given above. I would welcome any suggestions for
                improving my data protection procedures.
            </p>
            <p>
                If you want to make a <b>formal complaint</b> about the way I
                have processed your personal information you can contact the ICO
                which is the statutory body that oversees data protection law in
                the United Kingdom. For more information go to {complaint_link}.
            </p>
        </>
    );
}
