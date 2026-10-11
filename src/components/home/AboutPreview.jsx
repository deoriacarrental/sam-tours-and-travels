import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * AboutPreview.jsx — Home page editorial about section.
 */
export default function AboutPreview() {
    return (
        <section className="section--subtle about-preview" aria-label="About Sam Tours and Travels">
            <div className="about-preview__grid">
                {/* Image column */}
                <div className="about-preview__image-col">
                    <img
                        src="/images/about_hero.jpg"
                        alt="Premium sedan on a coastal highway — representing the Sam Tours and Travels travel experience"
                        className="about-preview__image"
                        loading="lazy"
                    />
                </div>

                {/* Content column */}
                <div className="about-preview__content-col">
                    <div className="about-preview__number" aria-hidden="true">01</div>
                    <p
                        className="eyebrow"
                        style={{ marginBottom: '1rem', display: 'block' }}
                    >
                        About Us
                    </p>
                    <h2
                        style={{
                            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.025em',
                            lineHeight: 1.05,
                            marginBottom: '1.5rem',
                        }}
                    >
                        Travel That Puts You First
                    </h2>
                    <p className="about-preview__text">
                        Sam Tours and Travels is committed to providing dependable, comfortable
                        travel solutions for individuals, families, and groups. From local city
                        commutes to multi-day outstation journeys, every trip is handled with care.
                    </p>
                    <p className="about-preview__text">
                        We believe that a great journey begins before the destination — with
                        a well-maintained vehicle, a professional driver, and thoughtful service
                        from the moment you book.
                    </p>
                    <Link to="/about" className="btn btn--primary" style={{ marginTop: '0.5rem' }}>
                        About Us <ArrowRight size={14} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
