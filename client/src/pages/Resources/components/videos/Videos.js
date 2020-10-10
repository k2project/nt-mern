import React from 'react';
import video from '../../../../imgs/video.png';

export default function Videos() {
    return (
        <section className='videos'>
            <div className='video'>
                <div className='video__desc'>
                    <div className='video__title'>Happiness</div>
                    <div className='video__subtitle'>by Steve Cutts</div>
                    <div>
                        A four-minute animation about the story of a rodent's
                        unrelenting quest for happiness and fulfilment.
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
                <a
                    href='https://www.youtube.com/watch?v=e9dZQelULDk&amp;t=71s'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='video__icon'
                >
                    <img src={video} alt='Happiness' />
                </a>
            </div>
            <div className='video'>
                <div className='video__desc'>
                    <div className='video__title'>
                        Are You Lost in the World Like Me?
                    </div>
                    <div className='video__subtitle'>by Steve Cutts</div>
                    <div>
                        A three-minute animation exploring the mobile world we
                        find ourselves living in.
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
                <a
                    href='https://www.youtube.com/watch?v=eXC4X_dsmCc'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='video__icon'
                >
                    <img src={video} alt='Are You Lost in the World Like Me' />
                </a>
            </div>
            <div className='video'>
                <div className='video__desc'>
                    <div className='video__title'>How Psychotherapy Works</div>
                    <div className='video__subtitle'>by The School of Life</div>
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
                <a
                    href='https://www.youtube.com/watch?v=g-i6QMvIAA0'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='video__icon'
                >
                    <img src={video} alt='How Psychotherapy Works' />
                </a>
            </div>
            <div className='video'>
                <div className='video__desc'>
                    <div className='video__title'>Psychotherapy</div>
                    <div className='video__subtitle'>by The School of Life</div>
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
                <a
                    href='https://www.youtube.com/watch?v=OxuZiqY5ypU'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='video__icon'
                >
                    <img src={video} alt='Psychotherapy' />
                </a>
            </div>
        </section>
    );
}
