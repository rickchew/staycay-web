import Link from "next/link";
import Image from "next/image";

const tiers = [
  {
    id: "reserve",
    badge: "Reserve",
    tag: "Elevated Luxury, Private Comfort",
    name: "Reserve",
    dark: true,
    bg: "sc-bg-reserve",
    imgSeed: "staycay-reserve",
    desc: "Staycay Reserve is our premium tier — larger spaces, enhanced privacy, and elevated finishes. Every Reserve property is carefully selected and upgraded to meet higher design and operational standards.",
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
    imgSeed: "staycay-signature",
    desc: "Staycay Signature represents our core design philosophy — clean lines, warm neutrals, and thoughtfully curated interiors offering comfort, calm, and a refined stay experience.",
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
    imgSeed: "staycay-kidz",
    desc: "Staycay Kidz is curated for families. These units are designed with comfort, safety, and practicality in mind — without compromising on style.",
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
            {/* Property photo */}
            <div style={{ width: "100%", height: 200, position: "relative", overflow: "hidden", marginBottom: 30 }}>
              <Image
                src={`https://picsum.photos/seed/${tier.imgSeed}/600/400`}
                alt={`Staycay ${tier.name} property`}
                fill
                style={{ objectFit: "cover" }}
                sizes="33vw"
              />
            </div>

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
