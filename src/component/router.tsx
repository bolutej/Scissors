import { Route, Routes } from 'react-router-dom';
import HomePage from '../component/Home';
import Features from '../component/Features';
import URLS from '../component/URLS';
import Pricing from '../component/Pricing';
import FAQS from '../component/FAQS';
import Analytics from '../component/Analytics';

const RoutesPage = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/features" element={<Features />} />
                <Route path="/urls" element={<URLS />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/faqs" element={<FAQS />} />
                <Route path="/analytics" element={<Analytics />} />
            </Routes>
        </>
    );
};

export default RoutesPage;
