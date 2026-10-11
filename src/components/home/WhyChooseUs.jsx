import SectionHeading from '../common/SectionHeading';

const reasons = [
    {
        num: '01',
        title: 'Dependable Service',
        desc: 'On-time departures, professional drivers, and a commitment to punctuality on every journey.',
    },
    {
        num: '02',
        title: 'Transparent Pricing',
        desc: 'Clear, honest pricing with no hidden charges. Know exactly what you pay before you travel.',
    },
    {
        num: '03',
        title: 'Flexible Arrangements',
        desc: 'Local pickups, outstation travel, one-way trips, and custom itineraries to match your needs.',
    },
    {
        num: '04',
        title: 'Comfortable Journeys',
        desc: 'Well-maintained, clean vehicles serviced regularly to ensure a smooth and comfortable ride.',
    },
    {
        num: '05',
        title: 'Personalised Assistance',
        desc: 'Real human support — not just a booking system. We help you plan the right trip for your situation.',
    },
];

/**
 * WhyChooseUs.jsx — Dark editorial numbered grid section.
 */
export default function WhyChooseUs() {
    return (
        <section className="section why-choose" aria-label="Why choose Sam Tours and Travels">
            <div className="container">
                <div className="why-choose__grid">
                    <div className="why-choose__left">
                        <SectionHeading
                            eyebrow="Why Us"
                            title="Travel With Confidence"
                            light
                        />
                        <p className="why-choose__lead">
                            We focus on the things that matter most to travellers — reliability,
                            honesty, and a comfortable journey from start to finish.
                        </p>
                    </div>

                    <div className="why-choose__right">
                        {reasons.map(({ num, title, desc }) => (
                            <div key={num} className="why-item">
                                <span className="why-item__number">{num}</span>
                                <div className="why-item__content">
                                    <p className="why-item__title">{title}</p>
                                    <p className="why-item__desc">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
