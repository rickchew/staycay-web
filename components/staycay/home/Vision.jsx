const visionPoints = [
  {
    title: "Protect Owners' Assets",
    desc: "We prioritise property care, structured maintenance, and responsible guest management. Every unit under Staycay is treated as a long-term asset — not a short-term income tool.",
    icon: "🛡",
  },
  {
    title: "Build Sustainable Returns",
    desc: "Instead of chasing aggressive short-term profits, we focus on stable occupancy, healthy pricing strategy, and consistent cash flow. Our goal is steady growth, not temporary spikes.",
    icon: "📈",
  },
  {
    title: "Design With Longevity",
    desc: "Through thoughtful renovation and design-led setup, we create spaces that remain timeless, durable, and operationally efficient — reducing long-term wear and cost.",
    icon: "✦",
  },
  {
    title: "Operate With Transparency",
    desc: "Clear reporting, structured systems, and accountable operations ensure owners always know how their property is performing at any given time.",
    icon: "◎",
  },
  {
    title: "Expand With Quality, Not Quantity",
    desc: "As we grow from Miri to Kota Kinabalu and beyond, we remain selective — maintaining operational standards and protecting the Staycay brand value for all owners.",
    icon: "◇",
  },
];

export default function Vision() {
  return (
    <section className="sc-section sc-bg-sand">
      <div className="container">
        <div className="sc-vision-layout">
          {/* Left — copy */}
          <div>
            <span className="sc-label">Long-Term Vision</span>
            <div className="sc-divider" />
            <h2 className="sc-title-lg">Focus on Assets &amp; Value</h2>
            <p className="sc-body" style={{ marginBottom: 24 }}>
              Our vision is to become the most trusted short-stay property partner
              for owners — not just managing units, but protecting and growing assets
              for the long run.
            </p>
            <p className="sc-body">
              At Staycay, we believe a property is more than a listing. It is an
              investment, a legacy, and a responsibility.
            </p>
          </div>

          {/* Right — points */}
          <div>
            {visionPoints.map((p) => (
              <div key={p.title} className="sc-vision-item">
                <div className="sc-vision-icon" aria-hidden="true">
                  <span style={{ fontSize: 14 }}>{p.icon}</span>
                </div>
                <div>
                  <div className="sc-vision-item-title">{p.title}</div>
                  <div className="sc-vision-item-desc">{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
