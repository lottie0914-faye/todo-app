import { ReactNode, useState } from 'react';
 
export const Sample = () => {
    const title: string = '初めての TypeScript x React';
    let count: number = 100;
    // let isNewcomer: boolean = true;
    const [isNewcomer, setIsNewComer] = useState<boolean>(true);
    const changeDisplay = (): void => {
        setIsNewComer(!isNewcomer);
    }
    const hello: ReactNode = isNewcomer ? <p>こんにちは！ {count} 回目の訪問です</p> : '';
    return (
        <>
          <h1>{ title }</h1>
          <button onClick={changeDisplay}>切り替え</button>
          { hello }
        </>
    );
};