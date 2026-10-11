import { Link } from 'react-router-dom';

/**
 * Hero.jsx — Home page hero section.
 */
export default function Hero() {
    return (
        <section className="hero" aria-label="Homepage hero">
            <img
                src="/images/hero_banner.jpg"
                alt="Premium SUV on a mountain highway — Sam Tours and Travels"
                className="hero__bg"
                loading="eager"
                fetchPriority="high"
            />
            <div className="hero__overlay" aria-hidden="true" />

            <div className="hero__content container">
                {/* Service tags */}
                <div className="hero__service-tags" aria-label="Services offered">
                    <span className="hero__tag">Car Rentals</span>
                    <span className="hero__tag">Outstation Trips</span>
                    <span className="hero__tag">Local Travel</span>
                    <span className="hero__tag">Group Tours</span>
                </div>

                {/* Headline */}
                <h1 className="hero__headline">
                    Your Journey.<br />
                    <em>Our Responsibility.</em>
                </h1>

                <p className="hero__subtext">
                    Reliable car rentals, comfortable journeys, and thoughtfully planned
                    trips — all in one place.
                </p>

                <div className="hero__actions">
                    <Link to="/vehicles" className="btn btn--white btn--lg">
                        Explore Our Fleet
                    </Link>
                    <Link to="/trips" className="btn btn--ghost-light btn--lg">
                        Plan Your Trip
                    </Link>
                </div>
            </div>

            {/* Scroll hint */}
            <div className="hero__scroll-hint" aria-hidden="true">
                <div className="hero__scroll-line" />
                <span>Scroll</span>
            </div>
        </section>
    );
}
