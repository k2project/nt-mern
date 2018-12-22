import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';

import Page from '../../components/Page/Page';

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
             Nujoji, this is gonna be your App live preview...

            </Page>
        </DocumentMeta>
    );
  }
}
export default Therapy;
