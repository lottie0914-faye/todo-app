import { useState, useRef } from "react";

export const useTextInput = () => {
    const [text, setText] = useState<string>('');
    const textInputElement = useRef(null);
    const changeText = (element) => {
        setText(textInputElement.current.value);
    };
    return {text, changeText, textInputElement};
};