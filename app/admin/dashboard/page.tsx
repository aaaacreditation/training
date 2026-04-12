import { auth, signOut } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

interface Lead {
  id: string;
  fullName: string;
  email: string;
  organisation: string;
  website: string | null;
  phone: string | null;
  country: string;
  comments: string | null;
  createdAt: Date;
}

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/admin/login");

  const leads: Lead[] = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
  });

  const now = new Date();
  const thisMonthCount = leads.filter((l: Lead) => {
    const d = new Date(l.createdAt);
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).length;

  const topCountry = (() => {
    if (leads.length === 0) return "N/A";
    const counts: Record<string, number> = {};
    leads.forEach((l: Lead) => {
      counts[l.country] = (counts[l.country] || 0) + 1;
    });
    const sorted = Object.entries(counts).sort(([, a], [, b]) => b - a);
    return sorted[0]?.[0] || "N/A";
  })();

  return (
    <div style={{
      minHeight: "100vh",
      background: "#f7f8fc",
      fontFamily: "'DM Sans', sans-serif",
    }}>
      <link
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* Header */}
      <header style={{
        background: "white",
        borderBottom: "1px solid rgba(26,58,107,0.1)",
        padding: "16px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 12px rgba(26,58,107,0.06)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <img src="/aaalogo.webp" alt="AAA" style={{ height: 44, width: "auto" }} />
          <div>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem",
              color: "#1a3a6b",
              margin: 0,
            }}>Leads Dashboard</h1>
            <p style={{ fontSize: "0.76rem", color: "#5a6a88", margin: 0 }}>
              Training &amp; Education Enquiries
            </p>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span style={{ fontSize: "0.82rem", color: "#5a6a88" }}>
            {session.user?.email}
          </span>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/admin/login" });
            }}
          >
            <button
              type="submit"
              style={{
                background: "transparent",
                border: "1px solid rgba(26,58,107,0.2)",
                padding: "8px 18px",
                borderRadius: 2,
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#1a3a6b",
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
                letterSpacing: "0.05em",
                textTransform: "uppercase" as const,
              }}
            >
              Sign Out
            </button>
          </form>
        </div>
      </header>

      {/* Stats */}
      <div style={{
        display: "flex",
        gap: 20,
        padding: "32px 40px 0",
        flexWrap: "wrap" as const,
      }}>
        <div style={{
          background: "white",
          borderRadius: 4,
          padding: "24px 32px",
          flex: "1 1 200px",
          borderTop: "3px solid #c8993a",
          boxShadow: "0 2px 12px rgba(26,58,107,0.06)",
        }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#5a6a88", marginBottom: 6 }}>
            Total Leads
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#1a3a6b", margin: 0 }}>
            {leads.length}
          </p>
        </div>
        <div style={{
          background: "white",
          borderRadius: 4,
          padding: "24px 32px",
          flex: "1 1 200px",
          borderTop: "3px solid #1a3a6b",
          boxShadow: "0 2px 12px rgba(26,58,107,0.06)",
        }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#5a6a88", marginBottom: 6 }}>
            This Month
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 700, color: "#1a3a6b", margin: 0 }}>
            {thisMonthCount}
          </p>
        </div>
        <div style={{
          background: "white",
          borderRadius: 4,
          padding: "24px 32px",
          flex: "1 1 200px",
          borderTop: "3px solid #2a5298",
          boxShadow: "0 2px 12px rgba(26,58,107,0.06)",
        }}>
          <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#5a6a88", marginBottom: 6 }}>
            Top Country
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "#1a3a6b", margin: 0 }}>
            {topCountry}
          </p>
        </div>
      </div>

      {/* Table */}
      <div style={{ padding: "24px 40px 40px" }}>
        <div style={{
          background: "white",
          borderRadius: 4,
          overflow: "hidden",
          boxShadow: "0 2px 12px rgba(26,58,107,0.06)",
          border: "1px solid rgba(26,58,107,0.08)",
        }}>
          <div style={{
            padding: "20px 28px",
            borderBottom: "1px solid rgba(26,58,107,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.1rem",
              color: "#1a3a6b",
              margin: 0,
            }}>All Enquiries</h2>
            <span style={{
              fontSize: "0.74rem",
              fontWeight: 600,
              color: "#5a6a88",
              background: "#f0f2f7",
              padding: "4px 12px",
              borderRadius: 20,
            }}>{leads.length} total</span>
          </div>

          {leads.length === 0 ? (
            <div style={{
              padding: "60px 28px",
              textAlign: "center",
              color: "#5a6a88",
            }}>
              <p style={{ fontSize: "1rem", fontWeight: 500 }}>No leads yet</p>
              <p style={{ fontSize: "0.84rem" }}>Enquiries from the landing page will appear here.</p>
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{
                width: "100%",
                borderCollapse: "collapse",
                fontSize: "0.86rem",
              }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid rgba(26,58,107,0.08)" }}>
                    {["Name", "Email", "Phone", "Organisation", "Website", "Country", "Comments", "Date"].map((h: string) => (
                      <th key={h} style={{
                        padding: "14px 20px",
                        textAlign: "left",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        color: "#5a6a88",
                        background: "#fafbfd",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead: Lead) => (
                    <tr
                      key={lead.id}
                      style={{ borderBottom: "1px solid rgba(26,58,107,0.06)" }}
                    >
                      <td style={{ padding: "14px 20px", fontWeight: 500, color: "#1a2a4a" }}>
                        {lead.fullName}
                      </td>
                      <td style={{ padding: "14px 20px", color: "#5a6a88" }}>
                        <a href={`mailto:${lead.email}`} style={{ color: "#1a3a6b", textDecoration: "none" }}>
                          {lead.email}
                        </a>
                      </td>
                      <td style={{ padding: "14px 20px", color: "#5a6a88" }}>
                        {lead.phone ? (
                          <a href={`tel:${lead.phone}`} style={{ color: "#1a3a6b", textDecoration: "none" }}>
                            {lead.phone}
                          </a>
                        ) : (
                          <span style={{ color: "#b0b8cd" }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: "14px 20px", color: "#5a6a88" }}>
                        {lead.organisation}
                      </td>
                      <td style={{ padding: "14px 20px", color: "#5a6a88" }}>
                        {lead.website ? (
                          <a href={lead.website} target="_blank" rel="noopener noreferrer" style={{ color: "#1a3a6b", textDecoration: "none" }}>
                            {lead.website.replace(/^https?:\/\//, "")}
                          </a>
                        ) : (
                          <span style={{ color: "#b0b8cd" }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: "14px 20px", color: "#5a6a88" }}>
                        <span style={{
                          background: "#eef1f7",
                          padding: "3px 10px",
                          borderRadius: 20,
                          fontSize: "0.78rem",
                          fontWeight: 500,
                        }}>{lead.country}</span>
                      </td>
                      <td style={{ padding: "14px 20px", color: "#5a6a88", fontSize: "0.82rem", maxWidth: 200 }}>
                        {lead.comments ? (
                          <span title={lead.comments} style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical" as const,
                            overflow: "hidden",
                          }}>{lead.comments}</span>
                        ) : (
                          <span style={{ color: "#b0b8cd" }}>—</span>
                        )}
                      </td>
                      <td style={{ padding: "14px 20px", color: "#5a6a88", fontSize: "0.82rem" }}>
                        {new Date(lead.createdAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
