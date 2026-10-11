import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import TripCard from '../trips/TripCard';
import { trips } from '../../data/trips';

/**
 * FeaturedTrips.jsx — Home page featured destinations section.
 */
export default function FeaturedTrips() {
    const featured = trips.filter((t) => t.isFeatured).slice(0, 3);

    return (
        <section className="section" aria-label="Featured trips and destinations">
            <div className="container">
                <div className="featured-vehicles__header">
                    <SectionHeading
                        eyebrow="Destinations"
                        title="Popular Trips &amp; Tours"
                        description="Carefully selected destinations for weekend getaways, family holidays, and group outings."
                    />
                    <Link to="/trips" className="btn btn--secondary" aria-label="Explore all trips">
                        Explore All Trips <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid-3">
                    {featured.map((trip) => (
                        <TripCard key={trip.id} trip={trip} />
                    ))}
                </div>
            </div>
        </section>
    );
}
