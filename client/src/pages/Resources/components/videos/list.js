import React from 'react';
import video from '../../../../imgs/video.png';

const video1 = {
    title: 'EMDR',
    subtitle: 'by EMDR Association UK',
    summary:
        'EMDR stands for Eye Movement Desensitisation and Reprocessing. It is a powerful therapy that helps people recover from problems triggered by traumatic events in their lives.',
    link: {
        url: 'https://www.youtube.com/watch?v=bIJZQAr9nQo',
        label: 'Watch now',
    },
    icon: video,
    thumbnail: 'emdr.png',
    cls: 'emdr',
    id: 'emdr-video',
};
// const video1 = {
//     title: 'Happiness',
//     subtitle: 'by Steve Cutts',
//     summary:
//         "A four-minute animation about the story of a rodent's unrelenting quest for happiness and fulfilment.",
//     link: {
//         url: 'https://www.youtube.com/watch?v=e9dZQelULDk&amp;t=71s',
//         label: 'Watch now',
//     },
//     icon: video,
//     thumbnail: 'happinesV1.png',
// };
const video2 = {
    title: 'Are You Lost in the World Like Me?',
    subtitle: 'by Steve Cutts',
    summary:
        'A three-minute animation exploring the mobile world we find ourselves living in.',
    link: {
        url: 'https://www.youtube.com/watch?v=eXC4X_dsmCc',
        label: 'Watch now',
    },
    icon: video,
    thumbnail: 'lostInTheWorld.png',
};
const video3 = {
    title: 'How Psychotherapy Works',
    subtitle: 'by The School of Life',
    summary:
        'Psychotherapy holds out the promise of being able to help us with many of the problems that ruin our lives: anxiety, self-hatred, shame and confusion... But how exactly does it work? On what basis can it help us?',
    link: {
        url: 'https://www.youtube.com/watch?v=g-i6QMvIAA0',
        label: 'Watch now',
    },
    icon: video,
    thumbnail: 'howPsychotherapyWorks.png',
};
const video4 = {
    title: 'Psychotherapy',
    subtitle: 'by The School of Life',
    summary:
        'Having some psychotherapy is just about the most significant and interesting thing you could do to improve your chances of contentment - in relationships, at work, and with friends and family.',
    link: {
        url: 'https://www.youtube.com/watch?v=OxuZiqY5ypU',
        label: 'Watch now',
    },
    icon: video,
    thumbnail: 'psychotherapyTSOL.png',
};

export const videos = [video1, video2, video3, video4];
