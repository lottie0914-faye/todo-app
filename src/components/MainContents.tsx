import { Chapter5 } from './chapter5/Chapter5';
import { Chapter2 } from './chapter2/Chapter2';
import { Chapter3 } from './chapter3/Chapter3';
import { Chapter7} from './chapter7/Chapter7';
import { DynamicRouteSample } from './chapter8/DynamicRouteSample';
import { LocationSample } from './chapter8/LocationSample';
import { NavigateSample } from './chapter8/NavigateSample';
import { NavigateNext } from './chapter8/NavigateNext';
import { useParams } from "react-router-dom";

 
import {
    Route,
    Routes,
} from 'react-router-dom';

export const MainContents = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Chapter5 />} />
                <Route path="/chapter2" element={<Chapter2 />} />
                <Route path="/chapter3" element={<Chapter3 />} />
                <Route path="/chapter7" element={<Chapter7 />} />
                <Route path="/dynamic/:sample" element={<DynamicRouteSample />} />
                <Route path="/location" element={<LocationSample />} />
                <Route path="/navigate" element={<NavigateSample />} />
                <Route path="/navigate_next" element={<NavigateNext />} />
            </Routes>
            
        </main>
    );
};