import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { NavHashLink as Link } from 'react-router-hash-link';

import './Home.css';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

const meta = {
    title: "Nujoji Calvocoressi Counselling | City of London & West London Therapy",
    description: 'Welcome to my counselling practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives... I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://nujojicalvocoressi.com/',
    meta: {
        name: {
            author:'@_k2project',
            keywords: 'Nujoji, CALVOCORESSI,COUNSELLING, Queen\'s Park Therapy,West London Therapy'
        }
    }
};
const pageDetails={
    name:'Home',
    img:{
        imgName:'homeText.pt1.png',
        imgAlt:'Nujoji Calvocoressi'
    }
}

class Home extends Component {
  render() {
    return (
        <DocumentMeta {...meta}>
            <Page page={pageDetails}>
                 <Welcome/>
                 <About/>
                 <Nujoji/>
            </Page>
        </DocumentMeta>
    );
  }
}
export default Home;

const Welcome=()=>{
    return (
        <section  className="Welcome">
                <div className="Home__bg_themed Home__bg_hello">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'',subtitle:'Welcome',title:'Change happens when you allow yourself to look at life in a new way'}}/>
                    </div>
                </div>
                <div>
                    <div className="section__wrapper">
                        <p><b> It is not uncommon to feel lost or confused from time to time, or to experience symptoms, unhelpful behaviours or a lack of confidence. These are things that we can all experience.</b></p>
                        <p> Therapy is about creating a safe and non-judgemental space where you can reflect, explore and understand the difficulties in your life.</p>
                        {/* <p>However you can always break the cycle of anger, anxiety, addiction, distrust and    unhealthy behaviour if you want. It all starts with you... Make a choice today!</p> */}
                        <Link to='/contact#form' className="btn" smooth>Get in touch</Link>
                    </div>

                </div>
        </section>

    )
}
const About=()=>{
    return (
        <section  className="About" id="about">
                <div className="section__bg_grey">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'themed',subtitle:'About Me',title:'When was the last time you felt understood?'}}/>
                        {/* <p>It's taugh to find someone you can truly connect with. Yet, in our fast-paced lives, the connection is more important than ever.</p> */}

                        <p>My dedication and expertise provide a safe space for you to be heard and understood with no judgement.</p>
                        <Link to='/therapy#integrative-therapy' className="btn" smooth>More About Therapy</Link>
                    </div>
                </div>
                <div className="About__bg_therapist">
                    <div className="cover">
                        {/* <SectionTitle data={{divider:'',subtitle:'',title:'My name is Nujoji'}}/> */}
                    </div>
                </div>
        </section>

    )
}
const Nujoji=()=>{
    return (
        <section  className="Nujoji">
            <div className="Home__bg_themed Page__bg_blue">
                <div className="section__wrapper">
                    <SectionTitle data={{divider:'white',subtitle:'Qualified, Registered & Insured',title:'Two people sitting down together'}}/>
                    <p><b>I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives.</b></p>
                    <p>I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. By combining elements drawn from different schools of psychological theory and research, integrative therapy becomes a flexible and inclusive approach to understanding. Each person needs to be considered as an individual person and counselling techniques must be tailored to their individual needs and personal circumstances.</p>
                </div>
            </div>
            <div>
                <img src={require('./../../imgs/homeText.pt2.png')} alt='Nujoji Calvocoressi' className="Page__top_img part2"/>
                <div className="section__wrapper">
                    <p> I have trained for four years at The Minster Centre in London, I obtained a Graduate Diploma in Counselling.</p>
                    <p>I have experience working one to one with a diverse variety of individual clients as well as working within a student wellbeing service in a higher education setting. I also work with people who live in secure settings.</p>
                    <p>I am a member of the British Association of Counsellors and Psychotherapists (BACP) and adhere to their Ethical Principles and Code of Professional Conduct. I am also trainee member of the United Kingdom Council for Psychotherapy (UKCP). I hold an enhanced certificate from the Disclosure and Barring Service.</p>
                    <p className="text_cntr">

                        <a href="https://www.bacp.co.uk/profile/8fb9f46e-e25c-e811-8108-3863bb351d40/therapist?location=City%20of%20London" target="_blank" rel="noopener noreferrer" ><img className="Nujoji__pb_links" src={require('./../../imgs/psa.PNG')} alt='bacp logo'/></a>
                        <a href="https://www.psychotherapy.org.uk/" target="_blank" rel="noopener noreferrer" ><img className="Nujoji__pb_links" src={require('./../../imgs/ukcp.png')} alt='ukcp logo' rel="noopener noreferrer" /></a>
                        <a href="https://www.gov.uk/government/organisations/disclosure-and-barring-service/" target="_blank" rel="noopener noreferrer"><img className="Nujoji__pb_links" src={require('./../../imgs/dbs.png')} alt='/disclosure and barring service logo' /></a>
                        <a href="https://forensicpsychotherapy.com/" target="_blank" rel="noopener noreferrer" alt="forensic psychotherapy logo"><img className="Nujoji__pb_links" src={require('./../../imgs/iafp.JPG')} alt=''/></a>

                    </p>

                </div>

            </div>
        </section>

    )
}
