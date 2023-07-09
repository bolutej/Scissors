import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';



const App = () => {
    
    return (
        <Router>
            <Routes>
                <Route path="/">
                    <Home />
                </Route> 
                
            </Routes>
        </Router>
    );
};

export default App;

