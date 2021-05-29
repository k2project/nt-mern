import React from 'react';
import OuterLink from '../../../../components/links/OuterLink';
import { TRUTH_PROJECT, IICSA, FORUM } from '../../../../config';

const truthProjectLink = (
    <OuterLink href={TRUTH_PROJECT.urlHome} text={TRUTH_PROJECT.name} />
);

const iicsaLink = <OuterLink href={IICSA.urlHome} text={IICSA.name} />;
const reportLinkHref =
    'https://www.iicsa.org.uk/key-documents/22748/view/redress-forum-report_-october-2020.pdf';

const reportLink = <OuterLink href={reportLinkHref} text='here' />;

const forumLink = <OuterLink href={FORUM.url} text='here' />;

export default {
    id: 1,
    cls: 'ListeningToTheVoicesOfSurvivors',
    featured: true,
    title: 'Listening to the voices of survivors',
    summary:
        'Nujoji Calvocoressi is a member of the Victims and Survivors Consultative Panel at the Independent Inquiry into Child Sexual Abuse. In this blog, he describes how the voices of survivors are central to the Inquiry’s work, and argues that if things are to change, it’s essential we listen to those voices.',
    date: '2020-11-13',
    author: 'Nujoji Calvocoressi',
    publication: 'Local Gov',
    img: 'dummy.jpg',
    content: (
        <>
            <p>
                Nujoji Calvocoressi is a member of the Victims and Survivors
                Consultative Panel at the Independent Inquiry into Child Sexual
                Abuse. In this blog, he describes how the voices of survivors
                are central to the Inquiry’s work, and argues that if things are
                to change, it’s essential we listen to those voices.
            </p>
            <p className='article-subtitle'>
                “I finally had the opportunity to have my voice heard. This has
                been the most important thing in my healing journey.”
            </p>
            <p>
                These are the words of a victim and survivor of child sexual
                abuse who shared their experience with the Truth Project. It’s
                no doubt that feeling heard is important for anyone - in fact
                for many of us, it’s something we don’t have to think twice
                about. Unfortunately, this isn’t the case for everyone. For
                someone who may have been disbelieved, ignored or told to stay
                silent in the past, having the opportunity to share their
                experience may be the first step on the road to recovery.
            </p>
            <p>
                Part of the {iicsaLink}, the {truthProjectLink} provides an
                opportunity for survivors to share their account and put forward
                suggestions for change. Just last month, it published a further
                80 experiences shared by survivors, who described abuse taking
                place in residential care homes, sports settings and religious
                communities. They talked about the barriers they faced in coming
                forward and the detrimental impact the abuse has had across all
                aspects of their lives including relationships, education, their
                career, as well as physical and mental health. Many said that by
                sharing their account, they hoped to help others who had been
                through a similar experience and to make a difference.
            </p>
            <p className='article-subtitle'>
                “Thank you for giving me the ability to share my story for the
                first time. I felt empowered, listened to and had the
                opportunity to help others…” - Truth Project participant
            </p>
            <p>
                Making a difference is exactly what their experience contributes
                to. More than 5,000 survivors have now shared their account with
                the Truth Project, with each one helping to inform our
                recommendations to better protect children in future. All who
                have generously and courageously offered their experience help
                to build the case for change and improvement. Whilst it’s coming
                to a close next year, for now we are still encouraging those who
                wish to share their account with the {truthProjectLink} to do
                so.
            </p>
            <p>
                As well as the Truth Project, survivors also make an important
                contribution to the Inquiry through our Victims and Survivors
                Forum, with members providing a true insight into their views on
                issues such as the criminal justice system and access to
                records.
            </p>
            <p>
                Most recently, members of the Forum were invited to put forward
                their views on the subject of redress, with more than half of
                those who had sought redress describing the overall process as
                negative.
            </p>
            <p className='article-subtitle'>
                “The whole experience which has lasted years has been a time of
                hypervigilance and anxiety on an almost daily basis”. - Forum
                member
            </p>
            <p>
                Forum members described how they felt inadequately supported
                with the emotional impact of seeking redress. Some said the
                process was retraumatising and told us that it had caused them
                harm, whilst others said they had been treated poorly by those
                from whom they had sought redress. Many described apologies and
                acknowledgments as the thing they would have valued the most,
                with one survivor saying: “So many people never apologise or say
                these words, ‘I am so sorry this happened to you’”. The full
                summary report is available to read {reportLink}.
            </p>
            <p>
                The generosity of survivors who have shared their accounts with
                the Inquiry provide a powerful insight into the difficulties
                many have to deal with across numerous aspects of their lives.
                Their accounts tell us there is still much work to be done to
                better support and better understand the challenges, barriers
                and life-long impacts victims and survivors face in England and
                Wales. If things are to change for the better, it’s vital that
                we continue to listen and learn from their experiences.
            </p>
            <p>
                The Truth Project is drawing to a close next year so all of the
                experiences shared can be used to inform the findings and
                recommendations in the Inquiry’s final report. More information
                about sharing an experience is available on the{' '}
                {truthProjectLink} website.
            </p>
            <p>
                More information about how to join the Inquiry’s Victims and
                Survivors Forum is available {forumLink}.
            </p>
        </>
    ),
    comments: [],
};
