import React from 'react';

export const RadioInput = (props) => {
    function handleClick(e) {
        props.clearErr();
        const sellectedRadioInput = document.querySelector(
            '.RadioInput__fake.clicked'
        );
        if (sellectedRadioInput) {
            sellectedRadioInput.classList.remove('clicked');
        }
        e.target.previousElementSibling.previousElementSibling.classList.add(
            'clicked'
        );
    }

    const hash = props.value
        .split(' ')
        .join('_')
        .toLowerCase();
    return (
        <div className='RadioInput'>
            <div className='RadioInput__fake'>
                <span className='RadioInput__box'>
                    <span className='RadioInput__box_check'>&#9632;</span>
                </span>
                <span className='RadioInput__text'>{props.text}</span>
            </div>
            <label htmlFor={hash} className='sr-only'>
                {props.text}
            </label>
            <input
                type='radio'
                name='location'
                id={hash}
                value={props.value}
                className='RadioInput__input'
                onClick={handleClick}
            />
        </div>
    );
};
