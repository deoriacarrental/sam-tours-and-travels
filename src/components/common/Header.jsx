import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import '../../styles/header.css';

const navLinks = [
    { to: '/',         label: 'Home' },
    { to: '/about',    label: 'About' },
    { to: '/vehicles', label: 'Vehicles' },
    { to: '/trips',    label: 'Trips' },
    { to: '/contact',  label: 'Contact' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location  = useLocation();
    const headerRef = useRef(null);
    const drawerRef = useRef(null);

    // Scroll detection for shadow
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    // Close on outside tap/click — check BOTH header and drawer refs
    useEffect(() => {
        if (!menuOpen) return;

        const handler = (e) => {
            const inHeader = headerRef.current?.contains(e.target);
            const inDrawer = drawerRef.current?.contains(e.target);
            if (!inHeader && !inDrawer) {
                setMenuOpen(false);
            }
        };

        // Use both mousedown (desktop) and touchstart (mobile)
        document.addEventListener('mousedown', handler, { passive: true });
        document.addEventListener('touchstart', handler, { passive: true });
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler);
        };
    }, [menuOpen]);

    // Lock body scroll when drawer is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    const close = () => setMenuOpen(false);
    const toggle = () => setMenuOpen((o) => !o);

    return (
        <>
            <header
                ref={headerRef}
                className={`header${scrolled ? ' header--scrolled' : ''}`}
            >
                <div className="header__inner">
                    {/* Brand */}
                    <Link
                        to="/"
                        className="header__brand"
                        aria-label="Sam Tours and Travels — Home"
                        onClick={close}
                    >
                        <img width={40} src="/favicon.svg" alt="Sam Tours and Travels logo" />
                        <span className="header__brand-name">Sam Tours &amp; Travels</span>
                    </Link>

                    {/* Desktop nav */}
                    <nav className="header__nav" aria-label="Main navigation">
                        {navLinks.map(({ to, label }) => (
                            <NavLink
                                key={to}
                                to={to}
                                end={to === '/'}
                                className={({ isActive }) =>
                                    `nav__link${isActive ? ' nav__link--active' : ''}`
                                }
                            >
                                {label}
                            </NavLink>
                        ))}
                    </nav>

                    {/* CTA + hamburger */}
                    <div className="header__cta">
                        <Link to="/contact" className="btn btn--primary btn--sm">
                            Book a Ride
                        </Link>

                        <button
                            id="header-menu-toggle"
                            className={`header__menu-toggle${menuOpen ? ' is-open' : ''}`}
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                            onClick={toggle}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            {/* Backdrop — closes menu when tapping outside drawer */}
            {menuOpen && (
                <div
                    className="mobile-nav-backdrop"
                    aria-hidden="true"
                    onClick={close}
                />
            )}

            {/* Mobile drawer */}
            <nav
                id="mobile-nav"
                ref={drawerRef}
                className={`mobile-nav${menuOpen ? ' is-open' : ''}`}
                aria-label="Mobile navigation"
                aria-hidden={!menuOpen}
            >
                {navLinks.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                            `mobile-nav__link${isActive ? ' mobile-nav__link--active' : ''}`
                        }
                        onClick={close}
                    >
                        {label}
                    </NavLink>
                ))}
                <div className="mobile-nav__cta">
                    <Link
                        to="/contact"
                        className="btn btn--primary btn--full"
                        onClick={close}
                    >
                        Book a Ride
                    </Link>
                </div>
            </nav>
        </>
    );
}
