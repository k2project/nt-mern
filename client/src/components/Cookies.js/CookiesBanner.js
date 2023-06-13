import React from 'react';
import CookieConsent, {
    Cookies,
    getCookieConsentValue,
} from 'react-cookie-consent';
import ReactGA from 'react-ga4';
import OuterLink from '../links/OuterLink';

export default function CookiesBanner() {
    const initGA = (id) => {
        if (process.env.NODE_ENV === 'production') {
            ReactGA.initialize(id);
            ReactGA.send('pageview');
        }
    };

    const handleAcceptCookie = () => {
        if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
            initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
        }
    };

    const handleDeclineCookie = () => {
        //remove google analytics cookies
        Cookies.remove('_ga');
        Cookies.remove('_gid');
        Cookies.remove('_gcl_au');
    };

    //The Cookie Consent bar won't appear on the next app visit from the same browser. So we have to handle Google Analytics initialization on every app run (or website visit) if a user granted prior consent.
    React.useEffect(() => {
        const isConsent = getCookieConsentValue();
        if (isConsent === 'true') {
            handleAcceptCookie();
        }
    }, []);

    return (
        <CookieConsent
            enableDeclineButton
            onAccept={handleAcceptCookie}
            onDecline={handleDeclineCookie}
            style={{
                background: '#fafafa',
                color: '#111',
                padding: '2rem',
                boxShadow: '0px -5px 15px -10px rgba(0,0,0,0.25)',
            }}
            buttonStyle={{
                padding: 15,
                background: '#111',
                color: 'white',
                minWidth: 140,
            }}
            declineButtonStyle={{
                padding: 15,
                color: 'white',
                minWidth: 140,
                marginRight: 0,
            }}
        >
            This website uses cookies to enhance the user experience. Find out
            more{' '}
            <OuterLink
                href='https://www.calvocoressi.com/privacy-notice'
                text='here'
                target='_self'
            />
            .
        </CookieConsent>
    );
}
