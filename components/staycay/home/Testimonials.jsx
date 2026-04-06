const testimonials = [
  {
    quote:
      "Handing over my unit to Staycay was one of the best decisions I've made. The occupancy rate has been consistently high and I receive a clear breakdown every month — no guessing, no surprises.",
    name: "Ahmad R.",
    role: "Property Owner · Miri",
    initials: "AR",
  },
  {
    quote:
      "The renovation they did on my apartment was beyond what I expected. Guests love the space and my reviews have been overwhelmingly positive since Staycay took over.",
    name: "Siti L.",
    role: "Property Owner · Kota Kinabalu",
    initials: "SL",
  },
  {
    quote:
      "I was skeptical at first about the 20% APR allocation, but two years in, my property is in better condition than when I started. That reserve fund has paid for itself many times over.",
    name: "David C.",
    role: "Property Owner · Miri",
    initials: "DC",
  },
];

export default function Testimonials() {
  return (
    <section className="sc-section sc-bg-cream">
      <div className="container">
        <div className="text-center mb-5">
          <span className="sc-label">Owner Stories</span>
          <h2 className="sc-title mx-auto" style={{ maxWidth: 480 }}>
            What Our Property Owners Say
          </h2>
        </div>

        <div className="row g-4">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-4">
              <div
                style={{
                  background: "var(--sc-light)",
                  padding: "36px 32px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderTop: "2px solid var(--sc-tan)",
                }}
              >
                {/* Quote mark */}
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 60,
                    lineHeight: 0.8,
                    color: "var(--sc-tan)",
                    marginBottom: 20,
                    opacity: 0.6,
                  }}
                >
                  &ldquo;
                </div>

                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: "var(--sc-muted)",
                    flex: 1,
                    marginBottom: 28,
                    fontStyle: "italic",
                  }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--sc-sand)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 15,
                      fontWeight: 500,
                      color: "var(--sc-tan)",
                      flexShrink: 0,
                    }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13,
                        fontWeight: 500,
                        color: "var(--sc-dark)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 11,
                        color: "var(--sc-tan)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        marginTop: 2,
                      }}
                    >
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
