import { useNavigate } from "react-router-dom";

export const NavigateNext = (props) => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <h2>Use navigate</h2>
            <button onClick={goBack} >Back</button>
        </>
    );
};