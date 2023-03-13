import React from 'react';
import { CardWithThumbnail } from '../../../../components/CardWithThumbnail';
import { videos } from './list';

export default function Videos() {
    return (
        <section className='videos'>
            {videos.map((v) => (
                <CardWithThumbnail item={v} key={v.title} />
            ))}
        </section>
    );
}
