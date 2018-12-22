import React, { Component } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';

import './Page.css';

class Page extends Component {
    // constructor(props){
    //    super(props);
    // }
    render() {
        const {name,img}=this.props.page;
        return (
            <div className={"Page "+name}>
                <Top name={name} img={img}/>
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
            <img src={require('../../imgs/'+imgName+'')} alt={imgAlt} className="Page__top_img"/>
            <div className="wrapper">
                <Nav/>
                <h2 className="Page__subtitle">Queen's Park &amp; West London</h2>
                <h1 className="Page__title">Nujoji Calvocoressi <br/><span className={props.name+"__color_themed"}>Counselling</span></h1>
            </div>
        </div>
    )
}

const Nav=()=>{
    return(
        <nav className="Page__nav">
        
            <ul>
                <NavLink to="/" exact activeClassName="selected" smooth>Home</NavLink>
                <NavLink to="/#about" activeClassName="selected" smooth>About</NavLink>
                <NavLink to="/therapy" activeClassName="selected" smooth>Therapy</NavLink>
                <NavLink to="/therapy#faqs" activeClassName="selected" smooth>FAQ</NavLink>
                <NavLink to="/therapy#fees" activeClassName="selected" smooth>Fees</NavLink>
                <NavLink to="/contact" activeClassName="selected" smooth>Office</NavLink>
                <NavLink to="/contact#form" activeClassName="selected" smooth>Contact</NavLink>
            </ul>
            <div className="Page__nav_num">Enquiries: 07855 846 580</div>
        </nav>
    )
}
