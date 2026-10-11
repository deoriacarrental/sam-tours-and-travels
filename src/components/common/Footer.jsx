import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight } from 'lucide-react';
import { business } from '../../data/business';
import '../../styles/footer.css';

// Simple inline social icons (lucide-react v0.x doesn't include brand icons)
const FbIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);
const IgIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
);
const YtIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-1.96C18.88 4 12 4 12 4s-6.88 0-8.6.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 1.95C5.12 20 12 20 12 20s6.88 0 8.6-.47a2.78 2.78 0 0 0 1.94-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon fill="#fff" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
);

const navLinks = [
    { to: '/',         label: 'Home' },
    { to: '/about',    label: 'About Us' },
    { to: '/vehicles', label: 'Our Fleet' },
    { to: '/trips',    label: 'Trips & Tours' },
    { to: '/contact',  label: 'Contact' },
];

const serviceLinks = [
    'Car Rental',
    'Outstation Travel',
    'Local Sightseeing',
    'Airport Transfers',
    'Corporate Travel',
    'Pilgrimage Tours',
];

export default function Footer() {
    const year = new Date().getFullYear();
    const whatsappMsg = encodeURIComponent(
        'Hello, I would like to enquire about your travel services.'
    );

    return (
        <footer className="footer" role="contentinfo">
            <div className="footer__top">
                {/* ── Brand ── */}
                <div>
                    <p className="footer__brand-name">Sam Tours &amp; Travels</p>
                    <p className="footer__brand-desc">
                        Reliable car rentals, comfortable outstation journeys, and thoughtfully
                        planned travel experiences — all in one place.
                    </p>
                    {/* WhatsApp */}
                    <a
                        href={`https://wa.me/${business.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer__whatsapp"
                        aria-label="Chat on WhatsApp"
                    >
                        <MessageCircle size={16} />
                        Chat on WhatsApp
                        <ArrowUpRight size={14} />
                    </a>

                    {/* Social icons */}
                    {(business.social.facebook || business.social.instagram || business.social.youtube) && (
                        <div className="footer__social" style={{ marginTop: '1.5rem' }}>
                            {business.social.facebook && (
                                <a href={business.social.facebook} target="_blank" rel="noopener noreferrer"
                                   className="footer__social-link" aria-label="Facebook">
                                    <FbIcon />
                                </a>
                            )}
                            {business.social.instagram && (
                                <a href={business.social.instagram} target="_blank" rel="noopener noreferrer"
                                   className="footer__social-link" aria-label="Instagram">
                                    <IgIcon />
                                </a>
                            )}
                            {business.social.youtube && (
                                <a href={business.social.youtube} target="_blank" rel="noopener noreferrer"
                                   className="footer__social-link" aria-label="YouTube">
                                    <YtIcon />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {/* ── Navigation ── */}
                <div>
                    <p className="footer__col-title">Navigation</p>
                    <nav className="footer__nav" aria-label="Footer navigation">
                        {navLinks.map(({ to, label }) => (
                            <Link key={to} to={to} className="footer__nav-link">
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* ── Services ── */}
                <div>
                    <p className="footer__col-title">Services</p>
                    <nav className="footer__nav" aria-label="Services">
                        {serviceLinks.map((s) => (
                            <Link key={s} to="/vehicles" className="footer__nav-link">
                                {s}
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* ── Contact ── */}
                <div>
                    <p className="footer__col-title">Get in Touch</p>
                    <ul className="footer__contact-list">
                        <li className="footer__contact-item">
                            <Phone size={14} aria-hidden="true" />
                            <span>
                                <a href={`tel:${business.phoneRaw}`}>{business.phone}</a>
                            </span>
                        </li>
                        <li className="footer__contact-item">
                            <Mail size={14} aria-hidden="true" />
                            <span>
                                <a href={`mailto:${business.email}`}>{business.email}</a>
                            </span>
                        </li>
                        <li className="footer__contact-item">
                            <MapPin size={14} aria-hidden="true" />
                            <span>
                                {business.google.mapsUrl ? (
                                    <a href={business.google.mapsUrl} target="_blank" rel="noopener noreferrer">
                                        {business.address.full}
                                    </a>
                                ) : (
                                    business.address.full
                                )}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div style={{ borderTop: '1px solid #2A2A2A' }}>
                <div className="footer__bottom container">
                    <p className="footer__copy">
                        &copy; {year} Sam Tours and Travels. All rights reserved.
                    </p>
                    <div className="footer__legal">
                        <span className="footer__legal-link">Privacy Policy</span>
                        <span className="footer__legal-link">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
