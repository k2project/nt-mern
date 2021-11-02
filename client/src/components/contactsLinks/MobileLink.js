import React from 'react';

export default function MobileLink({ srText = false, cls }) {
    return (
        <a href='tel:+442086759754' className={cls}>
            {srText && (
                <span className='sr-only'>To book enquiries please call </span>
            )}
            02034 420 284
        </a>
    );
}
