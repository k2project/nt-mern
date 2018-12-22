import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import './Contact.css';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

const meta = {
    title: "Directions and Contact| Nujoji Calvocoressi Counselling",
    description: 'Bookings: 07855 846 580 | Office:11-12 Tokenhouse Yard, City of London, London EC2R 7AS',
    canonical: 'http://nujojicalvocoressi.com/contact',
    meta: {
        name: {
            author:'@_k2project',
            keywords: 'Nujoji, CALVOCORESSI,COUNSELLING, Queen\'s Park Therapy,West London Therapy'
        }
    }
};
const pageDetails={
    name:'Contact',
    img:{
        imgName:'contactText.pt1.png',
        imgAlt:'Contact Page'
    }
}


class Contact extends Component {
    handleSubmit = async e => {
       e.preventDefault();
        await fetch('/mail/send', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             name: 'Kris K.',
             mail: 'kopczkrzy@gmail.com',
             mobile: '0123456789',
          }),
       });

     };
    render() {
        return (
            <DocumentMeta {...meta}>
                <Page page={pageDetails}>
                    <Office/>
                    <Directions/>
                </Page>
            </DocumentMeta>
        );
    }
}
export default Contact;

const Office=()=>{
    return (
        <section  className="Office">
            <div className="Office__bg_img">
                <div className="cover">
                    <SectionTitle data={{divider:'',subtitle:'City Of London ',title:'EC2R 7AS'}}/>
                </div>
            </div>
                <div className="section__bg_grey">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'themed',subtitle:'About My Office',title:'A private and confidential setting'}}/>
                        <p><b>11-12 Tokenhouse Yard<br/>City of London<br/>London <br/>EC2R 7AS</b></p>
                        <p><b>Opening Hours.</b> I see clients Monday to Friday throughout the year except public holidays. Appointments are available from 8am – 8pm.</p>
                        <p><i>I also see clients in West London at 19 Nassau Street, Fitzrovia, London, W1W 7AF a few minutes walk from Tottenham Court Road London Underground (Northern &amp; Central lines) and Overground Station.</i></p>
                    </div>
                </div>

        </section>

    )
}
const Directions=()=>{
    return (
        <section  className="Directions">
                <div className="Contact__bg_themed Directions__bg_lnd">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'white',subtitle:'Directions',title:'Getting there'}}/>
                        <p><b>City of London office.</b> Tokenhouse Yard is a four-minute walk from Bank Tube Station and is situated just behind the Bank of England off Lothbury.</p>
                        <div className="Nt4__text_center">
                            <img src={require('./../../imgs/stations.png')} alt='Nujoji' className="Directions__img"/>
                        </div>
                        <p>
                            <small>
                                <b>Bank Tube Station:</b>Waterloo and City, DLR, Northern, Central Line.<br/>
                                <b>Moorgate Tube Station:</b>Northern, Hammersmith and City, Circle, Metropolitan lines.<br/>
                                <b>Buses:</b> 21, 43, 76, 141.<br/>
                                Pay and display parking on Old Jewry and Coleman Street. Secure bike racks available. Taxi Rank Queen Victoria Street.<br/>
                            </small>

                        </p>
                    </div>
                </div>
                <div className="Directions__bg_map">
                    <div className="cover">
                        <a href="https://www.google.com/maps/dir//Tokenhouse+Yard,+London+EC2R+7AS/@51.5153851,-0.0907049,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x48761cab515b7a57:0xa9652d3756affe10!2m2!1d-0.0885162!2d51.5153851!3e3"  target="_blank" rel="noopener noreferrer" className="btn">Get the directions</a>
                    </div>
                </div>
        </section>

    )
}
