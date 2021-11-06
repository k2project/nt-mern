import React from 'react';
import { PHONE } from '../../config';

export default function MobileLink({ srText = false, cls }) {
    return (
        <a href='tel:+442086759754' className={cls}>
            {srText && (
                <span className='sr-only'>To book enquiries please call </span>
            )}
            {PHONE}
        </a>
    );
}
