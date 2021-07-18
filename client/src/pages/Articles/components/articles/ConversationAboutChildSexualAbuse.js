import React from 'react';
import OuterLink from '../../../../components/links/OuterLink';
import { TRUTH_PROJECT, IICSA } from '../../../../config';

const truthProjectLink = (
    <OuterLink
        href={TRUTH_PROJECT.urlHome}
        text={`The ${TRUTH_PROJECT.name}`}
    />
);
const iicsaLink = <OuterLink href={IICSA.urlHome} text={IICSA.name} />;

export default {
    id: 'ConversationAboutChildSexualAbuse',
    cls: 'ConversationAboutChildSexualAbuse',
    featured: false,
    category: 'Opinion piece',
    title:
        'We need to have a conversation about child sexual abuse, now more than ever',
    summary:
        'This blog is written by Nujoji Calvocoressi, a member of the Victims and Survivors Consultative Panel. It discusses sexual violence and may be upsetting to read.',
    date: '2021-05-07',
    author: 'Nujoji Calvocoressi',
    publication: 'SURVIVORS UK',
    sourceUrl:
        'https://www.survivorsuk.org/blog/we-need-to-have-a-conversation-about-child-sexual-abuse-now-more-than-ever/',
    img: 'robot.jpg',
    logo: 'survivorsLogo.png',
    content: (
        <>
            <p className='article-subtitle'>
                This blog is written by Nujoji Calvocoressi, a member of the
                Victims and Survivors Consultative Panel. It discusses sexual
                violence and may be upsetting to read.
            </p>
            <p>
                Barny suffered brutal sexual, physical, and psychological abuse
                by a teacher. For years, he did not seek any psychological
                support because he did not feel he could talk about the abuse.
                “I thought I would take it to the grave and never tell anyone”,
                he says.
            </p>
            <p>
                It’s a sad but perhaps unsurprising reality that Barny’s account
                is not unusual. For the majority of victims and survivors of
                child sexual abuse, the barriers to speaking out are just too
                high.
            </p>

            <p>
                Recent research from the {iicsaLink} shows that{' '}
                <b>
                    more than two-thirds of survivors didn’t tell anyone about
                    the sexual abuse whilst it was taking place
                </b>
                , and for one in 10, speaking to the Inquiry’s Truth Project was
                the first time they’d ever disclosed the sexual abuse to anyone.
            </p>

            <p>
                These research findings present additional cause for concern in
                the ongoing pandemic, as the third (and longest) national
                lockdown comes to an end. For many of us, being locked down at
                home may be the best way to keep us safe. For others, this is
                sadly not the case. Even without a global pandemic, the place
                many children call home – whether that be with family or in
                residential care – is not always one of safety. And what about
                those that don’t even have a home? To put it bluntly, any child
                being sexually abused has little respite or escape and is likely
                to be suffering in silence.
            </p>
            <p>
                Media headlines are understandably consumed by virus variants
                and vaccine progress. And while these are all vitally important
                and world-altering news, we must not allow it to make us lose
                sight of the vulnerable during this crisis, and children
                especially. Child sexual abuse is happening behind closed doors
                right now, and unless we find ways to shine a light on it, we
                will be left with more victims and survivors who suffered in
                silence.
            </p>

            <p>
                Typically those who are sexually abused as children won’t have
                the words for what is happening to them. They may not have
                anyone they can talk to about the sexual abuse, or they may
                simply be so afraid of speaking up that won’t tell anyone about
                it for years, sometimes even decades – if ever.
            </p>

            <p>
                This issue is compounded by society’s general unwillingness to
                discuss or even acknowledge child sexual abuse, potentially
                leaving people woefully unprepared if a sexually abused child
                ever tries to confide in them. If society at large is struggling
                to talk about the issue, how can we continue to place the burden
                on children to come forward? In order to prevent sexual abuse
                from happening in the first place, it’s vital that as a society
                we have those difficult conversations. We need to create an
                environment where people feel able to talk about and report
                sexual abuse.
            </p>

            <p>
                The Inquiry has also published a further 80 experiences victims
                and survivors have shared with the Truth Project. The Inquiry is
                encouraging survivors who would like to share their account with
                the Truth Project to do so before it concludes in October this
                year.
            </p>
            <p>
                These powerful accounts show that even when survivors tried to
                report the sexual abuse, often to those in positions of
                authority, they were dismissed, ignored or told to stay silent.
            </p>

            <p>
                Mercy says that no matter how much she tries to forget her
                memories, she feels she is living a ‘life sentence’ because of
                her traumatic experiences. She wishes that people had listened
                to her and believed her.
            </p>

            <p>
                Hayden still feels affected by the sexual abuse he was subjected
                to as a child and he is concerned about his mental health. He
                says, “I was so confused and I’ve been so confused for many
                years. When I have time on my own and have space to think, it
                comes back to me … it’s hanging over me”.
            </p>

            <p>
                Collin says that more education, awareness and open discussion
                of child sexual abuse could have helped protect him. “Back then
                I don’t think people knew or talked much about that kind of
                thing”, he says.
            </p>

            <p>
                The appaling experiences of these victims and survivors show
                more must be done to normalise the conversation around child
                sexual abuse. Those who have been sexually abused need to feel
                there is someone they can reach out to, who will listen to and
                hear them in confidence, and most importantly, believe them.
            </p>

            <p>In the Inquiry’s Interim Report, it says of cultural change:</p>

            <p>
                ‘The Inquiry considers that children ‒ and adult victims and
                survivors of child sexual abuse ‒ will be better protected and
                supported if society is prepared to discuss the issue openly and
                frankly.’
            </p>
            <p>
                Although some may not like discussing or even thinking about
                child sexual abuse, unless we collectively find a way to do so,
                we cannot find and help those children currently suffering in
                silence.
            </p>

            <p>
                {truthProjectLink} is closing in October 2021, but for now it is
                still open for survivors of child sexual abuse to share their
                experiences over the phone, via video call or in writing. Visit
                www.truthproject.org.uk to find out more.
            </p>
        </>
    ),
    comments: [],
};
