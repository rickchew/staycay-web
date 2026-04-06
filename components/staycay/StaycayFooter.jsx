import Link from "next/link";

const footerNav = [
  { href: "/", text: "Home" },
  { href: "/our-tiers", text: "Our Tiers" },
  { href: "/our-services", text: "Services" },
  { href: "/contact-us", text: "Contact" },
];

const socialLinks = [
  { href: "#", text: "Instagram" },
  { href: "#", text: "Facebook" },
  { href: "https://wa.me/", text: "WhatsApp" },
];

const legalLinks = [
  { href: "#", text: "Privacy Policy" },
  { href: "#", text: "Terms & Conditions" },
];

export default function StaycayFooter() {
  return (
    <footer className="sc-footer sc-bg-charcoal">
      <div className="container">
        <div className="row">
          {/* Brand col */}
          <div className="col-md-4 col-lg-3 mb-5 mb-md-0">
            <Link href="/" className="sc-footer-logo">Staycay</Link>
            <p className="sc-footer-tagline">
              Professional Property Management &amp; Stay Operations Platform
            </p>
            <p className="sc-footer-contact-line">
              <strong style={{ color: "rgba(245,234,224,0.55)", fontSize: 11, letterSpacing: "0.1em" }}>E.</strong>{" "}
              <a href="mailto:hello@staycay.my">hello@staycay.my</a>
            </p>
            <p className="sc-footer-contact-line">
              <strong style={{ color: "rgba(245,234,224,0.55)", fontSize: 11, letterSpacing: "0.1em" }}>T.</strong>{" "}
              <a href="tel:+60">+60 — (to be updated)</a>
            </p>
          </div>

          {/* Nav col */}
          <div className="col-sm-4 col-md-2 offset-md-2 offset-lg-3 mb-4 mb-sm-0">
            <h3 className="sc-fw-title">Navigate</h3>
            <ul className="sc-fw-list">
              {footerNav.map((l, i) => (
                <li key={i}><Link href={l.href}>{l.text}</Link></li>
              ))}
            </ul>
          </div>

          {/* Social col */}
          <div className="col-sm-4 col-md-2 mb-4 mb-sm-0">
            <h3 className="sc-fw-title">Social</h3>
            <ul className="sc-fw-list">
              {socialLinks.map((l, i) => (
                <li key={i}><a href={l.href} target="_blank" rel="noopener noreferrer">{l.text}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal col */}
          <div className="col-sm-4 col-md-2">
            <h3 className="sc-fw-title">Legal</h3>
            <ul className="sc-fw-list">
              {legalLinks.map((l, i) => (
                <li key={i}><a href={l.href}>{l.text}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="sc-footer-bottom">
          <span className="sc-footer-copy">
            © Staycay {new Date().getFullYear()}. All rights reserved.
          </span>
          <span className="sc-footer-copy">
            Miri · Kota Kinabalu · and beyond
          </span>
        </div>
      </div>
    </footer>
  );
}
