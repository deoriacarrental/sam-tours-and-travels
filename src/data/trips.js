/**
 * trips.js — Sam Tours and Travels
 * Sample trip packages. Update destinations, itineraries, and pricing
 * with verified business information before launch.
 */

export const tripCategories = [
    { id: 'all',       label: 'All Trips' },
    { id: 'weekend',   label: 'Weekend Getaways' },
    { id: 'family',    label: 'Family Trips' },
    { id: 'outstation',label: 'Outstation' },
    { id: 'pilgrimage',label: 'Pilgrimage' },
    { id: 'group',     label: 'Group Travel' },
];

export const trips = [
    {
        id: 'ooty-trip',
        name: 'Ooty — The Queen of Hill Stations',
        destination: 'Ooty, Tamil Nadu',
        from: 'Deoria',
        category: 'weekend',
        categoryLabel: 'Weekend Getaway',
        duration: '2 Days / 1 Night',
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
        imageAlt: 'Ooty hill station — scenic mountain roads and tea gardens',
        description:
            'Escape to the cool heights of Ooty. Enjoy misty mountain views, lush tea gardens, the famous Toy Train, and serene Botanical Gardens.',
        attractions: ['Ooty Lake', 'Botanical Gardens', 'Nilgiri Mountain Railway', 'Doddabetta Peak'],
        itinerary: [
            { day: 'Day 1', activity: 'Depart early morning. Arrive Ooty by afternoon. Check in and local exploration.' },
            { day: 'Day 2', activity: 'Botanical Gardens, Ooty Lake, shopping at local markets. Return journey.' },
        ],
        includes: ['Comfortable vehicle with driver', 'Fuel included', 'Driver accommodation'],
        excludes: ['Hotel accommodation', 'Meals', 'Entry tickets', 'Personal expenses'],
        pricing: {
            type: 'quote',
            note: 'Price varies based on vehicle type and group size. Contact us for a quote.',
        },
        vehicles: ['Maruti Swift', 'Toyota Etios', 'Toyota Innova Crysta'],
        bestTime: 'October to June',
        isFeatured: true,
        isSampleData: true,
    },
    {
        id: 'kodaikanal-trip',
        name: 'Kodaikanal — Princess of Hill Stations',
        destination: 'Kodaikanal, Tamil Nadu',
        from: 'Deoria',
        category: 'weekend',
        categoryLabel: 'Weekend Getaway',
        duration: '2 Days / 1 Night',
        image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80',
        imageAlt: 'Kodaikanal lake and misty hills',
        description:
            'A tranquil mountain retreat known for its beautiful lake, pine forests, and breathtaking valley views. Perfect for couples and families.',
        attractions: ['Kodai Lake', 'Coaker\'s Walk', 'Bryant Park', 'Pillar Rocks', 'Silver Cascade'],
        itinerary: [
            { day: 'Day 1', activity: 'Departure. Reach Kodaikanal. Lake boating and evening walk.' },
            { day: 'Day 2', activity: 'Coaker\'s Walk, Pillar Rocks, Silver Cascade. Return journey.' },
        ],
        includes: ['Comfortable vehicle with driver', 'Fuel included', 'Driver accommodation'],
        excludes: ['Hotel accommodation', 'Meals', 'Entry tickets', 'Personal expenses'],
        pricing: {
            type: 'quote',
            note: 'Price varies based on vehicle type and group size. Contact us for a quote.',
        },
        vehicles: ['Toyota Etios', 'Toyota Innova Crysta', 'Maruti Ertiga'],
        bestTime: 'September to May',
        isFeatured: true,
        isSampleData: true,
    },
    {
        id: 'tirupati-pilgrimage',
        name: 'Tirupati — Sacred Temple Journey',
        destination: 'Tirupati, Andhra Pradesh',
        from: 'Deoria',
        category: 'pilgrimage',
        categoryLabel: 'Pilgrimage',
        duration: '1 Day / Overnight',
        image: 'https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=800&q=80',
        imageAlt: 'Tirupati temple darshan pilgrimage journey',
        description:
            'A comfortable, well-organised pilgrimage journey to the sacred Tirupati Balaji temple. Arrive rested and ready for darshan.',
        attractions: ['Sri Venkateswara Temple', 'Kapila Theertham', 'Padmavathi Temple', 'ISKCON Temple'],
        itinerary: [
            { day: 'Day 1', activity: 'Early departure. Reach Tirupati. Complete darshan. Return or overnight stay.' },
        ],
        includes: ['Vehicle with driver', 'Fuel', 'Comfortable journey', 'Driver accommodation'],
        excludes: ['Temple tickets', 'Meals', 'Hotel (if overnight)', 'Personal expenses'],
        pricing: {
            type: 'quote',
            note: 'Price varies based on vehicle type and number of passengers.',
        },
        vehicles: ['Toyota Etios', 'Toyota Innova Crysta', 'Tempo Traveller (for groups)'],
        bestTime: 'Year round (avoid peak festivals for comfort)',
        isFeatured: false,
        isSampleData: true,
    },
    {
        id: 'mysore-trip',
        name: 'Mysore — The City of Palaces',
        destination: 'Mysore, Karnataka',
        from: 'Deoria',
        category: 'family',
        categoryLabel: 'Family Trip',
        duration: '2 Days / 1 Night',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
        imageAlt: 'Mysore Palace illuminated at night',
        description:
            'Explore the grand heritage of Mysore — the magnificent palace, fragrant sandalwood markets, and the famous Brindavan Gardens.',
        attractions: ['Mysore Palace', 'Chamundi Hills', 'Brindavan Gardens', 'Zoo', 'Devaraja Market'],
        itinerary: [
            { day: 'Day 1', activity: 'Arrival. Mysore Palace, Chamundi Hills, local market exploration.' },
            { day: 'Day 2', activity: 'Brindavan Gardens (early), Zoo. Return journey.' },
        ],
        includes: ['Vehicle with driver', 'Fuel', 'Driver accommodation'],
        excludes: ['Hotel', 'Meals', 'Entry tickets', 'Personal expenses'],
        pricing: {
            type: 'quote',
            note: 'Price varies by vehicle and group size. Contact us for a tailored quote.',
        },
        vehicles: ['Toyota Innova Crysta', 'Maruti Ertiga', 'Tempo Traveller (for groups)'],
        bestTime: 'October to February',
        isFeatured: true,
        isSampleData: true,
    },
    {
        id: 'pondicherry-trip',
        name: 'Pondicherry — French Riviera of the East',
        destination: 'Pondicherry',
        from: 'Deoria',
        category: 'weekend',
        categoryLabel: 'Weekend Getaway',
        duration: '2 Days / 1 Night',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
        imageAlt: 'Pondicherry seaside promenade and French colonial streets',
        description:
            'Stroll along the French Quarter, relax by the Bay of Bengal, and explore the spiritual atmosphere of Auroville.',
        attractions: ['French Quarter', 'Rock Beach', 'Auroville Matrimandir', 'Sri Aurobindo Ashram', 'Promenade'],
        itinerary: [
            { day: 'Day 1', activity: 'Arrive Pondicherry. French Quarter walk, Promenade, Rock Beach.' },
            { day: 'Day 2', activity: 'Auroville, Ashram visit, beach time. Return journey.' },
        ],
        includes: ['Vehicle with driver', 'Fuel', 'Driver accommodation'],
        excludes: ['Hotel', 'Meals', 'Personal expenses'],
        pricing: {
            type: 'quote',
            note: 'Contact us for a quote based on your travel dates and group size.',
        },
        vehicles: ['Maruti Dzire', 'Toyota Etios', 'Toyota Innova Crysta'],
        bestTime: 'October to March',
        isFeatured: false,
        isSampleData: true,
    },
    {
        id: 'group-corporate',
        name: 'Corporate Group Travel',
        destination: 'As Required',
        from: 'Deoria',
        category: 'group',
        categoryLabel: 'Group Travel',
        duration: 'As Required',
        image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
        imageAlt: 'Corporate group travel in comfortable tempo traveller',
        description:
            'Organised, punctual, and professional group travel for corporate teams, conferences, retreats, and outings of all sizes.',
        attractions: ['Custom itinerary', 'Flexible scheduling', 'Multiple vehicles', 'Corporate billing'],
        itinerary: [
            { day: 'Custom', activity: 'Itinerary planned based on your schedule and requirements.' },
        ],
        includes: ['Vehicle(s) with driver(s)', 'Fuel', 'Flexible routing', 'Driver accommodation'],
        excludes: ['Meals', 'Hotel', 'Entry fees', 'Personal expenses'],
        pricing: {
            type: 'quote',
            note: 'Custom pricing based on group size, distance, and duration.',
        },
        vehicles: ['Toyota Innova Crysta', 'Maruti Ertiga', 'Tempo Traveller 12-Seater'],
        bestTime: 'Year round',
        isFeatured: false,
        isSampleData: true,
    },
];

export default trips;
