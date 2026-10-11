import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home     from './pages/Home';
import About    from './pages/About';
import Vehicles from './pages/Vehicles';
import Trips    from './pages/Trips';
import Contact  from './pages/Contact';
import NotFound from './pages/NotFound';

/** Scroll to top on every navigation */
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
}

/** Update document title on route change */
const pageTitles = {
    '/':         'Sam Tours and Travels — Reliable Car Rental & Travel Services',
    '/about':    'About Us — Sam Tours and Travels',
    '/vehicles': 'Our Fleet — Sam Tours and Travels',
    '/trips':    'Trips & Tours — Sam Tours and Travels',
    '/contact':  'Contact Us — Sam Tours and Travels',
};

function TitleUpdater() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.title = pageTitles[pathname] ?? 'Sam Tours and Travels';
    }, [pathname]);
    return null;
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <TitleUpdater />
            <Header />
            <Routes>
                <Route path="/"         element={<Home />} />
                <Route path="/about"    element={<About />} />
                <Route path="/vehicles" element={<Vehicles />} />
                <Route path="/trips"    element={<Trips />} />
                <Route path="/contact"  element={<Contact />} />
                <Route path="*"         element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}
