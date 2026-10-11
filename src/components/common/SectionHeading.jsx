/**
 * SectionHeading.jsx
 * Reusable section heading with optional eyebrow label, title, and description.
 */
export default function SectionHeading({
    eyebrow,
    title,
    description,
    center = false,
    light = false,
    className = '',
}) {
    return (
        <div
            className={[
                'section-heading',
                center ? 'section-heading--center' : '',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
        >
            {eyebrow && (
                <span
                    className={`section-heading__eyebrow${light ? ' section-heading__eyebrow--light' : ''}`}
                >
                    {eyebrow}
                </span>
            )}
            {title && (
                <h2 className="section-heading__title" style={{ color: light ? '#fff' : undefined }}>
                    {title}
                </h2>
            )}
            {description && (
                <p className="section-heading__desc" style={{ color: light ? 'rgba(255,255,255,0.5)' : undefined }}>
                    {description}
                </p>
            )}
        </div>
    );
}
