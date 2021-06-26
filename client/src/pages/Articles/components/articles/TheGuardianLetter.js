import React from 'react';
import OuterLink from '../../../../components/links/OuterLink';
import { TRUTH_PROJECT } from '../../../../config';

const truthProjectLink = (
    <OuterLink href={TRUTH_PROJECT.urlHome} text={TRUTH_PROJECT.name} />
);

export default {
    id: 'TheGuardianLetter',
    cls: 'TheGuardianLetter',
    featured: false,
    category: 'Letter to the Editor',
    title:
        'An opportunity for victims and survivors of child sexual abuse to finally be heard',
    summary:
        'Members of the victims and survivors consultative panel of the Independent Inquiry into Child Sexual Abuse urge people to speak to the Truth Project before a deadline at the end of July.',
    date: '2021-06-17',
    author: null,
    pseudoauthor: 'Letter',
    publication: 'The Guardian',
    sourceUrl:
        'https://www.theguardian.com/uk-news/2021/jun/17/an-opportunity-for-victims-and-survivors-of-child-sexual-abuse-to-finally-be-heard',
    img: 'theGuardian.jpg',
    logo: 'theGuardianLogo.jpg',
    content: (
        <>
            <p>
                Members of the victims and survivors consultative panel of the
                Independent Inquiry into Child Sexual Abuse urge people to speak
                to the Truth Project before a deadline at the end of July.
            </p>
            <p>
                {truthProjectLink}, set up by the Independent Inquiry into Child
                Sexual Abuse, has played a vital role in helping the inquiry
                understand where and how organisations are failing children, and
                also in providing victims and survivors with a supportive and
                safe opportunity to finally be heard.
            </p>
            <p>
                To date, more than 5,600 people have shared their experience of
                child sexual abuse with the Truth Project; each one makes a
                vital contribution to the inquiry’s work and helps it to make
                recommendations. Victims and survivors who have taken part have
                been able to tell the inquiry how institutions have failed them,
                and explain what needs to change in order to better protect
                children in the future. Many have told us they felt empowered by
                coming forward to the Truth Project, with some saying it was a
                real turning point in their life.
            </p>
            <p>
                As the inquiry comes to a close, so too will the Truth Project,
                which is why it’s important that anyone who would like to take
                part should get in touch. The inquiry has adapted its processes
                so that victims and survivors have still been able to talk to us
                throughout the pandemic; anyone who wishes to share via phone or
                video call should get in touch by the end of July this year.
                Written accounts are welcomed until the end of October 2021,
                when the project will finally close.
            </p>
            <p>
                Throughout the inquiry’s investigations, it’s become clear that
                too many victims and survivors of child sexual abuse have been
                silenced for too long. They must be heard.
            </p>
            <p>
                <b>
                    Chris Tuck, Emma Lewis, Fay Maxted, Kit Shellam, May
                    Baxter-Thornton, Nujoji Calvocoressi, Sheila Coates{' '}
                </b>
                <br />
                <i>
                    Victims and survivors consultative panel, Independent
                    Inquiry into Child Sexual Abuse
                </i>
            </p>
        </>
    ),
    comments: [],
};
