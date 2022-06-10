
import { useState, useRef } from 'react';
import { useTextInput } from '../../hook/useTextInput';
export const TextAreaSample = () => {
    // const [text, setText] = useState<string>('');
    // // useRef を利用
    // const textareaElement = useRef<HTMLTextAreaElement | null>(null);
    // const changeText = (element) => {
    //     setText(textareaElement.current.value);
    // };
    // return (
    //     <>
    //         <h2>テキストエリアのサンプル</h2>
    //         <p>テキスト: {text}</p>
    //         <p>テキストの長さ: {text.length}</p>
    //         <textarea ref={textareaElement} ></textarea>
    //         <button onClick={changeText}>更新</button>
    //     </>
    // );
    const {text, changeText, textInputElement} = useTextInput();
    return (
        <>
            <h2>text area sample</h2>
            <p>テキスト: {text}</p>
            <p>テキストの長さ: {text.length}</p>
            <textarea ref={textInputElement} ></textarea>
            <button onClick={changeText} >refresh</button>
        </>
    );
};