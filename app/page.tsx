import { Metadata } from "next";
import EnquiryForm from "@/components/EnquiryForm";
import { ModalTrigger } from "@/components/EnquiryModal";

export const metadata: Metadata = {
  title: "AAA Accreditation — Training & Education Providers",
};

export default function LandingPage() {
  return (
    <>
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
    rel="stylesheet"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n  :root {\n    --blue:       #1a3a6b;\n    --blue-mid:   #1e4580;\n    --blue-dark:  #0f2347;\n    --blue-light: #2a5298;\n    --gold:       #c8993a;\n    --gold-light: #e8b84b;\n    --gold-pale:  #fdf3dc;\n    --white:      #ffffff;\n    --off-white:  #f7f8fc;\n    --light-gray: #eef1f7;\n    --text:       #1a2a4a;\n    --text-muted: #5a6a88;\n  }\n\n  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n  html { scroll-behavior: smooth; }\n\n  body {\n    font-family: 'DM Sans', sans-serif;\n    background: var(--white);\n    color: var(--text);\n    overflow-x: hidden;\n  }\n\n  /* ── NAV ── */\n  nav {\n    position: fixed; top: 0; left: 0; right: 0; z-index: 100;\n    display: flex; align-items: center; justify-content: space-between;\n    padding: 18px 64px;\n    background: rgba(255,255,255,0.97);\n    backdrop-filter: blur(12px);\n    border-bottom: 1px solid rgba(26,58,107,0.1);\n    box-shadow: 0 2px 20px rgba(26,58,107,0.07);\n  }\n  .nav-logo {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.15rem; font-weight: 700;\n    color: var(--blue); letter-spacing: 0.04em;\n  }\n  .nav-logo span { color: var(--gold); }\n  .nav-cta {\n    background: var(--blue); color: var(--white);\n    font-weight: 600; font-size: 0.82rem; letter-spacing: 0.07em;\n    text-transform: uppercase; text-decoration: none;\n    padding: 11px 28px; border-radius: 2px;\n    transition: background 0.2s;\n  }\n  .nav-cta:hover { background: var(--blue-light); }\n\n  /* ── HERO ── */\n  .hero {\n    min-height: 100vh;\n    background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 55%, var(--blue-light) 100%);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    position: relative;\n    overflow: hidden;\n  }\n\n  .hero-bg-pattern {\n    position: absolute; inset: 0; pointer-events: none;\n    background-image:\n      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),\n      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);\n    background-size: 56px 56px;\n  }\n\n  .hero-gold-bar {\n    position: absolute; top: 0; left: 0; right: 0; height: 4px;\n    background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 50%, var(--gold) 100%);\n  }\n\n  .hero-orb {\n    position: absolute; border-radius: 50%; pointer-events: none;\n    filter: blur(70px);\n  }\n  .hero-orb-1 {\n    width: 480px; height: 480px;\n    background: radial-gradient(circle, rgba(200,153,58,0.14) 0%, transparent 70%);\n    top: -80px; right: 60px;\n    animation: float 9s ease-in-out infinite;\n  }\n  .hero-orb-2 {\n    width: 320px; height: 320px;\n    background: radial-gradient(circle, rgba(42,82,152,0.5) 0%, transparent 70%);\n    bottom: 40px; left: 120px;\n  }\n\n  @keyframes float {\n    0%, 100% { transform: translateY(0); }\n    50%       { transform: translateY(-28px); }\n  }\n\n  .hero-left {\n    display: flex; flex-direction: column; justify-content: center;\n    padding: 140px 64px 100px;\n    position: relative; z-index: 2;\n  }\n\n  .hero-eyebrow {\n    display: inline-flex; align-items: center; gap: 10px;\n    font-size: 0.72rem; font-weight: 600; letter-spacing: 0.18em;\n    text-transform: uppercase; color: var(--gold);\n    margin-bottom: 26px;\n  }\n  .hero-eyebrow::before {\n    content: ''; width: 30px; height: 1px; background: var(--gold);\n  }\n\n  .hero-h1 {\n    font-family: 'Playfair Display', serif;\n    font-size: clamp(2.5rem, 3.8vw, 3.7rem);\n    font-weight: 700; line-height: 1.12;\n    color: var(--white);\n    margin-bottom: 22px;\n  }\n  .hero-h1 em { font-style: italic; color: var(--gold); }\n\n  .hero-sub {\n    font-size: 1.02rem; line-height: 1.78;\n    color: rgba(255,255,255,0.68);\n    max-width: 420px; margin-bottom: 46px;\n  }\n\n  .hero-actions { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }\n\n  .btn-primary {\n    background: var(--gold); color: var(--blue-dark);\n    font-weight: 700; font-size: 0.88rem; letter-spacing: 0.05em;\n    text-transform: uppercase; text-decoration: none;\n    padding: 16px 36px; border-radius: 2px; border: none; cursor: pointer;\n    transition: background 0.2s, transform 0.15s;\n    display: inline-block;\n  }\n  .btn-primary:hover { background: var(--gold-light); transform: translateY(-1px); }\n\n  .btn-outline {\n    background: transparent; color: rgba(255,255,255,0.85);\n    font-weight: 500; font-size: 0.88rem;\n    text-decoration: none; padding: 16px 28px; border-radius: 2px;\n    border: 1px solid rgba(255,255,255,0.28);\n    transition: border-color 0.2s, color 0.2s;\n    display: inline-block;\n  }\n  .btn-outline:hover { border-color: var(--gold); color: var(--gold); }\n\n  .hero-right {\n    display: flex; flex-direction: column; justify-content: center; align-items: center;\n    padding: 140px 56px 100px 24px;\n    position: relative; z-index: 2;\n  }\n\n  /* Enquiry card */\n  .enquiry-card {\n    background: var(--white);\n    border-radius: 4px;\n    padding: 44px;\n    width: 100%; max-width: 400px;\n    box-shadow: 0 24px 64px rgba(10,22,60,0.3);\n    border-top: 4px solid var(--gold);\n  }\n  .enquiry-card h3 {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.45rem; color: var(--blue);\n    margin-bottom: 6px;\n  }\n  .enquiry-card p { font-size: 0.86rem; color: var(--text-muted); margin-bottom: 26px; }\n\n  .form-group { margin-bottom: 14px; }\n  .form-group label {\n    display: block; font-size: 0.72rem; font-weight: 600;\n    letter-spacing: 0.1em; text-transform: uppercase;\n    color: var(--text-muted); margin-bottom: 6px;\n  }\n  .form-group input,\n  .form-group select {\n    width: 100%; padding: 12px 14px;\n    background: var(--off-white);\n    border: 1px solid rgba(26,58,107,0.14);\n    border-radius: 2px;\n    color: var(--text); font-family: 'DM Sans', sans-serif; font-size: 0.88rem;\n    outline: none; transition: border-color 0.2s;\n    appearance: none;\n  }\n  .form-group input::placeholder { color: #aab4c8; }\n  .form-group input:focus,\n  .form-group select:focus { border-color: var(--blue); background: var(--white); }\n\n  .form-submit {\n    width: 100%; padding: 14px;\n    background: var(--blue); color: var(--white);\n    font-family: 'DM Sans', sans-serif;\n    font-weight: 700; font-size: 0.88rem;\n    letter-spacing: 0.07em; text-transform: uppercase;\n    border: none; border-radius: 2px; cursor: pointer;\n    transition: background 0.2s; margin-top: 6px;\n  }\n  .form-submit:hover { background: var(--blue-light); }\n\n  .trust-row {\n    display: flex; gap: 16px; margin-top: 22px; justify-content: center; flex-wrap: wrap;\n  }\n  .trust-badge {\n    display: flex; align-items: center; gap: 7px;\n    font-size: 0.74rem; color: var(--text-muted);\n  }\n\n  /* ── STATS ── */\n  .stats-ribbon {\n    background: var(--blue);\n    padding: 32px 64px;\n    display: flex; justify-content: center; gap: 72px; flex-wrap: wrap;\n    border-bottom: 3px solid var(--gold);\n  }\n  .stat-item { text-align: center; }\n  .stat-num {\n    font-family: 'Playfair Display', serif;\n    font-size: 2.1rem; font-weight: 700;\n    color: var(--gold); line-height: 1; display: block;\n  }\n  .stat-label {\n    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.1em;\n    text-transform: uppercase; color: rgba(255,255,255,0.6);\n    display: block; margin-top: 5px;\n  }\n\n  /* ── WHY ── */\n  .why-section {\n    background: var(--white);\n    display: grid; grid-template-columns: 1fr 1fr;\n    gap: 80px; align-items: center;\n    padding: 100px 80px;\n  }\n\n  .section-eyebrow {\n    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.18em;\n    text-transform: uppercase; color: var(--gold);\n    display: flex; align-items: center; gap: 10px;\n    margin-bottom: 14px;\n  }\n  .section-eyebrow::before { content:''; width:26px; height:1px; background:var(--gold); }\n\n  .section-title {\n    font-family: 'Playfair Display', serif;\n    font-size: clamp(1.9rem, 2.8vw, 2.7rem);\n    font-weight: 700; line-height: 1.18; color: var(--blue);\n  }\n  .section-title em { font-style: italic; color: var(--gold); }\n\n  .section-intro {\n    font-size: 1rem; line-height: 1.8; color: var(--text-muted);\n    margin-top: 18px; margin-bottom: 36px;\n  }\n\n  .feature-item {\n    display: flex; gap: 18px; align-items: flex-start;\n    padding: 20px 22px;\n    border: 1px solid var(--light-gray);\n    border-radius: 3px; margin-bottom: 14px;\n    transition: border-color 0.2s, box-shadow 0.2s;\n  }\n  .feature-item:hover {\n    border-color: rgba(26,58,107,0.25);\n    box-shadow: 0 4px 20px rgba(26,58,107,0.07);\n  }\n\n  .feature-icon {\n    width: 44px; height: 44px; border-radius: 2px; flex-shrink: 0;\n    background: var(--blue); display: flex; align-items: center; justify-content: center;\n  }\n\n  .feature-text h4 { font-weight: 600; font-size: 0.94rem; color: var(--blue); margin-bottom: 4px; }\n  .feature-text p  { font-size: 0.86rem; color: var(--text-muted); line-height: 1.65; }\n\n  /* Right panel */\n  .why-right-panel {\n    background: linear-gradient(145deg, var(--blue-dark) 0%, var(--blue) 100%);\n    border-radius: 4px; padding: 52px 44px;\n    display: flex; flex-direction: column; gap: 26px;\n    position: relative; overflow: hidden;\n    border-top: 4px solid var(--gold);\n  }\n  .why-right-panel::before {\n    content: 'AAA';\n    position: absolute; right: -20px; bottom: -30px;\n    font-family: 'Playfair Display', serif;\n    font-size: 10rem; font-weight: 700;\n    color: rgba(255,255,255,0.04); line-height: 1;\n    user-select: none;\n  }\n\n  .benefit-row {\n    display: flex; align-items: flex-start; gap: 16px;\n    position: relative; z-index: 1;\n  }\n  .benefit-num {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.9rem; font-weight: 700; color: var(--gold);\n    line-height: 1; flex-shrink: 0; width: 44px;\n  }\n  .benefit-text h4 { font-weight: 600; font-size: 0.92rem; color: var(--white); margin-bottom: 4px; }\n  .benefit-text p  { font-size: 0.84rem; color: rgba(255,255,255,0.55); line-height: 1.6; }\n\n  .divider { height: 1px; background: rgba(255,255,255,0.1); }\n\n  .panel-cta {\n    display: inline-flex; align-items: center; gap: 10px;\n    background: var(--gold); color: var(--blue-dark);\n    font-weight: 700; font-size: 0.84rem; letter-spacing: 0.06em;\n    text-transform: uppercase; text-decoration: none;\n    padding: 14px 28px; border-radius: 2px; align-self: flex-start;\n    transition: background 0.2s; position: relative; z-index: 1;\n  }\n  .panel-cta:hover { background: var(--gold-light); }\n\n  /* ── PROCESS ── */\n  .process-section {\n    background: var(--off-white); padding: 100px 80px;\n    border-top: 1px solid var(--light-gray);\n  }\n\n  .process-grid {\n    display: grid; grid-template-columns: repeat(4, 1fr);\n    gap: 0; margin-top: 60px;\n    border: 1px solid rgba(26,58,107,0.12);\n    border-radius: 3px; overflow: hidden;\n  }\n\n  .process-step {\n    background: var(--white); padding: 40px 30px;\n    border-right: 1px solid rgba(26,58,107,0.1);\n    position: relative; transition: background 0.2s;\n  }\n  .process-step:last-child { border-right: none; }\n  .process-step:hover { background: var(--gold-pale); }\n  .process-step::before {\n    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;\n    background: var(--blue); opacity: 0; transition: opacity 0.2s;\n  }\n  .process-step:hover::before { opacity: 1; }\n\n  .step-num {\n    font-family: 'Playfair Display', serif;\n    font-size: 2.8rem; font-weight: 700;\n    color: rgba(26,58,107,0.1); line-height: 1; margin-bottom: 18px;\n  }\n  .step-icon {\n    width: 46px; height: 46px; border-radius: 2px;\n    background: var(--blue); display: flex; align-items: center; justify-content: center;\n    margin-bottom: 18px;\n  }\n\n  .process-step h4 { font-weight: 600; font-size: 0.96rem; color: var(--blue); margin-bottom: 10px; }\n  .process-step p  { font-size: 0.855rem; color: var(--text-muted); line-height: 1.7; }\n  .process-timeline {\n    display: inline-block; margin-top: 16px;\n    font-size: 0.7rem; font-weight: 700; letter-spacing: 0.12em;\n    text-transform: uppercase; color: var(--gold);\n    background: var(--gold-pale); padding: 4px 10px; border-radius: 20px;\n  }\n\n  /* ── REQUIREMENTS ── */\n  .req-section { background: var(--white); padding: 100px 80px; }\n\n  .req-grid {\n    display: grid; grid-template-columns: 1fr 1fr;\n    gap: 36px; margin-top: 56px;\n  }\n\n  .req-card {\n    background: var(--off-white); border-radius: 3px; padding: 44px;\n    border: 1px solid var(--light-gray);\n    position: relative; overflow: hidden;\n    transition: box-shadow 0.2s;\n  }\n  .req-card:hover { box-shadow: 0 8px 30px rgba(26,58,107,0.1); }\n  .req-card::before {\n    content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px;\n    background: var(--gold);\n  }\n  .req-card-icon {\n    width: 52px; height: 52px; background: var(--blue); border-radius: 2px;\n    display: flex; align-items: center; justify-content: center; margin-bottom: 20px;\n  }\n  .req-card h3 {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.35rem; font-weight: 700; color: var(--blue); margin-bottom: 26px;\n  }\n  .req-list { list-style: none; display: flex; flex-direction: column; gap: 15px; }\n  .req-list li {\n    display: flex; gap: 13px; align-items: flex-start;\n    font-size: 0.88rem; color: #4a5a78; line-height: 1.65;\n  }\n  .req-bullet {\n    width: 20px; height: 20px; border-radius: 50%;\n    background: var(--gold); flex-shrink: 0; margin-top: 1px;\n    display: flex; align-items: center; justify-content: center;\n  }\n  .req-bullet svg { width: 10px; height: 10px; }\n\n  /* ── CTA ── */\n  .cta-section {\n    background: linear-gradient(135deg, var(--blue-dark) 0%, var(--blue) 60%, var(--blue-light) 100%);\n    padding: 100px 80px;\n    display: grid; grid-template-columns: 1fr auto;\n    gap: 60px; align-items: center;\n    position: relative; overflow: hidden;\n    border-top: 4px solid var(--gold);\n  }\n  .cta-section::before {\n    content: 'Accredited';\n    position: absolute; right: -60px; top: 50%; transform: translateY(-50%);\n    font-family: 'Playfair Display', serif;\n    font-size: 13rem; font-weight: 700;\n    color: rgba(255,255,255,0.03); line-height: 1;\n    user-select: none; white-space: nowrap;\n  }\n  .cta-left h2 {\n    font-family: 'Playfair Display', serif;\n    font-size: clamp(2rem, 3.2vw, 2.9rem);\n    color: var(--white); line-height: 1.2; margin-bottom: 14px;\n  }\n  .cta-left h2 em { font-style: italic; color: var(--gold); }\n  .cta-left p { font-size: 0.98rem; color: rgba(255,255,255,0.58); line-height: 1.75; max-width: 480px; }\n\n  .cta-right { display: flex; flex-direction: column; gap: 14px; position: relative; z-index: 1; }\n\n  .calendar-link {\n    display: flex; align-items: center; gap: 8px;\n    color: rgba(255,255,255,0.5); font-size: 0.86rem;\n    text-decoration: none; transition: color 0.2s; margin-top: 4px;\n  }\n  .calendar-link:hover { color: var(--gold); }\n\n  /* ── FOOTER ── */\n  footer {\n    background: var(--blue-dark); padding: 44px 80px;\n    display: flex; justify-content: space-between;\n    align-items: center; flex-wrap: wrap; gap: 24px;\n    border-top: 3px solid var(--gold);\n  }\n  .footer-logo {\n    font-family: 'Playfair Display', serif;\n    font-size: 1.1rem; font-weight: 700; color: var(--white);\n  }\n  .footer-logo span { color: var(--gold); }\n  .footer-contact { font-size: 0.84rem; color: rgba(255,255,255,0.4); line-height: 1.85; }\n  .footer-contact a { color: var(--gold); text-decoration: none; }\n  .footer-social { display: flex; gap: 12px; }\n  .social-link {\n    width: 36px; height: 36px; border-radius: 2px;\n    border: 1px solid rgba(255,255,255,0.15);\n    display: flex; align-items: center; justify-content: center;\n    transition: border-color 0.2s, background 0.2s; text-decoration: none;\n  }\n  .social-link:hover { border-color: var(--gold); background: rgba(200,153,58,0.1); }\n\n  /* ── ANIMATIONS ── */\n  .fade-up { opacity: 0; transform: translateY(28px); animation: fadeUp 0.7s ease forwards; }\n  @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }\n  .delay-1 { animation-delay: 0.1s; }\n  .delay-2 { animation-delay: 0.22s; }\n  .delay-3 { animation-delay: 0.38s; }\n\n  /* ── RESPONSIVE ── */\n  @media (max-width: 960px) {\n    nav { padding: 16px 24px; }\n    .hero { grid-template-columns: 1fr; }\n    .hero-left { padding: 120px 24px 56px; }\n    .hero-right { padding: 32px 24px 80px; }\n    .why-section { grid-template-columns: 1fr; padding: 80px 24px; gap: 50px; }\n    .process-grid { grid-template-columns: 1fr 1fr; }\n    .req-grid { grid-template-columns: 1fr; }\n    .cta-section { grid-template-columns: 1fr; padding: 80px 24px; }\n    .stats-ribbon { gap: 40px; padding: 28px 24px; }\n    .process-section, .req-section { padding: 80px 24px; }\n    footer { padding: 40px 24px; }\n  }\n  @media (max-width: 600px) {\n    .process-grid { grid-template-columns: 1fr; }\n    .hero-h1 { font-size: 2.3rem; }\n  }\n"
    }}
  />
  {/* NAV */}
  <nav>
    <div className="nav-logo">
      <img src="/aaalogo.webp" alt="AAA Accreditation" style={{ height: '70px', width: 'auto' }} />
    </div>
    <ModalTrigger className="nav-cta">
      Apply Now
    </ModalTrigger>
  </nav>
  {/* HERO */}
  <section className="hero">
    <div className="hero-bg-pattern" />
    <div className="hero-gold-bar" />
    <div className="hero-orb hero-orb-1" />
    <div className="hero-orb hero-orb-2" />
    <div className="hero-left">
      <div className="hero-eyebrow fade-up">
        Training &amp; Education Accreditation
      </div>
      <h1 className="hero-h1 fade-up delay-1">
        Elevate Your
        <br />
        Training Program
        <br />
        with <em>Official</em>
        <br />
        AAA Recognition
      </h1>
      <p className="hero-sub fade-up delay-2">
        Gain formal accreditation for your courses, use the AAA symbol on your
        materials and certificates, and open doors to new markets — in as little
        as 3–8 weeks.
      </p>
      <div className="hero-actions fade-up delay-3">
        <ModalTrigger className="btn-primary">
          Start Your Application
        </ModalTrigger>
        <ModalTrigger className="btn-outline">
          Free 30-Min Consultation
        </ModalTrigger>
      </div>
    </div>
    <div className="hero-right fade-up delay-2">
      <EnquiryForm />
    </div>
  </section>
  {/* STATS */}
  <div className="stats-ribbon">
    <div className="stat-item">
      <span className="stat-num">3,200+</span>
      <span className="stat-label">Programs Accredited</span>
    </div>
    <div className="stat-item">
      <span className="stat-num">60+</span>
      <span className="stat-label">Countries Served</span>
    </div>
    <div className="stat-item">
      <span className="stat-num">3 Years</span>
      <span className="stat-label">Certificate Validity</span>
    </div>
    <div className="stat-item">
      <span className="stat-num">3–8 Wks</span>
      <span className="stat-label">Average Turnaround</span>
    </div>
  </div>
  {/* WHY SECTION */}
  <section className="why-section">
    <div className="why-left">
      <div className="section-eyebrow">Why Accreditation Matters</div>
      <h2 className="section-title">
        What AAA Accreditation
        <br />
        <em>Does for You</em>
      </h2>
      <p className="section-intro">
        AAA Accreditation gives training providers a powerful competitive edge —
        distinguishing your programmes in a crowded market and opening doors
        that remain closed to unaccredited providers.
      </p>
      <div className="feature-item">
        <div className="feature-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <path
              d="M11 2L13.4 8.2L20 8.8L15.2 13L16.8 19.5L11 16.2L5.2 19.5L6.8 13L2 8.8L8.6 8.2L11 2Z"
              fill="#c8993a"
            />
          </svg>
        </div>
        <div className="feature-text">
          <h4>Use the Official AAA Symbol Mark</h4>
          <p>
            Display the AAA mark on your training materials, certificates, and
            marketing — a badge delegates and employers immediately trust.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <circle cx={11} cy={11} r={9} stroke="white" strokeWidth="1.6" />
            <path
              d="M7 11L10 14L15 8"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="feature-text">
          <h4>Expand Into New Markets</h4>
          <p>
            Attract international delegates and break into regions where formal
            recognition is required or expected by employers.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <rect
              x={3}
              y={3}
              width={16}
              height={16}
              rx={2}
              stroke="white"
              strokeWidth="1.6"
            />
            <path
              d="M8 8H14M8 11H14M8 14H11"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="feature-text">
          <h4>Certified Trainee Directory Access</h4>
          <p>
            Add graduates to the American Directory of Competent Personnel —
            adding lasting career value to your learners&apos; credentials.
          </p>
        </div>
      </div>
      <div className="feature-item">
        <div className="feature-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <path
              d="M4 17L8 9L12 14L15 10L19 17H4Z"
              stroke="white"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="feature-text">
          <h4>Better Revenue &amp; Reputation</h4>
          <p>
            Accredited providers attract more delegates and command premium
            pricing — proving your commitment to quality pays off commercially.
          </p>
        </div>
      </div>
    </div>
    <div className="why-right-panel">
      <div>
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: 10
          }}
        >
          The AAA Promise
        </div>
        <div
          style={{
            fontFamily: '"Playfair Display",serif',
            fontSize: "1.5rem",
            color: "white",
            lineHeight: "1.3"
          }}
        >
          We Ensure Value,
          <br />
          Satisfaction &amp; Quality
        </div>
      </div>
      <div className="divider" />
      <div className="benefit-row">
        <div className="benefit-num">01</div>
        <div className="benefit-text">
          <h4>We Ensure Value</h4>
          <p>
            Permission to use the AAA symbol on all materials, plus research
            &amp; insights into what delegates from specific industries want
            from their training.
          </p>
        </div>
      </div>
      <div className="divider" />
      <div className="benefit-row">
        <div className="benefit-num">02</div>
        <div className="benefit-text">
          <h4>We Ensure Satisfaction</h4>
          <p>
            Attract more delegates, expand into new markets, and demonstrate
            your adoption of modern digital certificate technology.
          </p>
        </div>
      </div>
      <div className="divider" />
      <div className="benefit-row">
        <div className="benefit-num">03</div>
        <div className="benefit-text">
          <h4>We Ensure Quality</h4>
          <p>
            AAA accreditation is proof of your ability to meet high professional
            standards in course material and training provision.
          </p>
        </div>
      </div>
      <div className="divider" />
      <ModalTrigger className="panel-cta">
        Book a Free Consultation →
      </ModalTrigger>
    </div>
  </section>
  {/* PROCESS SECTION */}
  <section className="process-section">
    <div className="section-eyebrow">The Accreditation Journey</div>
    <h2 className="section-title">
      Gain Accreditation <em>in 3–8 Weeks</em>
    </h2>
    <p className="section-intro" style={{ maxWidth: 520 }}>
      A clear, structured process designed to get you accredited efficiently —
      with expert guidance at every stage.
    </p>
    <div className="process-grid">
      <div className="process-step">
        <div className="step-num">01</div>
        <div className="step-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <path d="M4 4H18V18H4V4Z" stroke="white" strokeWidth="1.5" />
            <path
              d="M8 9H14M8 12H14M8 15H11"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h4>Complete Your Application</h4>
        <p>
          Answer our structured application form and submit relevant course
          materials and trainer CVs for review.
        </p>
        <span className="process-timeline">Week 1</span>
      </div>
      <div className="process-step">
        <div className="step-num">02</div>
        <div className="step-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <circle cx={11} cy={8} r={4} stroke="white" strokeWidth="1.5" />
            <path
              d="M4 19C4 15.7 7.1 13 11 13C14.9 13 18 15.7 18 19"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h4>Expert Assessment</h4>
        <p>
          Our assessors conduct a rigorous desk review of your documents against
          best-practice benchmarks, producing a full compliance report.
        </p>
        <span className="process-timeline">Weeks 1–4</span>
      </div>
      <div className="process-step">
        <div className="step-num">03</div>
        <div className="step-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <rect
              x={3}
              y={3}
              width={16}
              height={16}
              rx={2}
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              d="M7 11L10 14L15 8"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h4>Committee Decision</h4>
        <p>
          Our independent decision committee reviews final reports and confirms
          compliance. You are informed promptly of the outcome.
        </p>
        <span className="process-timeline">Weeks 4–7</span>
      </div>
      <div className="process-step">
        <div className="step-num">04</div>
        <div className="step-icon">
          <svg width={22} height={22} viewBox="0 0 22 22" fill="none">
            <path
              d="M11 2L13.4 7.8L19.5 8.4L15.2 12.3L16.5 18.5L11 15.4L5.5 18.5L6.8 12.3L2.5 8.4L8.6 7.8L11 2Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h4>Receive Your Certificate</h4>
        <p>
          Get your 3-year accreditation certificate, plus access to the digital
          certificate service and the AAA symbol mark for all materials.
        </p>
        <span className="process-timeline">Week 8</span>
      </div>
    </div>
  </section>
  {/* REQUIREMENTS */}
  <section className="req-section">
    <div className="section-eyebrow">What We Look For</div>
    <h2 className="section-title">
      Accreditation <em>Requirements</em>
    </h2>
    <div className="req-grid">
      <div className="req-card">
        <div className="req-card-icon">
          <svg width={26} height={26} viewBox="0 0 26 26" fill="none">
            <rect
              x={3}
              y={3}
              width={20}
              height={20}
              rx={2}
              stroke="white"
              strokeWidth="1.6"
            />
            <path
              d="M8 10H18M8 13H18M8 16H13"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h3>For Training Organisations</h3>
        <ul className="req-list">
          <li>
            <div className="req-bullet">
              <svg viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke="#0f2347"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Proof that all applicable learning outcomes are fully covered in the
            training course.
          </li>
          <li>
            <div className="req-bullet">
              <svg viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke="#0f2347"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Training materials — presentations, handouts, tutor notes,
            exercises, and case studies — relevant to the Body of Knowledge.
          </li>
          <li>
            <div className="req-bullet">
              <svg viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke="#0f2347"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            All materials kept up-to-date in line with evolving standards and
            changes to the training topic.
          </li>
        </ul>
      </div>
      <div className="req-card">
        <div className="req-card-icon">
          <svg width={26} height={26} viewBox="0 0 26 26" fill="none">
            <circle cx={13} cy={9} r={5} stroke="white" strokeWidth="1.6" />
            <path
              d="M4 23C4 18.6 8.1 15 13 15C17.9 15 22 18.6 22 23"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h3>For Trainers &amp; Instructors</h3>
        <ul className="req-list">
          <li>
            <div className="req-bullet">
              <svg viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke="#0f2347"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            A minimum of five (5) years of relevant training experience in the
            subject area.
          </li>
          <li>
            <div className="req-bullet">
              <svg viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke="#0f2347"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Relevant qualifications and documented professional experience
            related to the area of training.
          </li>
          <li>
            <div className="req-bullet">
              <svg viewBox="0 0 10 10" fill="none">
                <path
                  d="M2 5L4 7L8 3"
                  stroke="#0f2347"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Completion of a recognised train-the-trainer programme or equivalent
            professional development.
          </li>
        </ul>
      </div>
    </div>
  </section>
  {/* CTA */}
  <section className="cta-section">
    <div className="cta-left">
      <h2>
        Ready to Get Your
        <br />
        Training Programme
        <br />
        <em>Officially Recognised?</em>
      </h2>
      <p>
        Join thousands of accredited training providers worldwide. Start your
        accreditation journey today and receive formal recognition in as little
        as 3 weeks.
      </p>
    </div>
    <div className="cta-right">
      <ModalTrigger
        className="btn-primary"
        style={{
          fontSize: "0.96rem",
          padding: "18px 44px",
          whiteSpace: "nowrap"
        }}
      >
        Apply for Accreditation →
      </ModalTrigger>
      <a
        href="https://calendly.com/accreditationaaa/consultation-call-am"
        className="calendar-link"
      >
        <svg width={15} height={15} viewBox="0 0 15 15" fill="none">
          <rect
            x={1}
            y={3}
            width={13}
            height={11}
            rx={2}
            stroke="currentColor"
            strokeWidth="1.3"
          />
          <path
            d="M5 1V4M10 1V4M1 7H14"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        Or book a free 30-minute consultation call
      </a>
      <div
        style={{
          fontSize: "0.76rem",
          color: "rgba(255,255,255,0.3)",
          lineHeight: "1.9",
          marginTop: 8
        }}
      >
        8609 Westwood Center Drive<br />
        Tysons Corner, VA 22182, USA.<br />
        T: <a href="tel:+15716012616" style={{ color: 'inherit', textDecoration: 'none' }}>+1 (571) 601 2616</a><br />
        Fax: +1 (571) 376 6582<br />
        <a href="mailto:info@aaa-accreditation.org" style={{ color: 'inherit', textDecoration: 'none' }}>info@aaa-accreditation.org</a><br /><br />
        <strong>International Operations</strong><br />
        Tel./Whatsapp <a href="tel:+447487550737" style={{ color: 'inherit', textDecoration: 'none' }}>+44 (748) 755 0737</a>
      </div>
    </div>
  </section>
  {/* FOOTER */}
  <footer>
    <div>
      <div className="footer-logo">
        <img src="/AAA-Logo.png" alt="AAA Accreditation" style={{ height: '50px', width: 'auto' }} />
      </div>
      <div className="footer-contact" style={{ marginTop: 16 }}>
        8609 Westwood Center Drive<br />
        Tysons Corner, VA 22182, USA.<br />
        T: <a href="tel:+15716012616">+1 (571) 601 2616</a><br />
        Fax: +1 (571) 376 6582<br />
        <a href="mailto:info@aaa-accreditation.org">info@aaa-accreditation.org</a><br /><br />
        <strong>International Operations</strong><br />
        Tel./Whatsapp <a href="tel:+447487550737">+44 (748) 755 0737</a>
      </div>
    </div>
    <div className="footer-social">
      <a
        href="https://www.facebook.com/AAA.Accreditations/"
        className="social-link"
        aria-label="Facebook"
      >
        <svg
          width={15}
          height={15}
          viewBox="0 0 16 16"
          fill="rgba(255,255,255,0.45)"
        >
          <path d="M14 8C14 4.7 11.3 2 8 2C4.7 2 2 4.7 2 8C2 11 4.2 13.4 7 13.9V9.9H5.5V8H7V6.7C7 5.2 7.9 4.5 9.3 4.5C9.9 4.5 10.6 4.6 11.2 4.7V6.3H10.4C9.7 6.3 9.5 6.7 9.5 7.1V8H11.1L10.9 9.9H9.5V13.9C12.5 13.3 14 10.9 14 8Z" />
        </svg>
      </a>
      <a
        href="https://twitter.com/AAAccreditation"
        className="social-link"
        aria-label="Twitter"
      >
        <svg
          width={15}
          height={15}
          viewBox="0 0 16 16"
          fill="rgba(255,255,255,0.45)"
        >
          <path d="M13 3C12.4 3.3 11.7 3.5 11 3.6C10.3 2.9 9.3 2.5 8.3 2.5C6.2 2.5 4.5 4.2 4.5 6.3V7C2.5 6.9 0.7 6 0.5 4.5C0.5 4.5 -0.2 8.5 4 11C3.2 11.5 2.5 11.8 1.5 12C2.3 13.3 4.2 14.5 6.5 14.5C12 14.5 14 10 14 6.7V6.2C14.5 5.8 15 5.2 15 4.5C14.5 4.7 13.8 4.9 13 5C13.6 4.6 14 4 13 3Z" />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/company/aaa-accreditation"
        className="social-link"
        aria-label="LinkedIn"
      >
        <svg
          width={15}
          height={15}
          viewBox="0 0 16 16"
          fill="rgba(255,255,255,0.45)"
        >
          <path d="M13.5 2H2.5C2.2 2 2 2.2 2 2.5V13.5C2 13.8 2.2 14 2.5 14H13.5C13.8 14 14 13.8 14 13.5V2.5C14 2.2 13.8 2 13.5 2ZM5.6 12H4V6.5H5.6V12ZM4.8 5.8C4.2 5.8 3.8 5.4 3.8 4.8C3.8 4.2 4.2 3.8 4.8 3.8C5.4 3.8 5.8 4.2 5.8 4.8C5.8 5.4 5.4 5.8 4.8 5.8ZM12 12H10.4V9.3C10.4 8.6 10.4 7.7 9.5 7.7C8.6 7.7 8.4 8.5 8.4 9.3V12H6.8V6.5H8.3V7.3C8.6 6.8 9.2 6.4 10 6.4C11.7 6.4 12 7.5 12 9V12Z" />
        </svg>
      </a>
    </div>
  </footer>
    </>
  );
}
