export default function Revenue() {
  return (
    <section className="sc-section sc-bg-cream">
      <div className="container">
        <div className="sc-revenue-grid">
          {/* Left — visual */}
          <div>
            <span className="sc-label">Revenue Structure</span>
            <div className="sc-divider" />
            <h2 className="sc-title">
              Sustainable &amp; Transparent Revenue Sharing
            </h2>
            <p className="sc-body" style={{ marginBottom: 32 }}>
              All revenue generated from the property is calculated after deduction
              of platform fees, applicable taxes, and utilities. The remaining
              distributable amount is allocated as follows:
            </p>

            <div className="sc-revenue-items">
              {[
                {
                  pct: "40%",
                  title: "Owner",
                  desc: "Your share of the distributable revenue, paid out on a monthly basis with full transparency.",
                },
                {
                  pct: "40%",
                  title: "Staycay",
                  desc: "Inclusive of cleaning, operations, guest management, and all Staycay services.",
                },
                {
                  pct: "20%",
                  title: "Asset Protection Reserve (APR)",
                  desc: "Allocated to maintain, protect, and upkeep your property for long-term value preservation.",
                },
              ].map((item) => (
                <div key={item.title} className="sc-revenue-item">
                  <div className="sc-revenue-pct-badge">{item.pct}</div>
                  <div>
                    <div className="sc-revenue-item-title">{item.title}</div>
                    <div className="sc-revenue-item-desc">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — circles */}
          <div className="d-flex align-items-center justify-content-center">
            <div className="sc-circles">
              <div className="sc-circle-group">
                <div className="sc-circle sc-circle-sm">
                  <div className="sc-circle-pct">20%</div>
                  <div className="sc-circle-sub">Asset Protection Reserve</div>
                </div>
                <span className="sc-circle-name">APR</span>
              </div>

              <div className="sc-circle-group">
                <div className="sc-circle sc-circle-lg">
                  <div className="sc-circle-pct">40%</div>
                  <div className="sc-circle-sub">Owner Share</div>
                </div>
                <span className="sc-circle-name">Owner</span>
              </div>

              <div className="sc-circle-group">
                <div className="sc-circle sc-circle-lg" style={{ background: "var(--sc-tan)", opacity: 0.7 }}>
                  <div className="sc-circle-pct" style={{ color: "#fff" }}>40%</div>
                  <div className="sc-circle-sub" style={{ color: "rgba(255,255,255,0.8)" }}>Staycay Share</div>
                </div>
                <span className="sc-circle-name">Staycay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
