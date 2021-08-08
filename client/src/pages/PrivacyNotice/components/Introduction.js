import React from 'react';
import OuterLink from '../../../components/links/OuterLink';

const GDPR_Link = (
    <OuterLink
        href='https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/'
        text='General Data Protection Regulation'
    />
);
const DPA_Link = (
    <OuterLink
        href='https://www.legislation.gov.uk/ukpga/2018/12/contents/enacted/data.htm'
        text='Data Protection Act 2018'
    />
);
const PEC_Link = (
    <OuterLink
        href='https://www.legislation.gov.uk/uksi/2003/2426/contents/made'
        text='Privacy and Electronic Communications (EC
            Directive) Regulations 2003'
    />
);
const ICO_Link = (
    <OuterLink
        href='https://ico.org.uk'
        text='Information Commissioner’s Office'
    />
);

export default function Introduction() {
    return (
        <>
            <h3 id='gdpr-intro' className='PrivacyNotice-heading'>
                Introduction
            </h3>

            <p>
                Your <b>privacy is important</b> to me, and you can be confident
                that your personal information will be kept{' '}
                <b>safe and secure</b> and that it will only be used for the
                purpose it was given to me. I adhere to current data protection
                legislation, including the {GDPR_Link} (EU/2016/679) (the GDPR),
                the {DPA_Link} and the {PEC_Link}.
            </p>

            <p id='gdpr-intro-list'>
                This privacy notice tells you what I will do with{' '}
                <b>your personal information</b> from{' '}
                <b>initial point of contact</b> through to after your{' '}
                <b>psychotherapy has ended</b>, including:
            </p>
            <ol
                aria-labelledby='gdpr-intro-list'
                className='PrivacyNoticeIntro-list-with-roman-letters'
            >
                <li>
                    <abbr title='Roman numeral 1' aria-hidden='true'>
                        I.
                    </abbr>
                    why I can process your information and what purpose I am
                    processing it for.
                </li>
                <li>
                    {' '}
                    <abbr title='Roman numeral 2' aria-hidden='true'>
                        II.
                    </abbr>
                    whether you must provide it to me.
                </li>
                <li>
                    {' '}
                    <abbr title='Roman numeral 3' aria-hidden='true'>
                        III.
                    </abbr>
                    how long I store it for.
                </li>
                <li>
                    <abbr title='Roman numeral 4' aria-hidden='true'>
                        IV.
                    </abbr>
                    whether there are other recipients of your personal
                    information.
                </li>
                <li>
                    {' '}
                    <abbr title='Roman numeral 5' aria-hidden='true'>
                        V.
                    </abbr>
                    whether I intend to transfer it to another country.
                </li>
                <li>
                    {' '}
                    <abbr title='Roman numeral 6' aria-hidden='true'>
                        VI.
                    </abbr>
                    whether I do automated decision-making or profiling.
                </li>
                <li>
                    {' '}
                    <abbr title='Roman numeral 7' aria-hidden='true'>
                        VII.
                    </abbr>
                    your data protection rights.
                </li>
            </ol>

            <p>
                I am happy to discuss any questions you might have about the
                data protection policy, and you can contact me by email at
                nujoji@calvocoressi.com.
            </p>
            <p>
                ‘Data controller’ is the term used to describe the person that
                collects and stores and has responsibility for your personal
                data. On this occasion, <b>the data controller is me</b>.
            </p>
            <p>
                I am registered with the {ICO_Link} registration number
                A8518835.
            </p>
            <p>
                My telephone number is: <u>0208 675 9754</u>. My email address
                is: nujoji@calvocoressi.com.
            </p>
        </>
    );
}
