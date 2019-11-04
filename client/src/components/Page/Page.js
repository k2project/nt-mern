import React, { Component } from 'react';
import './Page.css';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share';
const shareUrl="http://www.calvocoressi.com";


let mobileMenuOpen=false;
class Page extends Component {
    // constructor(props){
    //    super(props);
    // }
    render() {
        const {name,img}=this.props.page;
        return (
            <div className={"Page "+name}>
                <div className="Page__top-container">
                    <MobileMenu/>
                    <Top name={name} img={img}/>
                </div>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}
export default Page;

const Top=(props)=>{
    const {imgName, imgAlt}=props.img;
    return (
        <div className="Page__top Page__bg_grey">
            <img src={require('../../imgs/'+imgName+'')} alt={imgAlt} className="Page__top_img part1"/>
            <div className="wrapper">
                <Nav/>
                <h3 className="Page__subtitle">City of London / West End</h3>
                <h2 className="Page__title_prof">
                    <span> <b>Counselling & Psychotherapy</b></span><br/>
                    <span className={props.name+"__color_themed Page__title_pt2"}>
                    </span>
                </h2>
                <h1 className={props.name+"__color_themed Page__title_name"}>Nujoji Calvocoressi
                    <span> MA, Pg.Dip, MBACP, UKCP(Reg), IAFP</span>
                </h1>
            </div>
        </div>
    )
}

const Nav=(props)=>{
    return(
        <nav className="Page__nav">
            <div className="Page__nav_hum" onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <NavLinks/>
            <div className="Page__nav_num"><a href="tel:+442086759754">Enquiries: 0208 675 9754</a></div>
        </nav>
    )
}
const MobileMenu=()=>{
    return(
        <div className="Page__nav_mobile">
            <NavLinks/>
        </div>
    )
}
const NavLinks=()=>{
    return(
        <ul>
            <img src={require('../../imgs/menu.png')} alt='menu' className="Nav__mobile_img"/>
            <NavLink to="/" exact activeClassName="selected" smooth onClick={toggleMobileMenu}>Home</NavLink>
            <NavLink to="/#about" activeClassName="selected" smooth onClick={toggleMobileMenu}>About Me</NavLink>
            <NavLink to="/therapy" activeClassName="selected" smooth onClick={toggleMobileMenu}>Therapy</NavLink>
            <NavLink to="/therapy#faqs" activeClassName="selected" smooth onClick={toggleMobileMenu}>FAQs</NavLink>
            <NavLink to="/therapy#fees" activeClassName="selected" smooth onClick={toggleMobileMenu}>Fees</NavLink>
            <NavLink to="/contact" activeClassName="selected" smooth onClick={toggleMobileMenu}>Location</NavLink>
            <NavLink to="/contact#form" activeClassName="selected" smooth onClick={toggleMobileMenu}>Contact</NavLink>
        </ul>
    )
}

const toggleMobileMenu=()=>{
    mobileMenuOpen=!mobileMenuOpen;
    const page = document.querySelector('.Page');
    if(mobileMenuOpen){
        page.classList.add('m_open');
    }
    if(!mobileMenuOpen){
        page.classList.remove('m_open');
    }
}

const Footer=()=>{
    return(
        <footer className="Page__bg_grey">
            <ShareBtns />
            <div className="btn" onClick={()=>window.scrollTo({ top: 0, behavior: 'smooth' })}>Back To Top</div>
            <p>Nujoji Calvocoressi Counselling & Psychotherapy <br/> City of London & West End &copy; {new Date().getFullYear()}</p>
        </footer>

    )
}

const ShareBtns=()=>{
    return(
        <div className="ShareBtns">
            <span>Share Website On:</span>
            <TwitterShareButton url={shareUrl}>
                <img src={require('./../../imgs/twitter.icon.png')} alt="Twitter Share Btn"/>
            </TwitterShareButton>
            <FacebookShareButton url={shareUrl}>
                <img src={require('./../../imgs/facebook.icon.png')} alt="Facebook Share Btn"/>
            </FacebookShareButton>
            <LinkedinShareButton url={shareUrl}>
                <img src={require('./../../imgs/linkedin.icon.png')} alt="Linkedin Share Btn"/>
            </LinkedinShareButton>
            <WhatsappShareButton url={shareUrl}>
                <img src={require('./../../imgs/whatsapp.icon.png')} alt="WhatsApp Share Btn"/>
            </WhatsappShareButton>

        </div>
    )
}
