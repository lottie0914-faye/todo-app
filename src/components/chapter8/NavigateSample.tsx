import { useNavigate } from "react-router-dom";

export const NavigateSample = (props) => {
    const navigate = useNavigate();
    const goNext = () => {
        navigate("/navigate_next");
    };
    return (
        <>
            <h2>Use navigate</h2>
            <button onClick={goNext}>Next</button>
        </>
    );
};