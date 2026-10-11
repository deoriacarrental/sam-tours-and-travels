# Sam Tours and Travels — Website

A complete, production-quality **car rental and tours & travels website** built with React.js + Vite. Minimalist black-and-white design, modular components, responsive layout, and Google integrations.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy environment config
cp .env.example .env

# 3. Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build

```bash
npm run build
```

Output goes to the `dist/` folder. Deploy this folder to any static host (Netlify, Vercel, Hostinger, etc.).

---

## 🗂 Project Structure

```
src/
├── components/
│   ├── common/          Header, Footer, PageHero, SectionHeading
│   ├── home/            Hero, BookingForm, FeaturedVehicles, AboutPreview,
│   │                    FeaturedTrips, WhyChooseUs, GoogleReviews,
│   │                    LocationMap, FinalCTA
│   ├── vehicles/        VehicleCard, VehicleFilters
│   ├── trips/           TripCard, TripFilters
│   └── contact/         ContactForm
├── pages/               Home, About, Vehicles, Trips, Contact, NotFound
├── data/                business.js, vehicles.js, trips.js, testimonials.js
└── styles/              variables.css, reset.css, global.css, typography.css,
                         components.css, header.css, footer.css,
                         home.css, about.css, vehicles.css, trips.css,
                         contact.css, responsive.css
```

---

## ⚙️ Configuration

### Business Details

Edit [`src/data/business.js`](src/data/business.js) to update:
- Phone number and email
- Business address
- Operating hours
- Social media links
- Google Place ID and Maps URLs

Fields marked `[CONFIGURE]` must be updated before launch.

### Vehicle Catalogue

Edit [`src/data/vehicles.js`](src/data/vehicles.js) to add, remove, or update vehicles. Each entry supports name, category, image, specs, features, and pricing information.

### Trip Packages

Edit [`src/data/trips.js`](src/data/trips.js) to manage destinations, itineraries, inclusions, and pricing.

---

## 🗺 Google Maps Integration

### Setup Steps

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project and enable:
   - **Maps JavaScript API**
   - **Maps Embed API**
   - **Places API** (for reviews, if needed)
3. Create an API key and restrict it to your domain
4. Add to your `.env` file:

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
VITE_GOOGLE_PLACE_ID=your_place_id_here
```

### Finding Your Place ID

Visit [Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id) and search for your business.

### Map Embed URL (Alternative)

You can also set `business.google.embedUrl` in `src/data/business.js` directly with a Google Maps embed URL (iframe URL from Google Maps > Share > Embed a map).

---

## ⭐ Google Reviews Integration

The site is prepared for Google Reviews via the **Places API (New)**.

When `VITE_GOOGLE_MAPS_API_KEY` and `VITE_GOOGLE_PLACE_ID` are set, update `src/components/home/GoogleReviews.jsx` to fetch from:

```
https://places.googleapis.com/v1/places/{PLACE_ID}?fields=reviews&key={API_KEY}
```

> **Note:** The Places API requires a backend proxy to securely fetch reviews without exposing your API key in frontend code. See [Google's Places API documentation](https://developers.google.com/maps/documentation/places/web-service/overview) for server-side integration guidance.

Until configured, the site displays a clear setup prompt in the Reviews section.

---

## 📝 Forms

The contact and booking forms currently submit via **WhatsApp** (a pre-filled message link opens WhatsApp Web or the WhatsApp app).

### To add email form submission:

1. Sign up for [Formspree](https://formspree.io/) or [EmailJS](https://emailjs.com/)
2. Add your endpoint/keys to `.env`
3. Update `src/components/contact/ContactForm.jsx` to `POST` the form data

---

## 📋 Pre-Launch Checklist

Before going live, ensure the following are complete:

### Business Information
- [ ] Update phone number in `src/data/business.js`
- [ ] Update email address
- [ ] Update business address (all fields)
- [ ] Update operating hours
- [ ] Add social media links (if available)
- [ ] Update WhatsApp number (`VITE_WHATSAPP_NUMBER` in `.env`)

### Google Integration
- [ ] Add `VITE_GOOGLE_MAPS_API_KEY` to `.env`
- [ ] Add `VITE_GOOGLE_PLACE_ID` to `.env`
- [ ] Set `business.google.mapsUrl` (Google Maps listing link)
- [ ] Set `business.google.reviewsUrl` (review link)
- [ ] Set `business.google.embedUrl` (iframe embed URL)

### Content
- [ ] Replace all sample vehicle data with real fleet details
- [ ] Update vehicle images with actual photos
- [ ] Replace sample trip packages with real offerings
- [ ] Confirm pricing or remove pricing and use "Quote on Request"
- [ ] Update structured data in `index.html` (address, phone, hours)
- [ ] Update Open Graph image URL
- [ ] Set canonical URL in `index.html`

### Reviews
- [ ] Configure Google Reviews API or remove the placeholder section
- [ ] Never publish placeholder/fabricated reviews

### Deployment
- [ ] Set up `.env` on your hosting platform (do NOT commit `.env` to Git)
- [ ] Add your domain to the Google API key restrictions
- [ ] Test all pages on mobile and desktop
- [ ] Verify all WhatsApp links work correctly

---

## 🌐 Deployment

### Netlify

```bash
npm run build
# Deploy the dist/ folder
```

Or connect your GitHub repo to Netlify and set `Build command: npm run build` and `Publish directory: dist`.

### Vercel

```bash
npm run build
vercel --prod
```

### Manual (any host)

Upload the contents of the `dist/` folder to your web server's public directory.

---

## 🔧 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite |
| Routing | React Router DOM v7 |
| Icons | Lucide React |
| Styling | Vanilla CSS (modular) |
| Maps | Google Maps Embed API |
| Reviews | Google Places API (setup required) |
| Forms | WhatsApp link (configurable) |
| Fonts | Inter (Google Fonts) |

---

## 📄 License

This project is for the exclusive use of Sam Tours and Travels. All rights reserved.
