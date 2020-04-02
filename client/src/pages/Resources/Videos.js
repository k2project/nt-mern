import React from 'react';
import video from '../../imgs/video.png';

export default function Videos() {
    return (
        <section className='videos'>
            <div className='video'>
                <div>
                    <div className='video__title'>How Psychotherapy Works</div>
                    <div>
                        Psychotherapy holds out the promise of being able to
                        help us with many of the problems that ruin our lives:
                        anxiety, self-hatred, shame and confusion... But how
                        exactly does it work? On what basis can it help us?
                    </div>
                    <div>
                        <a
                            href='https://www.youtube.com/watch?v=g-i6QMvIAA0'
                            className='btn'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Watch now
                        </a>
                    </div>
                </div>
                <img src={video} alt='' className='video__icon' />
            </div>
            <div className='video'>
                <div>
                    <div className='video__title'>Psychotherapy</div>
                    <div>
                        Having some psychotherapy is just about the most
                        significant and interesting thing you could do to
                        improve your chances of contentment - in relationships,
                        at work, and with friends and family.
                    </div>
                    <div>
                        <a
                            href='https://www.youtube.com/watch?v=OxuZiqY5ypU'
                            className='btn'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Watch now
                        </a>
                    </div>
                </div>
                <img src={video} alt='' className='video__icon' />
            </div>
            <div className='video'>
                <div>
                    <div className='video__title'>Happiness</div>
                    <div>
                        The story of a rodent&#39;s unrelenting quest for
                        happiness and fulfilment.
                    </div>
                    <div>
                        <a
                            href='https://www.youtube.com/watch?v=e9dZQelULDk&amp;t=71s'
                            className='btn'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Watch now
                        </a>
                    </div>
                </div>
                <img src={video} alt='' className='video__icon' />
            </div>
            <div className='video'>
                <div>
                    <div className='video__title'>
                        Are You Lost in the World Like Me
                    </div>
                    <div>
                        Steve Cutt’s wonderful animation explores the mobile
                        world we find ourselves living in.
                    </div>
                    <div>
                        <a
                            href='https://www.youtube.com/watch?v=eXC4X_dsmCc'
                            className='btn'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            Watch now
                        </a>
                    </div>
                </div>
                <img src={video} alt='' className='video__icon' />
            </div>
        </section>
    );
}
