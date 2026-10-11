import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Clock, MapPin, CheckCircle, X,
    ArrowRight, Info, Compass,
} from 'lucide-react';
import '../styles/trips.css';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import TripFilters from '../components/trips/TripFilters';
import { trips } from '../data/trips';
import { business } from '../data/business';

function TripDetailCard({ trip }) {
    const {
        name, destination, from, duration, image, imageAlt,
        description, attractions, itinerary, includes, excludes,
        pricing, vehicles: tripVehicles, bestTime, categoryLabel,
        isSampleData, isFeatured,
    } = trip;

    const whatsappMsg = encodeURIComponent(
        `Hello, I am interested in the "${name}" trip. Please share details, availability, and pricing.`
    );

    return (
        <article className="trip-detail-card" aria-label={name}>
            {/* Image */}
            <div className="trip-detail-card__image-wrap">
                <img
                    src={image}
                    alt={imageAlt}
                    className="trip-detail-card__image"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
                    }}
                />
                <span className="trip-detail-card__tag">{categoryLabel}</span>
            </div>

            <div className="trip-detail-card__body">
                {/* Meta */}
                <div className="trip-detail-card__meta">
                    <span className="trip-meta-item">
                        <Clock size={11} aria-hidden="true" /> {duration}
                    </span>
                    <span className="trip-meta-item">
                        <MapPin size={11} aria-hidden="true" /> {destination}
                    </span>
                    {bestTime && (
                        <span className="trip-meta-item">
                            <Compass size={11} aria-hidden="true" /> Best: {bestTime}
                        </span>
                    )}
                </div>

                <h3 className="trip-detail-card__name">{name}</h3>
                <p className="trip-detail-card__desc">{description}</p>

                {/* Highlights */}
                <div className="trip-detail-card__highlights">
                    <p className="trip-detail-card__highlights-title">Key Attractions</p>
                    <ul className="trip-highlights-list">
                        {attractions.map((a) => (
                            <li key={a} className="trip-highlight-tag">{a}</li>
                        ))}
                    </ul>
                </div>

                {/* Itinerary */}
                {itinerary?.length > 0 && (
                    <div className="itinerary-section" style={{ marginBottom: '1.25rem' }}>
                        <p className="trip-itinerary-title">Itinerary</p>
                        <ul className="trip-itinerary-list">
                            {itinerary.map(({ day, activity }) => (
                                <li key={day} className="trip-itinerary-item">
                                    <span className="trip-itinerary-item__day">{day}</span>
                                    <span>{activity}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Includes / Excludes */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>
                    <div>
                        <p className="trip-itinerary-title">Includes</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {includes.map((item) => (
                                <li key={item} style={{ display: 'flex', gap: 6, fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                                    <CheckCircle size={11} style={{ marginTop: 2, flexShrink: 0, color: '#2D6A4F' }} aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="trip-itinerary-title">Excludes</p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                            {excludes.map((item) => (
                                <li key={item} style={{ display: 'flex', gap: 6, fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                                    <X size={11} style={{ marginTop: 2, flexShrink: 0 }} aria-hidden="true" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {isSampleData && (
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: '1rem' }}>
                        <Info size={11} aria-hidden="true" />
                        Sample itinerary — update with verified trip details before publishing.
                    </p>
                )}

                {/* Footer */}
                <div className="trip-detail-card__footer">
                    <span className="trip-price">
                        {pricing.type === 'quote' ? 'Quote on Request' : pricing.note}
                    </span>
                    <a
                        href={`https://wa.me/${business.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--sm"
                        aria-label={`Enquire about ${name} via WhatsApp`}
                    >
                        Enquire <ArrowRight size={12} />
                    </a>
                </div>
            </div>
        </article>
    );
}

export default function Trips() {
    const [activeCategory, setActiveCategory] = useState('all');

    const filtered = trips.filter(
        (t) => activeCategory === 'all' || t.category === activeCategory
    );

    return (
        <main className="page-main">
            <PageHero
                eyebrow="Trips &amp; Tours"
                title="Popular Destinations &amp; Packages"
                subtitle="Weekend getaways, family holidays, pilgrimages, and group outings — all with comfortable, reliable transport."
                image="/images/trips_hero.jpg"
                imageAlt="Winding mountain road — scenic travel destinations"
            />

            <section className="section" aria-label="Trip packages">
                <div className="container">
                    <div style={{ marginBottom: '1.5rem' }}>
                        <SectionHeading
                            eyebrow="Browse Destinations"
                            title="Plan Your Next Trip"
                            description="Select a category to filter destinations. All trips include a vehicle with driver."
                        />
                    </div>

                    <TripFilters
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                    />

                    {filtered.length === 0 ? (
                        <div className="trips-empty" role="status" aria-live="polite">
                            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>No trips found in this category.</p>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                Try a different category or contact us for a custom trip.
                            </p>
                        </div>
                    ) : (
                        <div className="trips-grid" role="list" aria-live="polite">
                            {filtered.map((trip) => (
                                <TripDetailCard key={trip.id} trip={trip} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Custom trip CTA */}
            <section
                className="section section--dark"
                style={{ borderTop: '1px solid var(--color-border-dark)' }}
                aria-label="Custom trip enquiry"
            >
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ fontSize: 'var(--text-xs)', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
                        Can't Find Your Destination?
                    </p>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.025em', color: '#fff', marginBottom: '1rem' }}>
                        We Can Plan a Custom Trip
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
                        Tell us where you want to go, how many passengers, and your preferred
                        dates — we'll put together a comfortable travel arrangement.
                    </p>
                    <Link to="/contact" className="btn btn--white btn--lg">
                        Plan a Custom Trip <ArrowRight size={14} />
                    </Link>
                </div>
            </section>
        </main>
    );
}
