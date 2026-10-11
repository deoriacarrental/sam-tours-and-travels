import { Clock, MapPin, ArrowRight } from 'lucide-react';
import { business } from '../../data/business';

/**
 * TripCard.jsx
 * Compact trip card for home featured trips and trips grid.
 */
export default function TripCard({ trip }) {
    const {
        name, destination, duration, image, imageAlt,
        attractions, pricing, categoryLabel,
    } = trip;

    const whatsappMsg = encodeURIComponent(
        `Hello, I am interested in the "${name}" trip. Please share details and availability.`
    );
    const whatsappNumber = business.whatsapp;

    return (
        <article className="trip-card" aria-label={name}>
            <div className="trip-card__image-wrap">
                <img
                    src={image}
                    alt={imageAlt || `${destination} — trip destination`}
                    className="trip-card__image"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80';
                    }}
                />
                <div className="trip-card__overlay">
                    <span className="trip-card__duration">
                        <Clock size={11} style={{ display: 'inline', marginRight: 4 }} />
                        {duration}
                    </span>
                </div>
            </div>

            <div className="trip-card__body">
                <p className="trip-card__destination">
                    <MapPin size={11} style={{ display: 'inline', marginRight: 4 }} />
                    {destination}
                </p>
                <h3 className="trip-card__name">{name}</h3>
                <p className="trip-card__attractions">
                    {attractions.slice(0, 3).join(' · ')}
                </p>

                <div className="trip-card__footer">
                    <span className="trip-card__price">
                        {pricing.type === 'quote' ? 'Quote on Request' : pricing.note}
                    </span>
                    <a
                        href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--sm"
                        aria-label={`Enquire about ${name}`}
                    >
                        Enquire <ArrowRight size={12} />
                    </a>
                </div>
            </div>
        </article>
    );
}
