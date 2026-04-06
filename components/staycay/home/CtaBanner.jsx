import Link from "next/link";

export default function CtaBanner() {
  return (
    <section className="sc-cta sc-bg-dark">
      <div className="container text-center">
        <span className="sc-label" style={{ color: "rgba(245,234,224,0.5)" }}>
          Get Started
        </span>
        <h2
          className="sc-title-lg light mx-auto"
          style={{ maxWidth: 640, marginBottom: 16 }}
        >
          Aligned for Long-Term Success
        </h2>
        <p
          className="sc-body light mx-auto"
          style={{ maxWidth: 480, marginBottom: 40 }}
        >
          Partner with Staycay and transform your property into a professionally
          managed, guest-loved stay that performs sustainably.
        </p>
        <Link href="/contact-us" className="sc-btn sc-btn-light">
          Partner With Us
        </Link>
      </div>
    </section>
  );
}
