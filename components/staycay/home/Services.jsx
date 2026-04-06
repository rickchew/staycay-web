import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Property Management",
    desc:
      "End-to-end management of your short-stay property — from listing management and guest communications to cleaning, maintenance, and transparent reporting.",
    items: [
      "Platform listing management",
      "Guest check-in & communication",
      "Housekeeping & maintenance",
      "Monthly performance reporting",
    ],
  },
  {
    num: "02",
    title: "Design & Renovation",
    desc:
      "We transform properties into guest-loved spaces through thoughtful renovation — warm tones, quality materials, and smart layouts built for operational efficiency.",
    items: [
      "Interior design consultation",
      "Renovation & fit-out management",
      "Furniture & decor sourcing",
      "Brand-consistent execution",
    ],
  },
  {
    num: "03",
    title: "Stay Operations",
    desc:
      "Seamless day-to-day operations managed with hotel-level standards — ensuring every guest experience is consistent, comfortable, and review-worthy.",
    items: [
      "Pricing strategy & optimisation",
      "Guest experience management",
      "Quality assurance checks",
      "Occupancy & revenue tracking",
    ],
  },
];

export default function Services() {
  return (
    <section className="sc-section sc-bg-light">
      <div className="container">
        <div className="row align-items-end mb-5">
          <div className="col-md-6">
            <span className="sc-label">What We Do</span>
            <h2 className="sc-title">Full-Spectrum Property Services</h2>
          </div>
          <div className="col-md-5 offset-md-1">
            <p className="sc-body">
              From initial design through to daily operations, Staycay offers a
              comprehensive suite of services to ensure your property performs
              at its highest potential.
            </p>
            <Link href="/our-services" className="sc-link-arrow mt-3 d-inline-flex">
              See All Services <span>→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="sc-services-grid">
          {services.map((s) => (
            <div key={s.num} className="sc-service">
              <div className="sc-service-num">{s.num}</div>
              <h3 className="sc-service-title">{s.title}</h3>
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
  );
}
