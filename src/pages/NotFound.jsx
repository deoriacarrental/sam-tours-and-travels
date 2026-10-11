import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <main
            className="page-main"
            style={{
                minHeight: '80vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4rem 2rem',
                textAlign: 'center',
            }}
        >
            <div>
                <p
                    style={{
                        fontSize: '6rem',
                        fontWeight: 900,
                        letterSpacing: '-0.05em',
                        lineHeight: 1,
                        color: 'var(--color-bg-subtle)',
                        marginBottom: '0.5rem',
                        userSelect: 'none',
                    }}
                    aria-hidden="true"
                >
                    404
                </p>
                <h1
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        fontWeight: 900,
                        letterSpacing: '-0.025em',
                        marginBottom: '1rem',
                    }}
                >
                    Page Not Found
                </h1>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', maxWidth: 400, margin: '0 auto 2.5rem' }}>
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/" className="btn btn--primary">
                        Go to Home
                    </Link>
                    <Link to="/contact" className="btn btn--secondary">
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}
