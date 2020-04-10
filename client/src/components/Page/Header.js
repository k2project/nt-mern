import React from 'react';
import NavLinks from './NavLinks';
import Nav from './Nav';
import butterfly from './../../imgs/butterfly.png';

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
            <header className='Page__header'>
                <div className='Nav-mob'>
                    <NavLinks toggleMobileMenu={this.toggleMobileMenu} />
                </div>
                <div className='Nav-desktop'>
                    <div className='wrapper'>
                        <Nav
                            toggleMobileMenu={this.toggleMobileMenu}
                            mobileMenuOpen={this.state.mobileMenuOpen}
                        />
                        <div className='Page__title'>
                            <h1>
                                <span
                                    className={
                                        this.props.page + '__color_themed'
                                    }
                                >
                                    {' '}
                                    Nujoji Calvocoressi
                                </span>
                                Counselling and
                                <br />
                                Psychotherapy
                            </h1>
                            <h2>City of London &amp; West End</h2>
                        </div>
                        <img
                            src={butterfly}
                            alt=''
                            className='Page__header-img'
                        />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;