/**
 * PageHero.jsx
 * Reusable full-width editorial page hero with image, eyebrow, title, subtitle.
 */
export default function PageHero({ eyebrow, title, subtitle, image, imageAlt }) {
    return (
        <section className="page-hero" aria-label={`${title} — page hero`}>
            {image && (
                <img
                    src={image}
                    alt={imageAlt || `${title} — Sam Tours and Travels`}
                    className="page-hero__image"
                    loading="eager"
                    fetchPriority="high"
                />
            )}
            <div className="page-hero__content container">
                {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
                <h1 className="page-hero__title">{title}</h1>
                {subtitle && <p className="page-hero__subtitle">{subtitle}</p>}
            </div>
        </section>
    );
}
