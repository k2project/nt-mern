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
                            exact
                        >
                            Initial contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/privacy-notice#gdpr-treatment-duration'
                            exact
                        >
                            While you are accessing psychotherapy
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/privacy-notice#gdpr-treatment-end' exact>
                            After psychotherapy has ended
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/privacy-notice#gdpr-third-party' exact>
                            Third party recipients of personal data
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/privacy-notice#gdpr-qa' exact>
                            Supervision, Professional Development and Quality
                            Assurance
                        </NavLink>
                    </li>
                </ol>
            </ol>
        </>
    );
}
