import { Link } from 'react-router-dom';
import {
    Shield, Zap, Heart, Clock, Users, Star,
    MapPin, CheckCircle,
} from 'lucide-react';
import '../styles/about.css';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';

const services = [
    {
        icon: <MapPin size={24} strokeWidth={1.5} />,
        title: 'Local City Travel',
        desc: 'Comfortable and timely rides within the city — for errands, commutes, events, and appointments.',
    },
    {
        icon: <Shield size={24} strokeWidth={1.5} />,
        title: 'Airport Transfers',
        desc: 'Stress-free airport pickups and drops with flight tracking and punctual service.',
    },
    {
        icon: <Users size={24} strokeWidth={1.5} />,
        title: 'Outstation Travel',
        desc: 'Long-distance journeys to popular destinations with experienced outstation drivers.',
    },
    {
        icon: <Star size={24} strokeWidth={1.5} />,
        title: 'Tour Packages',
        desc: 'Thoughtfully planned day trips and multi-day tours to scenic destinations.',
    },
    {
        icon: <Heart size={24} strokeWidth={1.5} />,
        title: 'Pilgrimages',
        desc: 'Comfortable, organised travel to religious destinations for individuals and groups.',
    },
    {
        icon: <Zap size={24} strokeWidth={1.5} />,
        title: 'Corporate Travel',
        desc: 'Professional, punctual travel solutions for teams, meetings, and conferences.',
    },
];

const pillars = [
    {
        icon: <Shield size={20} strokeWidth={1.5} />,
        title: 'Safety First',
        text: 'All vehicles are regularly inspected and maintained. Drivers follow safe, responsible driving practices on every journey.',
    },
    {
        icon: <Clock size={20} strokeWidth={1.5} />,
        title: 'Punctuality',
        text: 'We understand that your time is valuable. On-time arrival and departure are taken seriously on every booking.',
    },
    {
        icon: <Heart size={20} strokeWidth={1.5} />,
        title: 'Customer Care',
        text: 'Travel plans can change. We approach every request and adjustment with patience and a genuine desire to help.',
    },
    {
        icon: <Star size={20} strokeWidth={1.5} />,
        title: 'Honest Dealings',
        text: 'No hidden charges. No misleading promises. Clear communication from the first enquiry to the final journey.',
    },
];

const whyPoints = [
    {
        title: 'Experienced Drivers',
        desc: 'Professional, courteous drivers who know the routes and prioritise your comfort.',
    },
    {
        title: 'Well-Maintained Fleet',
        desc: 'Vehicles cleaned before every trip and regularly serviced to ensure reliability.',
    },
    {
        title: 'Transparent Pricing',
        desc: 'We provide honest quotes with no surprise additions after the journey.',
    },
    {
        title: 'Flexible Arrangements',
        desc: 'One-way trips, round trips, multi-day hires — we work around your schedule.',
    },
    {
        title: 'Responsive Support',
        desc: 'Reach us via phone or WhatsApp for quick responses to your questions and changes.',
    },
];

export default function About() {
    return (
        <main className="page-main">
            {/* Hero */}
            <PageHero
                eyebrow="About Us"
                title="Travel That Puts You First"
                subtitle="Dependable transportation and thoughtfully planned travel — for individuals, families, and groups."
                image="/images/about_hero.jpg"
                imageAlt="White sedan on a coastal mountain road"
            />

            {/* ── Company Introduction ── */}
            <section className="section" aria-label="Company introduction">
                <div className="container">
                    <div className="about-intro__grid">
                        <div className="about-intro__content">
                            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
                                Who We Are
                            </span>
                            <h2
                                style={{
                                    fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.025em',
                                    lineHeight: 1.05,
                                    marginBottom: '1.5rem',
                                }}
                            >
                                Sam Tours and Travels
                            </h2>
                            <p className="about-intro__text">
                                Sam Tours and Travels is a dedicated travel service provider offering
                                reliable car rental, outstation travel, and tour arrangements for
                                individuals, families, and corporate groups.
                            </p>
                            <p className="about-intro__text">
                                We are focused on making every journey — from a simple city pickup to
                                a multi-day outstation trip — feel smooth, safe, and well-organised.
                                Our service is built on honest communication, careful vehicle
                                maintenance, and a commitment to customer satisfaction.
                            </p>
                            <p className="about-intro__text">
                                Whether you need an airport transfer, a comfortable ride for a
                                religious pilgrimage, or a fully planned weekend getaway, we are here
                                to help you travel without the stress.
                            </p>
                            <Link to="/contact" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                                Make an Enquiry
                            </Link>
                        </div>

                        <div className="about-intro__image-wrap">
                            <img
                                src="/images/trips_hero.jpg"
                                alt="Mountain roads — the kind of journey Sam Tours and Travels makes comfortable"
                                className="about-intro__image"
                                loading="lazy"
                            />
                            <span className="about-intro__caption">
                                Every journey, carefully handled
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Mission & Pillars ── */}
            <section className="section about-mission" aria-label="Mission and values">
                <div className="container">
                    <div className="about-mission__grid">
                        <div>
                            <span
                                className="eyebrow"
                                style={{
                                    display: 'block',
                                    marginBottom: '1rem',
                                    color: 'rgba(255,255,255,0.4)',
                                }}
                            >
                                Our Mission
                            </span>
                            <h2 className="about-mission__title">
                                Comfortable journeys, dependable service, honest care.
                            </h2>
                            <p className="about-mission__text">
                                Our mission is simple: to provide travel services that people can
                                rely on. We aim to offer consistent, professional, and comfortable
                                transportation that removes the uncertainty and stress from travel.
                            </p>
                            <p className="about-mission__text">
                                We believe in straightforward dealings — clear pricing, accurate
                                information, and genuine assistance — so our customers can focus on
                                their journey rather than worrying about the details.
                            </p>
                        </div>
                        <div>
                            <p
                                style={{
                                    fontSize: 'var(--text-xs)',
                                    fontWeight: 600,
                                    letterSpacing: '0.2em',
                                    textTransform: 'uppercase',
                                    color: 'rgba(255,255,255,0.35)',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                Our Principles
                            </p>
                            <div className="about-pillars">
                                {pillars.map(({ icon, title, text }) => (
                                    <div key={title} className="about-pillar">
                                        <span className="about-pillar__icon" aria-hidden="true">{icon}</span>
                                        <div>
                                            <p className="about-pillar__title">{title}</p>
                                            <p className="about-pillar__text">{text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services ── */}
            <section className="section" aria-label="Services offered">
                <div className="container">
                    <SectionHeading
                        eyebrow="What We Offer"
                        title="Our Travel Services"
                        description="A range of dependable travel solutions for every occasion and group size."
                        center
                    />
                    <div className="about-services__grid">
                        {services.map(({ icon, title, desc }) => (
                            <div key={title} className="about-service-item">
                                <div className="about-service-item__icon" aria-hidden="true">{icon}</div>
                                <h3 className="about-service-item__title">{title}</h3>
                                <p className="about-service-item__desc">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ── */}
            <section className="section section--subtle" aria-label="Why choose Sam Tours and Travels">
                <div className="container">
                    <div className="about-why__grid">
                        <div className="about-why__image-col">
                            <img
                                src="/images/hero_banner.jpg"
                                alt="Premium SUV on mountain highway — representing the Sam Tours and Travels fleet"
                                className="about-why__image"
                                loading="lazy"
                            />
                        </div>
                        <div className="about-why__content-col">
                            <span className="eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
                                Why Choose Us
                            </span>
                            <h2
                                style={{
                                    fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                                    fontWeight: 900,
                                    letterSpacing: '-0.025em',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                Travel you can count on.
                            </h2>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7, fontSize: 'var(--text-base)' }}>
                                We focus on the fundamentals — dependable vehicles, professional
                                drivers, and honest service — to give you a travel experience you
                                can trust.
                            </p>
                            <ul className="about-why__list">
                                {whyPoints.map(({ title, desc }) => (
                                    <li key={title} className="about-why__list-item">
                                        <CheckCircle size={16} className="about-why__check" aria-hidden="true" />
                                        <div className="about-why__item-text">
                                            <p className="about-why__item-title">{title}</p>
                                            <p className="about-why__item-desc">{desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem', flexWrap: 'wrap' }}>
                                <Link to="/vehicles" className="btn btn--primary">
                                    View Our Fleet
                                </Link>
                                <Link to="/contact" className="btn btn--secondary">
                                    Contact Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
