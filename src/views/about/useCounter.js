import { useEffect, useState } from 'react';

const useCounter = (endValue, duration) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = parseInt(endValue, 10);
        if (isNaN(end)) return;

        const incrementTime = Math.abs(Math.floor(duration / end));

        const timer = setInterval(() => {
            start += 1;
            setCount(start);

            if (start === end) {
                clearInterval(timer);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [endValue, duration]);

    return count;
};

export default useCounter;
