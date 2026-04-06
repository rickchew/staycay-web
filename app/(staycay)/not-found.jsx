import Link from "next/link";
import StaycayHeader from "@/components/staycay/StaycayHeader";
import StaycayFooter from "@/components/staycay/StaycayFooter";
import StaycayLogo from "@/components/staycay/StaycayLogo";

export default function NotFound() {
  return (
    <div className="theme-staycay">
      <StaycayHeader />
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "var(--sc-cream)",
          textAlign: "center",
          padding: "120px 24px 80px",
        }}
      >
        <div>
          <div style={{ marginBottom: 28, display: "flex", justifyContent: "center", opacity: 0.3 }}>
            <StaycayLogo color="var(--sc-dark)" size={60} variant="icon" />
          </div>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(80px, 14vw, 160px)",
              fontWeight: 300,
              color: "rgba(176,154,132,0.25)",
              lineHeight: 1,
              marginBottom: 8,
            }}
          >
            404
          </div>
          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 400,
              color: "var(--sc-dark)",
              marginBottom: 14,
            }}
          >
            Page Not Found
          </h1>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              color: "var(--sc-muted)",
              maxWidth: 380,
              margin: "0 auto 36px",
              lineHeight: 1.8,
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get
            you back to where you need to be.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="sc-btn sc-btn-dark">Back to Home</Link>
            <Link href="/contact-us" className="sc-btn sc-btn-outline">Contact Us</Link>
          </div>
        </div>
      </main>
      <StaycayFooter />
    </div>
  );
}
