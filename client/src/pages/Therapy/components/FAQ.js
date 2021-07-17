import React from 'react';
import SectionTitle from '../../../components/SectionTitle';
import { questionsAndAnswers } from './questionsAndAnswers';

export const FAQ = (props) => {
    return (
        <div className='FAQ Page__bg_grey' id='FAQ'>
            {/* <img
                src={require('./../../imgs/therapyText.pt2.png')}
                alt='Therapy Page'
                className='Page__top_img part2'
            /> */}
            <div className='wrapper'>
                <SectionTitle
                    data={{
                        divider: 'white',
                        subtitle: '',
                        title: 'What is therapy?',
                    }}
                />
                <div>
                    <p>
                        I hope the FAQ will help answer any questions that you
                        may have about starting therapy or about how I practice.
                        Please do not hesitate to contact me if you have another
                        question.
                    </p>
                    <div className='text_r'>
                        <div className='btn_square' onClick={openAllQuestions}>
                            Open All Questions
                        </div>
                    </div>
                </div>
                <Accordion qa={questionsAndAnswers} />
                <div className='text_r'>
                    <div className='btn_square' onClick={closeAllQuestions}>
                        Close All Questions
                    </div>
                </div>
            </div>
        </div>
    );
};

const Accordion = (props) => {
    const toggleAccordionLi = (e) => {
        const accordionLi = e.target.closest('.accordion__li');

        if (!accordionLi.classList.contains('active')) {
            accordionLi.classList.add('active');
            accordionLi.querySelector('span').innerHTML = '&#8722;';
        } else {
            accordionLi.classList.remove('active');
            accordionLi.querySelector('span').innerHTML = '&#43';
        }
    };

    let accordion = props.qa.map((qa) => {
        const isLinked =
            window.location.hash && window.location.hash === qa.hash;

        return (
            <div
                className={isLinked ? 'accordion__li active' : 'accordion__li'}
                key={qa.q}
                onClick={toggleAccordionLi}
                id={isLinked ? qa.hash.slice(1) : null}
            >
                <div className='accordion__q'>
                    <div className='accordion__q-text'>
                        <b>Q : </b>
                        {qa.q}
                    </div>
                    <span>&#43;</span>
                </div>
                <div className='accordion__a'>
                    <div>{qa.a}</div>
                </div>
            </div>
        );
    });

    return <div className='Accordion'>{accordion}</div>;
};
const closeAllQuestions = () => {
    Array.from(document.getElementsByClassName('accordion__li active')).forEach(
        (li) => {
            li.classList.remove('active');
            li.querySelector('span').innerHTML = '&#43;';
        }
    );
};
const openAllQuestions = () => {
    Array.from(document.getElementsByClassName('accordion__li')).forEach(
        (li) => {
            li.classList.add('active');
            li.querySelector('span').innerHTML = '&#8722;';
        }
    );
};
