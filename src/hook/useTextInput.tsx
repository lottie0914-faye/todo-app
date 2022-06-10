import { useState, useRef } from "react";

export const useTextInput = () => {
    const [text, setText] = useState<string>("");
    const textInputElement = useRef(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const changeText = (element) => {
        setText(textInputElement.current.value);
    };
    return {text, changeText, textInputElement};
};