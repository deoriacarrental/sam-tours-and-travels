import { tripCategories } from '../../data/trips';

/**
 * TripFilters.jsx
 * Category filter buttons for the Trips page.
 */
export default function TripFilters({ activeCategory, onCategoryChange }) {
    return (
        <div className="trips-filter-bar" role="group" aria-label="Filter trips by category">
            <span className="vehicles-filters__label">Category:</span>
            {tripCategories.map(({ id, label }) => (
                <button
                    key={id}
                    className={`filter-btn${activeCategory === id ? ' filter-btn--active' : ''}`}
                    onClick={() => onCategoryChange(id)}
                    aria-pressed={activeCategory === id}
                    id={`trip-filter-${id}`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}
