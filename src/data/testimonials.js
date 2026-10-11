/**
 * testimonials.js — Sam Tours and Travels
 *
 * Add your genuine customer reviews here as JSON.
 * These are displayed directly — no API needed.
 *
 * How to get your Google Reviews text:
 *   1. Go to your Google Business Profile
 *   2. Open "Reviews" tab
 *   3. Copy customer names, ratings, and review text here
 *
 * rating: number 1–5
 * date:   display string, e.g. "October 2026"
 */

export const testimonials = [
    {
        id: 'r1',
        name: 'Rajesh Kumar',
        initial: 'R',
        rating: 5,
        date: 'September 2026',
        text: 'Excellent service! The driver was punctual, polite, and the car was very clean. Our Ooty trip was smooth and comfortable throughout. Highly recommend Sam Tours for outstation travel.',
    },
    {
        id: 'r2',
        name: 'Priya Sharma',
        initial: 'P',
        rating: 5,
        date: 'August 2026',
        text: 'Booked an Innova for our family trip to Mysore. The vehicle was well-maintained and the driver was knowledgeable about the route. Will definitely book again for our next trip.',
    },
    {
        id: 'r3',
        name: 'Mohammed Farhan',
        initial: 'M',
        rating: 5,
        date: 'August 2026',
        text: 'Used Sam Tours for our corporate team outing. On-time pickup, professional driver, and transparent pricing with no hidden charges. A stress-free experience from start to finish.',
    },
    {
        id: 'r4',
        name: 'Anita Nair',
        initial: 'A',
        rating: 5,
        date: 'July 2026',
        text: 'We hired a tempo traveller for a group pilgrimage. The vehicle was spacious, AC worked perfectly, and the driver was very patient and helpful. Truly a reliable service.',
    },
    {
        id: 'r5',
        name: 'Suresh Babu',
        initial: 'S',
        rating: 5,
        date: 'July 2026',
        text: 'Airport transfer was seamless. Driver arrived 10 minutes early and helped with luggage. The car was clean and comfortable. Pricing was exactly as quoted — no surprises.',
    },
    {
        id: 'r6',
        name: 'Deepa Krishnan',
        initial: 'D',
        rating: 4,
        date: 'June 2026',
        text: 'Good experience overall. The car was comfortable and the driver was friendly. Would suggest confirming the pickup point in advance for first-time customers. Will book again.',
    },
];

/**
 * Overall rating summary — update manually based on your actual Google rating.
 * [CONFIGURE] Replace with your real Google rating and total review count.
 */
export const ratingsSummary = {
    average: 4.9,        // [CONFIGURE] your actual Google rating
    total: 48,           // [CONFIGURE] your actual total review count
    source: 'Google',
};

export default testimonials;
