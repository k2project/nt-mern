import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import { NavHashLink as Link } from 'react-router-hash-link';
import './Therapy.css';
import Page from '../../components/Page/Page';
import SectionTitle from '../../components/SectionTitle';

const meta = {
    title: "About Therapy | Nujoji Calvocoressi Counselling",
    description: 'Welcome to my counselling practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives... I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://nujojicalvocoressi.com/therapy',
    meta: {
        name: {
            author:'@_k2project',
            keywords: 'Nujoji, CALVOCORESSI,COUNSELLING, Queen\'s Park Therapy,West London Therapy'
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
                        <SectionTitle data={{divider:'themed',subtitle:'Make a choice today!',title:'Therapy can help You'}}/>
                        <img src={require('./../../imgs/chairs.png')} alt='Therapy room' className="TherapyIntro__img"/>
                    </div>

                </div>
                <div className="Therapy__bg_themed">
                    <div className="section__wrapper">
                        <p><b>It is not unusual to feel hesitant or unsure about seeking help...  However it is important to make this first step and ask for help! And it's eqaully crucial to choose a right therapist for yourself. </b></p>
                        <p>You will need a therapist that you can work with and trust, because the better the relationship between both of you, the more you are likely to benefit from the therapy. </p>
                        <p><i>I hope that I can be your choice! I am here to help!</i></p>
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
                        <SectionTitle data={{divider:'white',subtitle:'What I do',title:'Integrative Therapy'}}/>
                        <p>Integrative therapy is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. By combining elements drawn from different schools of psychological theory and research, integrative therapy becomes a flexible and inclusive approach to understanding...</p>
                    </div>
                </div>
                <div className="IntegrativeTherapy__bg_respect">
                    <div className="section__wrapper">
                        <p>In my therapy, what you say will be treated with respect and compassion. It takes place in a private and confidential setting where we can explore thoughts and feelings in a context different to most every-day settings. It is a dedicated time set aside by you and me. </p>
                        <p> The setting and regularity of our meetings as well as our therapeutic relationship will be the vessel within which you will be free to express whatever is on your mind.</p>
                        <p>Have more question? Please check out the frequently asked questions and their answers below.</p>
                    </div>
                </div>
        </section>

    )
}
const FAQ=props=>{
    return(
        <div className="FAQ Page__bg_grey" id="faqs">
            <img src={require('./../../imgs/therapyText.pt2.png')} alt='Therapy Page' className="Page__top_img part2"/>
            <div className="wrapper">
                <SectionTitle data={{divider:'white',subtitle:'FAQs',title:'How does the therapy work?'}}/>
                <div className="fr1auto">
                    <p>Answers to some of the enquiries you may have regarding may practice. <br/>Please do not hesitate to contact me directly if you have more questions.</p>
                    <div className=" btn_square" onClick={openAllQuestions}>Open All Questions</div>
                </div>
                <Accordion qa={questionsAndAnswers} />
                <div className="fr1auto">
                    <div></div>
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
            <div className="accordion__li" key={qa.q}>
                <div  className="accordion__q" onClick={toggleAccordionLi}>
                    {qa.q}
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
    document.querySelectorAll('.accordion__li').forEach(li=>{
        li.classList.add('active');
        li.querySelector('span').innerHTML='&#8722;';
    })
}
const questionsAndAnswers=[
    {
        q:'How counselling can help?',
        a:'It often surprises people that counselling isn’t about giving advice or telling you what to do. Instead it is about creating a safe and non-judgemental space where you can reflect, explore and understand the difficulties in your life. The insight and awareness gained will in itself feel freeing giving you more choice in the way you live your life. It is my experience that counselling is a collaborative process and the more you engage with the process the more you are likely to feel nourished by it. There are many ways in which I believe counselling helps.  Being able to talk things through with a trained professional, someone other than your friends or family, can bring a great sense of relief. We often hide our feelings from those closest to us because of our feelings of shame, fear of judgement and a wish not to burden others.  Counselling can bring new levels of awareness that makes life feel easier to manage by the possibility of other choices and ways to feel more free in the world. There is good evidence based research that counselling can be helpful in overcoming particular difficulties such as depression, anxiety, addictions, eating disorders etc.'
    },
    {
        q:'What type of counselling do you offer?',
        a:'I have trained as a integrative counsellor. This is a combined approach that brings together different strands of specific therapeutic modalities. Integrative therapists take the view that no one approach can treat each client in all situations. Rather, each person needs to be considered as an individual person and counselling techniques must be tailored to their individual needs and personal circumstances. I also believe that our childhood experiences can have an impact on how we feel about ourselves today and how we relate to others and how we live in the present moment.   I also incorporate  psychodynamic ideas into my work with clients, attachment theory as well as relational psychotherapy and the importance of our therapeutic relationship.  It can often be helpful to talk about unconscious mental life, such as dreams or day dreams. '
    },
    {
        q:'Are my problems big enough?',
        a:"There is no scale of importance; you don't have to be in crisis to make use of therapy. The most important thing is a will and desire for growth. Simply wanting more fulfilment, improved mental wellbeing, a clearer understanding and energy for life is reason enough for committing to therapy."
    },

    {
        q:'How does counselling work?',
        a:"There are many different therapeutic approaches available and it can be confusing to decide which one is suited for you. The different ways of working include looking at your thinking style or coping strategies when unhappy. However, again and again research has shown that the quality of the working relationship is more important than the therapeutic method used. Whatever the approach, they all have the same focus – your best interests and of facilitating positive change. The first session is an opportunity for you to meet me and to find out more about you and your difficulties.  First sessions last 60 minutes, sessions after that will be 50 minutes long.  I will ask several questions to find out more about you and I may make a few notes with your permission. This may feel very different from our ongoing sessions as these will be led by you.  We will discuss what you would like to achieve from counselling and you will be given the opportunity to ask me any questions you need to feel more comfortable together.  After the session you will have some time to think about whether I am the right therapist for you – I completely understand if you would rather work with another therapist or if you decide that the time is not quite right.  The decision to engage in counselling can be a difficult one and therapy will only work when you feel ready. "
    },
    {
        q:'Will what I say be confidential?',
        a:"Yes, counselling sessions are strictly confidential.  The only exception to this is if you talk about something that suggests your safety or others is in danger; in this case I would discuss my concerns with you and any other professionals I might need to contact. I would hope for this to be done with your prior knowledge and, wherever possible, would be agreed upon with you."
    },
    {
        q:'How long do sessions last?',
        a:"Sessions are 50 minutes long."
    },
    {
        q:'Do you charge for missed sessions?',
        a:"Yes. Although I offer an alternative session when possible."
    },
    {
        q:'How many sessions will I need?',
        a:"In my experience the length of time varies considerably depending on the nature of the problem and what you hope to get out of counselling. For some, a small number of sessions are sufficient, however a period of a year or more would be more beneficial to deal with long lasting difficulties. All counselling sessions will last 50 minutes (apart from the first session which will last 60 minutes).  My preference is to meet at the same time and the same day each week.  Some people may benefit from counselling twice a week and, if you feel that you might, we can discuss this. Many people prefer to work in an open ended way and let it go on for as long as it feels useful or helpful others prefer to agree to a fixed number of weeks and see how they go. "
    },
    {
        q:'Can I terminate the therapy at any point?',
        a:"The decision to end the therapy will always be yours. I do recommend for short term work you allow three weeks notice to bring the work to an end and in longer terms work, over one year, three months notice. "
    },
    {
        q:'Can I come in the evening?',
        a:"I work in the evenings. I do not work Saturday and Sunday. "
    },
    {
        q:'Do you offer counselling supervision?',
        a:"I do not."
    },
    {
        q:'What if you don’t have a time slot that is convenient for both of us? ',
        a:"I am in contact with a number of other therapists in London who might be suitable as an alternative."
    },

]


const Fees=()=>{
    return (
        <section  className="Fees" id="fees">
                <div className="Therapy__bg_themed">
                    <div className="section__wrapper">
                        <SectionTitle data={{divider:'white',subtitle:'What I charge',title:'Regular meetings provide a sense of safety and continuity...'}}/>
                        <p><b>Regular weekly sessions are of 50 minutes duration, and are charged at £60.00 per session.</b></p>
                        <Link to='/contact#form' className="btn" smooth>Book A Session</Link>
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
