import { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';
import { business } from '../../data/business';

const VEHICLE_OPTIONS = [
    'No Preference',
    'Hatchback',
    'Sedan',
    'SUV / MUV',
    'Tempo Traveller',
];

const today = new Date().toISOString().split('T')[0];

/**
 * BookingForm.jsx — Quick booking inquiry panel on the home page.
 */
export default function BookingForm() {
    const [form, setForm] = useState({
        from: '',
        to: '',
        date: '',
        returnDate: '',
        vehicle: 'No Preference',
        passengers: '',
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    const validate = () => {
        const e = {};
        if (!form.from.trim()) e.from = 'Pickup location is required.';
        if (!form.to.trim())   e.to   = 'Destination is required.';
        if (!form.date)        e.date = 'Travel date is required.';
        return e;
    };

    const handleChange = (field) => (e) => {
        setForm((f) => ({ ...f, [field]: e.target.value }));
        if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setSubmitting(true);
        const msg = [
            `Hello, I would like to make a travel enquiry:`,
            `From: ${form.from}`,
            `To: ${form.to}`,
            `Travel Date: ${form.date}`,
            form.returnDate ? `Return Date: ${form.returnDate}` : '',
            `Vehicle Preference: ${form.vehicle}`,
            form.passengers ? `Passengers: ${form.passengers}` : '',
        ]
            .filter(Boolean)
            .join('\n');

        const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
        setSubmitting(false);
    };

    const Field = ({ id, label, error, children }) => (
        <div className={`form-field${error ? ' form-field--error' : ''}`}>
            <label htmlFor={id}>{label}</label>
            {children}
            {error && <span className="form-field__error" role="alert">{error}</span>}
        </div>
    );

    return (
        <section className="booking-form-section" aria-label="Quick booking inquiry">
            <div className="booking-form-panel">
                <div className="booking-form-panel__inner">
                    <p className="booking-form-panel__title">Quick Booking Inquiry</p>
                    <form onSubmit={handleSubmit} noValidate aria-label="Booking enquiry form">
                        <div className="booking-form__grid">
                            <Field id="bf-from" label="Pickup Location" error={errors.from}>
                                <input
                                    id="bf-from"
                                    type="text"
                                    placeholder="City, area or address"
                                    value={form.from}
                                    onChange={handleChange('from')}
                                    autoComplete="address-level2"
                                />
                            </Field>
                            <Field id="bf-to" label="Destination" error={errors.to}>
                                <input
                                    id="bf-to"
                                    type="text"
                                    placeholder="Where are you going?"
                                    value={form.to}
                                    onChange={handleChange('to')}
                                    autoComplete="off"
                                />
                            </Field>
                            <Field id="bf-date" label="Travel Date" error={errors.date}>
                                <input
                                    id="bf-date"
                                    type="date"
                                    min={today}
                                    value={form.date}
                                    onChange={handleChange('date')}
                                />
                            </Field>
                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <button
                                    type="submit"
                                    className="btn btn--primary"
                                    disabled={submitting}
                                    style={{ width: '100%' }}
                                    id="booking-submit-btn"
                                >
                                    {submitting
                                        ? <><Loader2 size={14} className="spin" /> Sending…</>
                                        : <>Send Inquiry <ArrowRight size={14} /></>
                                    }
                                </button>
                            </div>
                        </div>

                        <div className="booking-form__row-2">
                            <Field id="bf-return" label="Return Date (Optional)">
                                <input
                                    id="bf-return"
                                    type="date"
                                    min={form.date || today}
                                    value={form.returnDate}
                                    onChange={handleChange('returnDate')}
                                />
                            </Field>
                            <Field id="bf-vehicle" label="Vehicle Preference">
                                <select
                                    id="bf-vehicle"
                                    value={form.vehicle}
                                    onChange={handleChange('vehicle')}
                                >
                                    {VEHICLE_OPTIONS.map((v) => (
                                        <option key={v} value={v}>{v}</option>
                                    ))}
                                </select>
                            </Field>
                            <Field id="bf-passengers" label="Passengers">
                                <input
                                    id="bf-passengers"
                                    type="number"
                                    min="1"
                                    max="20"
                                    placeholder="Number of travellers"
                                    value={form.passengers}
                                    onChange={handleChange('passengers')}
                                />
                            </Field>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
