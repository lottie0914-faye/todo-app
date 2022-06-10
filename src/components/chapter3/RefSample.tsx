import { useState, useRef } from "react";

export const RefSample = () => {
    const [text, setText] = useState<string>('');
    const inputElement = useRef<HTMLInputElement | null>(null);
    const changeText = (element) => {
        setText(inputElement.current.value);
    };
    console.log('ref');
    return (
        <>
            <h2>Use ref </h2>
            <p>text: {text}</p>
            <input type="text" ref={inputElement} />
            <button onClick={changeText}>更新</button>
        </>
    );
};