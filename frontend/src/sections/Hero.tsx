"use client";
import { personalInfo } from "@/src/data/resume";

const infoCards = [
  { icon: "☁️",  label: "Specialization",  value: "Oracle Cloud Infrastructure" },
  { icon: "⚙️", label: "DevOps Stack",     value: "Jenkins · Docker · CI/CD"   },
  { icon: "🏆", label: "Certifications",   value: "3× Oracle Cloud Certified"   },
  { icon: "📍", label: "Location",         value: "Coimbatore, Tamil Nadu"      },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight:     "100vh",
        display:       "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems:    "center",
        paddingTop:    70,
        position:      "relative",
        overflow:      "hidden",
      }}
    >
      {/* Right half warm bg */}
      <div style={{
        position:   "absolute",
        right:      0, top: 0, bottom: 0,
        width:      "50%",
        background: "#FAF8F4",
        borderLeft: "1px solid #D4CFC7",
      }} />

      {/* Left column */}
      <div style={{ padding: "80px 60px 80px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "#C4500A" }}>
          <div style={{ width: 28, height: 1, background: "#C4500A" }} />
          Cloud & DevOps Engineer
        </div>

        <h1 style={{
          fontFamily:    "'Playfair Display', serif",
          fontSize:      "clamp(54px, 7vw, 88px)",
          fontWeight:    700,
          lineHeight:    1.0,
          letterSpacing: "-2.5px",
          color:         "#1A1410",
          marginBottom:  16,
        }}>
          Ajayeswaran<br />
          <em style={{ fontStyle: "italic", color: "#C4500A" }}>Raja</em>
        </h1>

        <p style={{
          fontFamily:    "'JetBrains Mono', monospace",
          fontSize:      13,
          color:         "#8A7A6E",
          marginBottom:  28,
          letterSpacing: "0.02em",
        }}>
          <span style={{ color: "#C4500A" }}> </span>
          oracle-cloud --certified --devops --technical trainer
        </p>

        <p style={{ fontSize: 15, lineHeight: 1.85, color: "#4A3F35", maxWidth: 420, marginBottom: 36 }}>
          OCI-certified engineer & corporate trainer who has empowered{" "}
          <strong style={{ color: "#1A1410" }}>5,000+ students</strong> across cloud, DevOps and web technologies.
          Building scalable infrastructure by day, teaching the next wave by evening.
        </p>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <a href="#projects"
            style={{ padding: "13px 28px", background: "#C4500A", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", transition: "background 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#E8673A")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#C4500A")}
          >
            View Work
          </a>
          <a href="#contact"
            style={{ padding: "13px 28px", background: "transparent", color: "#1A1410", borderRadius: 4, fontSize: 13, fontWeight: 500, border: "1px solid #D4CFC7", transition: "border-color 0.2s, color 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C4500A"; e.currentTarget.style.color = "#C4500A"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#D4CFC7"; e.currentTarget.style.color = "#1A1410"; }}
          >
            Get in Touch
          </a>
          <a href="/AJAYESWARAN_RESUME.docx" download
            style={{ padding: "13px 28px", background: "transparent", color: "#8A7A6E", borderRadius: 4, fontSize: 13, fontWeight: 500, border: "1px solid #D4CFC7", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C4500A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7A6E")}
          >
            ↓ Resume
          </a>
        </div>
      </div>

      {/* Right column */}
      <div style={{ padding: "80px 60px 80px", position: "relative", zIndex: 1, display: "flex", flexDirection: "column", gap: 0 }}>
        {/* Big number */}
        <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 32 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 80, fontWeight: 700, lineHeight: 1, color: "#1A1410", letterSpacing: "-4px" }}>
            5K
          </span>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, color: "#C4500A" }}>+</span>
          <span style={{ fontSize: 13, color: "#4A3F35", maxWidth: 90, lineHeight: 1.4, marginLeft: 4 }}>
            students trained
          </span>
        </div>

        {/* Info cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {infoCards.map((card) => (
            <div
              key={card.label}
              style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 20px", background: "#FEFCF8", border: "1px solid #D4CFC7", borderRadius: 6, transition: "border-color 0.2s" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#C4500A")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#D4CFC7")}
            >
              <div style={{ width: 40, height: 40, background: "#F5F2EC", border: "1px solid #D4CFC7", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
                {card.icon}
              </div>
              <div>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em", color: "#8A7A6E", fontWeight: 600 }}>{card.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "#1A1410", marginTop: 2 }}>{card.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social row */}
        <div style={{ display: "flex", gap: 20, marginTop: 28 }}>
          {[
            { label: "GitHub",   href: personalInfo.github   },
            { label: "LinkedIn", href: personalInfo.linkedin  },
            { label: "Email",    href: `mailto:${personalInfo.email}` },
          ].map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ fontSize: 12, fontWeight: 500, color: "#8A7A6E", letterSpacing: "0.08em", textTransform: "uppercase", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#C4500A")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8A7A6E")}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #hero { grid-template-columns: 1fr !important; }
          #hero > div:first-of-type { padding: 60px 24px 40px !important; }
          #hero > div:last-of-type  { padding: 0 24px 60px !important; }
          #hero > div:nth-child(2)  { display: none !important; }
        }
      `}</style>
    </section>
  );
}
