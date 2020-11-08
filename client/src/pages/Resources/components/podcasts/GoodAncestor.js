import React from 'react';
import SectionTitle from '../../../../components/SectionTitle';
import goodAncestor from '../../../../imgs/goodAncestor.jpg';

const link= 'https://podcasts.apple.com/gb/podcast/good-ancestor-podcast/id1451091236'

function GoodAncestor(props) {
    return (
        <section className='podcasts'>
            <div className='resources__title'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: 'by Layla F. Saad',
                            title: <span>Good <b>Ancestor</b> Podcast </span>,
                        }}
                    >
                        <a
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <img
                                src={goodAncestor}
                                alt='Good Ancestor Podcast'
                                className='resources__img resources__img--no-shadow'
                            />
                        </a>
                    </SectionTitle>
                </div>
            </div>

            <div className='Resources__bg_themed'>
                
                <div className='section__wrapper'>
                    <p>
                        Anti-racism educator Layla F. Saad is the author of ground-breaking Me and White Supremacy which went on to appear on six bestseller lists. Her podcast features one in-depth interview per episode with ‘change-makers & culture-shapers’. Race, identity, leadership, personal transformation and social change are all explored. 
                    </p>
                    <a
                        href={link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn'
                    >
                        Listen now
                    </a>
                </div>
            </div>
        </section>
    );
}

export default GoodAncestor;
