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
    phone: '+91 98765 43210',          // [CONFIGURE] real phone number
    phoneRaw: '919876543210',          // [CONFIGURE] for WhatsApp link (no + or spaces)
    email: 'info@samtoursandtravels.com', // [CONFIGURE] real email
    whatsapp: '919876543210',          // [CONFIGURE] WhatsApp number

    // ── Address [CONFIGURE] ──────────────────────────────────────────
    address: {
        line1: '123, Main Road',       // [CONFIGURE]
        line2: 'Near City Bus Stand',  // [CONFIGURE]
        city: 'Your City',             // [CONFIGURE]
        state: 'Your State',           // [CONFIGURE]
        pincode: '000000',             // [CONFIGURE]
        country: 'India',
        full: '123, Main Road, Near City Bus Stand, Your City, Your State — 000000', // [CONFIGURE]
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

    // ── Google Maps [CONFIGURE] ──────────────────────────────────────
    // No API key required — use a free iframe embed URL.
    //
    // How to get your iframe embed URL:
    //   1. Go to https://maps.google.com and search your business
    //   2. Click Share → Embed a map → Copy HTML
    //   3. Paste only the src="..." URL below (without quotes)
    //
    google: {
        mapsUrl:    '',  // [CONFIGURE] Direct Google Maps link (for "Get Directions" button)
        reviewsUrl: '',  // [CONFIGURE] Google Maps reviews link
        // Paste the iframe src URL from Google Maps → Share → Embed a map
        iframeUrl:  '',  // [CONFIGURE] e.g. 'https://www.google.com/maps/embed?pb=!1m18...'
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
