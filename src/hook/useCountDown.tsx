import { useState, useEffect } from "react";

export const useCountDown = (countDownNumber) => {
    const [count, setCountDown] = useState<number>(countDownNumber);
    useEffect(() => {
        if (count > 0){
        const interval = setInterval(() => {
            setCountDown(count-1);
        }, 1000);
        console.log('useEffecting');
        return () => clearInterval(interval);
    }
    }, [count]);
    return { count };
};