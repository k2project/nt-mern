import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import Page from '../../components/Page/Page';

const meta = {
    title: "Directions and Contact| Nujoji Calvocoressi Counselling",
    description: 'Welcome to my counselling practice. I am passionate about my work and firmly believe that therapy can bring about positive change to people’s lives... I have been trained in integrative therapy, that is a progressive form of therapy that combines different therapeutic tools and approaches to fit the needs of the individual client. I am a member of BACP.',
    canonical: 'http://nujojicalvocoressi.com/contact',
    meta: {
        name: {
            author:'@_k2project',
            keywords: 'Nujoji, CALVOCORESSI,COUNSELLING, Queen\'s Park Therapy,West London Therapy'
        }
    }
};
const pageDetails={
    name:'Contact',
    img:{
        imgName:'contactText.pt1.png',
        imgAlt:'Contact Page'
    }
}


class Contact extends Component {
    handleSubmit = async e => {
       e.preventDefault();
        await fetch('/mail/send', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
             name: 'Kris K.',
             mail: 'kopczkrzy@gmail.com',
             mobile: '0123456789',
          }),
       });

     };
    render() {
        return (
            <DocumentMeta {...meta}>
                <Page page={pageDetails}>
                 Nujoji, this is gonna be your App live preview...

                </Page>
            </DocumentMeta>
        );
    }
}
export default Contact;
