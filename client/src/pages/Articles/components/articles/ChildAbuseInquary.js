import React from 'react';
import OuterLink from '../../../../components/links/OuterLink';

const iicsaLink = (
    <OuterLink
        href='https://www.iicsa.org.uk/investigations'
        text='Child Sexual Abuse'
    />
);

export default {
    id: 'ChildAbuseInquary',
    cls: 'ChildAbuseInquary',
    featured: false,
    title:
        'Child sex abuse inquiry opens Monday to test how Tower Hamlets and 5 other authorities cope',
    summary: '',
    date: '2020-09-17',
    author: 'Mike Brooke',
    publication: 'East London Advertiser',
    sourceUrl:
        'https://www.eastlondonadvertiser.co.uk/news/local-council/child-sex-abuse-inquiry-preview-3672056',
    img: 'elAdvertiserBg.jpg',
    logo: 'elAdvertiserLogo.png',
    content: (
        <>
            <p>
                A public investigation into child sexual exploitation by
                organised networks in east London and elsewhere is being held to
                deal with the “urgent problem of grooming and sexual abuse”.
            </p>
            <p>
                Hearings are being held by the Independent Inquiry into Child
                Sexual Abuse looking into how local authorities like Tower
                Hamlets respond which open from Monday, September 21, and run
                for two weeks till October 2.
            </p>
            <p>
                They are analysing the current extent of abuse as well as
                institutional responses, selecting Tower Hamlets and five other
                local authority areas to be examined in the Midlands, West
                Country, Lancashire, Yorkshire and the North East.
            </p>
            <p>
                Evidence is being heard from victims and survivors of child
                sexual exploitation and representatives of the Met and other
                police forces, local authorities, government departments and
                charities.
            </p>
            <p className='article-subtitle'>
                “It’s clear that grooming and sexual abuse of children is an
                urgent problem across the country,” Victims and Survivors
                Consultative panel member Nujoji Calvocoressi said.
            </p>
            <p>
                “This hugely important investigation will examine the current
                strategies in places like Tower Hamlets to prevent this type of
                child sexual exploitation and see what more can be done in
                future.”
            </p>
            <p>
                The investigation focuses on the six separate local authority
                areas of Tower Hamlets, St Helens in Lancashire, Swansea in
                South Wales, Durham in the North East, Bristol in the West and
                Warwickshire in the Midlands, chosen because they represent a
                range of sizes, demographics and institutional practices.
            </p>
            <p>
                The hearings assess the extent to which safeguarding services
                like Tower Hamlets and others have learned lessons from recent
                high profile cases such as Oxford, Rotherham and Rochdale.
            </p>
            <p>
                The hearings are online from 10.30am to 4.15pm each day,
                streamed live on the independent inquiry’s {iicsaLink} website,
                with transcripts available a few hours after.
            </p>
        </>
    ),
    comments: [],
};
