import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { business } from '../../data/business';

/**
 * LocationMap.jsx
 * Embeds a Google Maps iframe — no API key required.
 *
 * To configure:
 *   1. Go to maps.google.com → find your business → Share → "Embed a map"
 *   2. Copy the src="..." value from the <iframe> code
 *   3. Paste it into business.google.iframeUrl in src/data/business.js
 */
export default function LocationMap() {
    const { iframeUrl, mapsUrl } = business.google;

    return (
        <section className="section--compact map-section" aria-label="Business location">
            <div
                className="map-section__grid"
                style={{
                    maxWidth: 'var(--max-width)',
                    margin: '0 auto',
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                }}
            >
                {/* ── Info panel ── */}
                <div className="map-section__info">
                    <p style={{
                        fontSize: 'var(--text-xs)',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: 'var(--color-text-muted)',
                        marginBottom: '0.5rem',
                    }}>
                        Find Us
                    </p>
                    <h2 style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.02em',
                        marginBottom: '1.5rem',
                    }}>
                        Our Location
                    </h2>

                    <div className="map-section__detail">
                        <MapPin size={16} aria-hidden="true" />
                        <span>{business.address.full}</span>
                    </div>
                    <div className="map-section__detail" style={{ marginTop: '0.75rem' }}>
                        <Phone size={16} aria-hidden="true" />
                        <a
                            href={`tel:${business.phoneRaw}`}
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            {business.phone}
                        </a>
                    </div>

                    {mapsUrl && (
                        <div style={{ marginTop: '1.5rem' }}>
                            <a
                                href={mapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary btn--sm"
                                aria-label="Get directions on Google Maps"
                            >
                                Get Directions <ExternalLink size={12} />
                            </a>
                        </div>
                    )}
                </div>

                {/* ── Map embed ── */}
                <div className="map-section__embed">
                    {iframeUrl ? (
                        <iframe
                            src={iframeUrl}
                            title="Sam Tours and Travels — Google Maps location"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            style={{ width: '100%', height: '100%', minHeight: 420, border: 'none', filter: 'grayscale(100%)' }}
                        />
                    ) : (
                        /* Placeholder shown until iframeUrl is configured */
                        <div className="map-placeholder" style={{ minHeight: 420 }}>
                            <div style={{ textAlign: 'center', padding: '2rem' }}>
                                <MapPin size={28} style={{ margin: '0 auto 0.75rem', opacity: 0.3 }} />
                                <p style={{ fontWeight: 600, marginBottom: '0.75rem' }}>
                                    Map Not Yet Configured
                                </p>
                                <p style={{ fontSize: 'var(--text-xs)', maxWidth: 300, margin: '0 auto 1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                                    To add the map:
                                </p>
                                <ol style={{ fontSize: 'var(--text-xs)', textAlign: 'left', maxWidth: 280, margin: '0 auto', color: 'var(--color-text-muted)', lineHeight: 2 }}>
                                    <li>1. Open <strong>maps.google.com</strong></li>
                                    <li>2. Search your business name</li>
                                    <li>3. Click <strong>Share → Embed a map</strong></li>
                                    <li>4. Copy the <code>src="…"</code> URL</li>
                                    <li>5. Paste into <strong>business.google.iframeUrl</strong></li>
                                </ol>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
