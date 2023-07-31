import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import HandleRedirect from './component/HandleRedirect';
import './index.css'


const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path='/:shortId' element={<HandleRedirect/>}/>
            </Routes>
        </Router>
    );
};

export default App;

