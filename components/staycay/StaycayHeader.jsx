"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", text: "Home" },
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
        {/* Logo */}
        <Link href="/" className="sc-logo">
          {/* Replace src with actual logo file once provided */}
          <svg className="sc-logo-icon" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="16" stroke="#B09A84" strokeWidth="1.2"/>
            <path d="M13 14c0-2.21 2.239-4 5-4s5 1.79 5 4-2.239 4-5 4-5 1.79-5 4 2.239 4 5 4 5-1.79 5-4"
              stroke="#B09A84" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
          </svg>
          <span className="sc-logo-text">Staycay</span>
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
