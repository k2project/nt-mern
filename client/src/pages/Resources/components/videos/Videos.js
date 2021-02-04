import React from 'react';
import { Card } from '../../../../components/Card';
import { videos } from './list';

export default function Videos() {
    return (
        <section className='videos'>
            {videos.map((v) => (
                <Card item={v} />
            ))}
        </section>
    );
}
