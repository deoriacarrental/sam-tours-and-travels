import { useState } from 'react';
import {
    Phone, Mail, MapPin, MessageCircle,
    Clock, Plus, ExternalLink,
} from 'lucide-react';
import '../styles/contact.css';
import PageHero from '../components/common/PageHero';
import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/contact/ContactForm';
import LocationMap from '../components/home/LocationMap';
import { business } from '../data/business';

const faqs = [
    {
        q: 'How do I book a vehicle or plan a trip?',
        a: 'You can reach us via phone, WhatsApp, or the contact form on this page. Share your travel details — pickup location, destination, dates, and number of passengers — and we will respond with availability and pricing.',
    },
    {
        q: 'Do you offer one-way outstation trips?',
        a: 'Yes. We offer both one-way and round-trip outstation travel. Pricing may vary based on the type of journey. Please enquire for specific rates.',
    },
    {
        q: 'Are drivers included with the vehicle?',
        a: 'Yes. All our vehicles come with a professional driver. We do not offer self-drive rentals.',
    },
    {
        q: 'What is included in the rental price?',
        a: 'The vehicle and driver are included. Toll charges, parking fees, state permits, and driver meal and accommodation (for outstation trips) may be additional. All inclusions are clarified at the time of booking.',
    },
    {
        q: 'Can I book a tempo traveller for a group trip?',
        a: 'Yes. We offer tempo travellers suitable for groups. Please contact us with your group size, destination, and dates so we can suggest the right vehicle.',
    },
    {
        q: 'Is there a minimum booking distance or duration?',
        a: 'For local travel, minimum package durations may apply. For outstation travel, charges are typically based on distance and days. Contact us to confirm the specifics for your trip.',
    },
    {
        q: 'How far in advance should I book?',
        a: 'We recommend booking at least 24–48 hours in advance for standard trips, and earlier for multi-day tours or large group travel during peak seasons.',
    },
    {
        q: 'Can you plan a custom itinerary?',
        a: 'Yes. If you have a specific destination or route in mind that is not listed on our Trips page, please contact us and we will help you plan a suitable arrangement.',
    },
];

function FaqItem({ question, answer }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`faq-item${open ? ' faq-item--open' : ''}`}>
            <button
                className="faq-item__question"
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                id={`faq-${question.slice(0, 20).replace(/\s/g, '-')}`}
            >
                {question}
                <Plus size={18} className="faq-item__icon" aria-hidden="true" />
            </button>
            <div
                className="faq-item__answer"
                role="region"
                aria-hidden={!open}
            >
                {answer}
            </div>
        </div>
    );
}

export default function Contact() {
    const whatsappMsg = encodeURIComponent(
        'Hello, I would like to make a travel or car rental enquiry.'
    );

    return (
        <main className="page-main">
            <PageHero
                eyebrow="Contact"
                title="Get in Touch"
                subtitle="Reach us by phone, WhatsApp, or the form below — we're ready to help you plan your journey."
                image="/images/road_experience.jpg"
                imageAlt="Highway stretching to the horizon — contact Sam Tours and Travels"
            />

            {/* ── Main contact grid ── */}
            <section className="section" aria-label="Contact information and form">
                <div className="container">
                    <div className="contact-grid">
                        {/* Info column */}
                        <aside className="contact-info-col">
                            <h2 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                                Contact Details
                            </h2>
                            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
                                Multiple ways to reach us — use whichever is most convenient.
                            </p>

                            <ul className="contact-info-list">
                                <li className="contact-info-item">
                                    <Phone size={18} className="contact-info-item__icon" aria-hidden="true" />
                                    <div>
                                        <p className="contact-info-item__label">Phone</p>
                                        <p className="contact-info-item__value">
                                            <a href={`tel:${business.phoneRaw}`}>{business.phone}</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="contact-info-item">
                                    <MessageCircle size={18} className="contact-info-item__icon" aria-hidden="true" />
                                    <div>
                                        <p className="contact-info-item__label">WhatsApp</p>
                                        <p className="contact-info-item__value">
                                            <a
                                                href={`https://wa.me/${business.whatsapp}?text=${whatsappMsg}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {business.phone}
                                            </a>
                                        </p>
                                    </div>
                                </li>
                                <li className="contact-info-item">
                                    <Mail size={18} className="contact-info-item__icon" aria-hidden="true" />
                                    <div>
                                        <p className="contact-info-item__label">Email</p>
                                        <p className="contact-info-item__value">
                                            <a href={`mailto:${business.email}`}>{business.email}</a>
                                        </p>
                                    </div>
                                </li>
                                <li className="contact-info-item">
                                    <MapPin size={18} className="contact-info-item__icon" aria-hidden="true" />
                                    <div>
                                        <p className="contact-info-item__label">Address</p>
                                        <p className="contact-info-item__value">{business.address.full}</p>
                                    </div>
                                </li>
                            </ul>

                            {/* Operating hours */}
                            <div className="contact-hours">
                                <p className="contact-hours__title">
                                    <Clock size={12} style={{ display: 'inline', marginRight: 6 }} />
                                    Operating Hours
                                </p>
                                {business.hours.map(({ days, time }) => (
                                    <div key={days} className="contact-hours__row">
                                        <span>{days}</span>
                                        <span style={{ fontWeight: 500 }}>{time}</span>
                                    </div>
                                ))}
                            </div>

                            {/* WhatsApp CTA */}
                            <a
                                href={`https://wa.me/${business.whatsapp}?text=${whatsappMsg}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-whatsapp"
                                id="contact-whatsapp-btn"
                                aria-label="Chat on WhatsApp"
                            >
                                <MessageCircle size={18} aria-hidden="true" />
                                <span>
                                    <strong style={{ display: 'block', fontSize: 'var(--text-sm)' }}>
                                        Chat on WhatsApp
                                    </strong>
                                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-faint)' }}>
                                        Fastest response
                                    </span>
                                </span>
                                <ExternalLink size={14} style={{ marginLeft: 'auto' }} aria-hidden="true" />
                            </a>
                        </aside>

                        {/* Form column */}
                        <div className="contact-form-col">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Map ── */}
            <LocationMap />

            {/* ── FAQ ── */}
            <section className="section" aria-label="Frequently asked questions">
                <div className="container">
                    <SectionHeading
                        eyebrow="FAQs"
                        title="Frequently Asked Questions"
                        description="Answers to the most common questions about our car rental and travel services."
                    />
                    <div className="faq-list" style={{ maxWidth: 800 }}>
                        {faqs.map(({ q, a }) => (
                            <FaqItem key={q} question={q} answer={a} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
