import { useLocation } from "react-router-dom";

export const LocationSample = (props) => {
    const location = useLocation();
    return (
        <>
            <p>URL: {location.pathname}</p>
            <p>Query(after ?): {location.search}</p>
            <p>Hash(before #): {location.hash}</p>
        </>
    );
};