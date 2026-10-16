import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import VehicleCard from '../vehicles/VehicleCard';
import { vehicles } from '../../data/vehicles';

/**
 * FeaturedVehicles.jsx — Home page featured fleet section.
 */
export default function FeaturedVehicles() {
    const featured = [
        ...vehicles.filter((vehicle) => vehicle.isFeatured),
        ...vehicles.filter((vehicle) => !vehicle.isFeatured),
    ].slice(0, 3);

    return (
        <section className="section featured-vehicles" aria-label="Featured vehicles">
            <div className="container">
                <div className="featured-vehicles__header">
                    <SectionHeading
                        eyebrow="Our Fleet"
                        title="Vehicles for Every Journey"
                        description="A carefully maintained fleet for local city travel, outstation journeys, and group trips."
                    />
                    <Link to="/vehicles" className="btn btn--secondary" aria-label="View all vehicles">
                        View All Vehicles <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid-3">
                    {featured.map((vehicle) => (
                        <VehicleCard key={vehicle.id} vehicle={vehicle} />
                    ))}
                </div>
            </div>
        </section>
    );
}
