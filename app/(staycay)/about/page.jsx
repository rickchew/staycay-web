import Link from "next/link";
import Image from "next/image";
import StaycayHeader from "@/components/staycay/StaycayHeader";
import StaycayFooter from "@/components/staycay/StaycayFooter";
import WhatsAppButton from "@/components/staycay/WhatsAppButton";
import StaycayLogo from "@/components/staycay/StaycayLogo";

export const metadata = {
  title: "About — Staycay",
  description:
    "Learn about Staycay — our story, values, and our mission to become the most trusted short-stay property partner in Malaysia.",
};

const values = [
  {
    title: "Protect Owners' Assets",
    desc: "Every unit under Staycay is treated as a long-term asset — not a short-term income tool. We prioritise care, maintenance, and responsible guest management.",
  },
  {
    title: "Operate With Transparency",
    desc: "Clear monthly reporting, structured systems, and accountable operations. Owners always know exactly how their property is performing.",
  },
  {
    title: "Design With Longevity",
    desc: "Thoughtful renovation that creates spaces which are timeless, durable, and operationally efficient — reducing long-term wear and cost.",
  },
  {
    title: "Build Sustainable Returns",
    desc: "We focus on stable occupancy and consistent cash flow — not aggressive short-term spikes. Steady growth is the goal.",
  },
  {
    title: "Expand With Quality",
    desc: "As we grow from Miri to Kota Kinabalu and beyond, we remain selective — protecting the Staycay standard for all property owners.",
  },
  {
    title: "Guest-First Always",
    desc: "A great guest experience protects your property, earns better reviews, and drives repeat bookings — benefiting everyone in the partnership.",
  },
];

const tiers = [
  {
    name: "Reserve",
    tag: "Elevated Luxury",
    color: "#2A2420",
    textColor: "rgba(245,234,224,0.85)",
  },
  {
    name: "Signature",
    tag: "Design-Led Living",
    color: "#E8DDD3",
    textColor: "#1C1A18",
  },
  {
    name: "Kidz",
    tag: "Family-Ready",
    color: "#EAF4F8",
    textColor: "#1C1A18",
  },
];

export default function AboutPage() {
  return (
    <div className="theme-staycay">
      <StaycayHeader />
      <main>

        {/* Page Hero */}
        <div className="sc-page-hero" style={{ paddingBottom: 100 }}>
          <div className="container">
            <div className="row align-items-end">
              <div className="col-md-7">
                <span className="sc-label">About Staycay</span>
                <h1 className="sc-title-lg" style={{ maxWidth: 560 }}>
                  More Than Property Management
                </h1>
                <p className="sc-body" style={{ maxWidth: 480 }}>
                  We are a professional property management and short-stay operations
                  platform built for owners who want more than just a listing — they
                  want a trusted partner who protects and grows their asset.
                </p>
              </div>
              <div className="col-md-4 offset-md-1 d-none d-md-flex align-items-center justify-content-end">
                <StaycayLogo color="var(--sc-tan)" size={100} variant="stacked" />
              </div>
            </div>
          </div>
        </div>

        {/* Story section */}
        <section className="sc-section sc-bg-light">
          <div className="container">
            <div className="sc-about-grid">
              <div style={{ position: "relative" }}>
                <Image
                  src="https://picsum.photos/seed/staycay-story/800/1000"
                  alt="Staycay property — warm modern interior"
                  width={800}
                  height={1000}
                  style={{ width: "100%", height: "auto", aspectRatio: "4/5", objectFit: "cover" }}
                />
              </div>
              <div>
                <span className="sc-label">Our Story</span>
                <div className="sc-divider" />
                <h2 className="sc-title">
                  Built from a Belief That Properties Deserve Better
                </h2>
                <p className="sc-body" style={{ marginBottom: 18 }}>
                  Staycay was founded on a simple belief: that a property is more
                  than an investment — it is a legacy, and it deserves to be managed
                  with the same care and attention its owner gives it.
                </p>
                <p className="sc-body" style={{ marginBottom: 18 }}>
                  We started in Miri, Sarawak, where we saw firsthand how many
                  property owners were frustrated with inconsistent management,
                  opaque reporting, and properties that were deteriorating rather
                  than growing in value.
                </p>
                <p className="sc-body">
                  Staycay was built to be different — combining hotel-level
                  operational standards with the warmth and accountability of a
                  true partnership. Today we operate across multiple cities in East
                  Malaysia, and we continue to grow — selectively, sustainably, and
                  without compromising on quality.
                </p>

                <div className="sc-stats-row" style={{ marginTop: 36 }}>
                  <div className="sc-stat">
                    <div className="sc-stat-num">3</div>
                    <div className="sc-stat-label">Property Tiers</div>
                  </div>
                  <div className="sc-stat">
                    <div className="sc-stat-num">2+</div>
                    <div className="sc-stat-label">Cities</div>
                  </div>
                  <div className="sc-stat">
                    <div className="sc-stat-num">100%</div>
                    <div className="sc-stat-label">Transparent</div>
                  </div>
                  <div className="sc-stat">
                    <div className="sc-stat-num">20%</div>
                    <div className="sc-stat-label">Asset Protection Reserve</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="sc-section sc-bg-sand">
          <div className="container">
            <div className="row">
              <div className="col-md-5 mb-5 mb-md-0">
                <span className="sc-label">Our Mission</span>
                <div className="sc-divider" />
                <h2 className="sc-title">
                  Protecting &amp; Growing Assets for the Long Run
                </h2>
                <p className="sc-body" style={{ marginBottom: 24 }}>
                  Our vision is to become the most trusted short-stay property
                  partner for owners across Malaysia — not just managing units,
                  but protecting and growing assets for the long run.
                </p>
                <p className="sc-body">
                  At Staycay, we believe that when owners win, guests win, and
                  the properties we manage become lasting contributions to the
                  communities they serve.
                </p>
                <div style={{ marginTop: 32 }}>
                  <Link href="/contact-us" className="sc-btn sc-btn-dark">
                    Partner With Us
                  </Link>
                </div>
              </div>
              <div className="col-md-6 offset-md-1">
                <div className="row g-0">
                  {values.map((v, i) => (
                    <div key={i} className="col-6">
                      <div
                        style={{
                          padding: "24px 20px",
                          borderBottom: "1px solid rgba(176,154,132,0.2)",
                          borderRight: i % 2 === 0 ? "1px solid rgba(176,154,132,0.2)" : "none",
                        }}
                      >
                        <div
                          style={{
                            width: 24,
                            height: 1,
                            background: "var(--sc-tan)",
                            marginBottom: 14,
                          }}
                        />
                        <div
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontSize: 17,
                            fontWeight: 500,
                            color: "var(--sc-dark)",
                            marginBottom: 8,
                            lineHeight: 1.3,
                          }}
                        >
                          {v.title}
                        </div>
                        <div
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: 13,
                            color: "var(--sc-muted)",
                            lineHeight: 1.75,
                          }}
                        >
                          {v.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tiers overview */}
        <section className="sc-section sc-bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <span className="sc-label">What We Offer</span>
              <h2 className="sc-title mx-auto" style={{ maxWidth: 440 }}>
                Three Tiers. One Standard of Excellence.
              </h2>
              <p className="sc-body mx-auto" style={{ maxWidth: 500 }}>
                Every property is placed in the right Staycay tier — matching
                guest expectations with owner goals.
              </p>
            </div>
            <div className="row g-3">
              {tiers.map((t) => (
                <div key={t.name} className="col-md-4">
                  <div
                    style={{
                      background: t.color,
                      padding: "48px 36px",
                      height: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 10,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "var(--sc-tan)",
                        marginBottom: 12,
                      }}
                    >
                      {t.tag}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: 32,
                        fontWeight: 500,
                        color: t.textColor,
                        marginBottom: 16,
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        width: 28,
                        height: 1,
                        background: "var(--sc-tan)",
                        marginBottom: 16,
                      }}
                    />
                    <Link
                      href="/our-tiers"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--sc-tan)",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                      }}
                    >
                      Learn More →
                    </Link>
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
              Ready to Start?
            </span>
            <h2 className="sc-title-lg light mx-auto" style={{ maxWidth: 500, marginBottom: 16 }}>
              Let&apos;s Build Something Together
            </h2>
            <p className="sc-body light mx-auto" style={{ maxWidth: 440, marginBottom: 40 }}>
              Reach out today and let our team show you what Staycay can do for
              your property.
            </p>
            <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact-us" className="sc-btn sc-btn-light">
                Partner With Us
              </Link>
              <Link href="/our-services" className="sc-btn sc-btn-outline" style={{ color: "var(--sc-cream)", borderColor: "rgba(245,234,224,0.3)" }}>
                Our Services
              </Link>
            </div>
          </div>
        </section>

      </main>
      <StaycayFooter />
      <WhatsAppButton />
    </div>
  );
}
