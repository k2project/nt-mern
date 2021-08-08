import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

export default function Summary() {
    return (
        <>
            <h3 id='gdpr-summary' className='PrivacyNotice-heading'>
                Content summary
            </h3>
            <ol aria-labelledby='gdpr-summary' className='gdpr-summary-list'>
                <li>
                    <NavLink to='/privacy-notice#gdpr-intro' smooth exact>
                        Introduction
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/privacy-notice#gdpr-legal' smooth exact>
                        My lawful basis for holding and using your personal
                        information
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/privacy-notice#gdpr-data-use'
                        smooth
                        exact
                        id='sublist-heading'
                    >
                        How I use your information
                    </NavLink>
                </li>
                <ol
                    className='gdpr-summary-sublist'
                    aria-labelledby='sublist-heading'
                >
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-initial-contact'
                            smooth
                            exact
                        >
                            Initial contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-treatment-duration'
                            smooth
                            exact
                        >
                            While you are accessing psychotherapy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-treatment-end'
                            smooth
                            exact
                        >
                            After psychotherapy has ended
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-third-party'
                            smooth
                            exact
                        >
                            Third party recipients of personal data
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/privacy-notice#gdpr-qa' smooth exact>
                            Supervision, Professional Development and Quality
                            Assurance
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-disclosures'
                            smooth
                            exact
                        >
                            Disclosures Required or Permitted Under Law
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-your-rights'
                            smooth
                            exact
                        >
                            Your rights
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-data-security'
                            smooth
                            exact
                        >
                            Data security
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-visitors'
                            smooth
                            exact
                        >
                            Visitors to my website
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/privacy-notice#gdpr-YouTube' smooth exact>
                            Integration of YouTube videos
                        </NavLink>
                    </li>
                </ol>
            </ol>
        </>
    );
}
