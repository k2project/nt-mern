import React from 'react';
import OuterLink from '../../../components/links/OuterLink';

const YouTubeLink = (
    <OuterLink href='http://www.youtube.com/' text='YouTube website' />
);

export default function YTvideos() {
    return (
        <>
            <h4 id='gdpr-YouTube' className='PrivacyNotice-subheading'>
                Integration of YouTube videos
            </h4>
            <p>
                <b>I have integrated YouTube videos into my website</b>, which
                are stored on {YouTubeLink} and can be played directly from my
                website. These are all integrated in the “extended data
                protection mode”, i.e., no data about you as a user will be
                transmitted to YouTube if you do not play the videos. Only when
                you play the videos will the data be transmitted. I have no
                influence on this data transmission.
            </p>
            <p>
                By visiting my website, <b>YouTube receives the information</b>{' '}
                that you have accessed the corresponding subpage of my website.
                This is independent of whether YouTube provides a user account
                through which you are logged in or whether no user account
                exists. If you are logged in to Google, your information will be
                directly associated with your account. If you do not wish to be
                associated with your profile on YouTube, you must log out before
                playing the video.
            </p>
        </>
    );
}
