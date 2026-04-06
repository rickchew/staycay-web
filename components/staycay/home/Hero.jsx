import Link from "next/link";

export default function Hero() {
  return (
    <section className="sc-hero" id="home">
      {/* Left — text */}
      <div className="sc-hero-left">
        <span className="sc-hero-eyebrow">Property Management &amp; Stay Operations</span>

        <h1 className="sc-hero-title">
          Elevating Every<br />Property Into a<br />Premium Stay
        </h1>

        <p className="sc-hero-desc">
          Combining hotel-level standards with residential comfort to unlock
          the full potential of your property investment.
        </p>

        <div className="sc-hero-actions">
          <Link href="/contact-us" className="sc-btn sc-btn-dark">
            Partner With Us
          </Link>
          <Link href="/our-tiers" className="sc-link-arrow">
            Our Tiers <span>→</span>
          </Link>
        </div>
      </div>

      {/* Right — hero image placeholder */}
      <div className="sc-hero-right">
        {/*
          Replace the div below with an <Image> once property photos are available:
          <Image src="/assets/images/staycay/hero.jpg" alt="Staycay Interior" fill style={{ objectFit: "cover" }} />
        */}
        <div
          className="sc-hero-img-fill"
          style={{
            background:
              "linear-gradient(135deg, #E8DDD3 0%, #D4C4B4 40%, #C4B0A0 100%)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
