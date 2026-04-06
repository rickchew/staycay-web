import Link from "next/link";
import Image from "next/image";

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

      {/* Right — property photo */}
      <div className="sc-hero-right">
        {/* Replace src with actual Staycay hero property photo when ready */}
        <Image
          src="https://picsum.photos/seed/staycay-hero/1200/900"
          alt="Staycay premium property interior"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="56vw"
        />
      </div>
    </section>
  );
}
