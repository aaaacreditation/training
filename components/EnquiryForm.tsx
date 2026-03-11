"use client";

import { useState, FormEvent } from "react";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organisation: "",
    website: "",
    country: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("Thank you! We'll be in touch within one business day.");
        setFormData({ fullName: "", email: "", organisation: "", website: "", country: "" });
      } else {
        const data = await res.json();
        setStatus("error");
        setMessage(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="enquiry-card">
      <h3>Quick Enquiry</h3>
      <p>We&apos;ll respond within one business day.</p>

      {status === "success" ? (
        <div style={{
          background: "var(--gold-pale)",
          border: "1px solid var(--gold)",
          borderRadius: "3px",
          padding: "20px",
          textAlign: "center",
          color: "var(--blue)"
        }}>
          <svg width={40} height={40} viewBox="0 0 40 40" fill="none" style={{ marginBottom: 10 }}>
            <circle cx={20} cy={20} r={18} stroke="var(--gold)" strokeWidth="2" />
            <path d="M12 20L18 26L28 14" stroke="var(--gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p style={{ fontWeight: 600, fontSize: "0.95rem", marginBottom: 4 }}>Enquiry Sent!</p>
          <p style={{ fontSize: "0.84rem", color: "var(--text-muted)" }}>{message}</p>
          <button
            onClick={() => setStatus("idle")}
            style={{
              marginTop: 14,
              background: "var(--blue)",
              color: "white",
              border: "none",
              padding: "10px 24px",
              borderRadius: "2px",
              cursor: "pointer",
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
            }}
          >
            Send Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Organisation</label>
            <input
              type="text"
              name="organisation"
              placeholder="Your training company"
              value={formData.organisation}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Website</label>
            <input
              type="url"
              name="website"
              placeholder="https://yourcompany.com"
              value={formData.website}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <select name="country" value={formData.country} onChange={handleChange} required>
              <option value="">Select your country…</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>United Arab Emirates</option>
              <option>Saudi Arabia</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>India</option>
              <option>Singapore</option>
              <option>South Africa</option>
              <option>Other</option>
            </select>
          </div>

          {status === "error" && (
            <p style={{ color: "#c0392b", fontSize: "0.84rem", marginBottom: 10 }}>{message}</p>
          )}

          <button type="submit" className="form-submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending…" : "Send Enquiry →"}
          </button>

          <div className="trust-row">
            <div className="trust-badge">
              <svg width={13} height={13} viewBox="0 0 13 13" fill="none">
                <path d="M6.5 1L8 5H12.5L8.8 7.8L10.3 12L6.5 9.2L2.7 12L4.2 7.8L0.5 5H5L6.5 1Z" fill="#c8993a" />
              </svg>
              Globally Recognised
            </div>
            <div className="trust-badge">
              <svg width={13} height={13} viewBox="0 0 13 13" fill="none">
                <rect x={1} y={1} width={11} height={11} rx={2} stroke="#c8993a" strokeWidth="1.4" />
                <path d="M3.5 6.5L5.5 8.5L9.5 4.5" stroke="#c8993a" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              3–8 Week Process
            </div>
            <div className="trust-badge">
              <svg width={13} height={13} viewBox="0 0 13 13" fill="none">
                <circle cx="6.5" cy="6.5" r="5.5" stroke="#c8993a" strokeWidth="1.4" />
                <path d="M6.5 3.5V6.5L8.5 8.5" stroke="#c8993a" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              3-Year Certificate
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
