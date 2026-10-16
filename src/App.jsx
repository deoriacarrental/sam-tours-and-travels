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

const siteUrl = 'https://samtoursandtravels.com';
const defaultImage = `${siteUrl}/images/hero_banner.jpg`;

const pageMeta = {
    '/': {
        title: 'Sam Tours and Travels — Reliable Car Rental & Travel Services',
        description: 'Reliable car rentals, comfortable journeys, airport transfers, and thoughtfully planned trips from Sam Tours and Travels.',
        image: defaultImage,
    },
    '/about': {
        title: 'About Us — Sam Tours and Travels',
        description: 'Learn about Sam Tours and Travels and our reliable car rental, outstation travel, and tour services.',
        image: `${siteUrl}/images/about_hero.jpg`,
    },
    '/vehicles': {
        title: 'Our Fleet — Sam Tours and Travels',
        description: 'Explore comfortable cars, SUVs, MUVs, and tempo travellers available for local and outstation travel.',
        image: `${siteUrl}/images/vehicle_suv.jpg`,
    },
    '/trips': {
        title: 'Trips & Tours — Sam Tours and Travels',
        description: 'Explore weekend getaways, family holidays, pilgrimages, and group trips with comfortable transport.',
        image: `${siteUrl}/images/trips_hero.jpg`,
    },
    '/contact': {
        title: 'Contact Us — Sam Tours and Travels',
        description: 'Contact Sam Tours and Travels to enquire about car rentals, airport transfers, outstation travel, and tour packages.',
        image: `${siteUrl}/images/road_experience.jpg`,
    },
};

/** Keep route metadata aligned with the canonical URL rendered by the SPA. */
function MetaUpdater() {
    const { pathname } = useLocation();

    useEffect(() => {
        const meta = pageMeta[pathname] ?? {
            title: 'Sam Tours and Travels',
            description: 'Reliable car rentals and travel services from Sam Tours and Travels.',
            image: defaultImage,
        };

        document.title = meta.title;

        const setMeta = (selector, attribute, value) => {
            const element = document.querySelector(selector);
            if (element) element.setAttribute(attribute, value);
        };

        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) canonical.setAttribute('href', `${siteUrl}${pathname === '/' ? '/' : pathname}`);

        setMeta('meta[name="description"]', 'content', meta.description);
        setMeta('meta[property="og:url"]', 'content', `${siteUrl}${pathname === '/' ? '/' : pathname}`);
        setMeta('meta[property="og:title"]', 'content', meta.title);
        setMeta('meta[property="og:description"]', 'content', meta.description);
        setMeta('meta[property="og:image"]', 'content', meta.image);
        setMeta('meta[property="og:image:alt"]', 'content', `${meta.title} image`);
        setMeta('meta[name="twitter:title"]', 'content', meta.title);
        setMeta('meta[name="twitter:description"]', 'content', meta.description);
        setMeta('meta[name="twitter:image"]', 'content', meta.image);
        setMeta('meta[name="twitter:image:alt"]', 'content', `${meta.title} image`);
    }, [pathname]);

    return null;
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <MetaUpdater />
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
