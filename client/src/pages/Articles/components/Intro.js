import React from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import SectionTitle from '../../../components/SectionTitle';

export const Intro = () => {
    return (
        <section className='Intro'>
            <div className='Articles__bg_themed'>
                <div className='section__wrapper'>
                    <SectionTitle
                        data={{
                            divider: '',
                            subtitle: '',
                            title: (
                                <span>
                                    Writing about my <b> work </b>
                                    and <b> experience</b>...
                                </span>
                            ),
                        }}
                    />
                    <Link to='/#about'>
                        <button className='btn'>More About Author</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className='section__wrapper'>
                    <p>
                        The below selection is... lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
        </section>
    );
};
