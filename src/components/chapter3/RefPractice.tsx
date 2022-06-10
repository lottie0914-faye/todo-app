import { useState, useRef } from "react";

export const RefPractice = () => {
    const [stringLength, setStringLength] = useState<number>(0);
    const inputElement = useRef<HTMLInputElement | null>(null);
    const changeLength = (element) => {
        setStringLength(inputElement.current.value.length);
    };
    return (
        <>
            <h2>Refpractice</h2>
            <p>length: {stringLength}</p>
            <input type="text" ref={inputElement} />
            <button onClick={changeLength}>更新</button>
        </>
    );
};