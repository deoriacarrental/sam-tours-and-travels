import { Shield, Car, Map, Headphones } from 'lucide-react';
import '../styles/home.css';
import Hero from '../components/home/Hero';
import BookingForm from '../components/home/BookingForm';
import FeaturedVehicles from '../components/home/FeaturedVehicles';
import AboutPreview from '../components/home/AboutPreview';
import FeaturedTrips from '../components/home/FeaturedTrips';
import WhyChooseUs from '../components/home/WhyChooseUs';
import GoogleReviews from '../components/home/GoogleReviews';
import LocationMap from '../components/home/LocationMap';
import FinalCTA from '../components/home/FinalCTA';

const highlights = [
    {
        icon: <Shield size={28} strokeWidth={1.5} />,
        title: 'Reliable Transportation',
        desc: 'Punctual, professional, and consistent — every time you travel with us.',
    },
    {
        icon: <Car size={28} strokeWidth={1.5} />,
        title: 'Well-Maintained Vehicles',
        desc: 'Clean, serviced, and road-ready vehicles for a comfortable journey.',
    },
    {
        icon: <Map size={28} strokeWidth={1.5} />,
        title: 'Local &amp; Outstation',
        desc: 'City pickups, airport transfers, outstation travel, and day trips.',
    },
    {
        icon: <Headphones size={28} strokeWidth={1.5} />,
        title: 'Personalised Planning',
        desc: 'Real assistance to help you plan the right trip for your needs.',
    },
];

export default function Home() {
    return (
        <main>
            {/* A. Hero */}
            <Hero />

            {/* B. Quick Booking */}
            <BookingForm />

            {/* C. Highlights */}
            <section className="highlights section--compact" aria-label="Service highlights">
                <div className="highlights__grid container" style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: 0 }}>
                    {highlights.map(({ icon, title, desc }) => (
                        <div key={title} className="highlight-item">
                            <div className="highlight-item__icon" aria-hidden="true">{icon}</div>
                            <h3
                                className="highlight-item__title"
                                dangerouslySetInnerHTML={{ __html: title }}
                            />
                            <p className="highlight-item__desc">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* D. Featured Vehicles */}
            <FeaturedVehicles />

            {/* E. About Preview */}
            <AboutPreview />

            {/* F. Featured Trips */}
            <FeaturedTrips />

            {/* G. Why Choose Us */}
            <WhyChooseUs />

            {/* J. Road Experience — unique section */}
            <section className="road-section" aria-label="The road experience">
                <img
                    src="/images/road_experience.jpg"
                    alt="Open highway stretching to the horizon — the Sam Tours and Travels travel experience"
                    className="road-section__bg"
                    loading="lazy"
                />
                <div className="road-section__content container">
                    <blockquote>
                        <p className="road-section__quote">
                            "The road is part<br />
                            of the experience."
                        </p>
                    </blockquote>
                    <p className="road-section__text">
                        We believe that travel is not just about the destination. The quality
                        of your journey — the vehicle, the driver, the route — shapes the
                        memory you carry home. That's why every detail matters to us.
                    </p>
                </div>
            </section>

            {/* H. Reviews */}
            <GoogleReviews />

            {/* I. Map */}
            <LocationMap />

            {/* K. Final CTA */}
            <FinalCTA />
        </main>
    );
}
