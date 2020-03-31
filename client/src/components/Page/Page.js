import React, { Component } from 'react';
import './Page.scss';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    WhatsappShareButton
} from 'react-share';
import linkedin from './../../imgs/in.png';
import fb from './../../imgs/fb.png';
import butterfly from './../../imgs/butterfly.png';
const shareUrl = 'http://www.calvocoressi.com';

let mobileMenuOpen = false;
class Page extends Component {
    render() {
        const { name } = this.props.page;
        return (
            <div className={'Page ' + name}>
                <div className='Page__top-container'>
                    <MobileMenu />
                    <Top name={name} />
                </div>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
export default Page;

const Top = props => {
    return (
        <div className='Page__top Page__bg_grey'>
            <div className='wrapper'>
                <Nav />

                <div className='Page__title'>
                    <h2 className={props.name + '__color_themed heading'}>
                        Nujoji Calvocoressi{' '}
                    </h2>
                    <h1 className='heading'>
                        {/* <span className={props.name + '__color_themed'}>
                            Nujoji Calvocoressi{' '}
                        </span>
                        <br /> */}
                        Counselling and
                        <br />
                        Psychotherapy
                    </h1>

                    <h3 className='heading'>City of London &amp; West End</h3>
                </div>
                <img src={butterfly} alt='' className='butterfly' />
            </div>
        </div>
    );
};

const Nav = props => {
    return (
        <nav className='Page__nav'>
            <div className='Page__nav_hum' onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <NavLinks />
            <div className='Page__nav_num'>
                <a href='tel:+442086759754'>0208 675 9754</a>
            </div>
            <div className='Page__nav_media'>
                <a
                    href='http://www.linkedin.com/in/calvocoressi'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src={linkedin} alt='LinkedIn Account' />
                </a>
            </div>
            <div className='Page__nav_media'>
                <a
                    href='https://www.facebook.com/calvocoressi/'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    <img src={fb} alt='Facebook Account' />
                </a>
            </div>
        </nav>
    );
};
const MobileMenu = () => {
    return (
        <div className='Page__nav_mobile'>
            <NavLinks />
        </div>
    );
};
const NavLinks = () => {
    return (
        <ul className='Page__nav_links'>
            <img
                src={require('../../imgs/menu.png')}
                alt='menu'
                className='Nav__mobile_img'
            />
            <NavLink
                to='/'
                exact
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                Home
            </NavLink>
            <NavLink
                to='/therapy'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                Therapy
            </NavLink>
            <NavLink
                to='/#about'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                About Me
            </NavLink>
            <NavLink
                to='/therapy#FAQ'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                FAQ
            </NavLink>
            <NavLink
                to='/therapy#fees'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                Fees
            </NavLink>
            <NavLink
                to='/contact'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                Location
            </NavLink>
            <NavLink
                to='/contact#form'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                Contact
            </NavLink>
            <NavLink
                to='/resources'
                activeClassName='selected'
                smooth
                onClick={toggleMobileMenu}
            >
                Resources
            </NavLink>
        </ul>
    );
};

const toggleMobileMenu = () => {
    mobileMenuOpen = !mobileMenuOpen;
    const page = document.querySelector('.Page');
    if (mobileMenuOpen) {
        page.classList.add('m_open');
    }
    if (!mobileMenuOpen) {
        page.classList.remove('m_open');
    }
};

const Footer = () => {
    return (
        <footer className='Page__bg_grey'>
            {/* <ShareBtns /> */}
            <div
                className='btn'
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                Back To Top
            </div>
            <p>
                Nujoji Calvocoressi Counselling &amp; Psychotherapy <br /> City
                of London &amp; West End &copy; {new Date().getFullYear()}
            </p>
        </footer>
    );
};

const ShareBtns = () => {
    return (
        <div className='ShareBtns'>
            <span>Share Website On:</span>
            <TwitterShareButton url={shareUrl}>
                <img
                    src={require('./../../imgs/twitter.icon.png')}
                    alt='Twitter Share Btn'
                />
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl}>
                <img
                    src={require('./../../imgs/facebook.icon.png')}
                    alt='Facebook Share Btn'
                />
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
                <img
                    src={require('./../../imgs/linkedin.icon.png')}
                    alt='Linkedin Share Btn'
                />
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl}>
                <img
                    src={require('./../../imgs/whatsapp.icon.png')}
                    alt='WhatsApp Share Btn'
                />
            </WhatsappShareButton>
        </div>
    );
};
