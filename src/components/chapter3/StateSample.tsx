import { useState } from 'react';

export const StateSample = () => {
    const [text, setText] = useState<string>('');
    const [inputText, setInputText] = useState<string>('');
    const changeInputText = (element) => {
        setInputText(element.target.value);
    };
    const changeText = (element) => {
        setText(inputText);
    };
    console.log('state');
    return (
        <>
            <h2>Stateを利用</h2>
            <p>テキスト：{text}</p>
            <input type="text" value={inputText} onChange={changeInputText} />
            <button onClick={changeText}>更新</button>
        </>
    );
};