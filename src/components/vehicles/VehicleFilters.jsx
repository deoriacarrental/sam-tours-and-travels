import { vehicleCategories } from '../../data/vehicles';

/**
 * VehicleFilters.jsx
 * Category filter buttons + search for the Vehicles page.
 */
export default function VehicleFilters({
    activeCategory,
    onCategoryChange,
    searchQuery,
    onSearchChange,
}) {
    return (
        <div className="vehicles-filters" role="group" aria-label="Filter vehicles">
            <span className="vehicles-filters__label">Filter:</span>
            {vehicleCategories.map(({ id, label }) => (
                <button
                    key={id}
                    className={`filter-btn${activeCategory === id ? ' filter-btn--active' : ''}`}
                    onClick={() => onCategoryChange(id)}
                    aria-pressed={activeCategory === id}
                    id={`vehicle-filter-${id}`}
                >
                    {label}
                </button>
            ))}
            <div className="vehicles-search">
                <input
                    type="search"
                    id="vehicle-search"
                    className="vehicles-search__input"
                    placeholder="Search vehicles…"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    aria-label="Search vehicles by name"
                />
            </div>
        </div>
    );
}
