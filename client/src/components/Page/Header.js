import React from 'react';
import NavLinks from './NavLinks';
import Nav from './Nav';
import butterfly from './../../imgs/butterfly.png';

let mobileMenuOpen = false;
export default function Header({ page }) {
    const toggleMobileMenu = () => {
        mobileMenuOpen = !mobileMenuOpen;
        const page = document.querySelector('.Page');
        if (mobileMenuOpen) {
            page.classList.add('menu-open');
        }
        if (!mobileMenuOpen) {
            page.classList.remove('menu-open');
        }
    };
    return (
        <header className='Page__header'>
            <div className='Nav-mob'>
                <NavLinks toggleMobileMenu={toggleMobileMenu} />
            </div>
            <div className='Nav-desktop'>
                <div className='wrapper'>
                    <Nav toggleMobileMenu={toggleMobileMenu} />
                    <div className='Page__title'>
                        <h1>
                            <span className={page + '__color_themed'}>
                                {' '}
                                Nujoji Calvocoressi
                            </span>
                            Counselling and
                            <br />
                            Psychotherapy
                        </h1>
                        <h2>City of London &amp; West End</h2>
                    </div>
                    <img src={butterfly} alt='' className='Page__header-img' />
                </div>
            </div>
        </header>
    );
}
