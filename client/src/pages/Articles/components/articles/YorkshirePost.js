import React from 'react';
import OuterLink from '../../../../components/links/OuterLink';
import { TRUTH_PROJECT } from '../../../../config';

const truthProjectLink = (
    <OuterLink href={TRUTH_PROJECT.urlHome} text={TRUTH_PROJECT.name} />
);

const iicsaLink = (
    <OuterLink
        href='https://www.iicsa.org.uk/investigations'
        text='Child Sexual Abuse'
    />
);

export default {
    id: 'YorkshirePost',
    cls: 'YorkshirePost',
    featured: false,
    category: 'Quoted in articles',
    title: 'Shock at the scale of youth custody abuse',
    summary: 'Children ‘left isolated’, inquiry told.',
    date: '2020-04-24',
    author: 'Grace Hammond',
    pseudoauthor: null,
    publication: 'Yorkshire Post',
    sourceUrl:
        'https://www.pressreader.com/uk/yorkshire-post/20200424/281509343331955',
    img: 'yorkshire.jpg',
    logo: 'yorkshirePostLogo.png',
    content: (
        <>
            <p>
                CRIME: People abused in youth custody described having “nowhere
                to run” to escape from their predators, in the latest research
                from the child sex abuse inquiry.
            </p>
            <p>
                Children sent to the likes of remand centres, young offender
                institutions and borstals were left isolated and therefore
                vulnerable to abusers, a report said. PEOPLE ABUSED in youth
                custody described having “nowhere to run” to escape from their
                predators, in the latest research from the child sex abuse
                inquiry. Children sent to the likes of remand centres, young
                offender institutions and borstals were left isolated and
                therefore completely vulnerable to the power of their abusers, a
                report as part of the Independent Inquiry into {iicsaLink}{' '}
                (IICSA) said.
            </p>
            <p>
                The survivors’ experiences, the majority of which occurred in
                custodial institutions before 1990, are key to ensuring children
                in custody are not left open to such “appalling” abuse again,
                principal researcher Dr Sophia King said. The report found that
                perpetrators were able to act with impunity and that sexual
                abuse occurred from the very outset of the young person’s time
                in an institution.
            </p>
            <p>
                Of the 3,701 people who shared an experience with the{' '}
                {truthProjectLink} between June 2016 and January 2020, 47 (1.3
                per cent) described child sexual abuse that occurred while they
                were in a custodial institution. such as borstals.
            </p>
            <p>
                The report also said: “They (the young people) were completely
                under the power and control of the adults charged with their
                care and entirely vulnerable to those who abused them.
            </p>
            <p className='article-subtitle'>
                “Participants described literally having nowhere to run to
                escape the abuse.” Nujoji Calvocoressi, a member of the
                inquiry’s victims and survivors consultative panel, said the
                research is an opportunity for survivors of such abuse to have
                their voices heard.
            </p>
            <p>
                “These valuable contributions and suggestions made at the Truth
                Project will support the inquiry’s final recommendations.”
            </p>
            <p>
                He said: “Survivors of child sexual abuse may feel excluded from
                society, but they are not excluded from this inquiry.”
            </p>
            <p>
                A spokeswoman for the Ministry of Justice said:“We have every
                sympathy for the victims who suffered abuse while in custody.
            </p>
            <p>
                “Over the intervening decades, custody for children and young
                people has been transformed and we have improved the safeguards
                that are in place. She added: We will continue to do all we can
                to keep the children in our care safe.”
            </p>
        </>
    ),
    comments: [],
};
