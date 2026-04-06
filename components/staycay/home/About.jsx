import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <section className="sc-section sc-bg-light">
      <div className="container">
        <div className="sc-about-grid">
          {/* Image */}
          <div style={{ position: "relative" }}>
            <Image
              src="https://picsum.photos/seed/staycay-about/800/1000"
              alt="Staycay managed property interior"
              width={800}
              height={1000}
              style={{ width: "100%", height: "auto", aspectRatio: "4/5", objectFit: "cover" }}
            />
          </div>

          {/* Content */}
          <div>
            <span className="sc-label">About Staycay</span>
            <div className="sc-divider" />
            <h2 className="sc-title">
              More Than Property Management — We Protect &amp; Grow Your Asset
            </h2>
            <p className="sc-body" style={{ marginBottom: 16 }}>
              Staycay is a professional property management and short-stay operations
              platform built for property owners who want more than just a listing.
            </p>
            <p className="sc-body">
              We believe a property is more than an investment — it is a legacy and
              a responsibility. Through our structured approach, we transform every
              unit into a well-designed, guest-loved stay that performs sustainably
              in the short-stay market.
            </p>

            {/* Stats */}
            <div className="sc-stats-row">
              <div className="sc-stat">
                <div className="sc-stat-num">3</div>
                <div className="sc-stat-label">Property Tiers</div>
              </div>
              <div className="sc-stat">
                <div className="sc-stat-num">40%</div>
                <div className="sc-stat-label">Owner Revenue Share</div>
              </div>
              <div className="sc-stat">
                <div className="sc-stat-num">20%</div>
                <div className="sc-stat-label">Asset Protection Reserve</div>
              </div>
              <div className="sc-stat">
                <div className="sc-stat-num">100%</div>
                <div className="sc-stat-label">Transparent Operations</div>
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <Link href="/our-services" className="sc-btn sc-btn-outline">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
