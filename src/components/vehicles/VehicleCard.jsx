import { Link } from 'react-router-dom';
import { Users, Luggage, Wind, ArrowRight } from 'lucide-react';
import { business } from '../../data/business';

/**
 * VehicleCard.jsx
 * Compact vehicle card for the home page Featured Vehicles section and vehicles grid.
 */
export default function VehicleCard({ vehicle }) {
    const { id, name, categoryLabel, image, imageAlt, seats, ac, transmission, pricing } = vehicle;

    const whatsappMsg = encodeURIComponent(
        `Hello, I am interested in enquiring about the ${name}. Please share availability and rates.`
    );
    const whatsappNumber = business.whatsapp;

    return (
        <article className="vehicle-card" aria-label={name}>
            <div className="vehicle-card__image-wrap">
                <img
                    src={image}
                    alt={imageAlt || `${name} — available for rental`}
                    className="vehicle-card__image"
                    loading="lazy"
                    onError={(e) => {
                        e.currentTarget.src =
                            'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80';
                    }}
                />
                <span className="vehicle-card__badge">{categoryLabel}</span>
            </div>

            <div className="vehicle-card__body">
                <p className="vehicle-card__category">{categoryLabel}</p>
                <h3 className="vehicle-card__name">{name}</h3>

                <div className="vehicle-card__specs">
                    <span className="vehicle-card__spec">
                        <Users size={13} aria-hidden="true" />
                        {seats} Seats
                    </span>
                    {ac && (
                        <span className="vehicle-card__spec">
                            <Wind size={13} aria-hidden="true" />
                            AC
                        </span>
                    )}
                    {transmission && (
                        <span className="vehicle-card__spec">
                            <Luggage size={13} aria-hidden="true" />
                            {transmission}
                        </span>
                    )}
                </div>

                <div className="vehicle-card__footer">
                    <span className="vehicle-card__price">
                        {pricing.type === 'quote' ? 'Request a Quote' : pricing.note}
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
