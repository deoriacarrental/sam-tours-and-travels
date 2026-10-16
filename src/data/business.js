/**
 * business.js — Sam Tours and Travels
 * Configure verified business details here before launch.
 * Fields marked [CONFIGURE] must be updated with real business data.
 */

export const business = {
    name: 'Sam Tours and Travels',
    shortName: 'Sam T&T',
    tagline: 'Your Journey. Our Responsibility.',
    description:
        'Reliable car rentals, comfortable journeys, and thoughtfully planned trips — all in one place.',

    // ── Contact [CONFIGURE] ──────────────────────────────────────────
    phone: '+91 63941 85480',
    phoneRaw: '916394185480',          // For telephone and WhatsApp links (no + or spaces)
    email: 'samtourtravel5253@gmail.com',
    whatsapp: '916394185480',          // WhatsApp number

    // ── Address ─────────────────────────────────────────────────────
    address: {
        line1: 'Deoria Baraon Rd',
        line2: 'Ram Naath Nagar',
        city: 'Deoria',
        state: 'Uttar Pradesh',
        pincode: '274001',
        country: 'India',
        plusCode: 'FQV9+CJ8',
        full: 'Deoria Baraon Rd, Ram Naath Nagar, Deoria, Uttar Pradesh 274001 (FQV9+CJ8)',
    },

    // ── Operating Hours [CONFIGURE] ──────────────────────────────────
    hours: [
        { days: 'Monday — Saturday', time: '7:00 AM — 9:00 PM' },
        { days: 'Sunday', time: '8:00 AM — 6:00 PM' },
        { days: 'Public Holidays', time: 'By prior arrangement' },
    ],

    // ── Social [CONFIGURE] ───────────────────────────────────────────
    social: {
        facebook:  '',   // [CONFIGURE] e.g. 'https://facebook.com/samtoursandtravels'
        instagram: '',   // [CONFIGURE]
        youtube:   '',   // [CONFIGURE]
    },

    // ── Google Maps ─────────────────────────────────────────────────
    // No API key required — use a free iframe embed URL.
    //
    // How to get your iframe embed URL:
    //   1. Go to https://maps.google.com and search your business
    //   2. Click Share → Embed a map → Copy HTML
    //   3. Paste only the src="..." URL below (without quotes)
    //
    google: {
        mapsUrl:    'https://www.google.com/maps/search/?api=1&query=26.493543576899555,83.76650617542505',
        reviewsUrl: '',
        // Paste the iframe src URL from Google Maps → Share → Embed a map
        iframeUrl:  'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3570.826097520513!2d83.76650617542505!3d26.493543576899555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI5JzM2LjgiTiA4M8KwNDYnMDguNyJF!5e0!3m2!1sen!2sin!4v1792165518877!5m2!1sen!2sin',
    },

    // ── Services (for structured data) ──────────────────────────────
    services: [
        'Car Rental',
        'Outstation Travel',
        'Local Sightseeing',
        'Airport Transfers',
        'Corporate Travel',
        'Tour Packages',
    ],
};

export default business;
