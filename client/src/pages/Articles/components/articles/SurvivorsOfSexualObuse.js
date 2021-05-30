import React from 'react';
import OuterLink from '../../../../components/links/OuterLink';
import { TRUTH_PROJECT } from '../../../../config';

const truthProjectLink = (
    <OuterLink
        href={TRUTH_PROJECT.urlHome}
        text={TRUTH_PROJECT.name + ' website'}
    />
);

const sharedExperienceLink = (
    <OuterLink
        href='https://www.truthproject.org.uk/experiences-shared'
        text='a further 80 accounts'
    />
);

export default {
    id: 'SurvivorsOfSexualObuse',
    cls: 'SurvivorsOfSexualObuse',
    featured: false,
    title: 'Survivors of sexual abuse: Remembering we’re not alone',
    summary:
        'It’s a difficult time for us all, and I wanted to share some thoughts about the issues that have  come up in my work.',
    date: '2021-05-07',
    author: 'Nujoji Calvocoressi',
    publication: 'Life Continues After',
    sourceUrl:
        'https://lifecontinuesafter.com/words/2020/5/7/survivors-of-sexual-abuse-remembering-were-not-alone',
    img: 'group.jpg',
    content: (
        <>
            <p>
                It goes without saying that we are currently living in very
                strange times.
            </p>
            <p>
                For most of us, a nationwide lockdown is something we’ve never
                experienced before, so it’s only natural for us to be unsure how
                to react. Routines have been put on hold and returning to the
                version of ‘normal’ we’re used to can seem a long way away, but
                it’s important to remember that as survivors, we’re not going
                through this alone. Last week, the Independent Inquiry into
                Child Sexual Abuse published {sharedExperienceLink} that victims
                and survivors had shared with its Truth Project. Whilst many of
                us may still feel the impact of our experiences, the powerful
                words of these survivors remind us that we are far from being
                alone.
            </p>
            <p>
                I began working for the Inquiry earlier this year, as a member
                of the Victims and Survivors Consultative Panel. Though current
                circumstances have affected our ability to meet and support each
                other as we’d like, I'm busy with Inquiry work; just last week
                we published a research report exploring the experiences of
                survivors' abused in custodial institutions. It provides a
                poignant reminder that even in these exceptional times, the risk
                and impact of abuse doesn't just disappear.{' '}
            </p>
            <p>
                I have found myself adapting to new ways of working to continue
                to support both my therapy clients and myself while we self
                isolate at home. It’s a difficult time for us all, and I wanted
                to share some thoughts about the issues that have come up in my
                work.
            </p>
            <p>
                Society is readjusting to a new reality. Certainly I have never
                experienced anything similar to this before. We all have a
                deeply personal connection to this global pandemic - a loved one
                in an at-risk group, worries about our own health and finances,
                the impact on our children’s education and shortages of food and
                medication.
            </p>
            <p>
                Many of the survivors I work with find comfort in establishing
                clear boundaries and routine to feel safe. Right now, everything
                we think of as stable, true and real has been turned upside down
                and we are all doing our best to orientate ourselves with so
                many unknowns, leaving us with nothing to grasp hold of and
                feeling unsafe.{' '}
            </p>
            <p>
                It can be tough to trust the advice given to keep us all safe,
                especially when your experiences may have left you feeling
                sceptical or let down, or you have a sense of being controlled
                by a greater authority. The term being used by the media - that
                we are placed “in lockdown” - can induce feelings of
                claustrophobia and confinement by a greater power.{' '}
            </p>
            <p>
                As victims and survivors, isolation is something we have all
                worked so hard to overcome. The usual self-care strategies for
                everyone are <b>temporarily</b> out of reach, whether it is an
                exercise routine you need gym equipment for, or an outing with
                friends to look forward to. Coming up with new ways to feel
                safe, and keep healthy is a challenge, but I’ve found showering
                and getting dressed each morning, creating a structure for the
                day and doing something that makes me smile or brings pleasure,
                however small, can help give the day some purpose.{' '}
            </p>
            <p>
                A crucial part of counselling is the therapeutic relationship,
                built on trust and over time. To ensure clients continue feeling
                supported, counselling and psychotherapy now needs to be
                accessed over the phone or online. Whilst this is in no way
                perfect and access isn’t easy for everyone, it’s one of the ways
                services have adapted over recent weeks and, as many survivors
                have told the Inquiry, it shows just how crucial the signposting
                and provision of support truly is.{' '}
            </p>
            <p>
                Surviving sexual abuse can be an isolating experience. Not many
                people can relate to what we’ve experienced, and enforced
                isolation can heighten these feelings. Whilst there is of course
                no ‘one size fits all’ way of coping with something like this,
                there are steps we can take to adapt to this temporary way of
                life; listening to and supporting each other might be a good
                place to start.{' '}
            </p>
            <p>
                Survivors of child sexual abuse who would like to share their
                experience in writing or over the phone, can find out more
                information by visiting the {truthProjectLink}.
            </p>
        </>
    ),
    comments: [],
};
