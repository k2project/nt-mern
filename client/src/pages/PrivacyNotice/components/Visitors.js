import React from 'react';
import OuterLink from '../../../components/links/OuterLink';

const link = (
    <OuterLink
        href='https://support.google.com/analytics/answer/4597324?hl=en'
        text='https://support.google.com/analytics/answer/4597324?hl=en'
    />
);

export default function Visitors() {
    return (
        <>
            <h4 id='gdpr-visitors' className='PrivacyNotice-subheading'>
                Visitors to my website
            </h4>

            <p id='dpr-visitors-list'>
                When you view my website, I collect the following data necessary
                for technical purposes to be able to demonstrate my website to
                you and to ensure adequate access stability and security:
            </p>
            <ol
                aria-labelledby='gdpr-visitors-list'
                className='PrivacyNoticeIntro-list-with-roman-letters'
            >
                <li>
                    <abbr title='Roman numeral 1' aria-hidden='true'>
                        I.
                    </abbr>
                    IP address.
                </li>
                <li>
                    <abbr title='Roman numeral 2' aria-hidden='true'>
                        II.
                    </abbr>
                    Enquiry date and time.
                </li>
                <li>
                    <abbr title='Roman numeral 3' aria-hidden='true'>
                        III.
                    </abbr>
                    Time zone difference to Greenwich Mean Time (GMT).
                </li>
                <li>
                    <abbr title='Roman numeral 4' aria-hidden='true'>
                        IV.
                    </abbr>
                    Enquiry content (the exact web page accessed).
                </li>
                <li>
                    <abbr title='Roman numeral 5' aria-hidden='true'>
                        V.
                    </abbr>
                    Access status/HTTP status code.
                </li>
                <li>
                    <abbr title='Roman numeral 6' aria-hidden='true'>
                        VI.
                    </abbr>
                    Data volume transmitted in each case.
                </li>
                <li>
                    <abbr title='Roman numeral 7' aria-hidden='true'>
                        VII.
                    </abbr>
                    Website generating the enquiry.
                </li>
                <li>
                    <abbr title='Roman numeral 8' aria-hidden='true'>
                        VIII.
                    </abbr>
                    Browser.
                </li>
                <li>
                    <abbr title='Roman numeral 9' aria-hidden='true'>
                        IX.
                    </abbr>
                    OS and its interface.
                </li>
                <li>
                    <abbr title='Roman numeral 10' aria-hidden='true'>
                        X.
                    </abbr>
                    Browser language and version.
                </li>
            </ol>
            <p>
                I use legitimate interests as my lawful basis for holding and
                using your personal information in this way when you visit my
                website.
            </p>
            <p>
                When someone visits my website, I use a third-party service,
                Google Analytics to collect standard internet log information
                and details of <b>visitor behaviour patterns</b>. I do this to
                find out things such as the number of visitors to the various
                parts of the site. This information is only processed in a way
                that <b>does not identify anyone</b>. I do not make, and do not
                allow Google Analytics to make, any attempt to find out the
                identities of those visiting my website.
            </p>
            <p>
                I use <b>Google Analytics</b> so that I can continually improve
                my service, you can read Google Analytics privacy notice here{' '}
                {link}.
            </p>
            <p>
                Like most websites{' '}
                <b>I use cookies to help the site work more efficiently</b>.
                Cookies are small text files which are stored on your hard drive
                as files assigned to your browser and through which certain
                information is provided to the cookie sender (in this case to
                me). Cookies are not able to execute any programmes or to infect
                your computer with any virus. Their purpose is to make your work
                on the internet generally more user-friendly and effective.
            </p>
            <p>
                <b>Transient cookies</b> are deleted automatically when you
                close your browser. They include session cookies. They store
                information about the so-called session ID with which diverse
                enquiries of your browser are assigned within the entire
                session. They enable me to recognise your computer as that of a
                former visitor when you return to my website. The session
                cookies are deleted when you close your browser.
            </p>
            <p>
                <b>Persistent cookies</b> are deleted automatically after a
                pre-set period which can differ from cookie to cookie. You can
                delete the cookies at any time using the security settings of
                your browser.
            </p>
            <p>
                You can <b>configure your browser settings</b> at your
                discretion and in particular decline acceptance of third-party
                cookies or of all cookies. I point out, that in such case you
                will not be able most probably to make use of some of the
                functions on my website.
            </p>
            <p>
                No user-specific data is collected by me or any third party. If
                you fill in a form on my website, that data will be temporarily
                stored on the web host before being sent to me.
            </p>
        </>
    );
}
