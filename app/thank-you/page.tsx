import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You — AAA Accreditation",
};

export default function ThankYouPage() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
  :root {
    --blue:       #1a3a6b;
    --blue-mid:   #1e4580;
    --blue-dark:  #0f2347;
    --blue-light: #2a5298;
    --gold:       #c8993a;
    --gold-light: #e8b84b;
    --gold-pale:  #fdf3dc;
    --white:      #ffffff;
    --off-white:  #f7f8fc;
    --light-gray: #eef1f7;
    --text:       #1a2a4a;
    --text-muted: #5a6a88;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--white);
    color: var(--text);
    overflow-x: hidden;
  }

  .ty-wrapper {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 55%, var(--blue-light) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 40px 24px;
  }

  .ty-bg-pattern {
    position: absolute; inset: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 56px 56px;
  }

  .ty-gold-bar {
    position: absolute; top: 0; left: 0; right: 0; height: 4px;
    background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%);
  }

  .ty-orb {
    position: absolute; border-radius: 50%; pointer-events: none;
    filter: blur(70px);
  }
  .ty-orb-1 {
    width: 480px; height: 480px;
    background: radial-gradient(circle, rgba(200,153,58,0.14) 0%, transparent 70%);
    top: -100px; right: 80px;
    animation: tyFloat 9s ease-in-out infinite;
  }
  .ty-orb-2 {
    width: 320px; height: 320px;
    background: radial-gradient(circle, rgba(42,82,152,0.5) 0%, transparent 70%);
    bottom: -60px; left: 100px;
  }

  @keyframes tyFloat {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-28px); }
  }

  .ty-card {
    position: relative; z-index: 2;
    background: var(--white);
    border-radius: 6px;
    padding: 60px 56px;
    max-width: 560px;
    width: 100%;
    text-align: center;
    box-shadow: 0 32px 80px rgba(10,22,60,0.35);
    border-top: 4px solid var(--gold);
    animation: tySlideUp 0.6s ease forwards;
  }

  @keyframes tySlideUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .ty-icon {
    width: 80px; height: 80px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--gold-pale) 0%, #fff8ec 100%);
    border: 2px solid var(--gold);
    display: flex; align-items: center; justify-content: center;
    margin: 0 auto 28px;
    animation: tyPulse 2s ease-in-out infinite;
  }

  @keyframes tyPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(200,153,58,0.3); }
    50%      { box-shadow: 0 0 0 14px rgba(200,153,58,0); }
  }

  .ty-card h1 {
    font-family: 'Playfair Display', serif;
    font-size: 2rem;
    font-weight: 700;
    color: var(--blue);
    margin-bottom: 12px;
    line-height: 1.2;
  }
  .ty-card h1 em {
    font-style: italic;
    color: var(--gold);
  }

  .ty-card .ty-subtitle {
    font-size: 1rem;
    line-height: 1.75;
    color: var(--text-muted);
    margin-bottom: 36px;
  }

  .ty-steps {
    display: flex;
    gap: 20px;
    margin-bottom: 36px;
    text-align: left;
  }

  .ty-step {
    flex: 1;
    background: var(--off-white);
    border: 1px solid var(--light-gray);
    border-radius: 4px;
    padding: 20px 16px;
    position: relative;
  }

  .ty-step-num {
    font-family: 'Playfair Display', serif;
    font-size: 1.6rem;
    font-weight: 700;
    color: rgba(26,58,107,0.12);
    line-height: 1;
    margin-bottom: 8px;
  }

  .ty-step h4 {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--blue);
    margin-bottom: 4px;
  }

  .ty-step p {
    font-size: 0.78rem;
    color: var(--text-muted);
    line-height: 1.55;
  }

  .ty-actions {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
  }

  .ty-btn-primary {
    display: inline-block;
    background: var(--gold);
    color: var(--blue-dark);
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 0.88rem;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-decoration: none;
    padding: 15px 36px;
    border-radius: 2px;
    transition: background 0.2s, transform 0.15s;
  }
  .ty-btn-primary:hover {
    background: var(--gold-light);
    transform: translateY(-1px);
  }

  .ty-btn-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: var(--blue);
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 0.88rem;
    text-decoration: none;
    padding: 13px 28px;
    border-radius: 2px;
    border: 1px solid rgba(26,58,107,0.2);
    transition: border-color 0.2s, color 0.2s;
  }
  .ty-btn-outline:hover {
    border-color: var(--gold);
    color: var(--gold);
  }

  .ty-footer-text {
    position: relative; z-index: 2;
    margin-top: 32px;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.4);
    text-align: center;
  }
  .ty-footer-text a {
    color: var(--gold);
    text-decoration: none;
  }
  .ty-footer-text a:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    .ty-card { padding: 40px 28px; }
    .ty-card h1 { font-size: 1.6rem; }
    .ty-steps { flex-direction: column; gap: 12px; }
  }
          `,
        }}
      />
      <div className="ty-wrapper">
        <div className="ty-bg-pattern" />
        <div className="ty-gold-bar" />
        <div className="ty-orb ty-orb-1" />
        <div className="ty-orb ty-orb-2" />

        <div className="ty-card">
          <div className="ty-icon">
            <svg width={40} height={40} viewBox="0 0 40 40" fill="none">
              <circle cx={20} cy={20} r={18} stroke="#c8993a" strokeWidth="2" />
              <path
                d="M12 20L18 26L28 14"
                stroke="#c8993a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1>
            Thank You for Your <em>Enquiry</em>
          </h1>
          <p className="ty-subtitle">
            Your application has been received successfully. Our accreditation
            team will review your details and get back to you within{" "}
            <strong>one business day</strong>.
          </p>

          <div className="ty-steps">
            <div className="ty-step">
              <div className="ty-step-num">01</div>
              <h4>Enquiry Received</h4>
              <p>We have your details and will begin reviewing shortly.</p>
            </div>
            <div className="ty-step">
              <div className="ty-step-num">02</div>
              <h4>Team Review</h4>
              <p>Our experts will assess your training programme eligibility.</p>
            </div>
            <div className="ty-step">
              <div className="ty-step-num">03</div>
              <h4>We Contact You</h4>
              <p>Expect a personalised response within one business day.</p>
            </div>
          </div>

          <div className="ty-actions">
            <a
              href="https://calendly.com/accreditationaaa/consultation-call-am"
              className="ty-btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Free Consultation
            </a>
            <Link href="/" className="ty-btn-outline">
              <svg width={15} height={15} viewBox="0 0 15 15" fill="none">
                <path
                  d="M10 2L4 7.5L10 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Homepage
            </Link>
          </div>
        </div>

        <div className="ty-footer-text">
          Questions? Email us at{" "}
          <a href="mailto:info@aaa-accreditation.org">
            info@aaa-accreditation.org
          </a>{" "}
          or call{" "}
          <a href="tel:+15716012616">+1 (571) 601 2616</a>
        </div>
      </div>
    </>
  );
}
