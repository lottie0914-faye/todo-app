
import { useCountDown } from '../../hook/useCountDown';

export const CustomHookPractice = () => {
    const { count } = useCountDown(10);
    return (
        <>
            <h2>Count down</h2>
            <p>{count === 0 ? 'Time Up!' : count }</p>
        </>
    );
};