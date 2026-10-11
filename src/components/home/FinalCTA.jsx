import { Link } from 'react-router-dom';
import { MessageCircle, Phone } from 'lucide-react';
import { business } from '../../data/business';

/**
 * FinalCTA.jsx — Full-width closing call-to-action on the home page.
 */
export default function FinalCTA() {
    const whatsappMsg = encodeURIComponent(
        'Hello, I would like to make a travel or car rental enquiry.'
    );

    return (
        <section className="final-cta" aria-label="Call to action">
            <div className="container">
                <h2 className="final-cta__headline">Let's Get You There.</h2>
                <p className="final-cta__subtext">
                    Whether it's a quick city ride or a multi-day journey, we're ready to make
                    your travel experience smooth and stress-free.
                </p>
                <div className="final-cta__actions">
                    <Link to="/contact" className="btn btn--primary btn--lg" id="final-cta-contact">
                        Make an Enquiry
                    </Link>
                    <a
                        href={`https://wa.me/${business.whatsapp}?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--secondary btn--lg"
                        id="final-cta-whatsapp"
                    >
                        <MessageCircle size={16} />
                        Chat on WhatsApp
                    </a>
                    <a
                        href={`tel:${business.phoneRaw}`}
                        className="btn btn--secondary btn--lg"
                        id="final-cta-phone"
                    >
                        <Phone size={16} />
                        {business.phone}
                    </a>
                </div>
            </div>
        </section>
    );
}
