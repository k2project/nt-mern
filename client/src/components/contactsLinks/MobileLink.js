import React from 'react';

export default function MobileLink({ srText = false, cls }) {
    return (
        <a href='tel:+442086759754' className={cls}>
            {srText && (
                <span className='sr-only'>To book enquiries please call </span>
            )}
            0208 675 9754
        </a>
    );
}
