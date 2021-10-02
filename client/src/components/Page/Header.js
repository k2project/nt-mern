import React from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import NavLinks from './NavLinks';
import Nav from './Nav';
import logo from './../../imgs/logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mobileMenuOpen: false };
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    }

    toggleMobileMenu() {
        const page = document.querySelector('.Page');
        if (!this.state.mobileMenuOpen) {
            page.classList.add('menu-open');
            this.setState({ mobileMenuOpen: true });
            document.querySelector('.NavLinks__link').focus();
            document.querySelector('.NavLinks__link').style.outline = 'none';
        }
        if (this.state.mobileMenuOpen) {
            page.classList.remove('menu-open');
            this.setState({ mobileMenuOpen: false });
        }
    }
    render() {
        return (
            <header
                className={
                    this.props.newHeader
                        ? 'Page__header newHeader'
                        : 'Page__header'
                }
            >
                <div className='Nav-mob'>
                    <NavLinks toggleMobileMenu={this.toggleMobileMenu} />
                </div>
                <div className='Nav-desktop'>
                    <div className='wrapper'>
                        <Nav
                            toggleMobileMenu={this.toggleMobileMenu}
                            mobileMenuOpen={this.state.mobileMenuOpen}
                        />
                        {this.props.newHeader ? (
                            <div>
                                <h1 className='newHeader-title'>
                                    Nujoji <br />
                                    Calvocoressi <br /> Psychotherapy
                                </h1>
                            </div>
                        ) : (
                            <div className='Page__title'>
                                {this.props.headerContent ? (
                                    this.props.headerContent
                                ) : (
                                    <>
                                        <NavLink to='/' exact>
                                            <h1 className='sr-only'>
                                                Nujoji Calvocoressi
                                                Psychotherapy and Counselling
                                            </h1>
                                            <img
                                                src={logo}
                                                alt=''
                                                className='logo'
                                            />
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;
