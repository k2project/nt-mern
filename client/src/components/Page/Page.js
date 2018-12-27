import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Page.css';
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
                <h2 className="Page__subtitle">Queen's Park &amp; West London</h2>
                <h1 className="Page__title">Nujoji Calvocoressi <br/><span className={props.name+"__color_themed"}>Counselling</span></h1>
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
            <div className="Page__nav_num">Enquiries: 07855 846 580</div>
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
            <NavLink to="/#about" activeClassName="selected" smooth onClick={toggleMobileMenu}>About</NavLink>
            <NavLink to="/therapy" activeClassName="selected" smooth onClick={toggleMobileMenu}>Therapy</NavLink>
            <NavLink to="/therapy#faqs" activeClassName="selected" smooth onClick={toggleMobileMenu}>FAQ</NavLink>
            <NavLink to="/therapy#fees" activeClassName="selected" smooth onClick={toggleMobileMenu}>Fees</NavLink>
            <NavLink to="/contact" activeClassName="selected" smooth onClick={toggleMobileMenu}>Office</NavLink>
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
console.log(document.documentElement.clientWidth)
