import React from 'react';
import OuterLink from '../../../../components/links/OuterLink';
import { TRUTH_PROJECT, IICSA } from '../../../../config';

const truthProjectLink = (
    <OuterLink href={TRUTH_PROJECT.urlHome} text={TRUTH_PROJECT.name} />
);

const iicsaLink = <OuterLink href={IICSA.urlHome} text={IICSA.name} />;

export default {
    id: 'WillisPalmersOrganisedNetwork',
    cls: 'WillisPalmersOrganisedNetwork',
    featured: false,
    category: 'Quoted in articles',
    title: 'Inquiry into Child Sexual Abuse examines CSE by organised networks',
    summary:
        'A public hearing into child sexual exploitation by organised networks has been held by the Independent Inquiry into Child Sexual Abuse.',
    date: '2021-07-18',
    author: 'Willis Palmer',
    pseudoauthor: null,
    publication: 'Willis Palmer website',
    sourceUrl:
        'https://www.willispalmer.com/inquiry-into-child-sexual-abuse-examines-cse-by-organised-networks/',
    img: 'willispalmerBg-min.png',
    logo: 'willispalmerLogo-min.png',
    content: (
        <>
            <p>
                A public hearing into child sexual exploitation by organised
                networks has been held by the {iicsaLink}.
            </p>

            <p>
                The hearing, held between 21 September and 2 October, examined
                the extent of child sexual exploitation by organised networks in
                England and Wales as well as institutional responses.
            </p>

            <p>
                The inquiry also wanted to establish whether authorities had
                learned lessons from high profile cases of child sexual
                exploitation by organised networks in places such as Rotherham,
                Oxford and Rochdale.
            </p>

            <p>
                Six separate areas within England and Wales - St Helens, Tower
                Hamlets, Swansea, Durham, Bristol and Warwickshire - were the
                focus of the investigation as these regions represent a range of
                sizes, demographics and institutional practices.
            </p>

            <p className='article-subtitle'>
                Nujoji Calvocoressi, a member of the Inquiry’s Victims and
                Survivors Consultative Panel, said: “It is clear that the
                grooming and sexual abuse of children by groups of offenders is
                an urgent problem across England and Wales.
            </p>

            <p className='article-subtitle'>
                “This hugely important investigation will examine the current
                strategies in place to prevent this type of child sexual
                exploitation and see what more can be done about it in future.”
            </p>

            <p>
                Evidence was heard from victims and survivors of child sexual
                exploitation and representatives of police forces, local
                authorities, government departments and charities.
            </p>
        </>
    ),
    comments: [],
};
