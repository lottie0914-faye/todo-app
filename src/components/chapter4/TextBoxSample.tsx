import { useState, useRef } from 'react';
import { useTextInput } from '../../hook/useTextInput';

// export const TextBoxSample = () => {
//     const [text, setText] = useState<string>('');

//     const textboxElement = useRef<HTMLInputElement | null > (null);
//     const changeText = (element) => {
//         setText(textboxElement.current.value);
//     };
//     return (
//         <>
//             <h2>テキストボックスのサンプル</h2>
//             <p>テキスト: {text}</p>
//             <p>テキストの長さ：{text.length}</p>
//             <input type="text" ref={textboxElement}/>
//             <button onClick={changeText} >Refresh</button>
//         </>
//     );
// };
export const TextBoxSample = () => {
    const {text, changeText, textInputElement} = useTextInput();
    return (
        <>
            <h2>text box sample</h2>
            <p>text: {text}</p>
            <p>length of text: {text.length}</p>
            <input type="text" ref={textInputElement} />
            <button onClick={changeText} >更新</button>
        </>
    );
};