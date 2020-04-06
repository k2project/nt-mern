import React from 'react';
import './Banner.scss';
// import butterfly from '../../imgs/butterfly.png';

const Banner = () => {
    return (
        <div className='Banner' id='banner'>
            <div className='Banner__box'>
                <div
                    className='Banner__close'
                    onClick={() => document.getElementById('banner').remove()}
                >
                    &times;
                </div>
                <div className='Banner__body'>
                    <p>
                        The coronavirus brings additional stress. It threatens
                        our ability as people to meet and support one another.
                        We have to be creative and flexible in responding to
                        this crisis. These are unusual times.
                    </p>
                    <p>
                        Technology can contribute to an evolution in how people
                        receive therapy and during this time of uncertainty I
                        will be offering all my counselling and psychotherapy
                        sessions online.{' '}
                    </p>
                    <button
                        className='btn'
                        onClick={() =>
                            document.getElementById('banner').remove()
                        }
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
