"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError("Invalid email or password.");
      setLoading(false);
    } else {
      router.push("/admin/dashboard");
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f2347 0%, #1a3a6b 55%, #2a5298 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'DM Sans', sans-serif",
      padding: 24,
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <div style={{
        background: "white",
        borderRadius: 4,
        padding: "52px 44px",
        width: "100%",
        maxWidth: 420,
        boxShadow: "0 24px 64px rgba(10,22,60,0.3)",
        borderTop: "4px solid #c8993a",
      }}>
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <img src="/aaalogo.webp" alt="AAA Accreditation" style={{ height: 60, width: "auto", marginBottom: 16 }} />
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.5rem",
            color: "#1a3a6b",
            marginBottom: 6,
          }}>Admin Login</h1>
          <p style={{ fontSize: "0.86rem", color: "#5a6a88" }}>
            Sign in to manage your leads dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 14 }}>
            <label style={{
              display: "block",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "#5a6a88",
              marginBottom: 6,
            }}>Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "#f7f8fc",
                border: "1px solid rgba(26,58,107,0.14)",
                borderRadius: 2,
                color: "#1a2a4a",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                outline: "none",
                boxSizing: "border-box" as const,
              }}
            />
          </div>
          <div style={{ marginBottom: 20 }}>
            <label style={{
              display: "block",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
              color: "#5a6a88",
              marginBottom: 6,
            }}>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              style={{
                width: "100%",
                padding: "12px 14px",
                background: "#f7f8fc",
                border: "1px solid rgba(26,58,107,0.14)",
                borderRadius: 2,
                color: "#1a2a4a",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                outline: "none",
                boxSizing: "border-box" as const,
              }}
            />
          </div>

          {error && (
            <p style={{
              color: "#c0392b",
              fontSize: "0.84rem",
              marginBottom: 14,
              textAlign: "center",
              background: "#fdf0ef",
              padding: "10px",
              borderRadius: 3,
            }}>{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: 14,
              background: "#1a3a6b",
              color: "white",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              letterSpacing: "0.07em",
              textTransform: "uppercase" as const,
              border: "none",
              borderRadius: 2,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </form>

        <p style={{
          marginTop: 24,
          fontSize: "0.76rem",
          color: "#5a6a88",
          textAlign: "center",
        }}>
          <a href="/" style={{ color: "#c8993a", textDecoration: "none" }}>← Back to website</a>
        </p>
      </div>
    </div>
  );
}
