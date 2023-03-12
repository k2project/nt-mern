import React from 'react';
import './CursorDot.scss';

export default function CursorDot() {
    React.useEffect(() => {
        let stopThread;
        const circle = document.getElementById('cursor-circle');
        const onMouseStop = () => {
            circle.style.transform = 'scale(0)';
        };

        const onMouseMove = (e) => {
            clearTimeout(stopThread);
            circle.style.transform = 'scale(1)';
            if (e.x <= 10 || e.y <= 10) {
                circle.style.opacity = 0;
            } else {
                circle.style.opacity = 1;
            }

            circle.style.left = e.pageX + 'px';
            circle.style.top = e.pageY + 'px';
            stopThread = setTimeout(onMouseStop, 700);
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            clearTimeout(stopThread);
        };
    }, []);
    return <div id='cursor-circle' />;
}
