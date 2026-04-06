import Link from "next/link";
import Image from "next/image";
import StaycayHeader from "@/components/staycay/StaycayHeader";
import StaycayFooter from "@/components/staycay/StaycayFooter";
import WhatsAppButton from "@/components/staycay/WhatsAppButton";

export const metadata = {
  title: "Our Tiers — Staycay",
  description:
    "Reserve, Signature, and Kidz — three distinct property tiers designed for every type of guest.",
};

const tiers = [
  {
    id: "reserve",
    badge: "Reserve",
    tag: "Elevated Luxury, Private Comfort",
    name: "Reserve",
    dark: true,
    imgSeed: "staycay-reserve-detail",
    desc: [
      "Staycay Reserve is our premium tier — larger spaces, enhanced privacy, and elevated finishes. Every Reserve property is carefully selected and upgraded to meet higher design and operational standards.",
      "Ideal for guests seeking a more exclusive and luxurious short-stay environment.",
    ],
    features: ["Premium furnishings", "Exclusive layouts", "Elevated guest experience"],
    highlight: "Every Reserve unit is a handpicked property that meets the highest Staycay standards in design, comfort, and operational excellence.",
  },
  {
    id: "signature",
    badge: "Signature",
    tag: "Design-Led, Modern Living",
    name: "Signature",
    dark: false,
    imgSeed: "staycay-signature-detail",
    desc: [
      "Staycay Signature represents our core design philosophy — clean lines, warm neutrals, and thoughtfully curated interiors. Each unit is styled with a timeless aesthetic, offering comfort, calm, and a refined stay experience.",
      "Signature focuses on balance — elegant yet welcoming, premium yet comfortable.",
    ],
    features: ["Couples", "Business travellers", "Modern lifestyle guests"],
    highlight: "The Signature tier sets the standard for Staycay's design language — every detail considered, every space optimised.",
  },
  {
    id: "kidz",
    badge: "Kidz",
    tag: "Family-Ready, Thoughtfully Designed",
    name: "Kidz",
    dark: false,
    kidz: true,
    imgSeed: "staycay-kidz-detail",
    desc: [
      "Staycay Kidz is curated for families. These units are designed with comfort, safety, and practicality in mind — without compromising on style.",
      "Perfect for family stays, group trips, and parents seeking convenience and comfort.",
    ],
    features: ["Kid-friendly layouts", "Play elements or themed touches", "Spacious living areas"],
    highlight: "Safety-certified, thoughtfully arranged, and designed to make family travel feel effortless.",
  },
];

export default function OurTiersPage() {
  return (
    <div className="theme-staycay">
      <StaycayHeader />
      <main>
        {/* Page Hero */}
        <div className="sc-page-hero">
          <div className="container">
            <span className="sc-label">Our Property Tiers</span>
            <h1 className="sc-title-lg" style={{ maxWidth: 520 }}>
              A Tier for Every Guest
            </h1>
            <p className="sc-body" style={{ maxWidth: 480 }}>
              Three distinct experiences — each designed to meet the needs of
              different guests while maintaining the Staycay standard of quality
              and care.
            </p>
          </div>
        </div>

        {/* Tier sections */}
        {tiers.map((tier, i) => {
          const isEven = i % 2 === 0;
          const bgClass = tier.dark
            ? "sc-bg-reserve"
            : tier.kidz
            ? "sc-bg-kidz"
            : i % 2 === 0
            ? "sc-bg-light"
            : "sc-bg-cream";

          return (
            <section key={tier.id} className={`sc-section ${bgClass}`}>
              <div className="container">
                <div className="row align-items-center" style={{ gap: "0 0" }}>
                  {/* Image col */}
                  <div className={`col-md-6 ${!isEven ? "order-md-2" : ""} mb-4 mb-md-0`}>
                    <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden" }}>
                      <Image
                        src={`https://picsum.photos/seed/${tier.imgSeed}/800/600`}
                        alt={`Staycay ${tier.name} property interior`}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="50vw"
                      />
                    </div>
                  </div>

                  {/* Text col */}
                  <div className={`col-md-5 ${!isEven ? "order-md-1 pe-md-5" : "ps-md-5"}`}>
                    <span className={`sc-tier-badge${tier.dark ? " light" : ""}`}>
                      {tier.badge}
                    </span>
                    <h2 className={`sc-tier-name${tier.dark ? " light" : ""}`} style={{ fontSize: "clamp(32px,4vw,52px)", marginBottom: 6 }}>
                      {tier.name}
                    </h2>
                    <p className="sc-tier-tag">{tier.tag}</p>

                    {tier.desc.map((d, di) => (
                      <p
                        key={di}
                        className={`sc-tier-desc${tier.dark ? " light" : ""}`}
                      >
                        {d}
                      </p>
                    ))}

                    <ul className={`sc-tier-list${tier.dark ? " light" : ""}`}>
                      {tier.features.map((f, fi) => <li key={fi}>{f}</li>)}
                    </ul>

                    <blockquote
                      style={{
                        marginTop: 24,
                        paddingLeft: 16,
                        borderLeft: "2px solid var(--sc-tan)",
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        color: tier.dark ? "rgba(250,246,241,0.5)" : "var(--sc-muted)",
                        fontStyle: "italic",
                        lineHeight: 1.7,
                      }}
                    >
                      {tier.highlight}
                    </blockquote>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="sc-cta sc-bg-dark">
          <div className="container text-center">
            <span className="sc-label" style={{ color: "rgba(245,234,224,0.5)" }}>
              Get Started
            </span>
            <h2 className="sc-title-lg light mx-auto" style={{ maxWidth: 520, marginBottom: 16 }}>
              Which Tier Suits Your Property?
            </h2>
            <p className="sc-body light mx-auto" style={{ maxWidth: 460, marginBottom: 40 }}>
              Reach out and our team will assess your property to recommend the right
              Staycay tier for maximum performance.
            </p>
            <Link href="/contact-us" className="sc-btn sc-btn-light">
              Talk to Us
            </Link>
          </div>
        </section>
      </main>
      <StaycayFooter />
      <WhatsAppButton />
    </div>
  );
}
