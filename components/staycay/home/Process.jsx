const steps = [
  {
    num: "01",
    title: "Property Assessment",
    desc: "We visit your property and assess its potential — condition, location, layout, and market demand — to recommend the right Staycay tier and services.",
  },
  {
    num: "02",
    title: "Design & Setup",
    desc: "Our team handles renovation, furnishing, and photography. Every unit is prepared to Staycay standards before going live on any platform.",
  },
  {
    num: "03",
    title: "Go Live & Operate",
    desc: "We list your property across all major short-stay platforms, manage bookings, guest communications, housekeeping, and day-to-day operations.",
  },
  {
    num: "04",
    title: "Report & Grow",
    desc: "You receive clear monthly statements — revenue, occupancy, expenses, and APR balance. No surprises. Just transparent, consistent performance.",
  },
];

export default function Process() {
  return (
    <section className="sc-section sc-bg-dark">
      <div className="container">
        <div className="text-center mb-5">
          <span className="sc-label" style={{ color: "rgba(245,234,224,0.5)" }}>
            How It Works
          </span>
          <h2 className="sc-title light mx-auto" style={{ maxWidth: 500 }}>
            From Property to Performing Asset
          </h2>
        </div>

        <div className="row g-0">
          {steps.map((step, i) => (
            <div key={step.num} className="col-md-3">
              <div
                style={{
                  padding: "36px 32px",
                  borderRight: i < steps.length - 1 ? "1px solid rgba(245,234,224,0.08)" : "none",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 52,
                    fontWeight: 300,
                    color: "rgba(176,154,132,0.25)",
                    lineHeight: 1,
                    marginBottom: 20,
                  }}
                >
                  {step.num}
                </div>
                <div
                  style={{
                    width: 28,
                    height: 1,
                    background: "var(--sc-tan)",
                    marginBottom: 18,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22,
                    fontWeight: 500,
                    color: "var(--sc-light)",
                    marginBottom: 12,
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.8,
                    color: "rgba(245,234,224,0.5)",
                    margin: 0,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
