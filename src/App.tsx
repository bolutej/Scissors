import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import HandleRedirect from './component/HandleRedirect';


const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Home />
                </Route> 
                <Route path='/:shortId'>
                    <HandleRedirect/>
                </Route>
            </Routes>
        </Router>
    );
};

export default App;

