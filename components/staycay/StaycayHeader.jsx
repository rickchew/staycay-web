"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import StaycayLogo from "./StaycayLogo";

const navLinks = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/our-tiers", text: "Our Tiers" },
  { href: "/our-services", text: "Services" },
  { href: "/contact-us", text: "Contact" },
];

export default function StaycayHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`sc-header${scrolled ? " scrolled" : ""}`}>
        <Link href="/" className="sc-logo" style={{ textDecoration: "none" }}>
          <StaycayLogo color="var(--sc-dark)" size={34} variant="horizontal" />
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className="sc-nav-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={pathname === link.href ? "active" : ""}
                >
                  {link.text}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact-us" className="sc-nav-cta">
                Partner With Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="sc-mobile-btn"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      {/* Mobile Menu */}
      <div className={`sc-mobile-menu${mobileOpen ? " open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setMobileOpen(false)}>
                {link.text}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact-us" onClick={() => setMobileOpen(false)}>
              Partner With Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
