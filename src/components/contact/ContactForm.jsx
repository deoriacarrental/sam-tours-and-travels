import { useState } from 'react';
import { Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { business } from '../../data/business';

const INQUIRY_TYPES = [
    'General Enquiry',
    'Car Rental',
    'Outstation Trip',
    'Airport Transfer',
    'Group / Corporate Travel',
    'Tour Package',
    'Other',
];

/**
 * ContactForm.jsx
 * Full contact inquiry form with validation and WhatsApp / email fallback.
 */
export default function ContactForm({ prefilledVehicle = '', prefilledTrip = '' }) {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        inquiryType: 'General Enquiry',
        vehicleOrDestination: prefilledVehicle || prefilledTrip || '',
        date: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error

    const today = new Date().toISOString().split('T')[0];

    const validate = () => {
        const e = {};
        if (!form.name.trim())  e.name  = 'Your name is required.';
        if (!form.phone.trim()) e.phone = 'Phone number is required.';
        if (form.phone && !/^[\d\s+\-()]{7,15}$/.test(form.phone.trim())) {
            e.phone = 'Please enter a valid phone number.';
        }
        if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
            e.email = 'Please enter a valid email address.';
        }
        if (!form.message.trim()) e.message = 'Please describe your inquiry.';
        return e;
    };

    const handleChange = (field) => (e) => {
        setForm((f) => ({ ...f, [field]: e.target.value }));
        if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length) { setErrors(errs); return; }

        setStatus('submitting');

        // Build WhatsApp message as the primary submission mechanism.
        // Replace this with a real form backend (e.g. Formspree, Netlify Forms)
        // to also send email confirmations.
        const msg = [
            `*New Enquiry — Sam Tours and Travels*`,
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
            form.email ? `Email: ${form.email}` : '',
            `Inquiry Type: ${form.inquiryType}`,
            form.vehicleOrDestination ? `Vehicle / Destination: ${form.vehicleOrDestination}` : '',
            form.date ? `Preferred Date: ${form.date}` : '',
            `Message: ${form.message}`,
        ]
            .filter(Boolean)
            .join('\n');

        try {
            const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(msg)}`;
            window.open(url, '_blank', 'noopener,noreferrer');
            setStatus('success');
            setForm({
                name: '', phone: '', email: '',
                inquiryType: 'General Enquiry',
                vehicleOrDestination: '',
                date: '', message: '',
            });
        } catch {
            setStatus('error');
        }
    };

    const Field = ({ id, label, required, error, children }) => (
        <div className={`form-field contact-form__field${error ? ' form-field--error' : ''}`}>
            <label htmlFor={id}>
                {label}{required && <span aria-hidden="true"> *</span>}
            </label>
            {children}
            {error && <span className="form-field__error" role="alert">{error}</span>}
        </div>
    );

    if (status === 'success') {
        return (
            <div className="form-success" role="status">
                <CheckCircle size={20} />
                <div>
                    <strong>Inquiry sent via WhatsApp!</strong>
                    <p style={{ marginTop: 4, fontSize: 'var(--text-xs)' }}>
                        We will respond to your inquiry as soon as possible.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact inquiry form"
        >
            <p className="contact-form__title">Send Us an Inquiry</p>

            {status === 'error' && (
                <div className="form-error-banner" role="alert">
                    <AlertCircle size={16} style={{ display: 'inline', marginRight: 6 }} />
                    Something went wrong. Please try again or contact us directly.
                </div>
            )}

            <div className="contact-form__row-2">
                <Field id="cf-name" label="Full Name" required error={errors.name}>
                    <input
                        id="cf-name"
                        type="text"
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange('name')}
                        autoComplete="name"
                    />
                </Field>
                <Field id="cf-phone" label="Phone Number" required error={errors.phone}>
                    <input
                        id="cf-phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        autoComplete="tel"
                    />
                </Field>
            </div>

            <div className="contact-form__row-2">
                <Field id="cf-email" label="Email Address (Optional)" error={errors.email}>
                    <input
                        id="cf-email"
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange('email')}
                        autoComplete="email"
                    />
                </Field>
                <Field id="cf-type" label="Inquiry Type">
                    <select
                        id="cf-type"
                        value={form.inquiryType}
                        onChange={handleChange('inquiryType')}
                    >
                        {INQUIRY_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                        ))}
                    </select>
                </Field>
            </div>

            <div className="contact-form__row-2">
                <Field id="cf-vehicle" label="Vehicle / Destination (Optional)">
                    <input
                        id="cf-vehicle"
                        type="text"
                        placeholder="e.g. Innova Crysta, Ooty Trip"
                        value={form.vehicleOrDestination}
                        onChange={handleChange('vehicleOrDestination')}
                    />
                </Field>
                <Field id="cf-date" label="Preferred Travel Date (Optional)">
                    <input
                        id="cf-date"
                        type="date"
                        min={today}
                        value={form.date}
                        onChange={handleChange('date')}
                    />
                </Field>
            </div>

            <Field id="cf-message" label="Message" required error={errors.message}>
                <textarea
                    id="cf-message"
                    rows={4}
                    placeholder="Tell us about your travel plans, pickup location, number of passengers, or any other details…"
                    value={form.message}
                    onChange={handleChange('message')}
                    style={{ resize: 'vertical' }}
                />
            </Field>

            <div className="contact-form__submit-row">
                <p className="contact-form__note">
                    * Required fields. Your inquiry will be sent via WhatsApp for a fast response.
                </p>
                <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={status === 'submitting'}
                    id="contact-submit-btn"
                >
                    {status === 'submitting' ? (
                        <><Loader2 size={14} /> Sending…</>
                    ) : (
                        <>Send Inquiry <Send size={14} /></>
                    )}
                </button>
            </div>
        </form>
    );
}
