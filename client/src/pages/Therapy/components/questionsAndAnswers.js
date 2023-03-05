import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import OuterLink from '../../../components/links/OuterLink';
import { Bullet } from '../../../components/Bullet';
import { BACP } from '../../../config';

const therapiesTypesLinkPsychodynamic = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='psychodynamic' />
);
const therapiesTypesLinkPsychodynamicAttachmentTheory = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='attachment theory' />
);
const therapiesTypesLinkPsychodynamicRelationalConcepts = (
    <OuterLink href={BACP.therapiesTypesLinkUrl} text='relational concepts' />
);

const bullet = <Bullet type='circle' />;

export const questionsAndAnswers = [
    {
        q: 'How can psychotherapy help?',
        a: (
            <Fragment>
                <p>
                    It often surprises people that{' '}
                    <a
                        href='https://www.youtube.com/watch?v=OxuZiqY5ypU'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='link'
                    >
                        psychotherapy{' '}
                    </a>
                    isn’t about giving advice or telling people what to do.
                    Instead, it is about creating a <b>safer</b>, <b>calmer</b>,{' '}
                    and
                    <b> non-judgemental space</b> where you can reflect, explore
                    and understand the difficulties in your life.
                </p>
                <p>
                    Psychotherapy can bring new levels of
                    <b> awareness</b> that make life feel easier to manage,
                    opening up the possibility of more choice and ways to be in
                    the world. There is strong evidence-based research that
                    psychotherapy can be helpful.
                </p>
                <p>
                    In my experience, psychotherapy is a collaborative process
                    that works best if you engage with it over a period of time.
                    There are many ways in which I believe psychotherapy helps;
                    one example is that being able to <b>talk things through</b>{' '}
                    with a well-trained professional, someone other than your
                    friends or family, can bring a sense of relief. We often{' '}
                    <b>hide our feelings</b> from those closest to us because of
                    our feelings of shame, fear of judgement and a wish not to
                    burden others.
                </p>
            </Fragment>
        ),
    },
    {
        q: 'What type of therapy do you offer?',
        a: (
            <Fragment>
                <p>
                    I hold the view that each person is an individual and
                    psychotherapy techniques are tailored to their{' '}
                    <b>individual needs</b> and personal circumstances.
                </p>
                <p>
                    I have trained as an{' '}
                    <a
                        href='https://www.psychotherapy.org.uk/about-ukcp/how-we-are-structured/ukcp-colleges/humanistic-and-integrative-psychotherapy-college/'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='link'
                    >
                        <b>integrative</b> counsellor and psychotherapist
                    </a>
                    . This is a combined approach that brings together different
                    strands of specific therapeutic modalities. Integrative
                    therapists do not adopt a one-size-fits-all approach to
                    therapy.
                </p>
                <p>
                    I also believe that adverse childhood experiences impact how
                    we feel about ourselves today and may influence how we
                    relate to others and how we live in the present moment. I
                    incorporate {therapiesTypesLinkPsychodynamic} and{' '}
                    {therapiesTypesLinkPsychodynamicAttachmentTheory} into my
                    work with clients, as well as{' '}
                    {therapiesTypesLinkPsychodynamicRelationalConcepts} which
                    place an importance on the therapeutic relationship.
                </p>
            </Fragment>
        ),
    },
    {
        hash: '#online',
        q: 'How does online therapy work? ',
        a: (
            <>
                <p>
                    This information should help provide you with some{' '}
                    <b>practical information</b> to understand what to expect
                    with <b>online therapy</b> sessions and provide some tips to
                    make sure the process runs as smoothly as possible.
                </p>
                <p>
                    Many psychotherapists have now moved over to a remote based
                    therapy provision.
                </p>
                <p>
                    Importantly, <b>online psychotherapy is psychotherapy</b>,
                    and I know how <b>powerful</b> and <b>transformational</b>{' '}
                    this approach has been for clients.
                </p>
                <p>
                    Working online <b>can remove barriers</b> to therapy. It
                    enables me to offer therapy to those who could not otherwise
                    access it.
                </p>
                <p>
                    People who live far from a therapist, people who have
                    difficulties leaving home, or people who find meeting people
                    face-to-face so anxiety provoking that they can’t get to a
                    clinic can now benefit from therapy.
                </p>
                <p>
                    I use Zoom as it is free, straightforward, and encrypted.
                    Some clients are worried about security. The reality is that
                    nothing online can be guaranteed to be 100% secure.
                </p>
                <p>
                    All we can do is enable as much security as we can, and I
                    will configure my settings to maximize this.
                </p>
                <p className='bullet-list'>
                    <span className='bullet-list-banner'>
                        <b id='tips'>
                            For the best experience, please ensure that:
                        </b>
                    </span>
                    <ul aria-labelledby='tips'>
                        <li>
                            {bullet}
                            You have your computer or device set up with Zoom
                            before the session commences. This includes having
                            your <b>microphone and video turned on</b>.
                        </li>
                        <li>
                            {bullet}
                            Your computer or device is positioned at a sensible
                            height so that I can{' '}
                            <b>clearly see your head and shoulders</b> and that
                            the camera is at eye level.
                        </li>
                        <li>
                            {bullet}
                            You make sure that you are in a{' '}
                            <b>quiet location</b>. It is easy to hear background
                            noises such as pets, washing machines and
                            televisions etc.
                        </li>
                        <li>
                            {bullet}
                            You will not be disturbed for the duration of the
                            session and that the door to the room you are
                            sitting in is closed.
                        </li>
                        <li>
                            {bullet}
                            If you are using your computer, that you have your
                            other devices out of reach and with the sound muted
                            so that it is not a distraction.
                        </li>
                        <li>
                            {bullet}
                            You do not have your back to a window or bright
                            light – this can make it harder for me to see you
                            clearly.
                        </li>
                        <li>
                            {bullet}
                            That there is <b>adequate lighting</b> in the room
                            you are in.
                        </li>
                        <li>
                            {bullet}You join the session at the agreed time.
                        </li>
                        <li>
                            {bullet}
                            You <b>
                                close other internet using programmes
                            </b>{' '}
                            e.g., online gaming and music and video streaming
                            services.
                        </li>
                    </ul>
                </p>
            </>
        ),
    },
    {
        q: 'Will I be accepted for who I am?',
        a: (
            <>
                <p>
                    Some people struggle to obtain <b>effective therapy</b> or
                    with therapy altogether, due to past experiences that felt
                    oppressive. Sometimes people feel they were not viewed
                    positively or that incorrect assumptions were made about
                    them.
                </p>
                <p>
                    In my practice I attempt to work in a way that appreciates,
                    affirms, and values <b>individual identities</b>,
                    backgrounds, sameness and <b>difference</b>. My intention is
                    to be an anti-oppressive, inclusive therapist and to develop
                    an understanding of your unique experience.
                </p>
            </>
        ),
        hash: '#inclusive-therapy',
    },
    {
        q: 'Are my problems big enough?',
        a: (
            <p>
                There is <b>no scale of importance</b>. You don't have to be in
                crisis to make use of therapy. The most important thing is
                curiosity, a will and desire for <b>personal growth</b>. Simply
                wanting more fulfilment, <b>improved mental wellbeing</b> and a
                clearer understanding and vitality for life is reason enough for
                committing to therapy.
            </p>
        ),
    },

    {
        q: 'How does psychotherapy work?',
        a: (
            <Fragment>
                <p>
                    There are many different{' '}
                    <a
                        href='https://www.bacp.co.uk/about-therapy/types-of-therapy/'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='link'
                    >
                        therapeutic approaches{' '}
                    </a>{' '}
                    available and it can be confusing to decide which one is
                    best suited for you. Time after time the research shows that
                    the quality of the <b>therapeutic relationship</b> is more
                    important than the therapeutic modality used. Whatever the
                    approach, the focus remains the same – your best interests
                    and facilitating <b>positive change</b>.
                </p>
                <p>
                    The <b>first session</b> is an opportunity for us to meet
                    and for me to find out a little bit more about you and your
                    difficulties. We will discuss what you would like to{' '}
                    <b>achieve</b> from psychotherapy and you will have the
                    opportunity to ask me <b>as many questions</b> as you need
                    to feel more comfortable.
                </p>
                <p>
                    After the first session, I will invite you to take some time
                    to think about whether I am <b>the right therapist</b> for
                    you. I completely understand if you would prefer to work
                    with another therapist or if you decide that the time is not
                    quite right. The decision to start psychotherapy can be a
                    difficult one and therapy works best{' '}
                    <b>when you feel ready</b>.
                </p>
            </Fragment>
        ),
    },
    {
        q: 'Will what I say be confidential?',
        a: (
            <Fragment>
                <p>
                    Yes, psychotherapy sessions are{' '}
                    <a
                        href='https://www.psychotherapy.org.uk/seeking-therapy/therapy-ethics-what-to-expect/'
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={(e) => e.stopPropagation()}
                        className='link'
                    >
                        strictly confidential
                    </a>
                    . The only exception to this is if you tell me something
                    that suggests your safety or the safety of others is in
                    danger. In this case I would discuss my concerns with you
                    and any other professionals that I might need to contact. I
                    would hope to do this, wherever possible,{' '}
                    <b>with your agreement</b>. You can read my privacy notice{' '}
                    <Link
                        to='/privacy-notice'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='link'
                    >
                        here
                    </Link>
                    .
                </p>
            </Fragment>
        ),
    },
    {
        q: 'How long do sessions last?',
        a: (
            <p>
                Sessions are <b>50 minutes</b> long.
            </p>
        ),
    },
    {
        q: 'Do you charge for missed sessions?',
        a: (
            <p>
                Yes. I will try to offer an alternative session time when
                possible. The alternative time may be an <b>online session</b>.
            </p>
        ),
    },
    {
        q: 'How many sessions will I need?',
        a: (
            <Fragment>
                <p>
                    In my experience the <b>length of time varies</b>{' '}
                    varies considerably depending on the nature of your
                    difficulties and what you hope to get out of psychotherapy.
                    For some, a small number of sessions may be sufficient,
                    however a period of a year or more would be more beneficial
                    to deal with long lasting difficulties.
                </p>
                <p>
                    Some people may benefit from psychotherapy{' '}
                    <b>twice a week</b>. If you feel that you might, we can
                    discuss this. Many people prefer to work in an{' '}
                    <b>open-ended</b> way and to continue for as long as it
                    feels useful or helpful. Others prefer to agree to a{' '}
                    <b>fixed number</b> of weeks and see how they get on with
                    that.
                </p>
            </Fragment>
        ),
    },
    {
        q: 'Can I end the therapy at any point?',
        a: (
            <>
                <p>
                    The decision to end the therapy will always be yours. I do
                    recommend against ending the therapy too abruptly. It is
                    important to allow some time to navigate the ending of our
                    work together.
                </p>
                <p>
                    For short term work please allow <b>three weeks notice</b>.
                    For longer term work (over one year){' '}
                    <b>three months notice</b> is advisable.
                </p>
            </>
        ),
    },
    {
        q: 'Can I have an evening appointment?',
        a: (
            <p>
                I work in the <b>evenings</b>. I do not work Saturdays, Sundays,
                or public holidays.
            </p>
        ),
    },
    {
        q: 'Are you available at the weekend or during holidays?',
        a: <p>I do not work Saturdays, Sundays or public holidays.</p>,
    },
    {
        q: 'Do you offer psychotherapy clinical supervision?',
        a: (
            <p>
                Yes, I hold a diploma in supervision obtained at the Institute
                of Group Analysis. I offer online supervision to individuals and
                groups. I have experience supervising psychotherapists, people
                working with a therapeutic intention, and emergency service
                workers.
            </p>
        ),
    },
    {
        q: "What if the time slot isn't convenient for both of us? ",
        a: (
            <p>
                I am in contact with several other well qualified therapists in
                London who might provide a suitable alternative.
            </p>
        ),
    },
];
