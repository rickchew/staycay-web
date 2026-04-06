import Link from "next/link";

const tiers = [
  {
    id: "reserve",
    badge: "Reserve",
    tag: "Elevated Luxury, Private Comfort",
    name: "Reserve",
    dark: true,
    bg: "sc-bg-reserve",
    desc:
      "Staycay Reserve is our premium tier — larger spaces, enhanced privacy, and elevated finishes. Every Reserve property is carefully selected and upgraded to meet higher design and operational standards.",
    target: "Ideal for guests seeking a more exclusive and luxurious short-stay environment.",
    features: ["Premium furnishings", "Exclusive layouts", "Elevated guest experience"],
  },
  {
    id: "signature",
    badge: "Signature",
    tag: "Design-Led, Modern Living",
    name: "Signature",
    dark: false,
    bg: "sc-bg-cream",
    desc:
      "Staycay Signature represents our core design philosophy — clean lines, warm neutrals, and thoughtfully curated interiors offering comfort, calm, and a refined stay experience.",
    target: "Ideal for couples, business travellers, and modern lifestyle guests.",
    features: ["Curated interiors", "Timeless aesthetic", "Premium yet accessible"],
  },
  {
    id: "kidz",
    badge: "Kidz",
    tag: "Family-Ready, Thoughtfully Designed",
    name: "Kidz",
    dark: false,
    bg: "sc-bg-kidz",
    desc:
      "Staycay Kidz is curated for families. These units are designed with comfort, safety, and practicality in mind — without compromising on style.",
    target: "Perfect for family stays, group trips, and parents seeking convenience and comfort.",
    features: ["Kid-friendly layouts", "Play elements & themed touches", "Spacious living areas"],
  },
];

export default function Tiers() {
  return (
    <section className="sc-section-sm sc-bg-sand">
      <div className="container">
        <div className="text-center mb-5">
          <span className="sc-label">Our Property Tiers</span>
          <h2 className="sc-title">A Tier for Every Guest</h2>
          <p className="sc-body mx-auto" style={{ maxWidth: 520 }}>
            Three distinct experiences — each designed to meet the needs of different
            guests while maintaining the Staycay standard of quality and comfort.
          </p>
        </div>
      </div>

      <div className="sc-tiers-grid">
        {tiers.map((tier) => (
          <div key={tier.id} className={`sc-tier ${tier.bg}`}>
            {/* Placeholder image */}
            <div
              className="sc-tier-img"
              style={{
                background: tier.dark
                  ? "linear-gradient(160deg, #3A302A 0%, #2A2420 100%)"
                  : tier.id === "kidz"
                  ? "linear-gradient(160deg, #D4EDF5 0%, #BDD8E4 100%)"
                  : "linear-gradient(160deg, #E8DDD3 0%, #D4C4B0 100%)",
              }}
              aria-label={`${tier.name} property — photo to be added`}
            />

            <span className={`sc-tier-badge${tier.dark ? " light" : ""}`}>
              {tier.badge}
            </span>

            <h3 className={`sc-tier-name${tier.dark ? " light" : ""}`}>
              {tier.name}
            </h3>
            <p className="sc-tier-tag">{tier.tag}</p>
            <p className={`sc-tier-desc${tier.dark ? " light" : ""}`}>
              {tier.desc}
            </p>
            <p className={`sc-tier-desc${tier.dark ? " light" : ""}`} style={{ fontSize: 13 }}>
              {tier.target}
            </p>

            <ul className={`sc-tier-list${tier.dark ? " light" : ""}`}>
              {tier.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <Link
              href="/our-tiers"
              className={tier.dark ? "sc-btn sc-btn-light" : "sc-btn sc-btn-outline"}
              style={{ marginTop: "auto" }}
            >
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
