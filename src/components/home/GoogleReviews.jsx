import { Star, ExternalLink } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { testimonials, ratingsSummary } from '../../data/testimonials';
import { business } from '../../data/business';

/**
 * GoogleReviews.jsx
 * Renders reviews directly from the JSON data in src/data/testimonials.js.
 * No API key or external service required.
 *
 * To update reviews:
 *   Edit the testimonials array in src/data/testimonials.js
 */

function StarRating({ rating, size = 14 }) {
    return (
        <div
            className="review-card__stars"
            aria-label={`${rating} out of 5 stars`}
            role="img"
        >
            {Array.from({ length: 5 }, (_, i) => (
                <Star
                    key={i}
                    size={size}
                    fill={i < rating ? 'currentColor' : 'none'}
                    strokeWidth={1.5}
                />
            ))}
        </div>
    );
}

export default function GoogleReviews() {
    const { average, total, source } = ratingsSummary;

    return (
        <section className="section" aria-label="Customer reviews">
            <div className="container">

                {/* ── Header row ── */}
                <div style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: '1.5rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap',
                }}>
                    <div>
                        <SectionHeading
                            eyebrow="Customer Reviews"
                            title="What Our Customers Say"
                        />

                        {/* Overall rating badge */}
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            marginTop: '1rem',
                        }}>
                            <span style={{
                                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                                fontWeight: 900,
                                letterSpacing: '-0.03em',
                                lineHeight: 1,
                            }}>
                                {average.toFixed(1)}
                            </span>
                            <div>
                                <StarRating rating={Math.round(average)} size={16} />
                                <p style={{
                                    fontSize: 'var(--text-xs)',
                                    color: 'var(--color-text-muted)',
                                    marginTop: '4px',
                                    letterSpacing: '0.04em',
                                }}>
                                    Based on {total}+ {source} reviews
                                </p>
                            </div>
                        </div>
                    </div>

                    {business.google.reviewsUrl && (
                        <a
                            href={business.google.reviewsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn--secondary btn--sm"
                            aria-label="View all reviews on Google"
                        >
                            View All Reviews <ExternalLink size={12} />
                        </a>
                    )}
                </div>

                {/* ── Reviews grid ── */}
                <div className="reviews__grid">
                    {testimonials.map((review) => (
                        <article
                            key={review.id}
                            className="review-card"
                            aria-label={`Review by ${review.name}`}
                        >
                            <div className="review-card__header">
                                <div className="review-card__avatar" aria-hidden="true">
                                    {review.initial}
                                </div>
                                <div className="review-card__meta">
                                    <p className="review-card__name">{review.name}</p>
                                    <p className="review-card__date">{review.date}</p>
                                </div>
                            </div>

                            <StarRating rating={review.rating} />

                            <p className="review-card__text">{review.text}</p>
                        </article>
                    ))}
                </div>

                {/* ── Google attribution ── */}
                <p className="reviews__google-note" style={{ marginTop: '2.5rem' }}>
                    <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_16dp.png"
                        alt="Google"
                        width={16}
                        height={16}
                        loading="lazy"
                    />
                    Reviews sourced from Google Business Profile
                    {business.google.reviewsUrl && (
                        <a
                            href={business.google.reviewsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--color-text-muted)',
                                textDecoration: 'underline',
                                marginLeft: '0.25rem',
                            }}
                        >
                            · See more
                        </a>
                    )}
                </p>
            </div>
        </section>
    );
}
