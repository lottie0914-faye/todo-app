import { Link } from 'react-router-dom';

export const HeaderBar = () => {
    return (
        <>
            <header style={{'backgroundColor' : 'thistle'}}>
                <h1>React x TypeScript アプリケーションサンプル</h1>
                <ul>
                    <li>
                        <Link to="/" >Top</Link>
                    </li>
                    <li>
                        <Link to="/chapter2" >Chapter2</Link>
                    </li>
                    <li>
                        <Link to="/chapter3" >Chapter3</Link>
                    </li>
                    <li>
                        <Link to="/chapter7" >Chapter7</Link>
                    </li>
                    <li>
                    <Link to="/dynamic/aaa" >Dynamic Route</Link>
                    </li>
                    <li>
                        <Link to="/location?query_keyword#hash_keyword">Location</Link>
                    </li>
                    <li>
                        <Link to="/navigate" >Navigate</Link>
                    </li>
                </ul>
            </header>
        </>
    );
};