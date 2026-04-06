import Link from "next/link";
import StaycayHeader from "@/components/staycay/StaycayHeader";
import StaycayFooter from "@/components/staycay/StaycayFooter";

export const metadata = {
  title: "Our Services — Staycay",
  description:
    "Property management, design & renovation, and stay operations — full-spectrum services by Staycay.",
};

const services = [
  {
    num: "01",
    title: "Property Management",
    desc: "We handle every aspect of your property's short-stay operations so you can enjoy returns without the operational burden.",
    items: [
      "Platform listing & optimisation (Airbnb, Booking.com, Agoda, etc.)",
      "Guest communications & support",
      "Check-in / check-out management",
      "Professional housekeeping",
      "Routine maintenance coordination",
      "Monthly performance & financial reporting",
    ],
  },
  {
    num: "02",
    title: "Design & Renovation",
    desc: "We transform properties into spaces guests love — designed for durability, operational efficiency, and the Staycay aesthetic.",
    items: [
      "Interior design concept & planning",
      "Full renovation management",
      "Furniture, fixtures & equipment (FF&E) sourcing",
      "Staycay brand-consistent execution",
      "Photography & listing setup",
      "Pre-launch quality inspection",
    ],
  },
  {
    num: "03",
    title: "Stay Operations",
    desc: "Seamless day-to-day operations powered by structured systems and hotel-level standards.",
    items: [
      "Dynamic pricing strategy",
      "Occupancy & revenue optimisation",
      "Guest experience management",
      "Review management & reputation building",
      "Quality assurance programmes",
      "Operational compliance & safety checks",
    ],
  },
];

const designPrinciples = [
  { title: "Guest-Loved Design", desc: "Thoughtfully designed spaces with warm tones, quality materials, and smart layouts that feel modern, welcoming, and comfortable." },
  { title: "Operational Efficiency", desc: "Clean layouts, practical storage, and durable materials that ensure easy maintenance and smooth day-to-day operations." },
  { title: "Consistent Brand Experience", desc: "Every unit is carefully renovated and curated to meet Staycay standards, delivering a seamless and reliable stay experience." },
  { title: "Sustainable Performance", desc: "Built for long-term durability and efficiency, reducing operational issues while performing consistently in the short-stay market." },
];

export default function OurServicesPage() {
  return (
    <div className="theme-staycay">
      <StaycayHeader />
      <main>
        {/* Page Hero */}
        <div className="sc-page-hero">
          <div className="container">
            <span className="sc-label">What We Do</span>
            <h1 className="sc-title-lg" style={{ maxWidth: 520 }}>
              Full-Spectrum Property Services
            </h1>
            <p className="sc-body" style={{ maxWidth: 480 }}>
              From design through to daily operations — Staycay provides everything
              your property needs to perform at its full potential.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <section className="sc-section sc-bg-light">
          <div className="container">
            <div className="sc-services-grid">
              {services.map((s) => (
                <div key={s.num} className="sc-service">
                  <div className="sc-service-num">{s.num}</div>
                  <h2 className="sc-service-title">{s.title}</h2>
                  <p className="sc-service-desc">{s.desc}</p>
                  <ul className="sc-service-list">
                    {s.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Principles */}
        <section className="sc-section sc-bg-sand">
          <div className="container">
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <span className="sc-label">Staycay Design & Renovation</span>
                <div className="sc-divider" />
                <h2 className="sc-title">Our Design Philosophy</h2>
                <p className="sc-body">
                  Our goal is simple: to transform every unit into a well-designed,
                  guest-loved stay that performs sustainably in the short-stay market.
                </p>
              </div>
            </div>

            <div className="row g-4">
              {designPrinciples.map((p, i) => (
                <div key={i} className="col-md-6">
                  <div className="sc-vision-item">
                    <div className="sc-vision-icon">
                      <span style={{ fontSize: 13, fontFamily: "Cormorant Garamond, serif", fontWeight: 500 }}>
                        0{i + 1}
                      </span>
                    </div>
                    <div>
                      <div className="sc-vision-item-title">{p.title}</div>
                      <div className="sc-vision-item-desc">{p.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="sc-cta sc-bg-dark">
          <div className="container text-center">
            <span className="sc-label" style={{ color: "rgba(245,234,224,0.5)" }}>
              Ready to Begin?
            </span>
            <h2 className="sc-title-lg light mx-auto" style={{ maxWidth: 500, marginBottom: 16 }}>
              Let&apos;s Work Together
            </h2>
            <p className="sc-body light mx-auto" style={{ maxWidth: 440, marginBottom: 40 }}>
              Contact our team today and discover how Staycay can transform your
              property into a high-performing short-stay asset.
            </p>
            <Link href="/contact-us" className="sc-btn sc-btn-light">
              Partner With Us
            </Link>
          </div>
        </section>
      </main>
      <StaycayFooter />
    </div>
  );
}
