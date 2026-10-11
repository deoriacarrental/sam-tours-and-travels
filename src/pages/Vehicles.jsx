import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Users, Wind, Fuel, Luggage, CheckCircle,
    ArrowRight, CarFront, Info,
} from 'lucide-react';
import '../styles/vehicles.css';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import VehicleFilters from '../components/vehicles/VehicleFilters';
import { vehicles } from '../data/vehicles';
import { business } from '../data/business';

function VehicleDetailCard({ vehicle }) {
    const {
        name, model, categoryLabel, image, imageAlt,
        seats, ac, transmission, fuel, luggage,
        description, features, pricing, rentalTypes,
        available, isSampleData,
    } = vehicle;

    const whatsappMsg = encodeURIComponent(
        `Hello, I would like to enquire about the ${name} (${model}). Please share availability and rates.`
    );

    return (
        <article className="vehicle-detail-card" aria-label={`${name} — ${categoryLabel}`}>
            {/* Image */}
            <div className="vehicle-detail-card__image-col">
                <img
                    src={image}
                    alt={imageAlt}
                    className="vehicle-detail-card__image"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80';
                    }}
                />
            </div>

            {/* Content */}
            <div className="vehicle-detail-card__content">
                <div className="vehicle-detail-card__header">
                    <div>
                        <p className="vehicle-detail-card__category">{categoryLabel}</p>
                        <h3 className="vehicle-detail-card__name">{name}</h3>
                        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', marginTop: 2 }}>
                            {model}
                        </p>
                    </div>
                    <span className={`availability-tag availability-tag--${available ? 'available' : 'sample'}`}>
                        {isSampleData ? 'Sample Data' : available ? 'Available' : 'Unavailable'}
                    </span>
                </div>

                <p className="vehicle-detail-card__desc">{description}</p>

                {/* Specs */}
                <div className="vehicle-detail-card__specs">
                    <div className="vehicle-spec">
                        <span className="vehicle-spec__label">Seats</span>
                        <span className="vehicle-spec__value">
                            <Users size={12} style={{ display: 'inline', marginRight: 4 }} />
                            {seats} Passengers
                        </span>
                    </div>
                    <div className="vehicle-spec">
                        <span className="vehicle-spec__label">Transmission</span>
                        <span className="vehicle-spec__value">{transmission}</span>
                    </div>
                    <div className="vehicle-spec">
                        <span className="vehicle-spec__label">Fuel</span>
                        <span className="vehicle-spec__value">
                            <Fuel size={12} style={{ display: 'inline', marginRight: 4 }} />
                            {fuel}
                        </span>
                    </div>
                    <div className="vehicle-spec">
                        <span className="vehicle-spec__label">Air Conditioning</span>
                        <span className="vehicle-spec__value">
                            <Wind size={12} style={{ display: 'inline', marginRight: 4 }} />
                            {ac ? 'Yes' : 'No'}
                        </span>
                    </div>
                    <div className="vehicle-spec">
                        <span className="vehicle-spec__label">Luggage</span>
                        <span className="vehicle-spec__value">
                            <Luggage size={12} style={{ display: 'inline', marginRight: 4 }} />
                            {luggage}
                        </span>
                    </div>
                    <div className="vehicle-spec">
                        <span className="vehicle-spec__label">Rental Types</span>
                        <span className="vehicle-spec__value">{rentalTypes[0]}</span>
                    </div>
                </div>

                {/* Features */}
                <ul
                    style={{
                        display: 'flex', flexWrap: 'wrap', gap: '0.5rem',
                        marginBottom: '1.25rem',
                    }}
                    aria-label="Features"
                >
                    {features.map((f) => (
                        <li
                            key={f}
                            style={{
                                fontSize: 'var(--text-xs)',
                                color: 'var(--color-text-muted)',
                                border: '1px solid var(--color-border)',
                                padding: '3px 10px',
                                background: 'var(--color-bg-subtle)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 4,
                            }}
                        >
                            <CheckCircle size={11} aria-hidden="true" />
                            {f}
                        </li>
                    ))}
                </ul>

                {/* Pricing */}
                <div className="vehicle-detail-card__pricing">
                    <span className="vehicle-pricing-type">Pricing</span>
                    <p className="vehicle-pricing-value">{pricing.note}</p>
                </div>

                {isSampleData && (
                    <p style={{
                        fontSize: 'var(--text-xs)',
                        color: 'var(--color-text-faint)',
                        display: 'flex', alignItems: 'center', gap: 6,
                        marginBottom: '1rem',
                    }}>
                        <Info size={11} aria-hidden="true" />
                        Sample data — update with verified vehicle and pricing details.
                    </p>
                )}

                {/* Actions */}
                <div className="vehicle-detail-card__actions">
                    <a
                        href={`https://wa.me/${business.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary"
                        aria-label={`Enquire about ${name} via WhatsApp`}
                    >
                        Enquire via WhatsApp <ArrowRight size={14} />
                    </a>
                    <Link to="/contact" className="btn btn--secondary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </article>
    );
}

export default function Vehicles() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filtered = vehicles.filter((v) => {
        const matchCat = activeCategory === 'all' || v.category === activeCategory;
        const q = searchQuery.toLowerCase().trim();
        const matchSearch =
            !q ||
            v.name.toLowerCase().includes(q) ||
            v.model.toLowerCase().includes(q) ||
            v.categoryLabel.toLowerCase().includes(q);
        return matchCat && matchSearch;
    });

    return (
        <main className="page-main">
            <PageHero
                eyebrow="Our Fleet"
                title="Vehicles for Every Journey"
                subtitle="Well-maintained cars, SUVs, MUVs, and group travel vehicles available for local and outstation hire."
                image="/images/hero_banner.jpg"
                imageAlt="Premium SUV fleet — Sam Tours and Travels"
            />

            <section className="section" aria-label="Vehicle catalogue">
                <div className="container">
                    <div style={{ marginBottom: '1.5rem' }}>
                        <SectionHeading
                            eyebrow="Fleet Catalogue"
                            title="Browse Our Vehicles"
                            description="Select a category or search to find the right vehicle for your trip."
                        />
                    </div>

                    <VehicleFilters
                        activeCategory={activeCategory}
                        onCategoryChange={setActiveCategory}
                        searchQuery={searchQuery}
                        onSearchChange={setSearchQuery}
                    />

                    {filtered.length === 0 ? (
                        <div className="vehicles-empty" role="status" aria-live="polite">
                            <CarFront size={36} className="vehicles-empty__icon" aria-hidden="true" />
                            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>No vehicles found</p>
                            <p style={{ fontSize: 'var(--text-sm)' }}>
                                Try a different category or clear your search.
                            </p>
                        </div>
                    ) : (
                        <div className="vehicles-grid--detail" role="list" aria-live="polite">
                            {filtered.map((vehicle) => (
                                <VehicleDetailCard key={vehicle.id} vehicle={vehicle} />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="section section--subtle" style={{ borderTop: '1px solid var(--color-border)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2
                        style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            fontWeight: 900,
                            letterSpacing: '-0.025em',
                            marginBottom: '1rem',
                        }}
                    >
                        Not sure which vehicle to choose?
                    </h2>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', maxWidth: 480, margin: '0 auto 2rem' }}>
                        Tell us about your travel plans and we'll help you pick the most suitable option.
                    </p>
                    <Link to="/contact" className="btn btn--primary btn--lg">
                        Get a Recommendation
                    </Link>
                </div>
            </section>
        </main>
    );
}
