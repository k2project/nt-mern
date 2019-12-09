import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { NavHashLink as Link } from 'react-router-hash-link';

import './Home.css';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

const meta = {
    title: "Nujoji Calvocoressi Counselling & Psychotherapy | City of London & West End Therapy",
    description: 'Welcome to my counselling and psychotherapy practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives. I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://www.calvocoressi.com/',
    meta: {
        name: {
            author:'@_k2project',
            keywords: 'Nujoji Calvocoressi, counselling, psychotherapy therapy, London'
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
                        <Link to='/contact#form' className="btn" smooth>Get In Touch</Link>
                    </div>

                </div>
        </section>

    )
}
const About=()=>{
    return (
        <section  className="About" id="about">
                <div className="Page__bg_grey">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'themed',subtitle:'About Me',title:'When was the last time you felt understood?'}}/>
                        {/* <p>It's taugh to find someone you can truly connect with. Yet, in our fast-paced lives, the connection is more important than ever.</p> */}

                            <p>I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives.</p>
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

                    <p>I have been trained in integrative therapy, this is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. By combining elements drawn from different schools of psychological theory and research, integrative therapy becomes a flexible and inclusive approach to understanding. Each person is considered as an individual and counselling and psychotherapy techniques are tailored to their individual needs and personal circumstances.</p>
                </div>
            </div>
            <div>
                <img src={require('./../../imgs/homeText.pt2.png')} alt='Nujoji Calvocoressi' className="Page__top_img part2"/>
                <div className="section__wrapper">
                    <p> I trained for four years at <a href="https://www.minstercentre.ac.uk">The Minster Centre</a> in London, a leading integrative psychotherapy training in the United Kingdom. Courses meet high academic and professional standards and are validated by the main professional bodies the <a href=" https://www.psychotherapy.org.uk/therapist/nujoji-calvocoressi/" target="_blank" rel="noopener noreferrer">UKCP</a> and <a href=" https://www.bacp.co.uk/profile/8fb9f46e-e25c-e811-8108-3863bb351d40/therapist?location=City%20of%20London" target="_blank" rel="noopener noreferrer">BACP</a>.</p>
                    <p>I obtained the following qualifications:
                        <span className="qualifications">
                            <span>&bull;</span><span>Master of Arts in Counselling and Psychotherapy</span>
                            <span>&bull;</span><span>Advanced Post Graduate Diploma in Counselling and Psychotherapy</span>
                            <span>&bull;</span><span>Diploma in Counselling</span>
                        </span>
                    </p>
                    <p>I have experience working one to one with a diverse variety of individual clients in private practice as well as working within a student wellbeing service in a higher education setting. I work in the NHS with male offenders in the secure forensic estate who engage in violent, sexually harmful and criminal behaviour.</p>
                    <p>I am a member of the <a href="https://www.bacp.co.uk/">British Association of Counsellors and Psychotherapists (BACP)</a> and adhere to their Ethical Principles and Code of Professional Conduct. I am also a registered member of the <a href="https://www.psychotherapy.org.uk/">United Kingdom Council for Psychotherapy (UKCP)</a> and the <a href="https://www.forensicpsychotherapy.org/">International Association for Forensic Psychotherapy (IAFP)</a>. I hold an enhanced certificate from the <a href="https://www.gov.uk/government/organisations/disclosure-and-barring-service">Disclosure and Barring Service.</a></p>
                    <p className="text_cntr">

                        <a href="https://www.psychotherapy.org.uk/" target="_blank" rel="noopener noreferrer" ><img className="Nujoji__pb_links" src={require('./../../imgs/ukcp.png')} alt='ukcp logo' rel="noopener noreferrer" /></a>
                        <a href="https://www.bacp.co.uk/profile/8fb9f46e-e25c-e811-8108-3863bb351d40/therapist?location=City%20of%20London" target="_blank" rel="noopener noreferrer" ><img className="Nujoji__pb_links" src={require('./../../imgs/psa.PNG')} alt='bacp logo'/></a>
                        <a href="https://www.gov.uk/government/organisations/disclosure-and-barring-service/" target="_blank" rel="noopener noreferrer"><img className="Nujoji__pb_links" src={require('./../../imgs/dbs.png')} alt='/disclosure and barring service logo' /></a>

                        <a href="https://forensicpsychotherapy.com/" target="_blank" rel="noopener noreferrer" alt="forensic psychotherapy logo"><img className="Nujoji__pb_links" src={require('./../../imgs/iafp.png')} alt=''/></a>
                    </p>

                </div>

            </div>
        </section>

    )
}
