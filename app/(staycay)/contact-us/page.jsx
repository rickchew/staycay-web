"use client";
import { useState } from "react";
import Link from "next/link";
import StaycayHeader from "@/components/staycay/StaycayHeader";
import StaycayFooter from "@/components/staycay/StaycayFooter";

const contactInfo = [
  {
    label: "Email",
    value: "hello@staycay.my",
    href: "mailto:hello@staycay.my",
    icon: "✉",
  },
  {
    label: "WhatsApp",
    value: "+60 — (to be updated)",
    href: "https://wa.me/",
    icon: "◎",
  },
  {
    label: "Operating Cities",
    value: "Miri · Kota Kinabalu · and beyond",
    icon: "◇",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to a form backend (e.g. Formspree, EmailJS, or API route)
    setSubmitted(true);
  };

  return (
    <div className="theme-staycay">
      <StaycayHeader />
      <main>
        {/* Page Hero */}
        <div className="sc-page-hero">
          <div className="container">
            <span className="sc-label">Get in Touch</span>
            <h1 className="sc-title-lg" style={{ maxWidth: 460 }}>
              Partner With Us
            </h1>
            <p className="sc-body" style={{ maxWidth: 440 }}>
              Reach out and let us show you how Staycay can protect, manage, and
              grow your property investment.
            </p>
          </div>
        </div>

        {/* Contact section */}
        <section className="sc-section sc-bg-light">
          <div className="container">
            <div className="sc-contact-grid">
              {/* Form */}
              <div>
                {submitted ? (
                  <div style={{ padding: "60px 0" }}>
                    <span className="sc-label">Message Received</span>
                    <h2 className="sc-title" style={{ marginBottom: 14 }}>
                      Thank You!
                    </h2>
                    <p className="sc-body" style={{ marginBottom: 28 }}>
                      We&apos;ve received your message and will get back to you
                      within 1–2 business days.
                    </p>
                    <button
                      className="sc-btn sc-btn-outline"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="row g-0">
                      <div className="col-sm-6 pe-sm-3">
                        <div className="sc-form-group">
                          <label className="sc-form-label" htmlFor="name">Full Name</label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            className="sc-form-input"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 ps-sm-3">
                        <div className="sc-form-group">
                          <label className="sc-form-label" htmlFor="email">Email Address</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="sc-form-input"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row g-0">
                      <div className="col-sm-6 pe-sm-3">
                        <div className="sc-form-group">
                          <label className="sc-form-label" htmlFor="phone">Phone / WhatsApp</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="sc-form-input"
                            placeholder="+60 ..."
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-6 ps-sm-3">
                        <div className="sc-form-group">
                          <label className="sc-form-label" htmlFor="city">Property City</label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            className="sc-form-input"
                            placeholder="e.g. Miri, Kota Kinabalu"
                            value={formData.city}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sc-form-group">
                      <label className="sc-form-label" htmlFor="interest">I am interested in</label>
                      <select
                        id="interest"
                        name="interest"
                        className="sc-form-select"
                        value={formData.interest}
                        onChange={handleChange}
                      >
                        <option value="">Select an option</option>
                        <option value="property-management">Property Management</option>
                        <option value="design-renovation">Design & Renovation</option>
                        <option value="stay-operations">Stay Operations</option>
                        <option value="all-services">All Services</option>
                        <option value="general">General Enquiry</option>
                      </select>
                    </div>

                    <div className="sc-form-group">
                      <label className="sc-form-label" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="sc-form-textarea"
                        placeholder="Tell us about your property and what you're looking for..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>

                    <button type="submit" className="sc-btn sc-btn-dark" style={{ marginTop: 8 }}>
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Info */}
              <div>
                <span className="sc-label">Contact Information</span>
                <div className="sc-divider" />
                <h2 className="sc-title" style={{ marginBottom: 32 }}>
                  Let&apos;s Talk About Your Property
                </h2>
                <p className="sc-body" style={{ marginBottom: 36 }}>
                  Whether you&apos;re a first-time property owner or looking to
                  switch to a better management partner, our team is here to guide
                  you through every step.
                </p>

                {contactInfo.map((c, i) => (
                  <div key={i} className="sc-contact-info-item">
                    <div className="sc-contact-info-icon">{c.icon}</div>
                    <div>
                      <div className="sc-contact-info-label">{c.label}</div>
                      <div className="sc-contact-info-value">
                        {c.href ? (
                          <a href={c.href} target="_blank" rel="noopener noreferrer">
                            {c.value}
                          </a>
                        ) : (
                          c.value
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                <div
                  style={{
                    marginTop: 40,
                    padding: "28px 24px",
                    background: "var(--sc-sand)",
                    borderLeft: "3px solid var(--sc-tan)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 18,
                      fontWeight: 400,
                      color: "var(--sc-dark)",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    &ldquo;We are committed to ensuring both parties are aligned toward
                    the steady growth of your property&apos;s value.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <StaycayFooter />
    </div>
  );
}
