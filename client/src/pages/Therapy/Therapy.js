import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { NavHashLink as Link } from 'react-router-hash-link';
import './Therapy.css';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

import aetna from './../../imgs/aetna.jpg';
import aviva from './../../imgs/aviva.png';
import axa from './../../imgs/axa.png';
import cigna from './../../imgs/cigna.png';
import healix from './../../imgs/healix.png';
import validium from './../../imgs/validium.png';
import vitality from './../../imgs/vitality.png';

const insuranceLogos = [
    {
        logo: axa,
        link:'https://www.axappphealthcare.co.uk',
        name:'Axa PPP'
    },
    {
        logo: aetna,
        link:'https://www.aetna.com',
        name:'Aetna'
    },
    {
        logo: aviva,
        link:'https://www.aviva.co.uk/health/health-products/',
        name:'Aviva'
    },
    {
        logo: vitality,
        link:'https://www.vitality.co.uk',
        name:'Vitality'
    },
    {
        logo: healix,
        link:'https://healix.com',
        name:'Healix'
    },
    {
        logo: validium,
        link:'https://www.validium.com',
        name:'Validium'
    },
    {
        logo: cigna,
        link:'https://www.cigna.co.uk/',
        name:'Cigna'
    },
];

const meta = {
    title: "About Therapy | Nujoji Calvocoressi Counselling and Psychotherapy",
    description: 'Welcome to my counselling and psychotherapy practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives. I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://www.calvocoressi.com/therapy',
    meta: {
        name: {
            author:'@_k2project',
            keywords: 'Nujoji Calvocoressi, counselling and psychotherapy, integrative therapy, London'
        }
    }
};
const pageDetails={
    name:'Therapy',
    img:{
        imgName:'therapyText.pt1.png',
        imgAlt:'Therapy Page'
    }
}

class Therapy extends Component {
  render() {
    return (
        <DocumentMeta {...meta}>
            <Page page={pageDetails}>
                <TherapyIntro/>
                <IntegrativeTherapy/>
                <FAQ/>
                <Fees/>
                <Insurance/>
            </Page>
        </DocumentMeta>
    );
  }
}
export default Therapy;

const TherapyIntro=()=>{
    return (
        <section  className="TherapyIntro">
                <div>
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'themed',subtitle:'First steps',title:'How will therapy help?'}}/>
                        <img src={require('./../../imgs/chairs.png')} alt='Therapy room' className="TherapyIntro__img"/>
                    </div>

                </div>
                <div className="Therapy__bg_themed">
                    <div className="section__wrapper">
                        <p>It is not unusual to feel hesitant or unsure about seeking help. For some people, asking for help can be a difficult place to start.</p>
                        <p> There are many different therapeutic approaches available and it can be confusing to decide which one is suited for you.</p>
                        <Link to='/#about' className="btn" smooth>More About Me</Link>
                    </div>
                </div>
        </section>

    )
}
const IntegrativeTherapy=()=>{
    return (
        <section  className="IntegrativeTherapy"  id="integrative-therapy">
                <div className="Therapy__bg_themed">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'white',subtitle:'How I work',title:'Integrative Therapy'}}/>
                        <p>Integrative therapy is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. By combining elements drawn from different schools of psychological theory and research, integrative therapy becomes a flexible and inclusive approach to understanding.</p>
                    </div>
                </div>
                <div className="IntegrativeTherapy__bg_respect">
                    <div className="section__wrapper">
                        <p>In therapy, what you say will be treated with respect and compassion. It takes place in a private and confidential setting where we can explore thoughts and feelings in a context different to most every-day settings. It is a dedicated time set aside by you and me. </p>
                        <p> The setting and regularity of our meetings as well as our therapeutic relationship will be the vessel within which you will be free to express whatever is on your mind.</p>
                        <p>Starting therapy can be a source of comfort and release as well as worry. The below FAQs may help you reach a decision whether now is the right time for you.</p>
                    </div>
                </div>
        </section>

    )
}
const FAQ=props=>{
    return(
        <div className="FAQ Page__bg_grey" id="FAQ">
            <img src={require('./../../imgs/therapyText.pt2.png')} alt='Therapy Page' className="Page__top_img part2"/>
            <div className="wrapper">
                <SectionTitle data={{divider:'white',subtitle:'FAQ',title:'What is therapy?'}}/>
                <div>
                    <p>
                        I hope some of the FAQ will help answer any questions that you may have about starting therapy or about how I practice. Please do not hesitate to contact me if you have another question.
                    </p>
                    <div className="text_r">
                        <div className="btn_square" onClick={openAllQuestions}>Open All Questions</div>

                    </div>
                </div>
                <Accordion qa={questionsAndAnswers} />
                <div className="text_r">
                    <div className="btn_square" onClick={closeAllQuestions}>Close All Questions</div>
                </div>

            </div>
        </div>
    )
}

const Accordion=(props)=>{
    const toggleAccordionLi=(e)=>{
        const accordionLi = e.target.closest('.accordion__li');

        if(!accordionLi.classList.contains('active')){
            accordionLi.classList.add('active');
            accordionLi.querySelector('span').innerHTML='&#8722;';
        }else{
            accordionLi.classList.remove('active');
            accordionLi.querySelector('span').innerHTML='&#43';
        }



    }

    let accordion=props.qa.map(qa=>{
        return(
            <div className="accordion__li" key={qa.q} onClick={toggleAccordionLi}>
                <div  className="accordion__q" >
                    <p><b>Q : </b>{qa.q}</p>
                    <span>&#43;</span>
                </div>
                <div  className="accordion__a">
                    <p>{qa.a}</p>
                </div>
            </div>

        )
    })

    return(
        <div className="Accordion">
            {accordion}
        </div>
    )
}
const closeAllQuestions=()=>{

    document.querySelectorAll('.accordion__li').forEach(li=>{
        li.classList.remove('active');
        li.querySelector('span').innerHTML='&#43;';
    })
}
const openAllQuestions=()=>{
    alert('test.working')
    document.querySelectorAll('.accordion__li').forEach(li=>{
        li.classList.add('active');
        li.querySelector('span').innerHTML='&#8722;';
    })
}
const questionsAndAnswers=[
    {
        q:'How counselling and psychotherapy can help?',
        a:'It often surprises people that counselling and psychotherapy isn’t about giving advice or telling people what to do. Instead it is about creating a safe and non-judgemental space where you can reflect, explore and understand the difficulties in your life. The insight and awareness gained will in itself feel freeing giving you more choice in the way you live your life. It is my experience that counselling and psychotherapy is a collaborative process and the more you engage with the process the more you are likely to benefit from it. There are many ways in which I believe counselling and psychotherapy helps. Being able to talk things through with a trained professional, someone other than your friends or family, can bring a great sense of relief. We often hide our feelings from those closest to us because of our feelings of shame, fear of judgement and a wish not to burden others.Counselling and psychotherapy can bring new levels of awareness that makes life feel easier to manage opening up the possibility of other choices and ways to be in the world. There is good evidence-based research that counselling and psychotherapy can be helpful.'
    },
    {
        q:'What type of counselling and psychotherapy do you offer?',
        a:'I have trained as an integrative counsellor and psychotherapist. This is a combined approach that brings together different strands of specific therapeutic modalities. Integrative therapists take the view that no one approach can reach each client in all situations. Rather, each person needs to be considered as an individual and counselling and psychotherapy techniques are tailored to their individual needs and personal circumstances. I also believe that  adverse childhood experiences impact how we feel about ourselves today and may influence how we relate to others and how we live in the present moment. I incorporate psychodynamic ideas into my work with clients, attachment theory as well as relational psychotherapy and place importance in our therapeutic relationship.'
    },
    {
        q:'Are my problems big enough?',
        a:"There is no scale of importance, you don't have to be in crisis to make use of therapy. The most important thing is a will and desire for growth. Simply wanting more fulfilment, improved mental wellbeing, a clearer understanding and energy for life is reason enough for committing to therapy."
    },

    {
        q:'How does counselling and psychotherapy work?',
        a:"There are many different therapeutic approaches available and it can be confusing to decide which one is best suited for you. Time after time the research shows that the quality of the therapeutic relationship is more important than the therapeutic modality used. Whatever the approach, they all have the same focus – your best interests and facilitating positive change. The first session is an opportunity for us to meet and for me to find out a little bit more about you and your difficulties. First sessions last 60 minutes, sessions after that will be 50 minutes long. I will ask several questions to find out more about you and I may make a few notes with your permission. This first session may feel different from our ongoing sessions as these will be led by you. We will discuss what you would like to achieve from counselling and psychotherapy and you will have the opportunity to ask me as many questions as you need to feel more comfortable. After the session you can take some time to think about whether I am the right therapist for you. I completely understand if you would rather work with another therapist or if you decide that the time is not quite right. The decision to start counselling and psychotherapy can be a difficult one and therapy works best when you feel ready."
    },
    {
        q:'Will what I say be confidential?',
        a:"Yes, counselling and psychotherapy sessions are strictly confidential. The only exception to this is if you talk about something that suggests your safety or the safety of others is in danger, in this case I would discuss my concerns with you and any other professionals I might need to contact. I would hope this to be done wherever possible, with your agreement."
    },
    {
        q:'How long do sessions last?',
        a:"Sessions are 50 minutes long."
    },
    {
        q:'Do you charge for missed sessions?',
        a:"Yes. I will try to offer an alternative session time when possible."
    },
    {
        q:'How many sessions will I need?',
        a:"In my experience the length of time varies considerably depending on the nature of the problem and what you hope to get out of counselling and psychotherapy. For some, a small number of sessions are sufficient, however a period of a year or more would be more beneficial to deal with long lasting difficulties. All counselling and psychotherapy sessions will last 50 minutes (apart from the first session which will last 60 minutes). My preference is to meet at the same time on the same day each week. Some people may benefit from counselling and psychotherapy twice a week, if you feel that you might, we can discuss this. Many people prefer to work in an open-ended way and to continue for as long as it feels useful or helpful, others prefer to agree to a fixed number of weeks and see how they go. "
    },
    {
        q:'Can I terminate the therapy at any point?',
        a:"The decision to end the therapy will always be yours. I do recommend for short term work you allow three weeks notice to bring the work to an end and in longer term work, over one year, three months notice. "
    },
    {
        q:'Can I come in the evening?',
        a:"I work in the evenings. I do not work Saturdays, Sundays or public holidays. "
    },
    {
        q:'Do you offer counselling and psychotherapy supervision?',
        a:"I do not."
    },
    {
        q:'What if the time slot isn\'t convenient for both of us? ',
        a:"I am in contact with a number of other therapists in London who might provide a suitable alternative."    },

]


const Fees=()=>{
    return (
        <section  className="Fees" id="fees">
                <div className="Therapy__bg_themed">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'white',subtitle:'What I charge',title:'Many people find that regular meetings provide a sense of safety and continuity'}}/>
                        <p>Regular weekly sessions are of 50 minutes duration, and are charged at £60 per session. I am happy to accept payment by debit or credit card, cash or bank transfer. </p>
                        <p>I also keep a couple of low cost places for those who have difficulty in being able to afford therapy. </p>
                        <Link to='/contact#form' className="btn" smooth>Get In Touch</Link>

                    </div>
                </div>
                <div>
                    <div className="section__wrapper">
                        <p>All therapy sessions are chargeable including the initial consultation. Some therapists offer a reduced fee or initial consultation at no charge. I feel the first session is an important part of the work and I provide the same level of service during that session as all others so my charges reflect this. In our preliminary session there is an opportunity for us to meet each other and explore whether therapy might be helpful to you. There is no commitment to ongoing work.</p>
                        <p>If you decide you would like to continue, we will agree regular days and times to meet on an ongoing basis. The establishment of regular sessions is important in order to facilitate, and give momentum to the therapeutic process. Many people find that regular meetings provide a sense of safety and continuity whilst they are working on their emotional difficulties.</p>
                    </div>
                </div>
        </section>

    )
}

const Insurance =()=>{
    const logos = insuranceLogos.map(i=><a href={i.link} target="_blank" rel="noopener noreferrer">
        <img
            src={i.logo}
            className="Insurance__logo"
            alt={i.name}
            key={`insuranceLogo_${i.name}`}/>
    </a>)
    return(
        <div className="Insurance">
            <div className="wrapper">
                <div className="Insurance__logos">
                    {logos}
                </div>
                <p>If you have a private health insurance policy, it is often possible that you can fund some or all of your counselling and psychotherapy sessions through your health insurance policy. I am recognised with a number of medical insurers including Aetna, Aviva, Axa PPP, Cigna, Healix, Validium and Vitality Health. </p>
            </div>
        </div>
    )
}
