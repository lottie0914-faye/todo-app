import { useParams } from "react-router-dom";

export const DynamicRouteSample = (props) => {
    const { sample } = useParams();
    return (
        <>
            <p>sample's value: {sample} </p>
        </>
    )
}