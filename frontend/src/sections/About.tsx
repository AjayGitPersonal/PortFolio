"use client";
import { education, certifications } from "@/src/data/resume";

export default function About() {
  return (
    <section
      id="about"
      style={{ background: "#1A1410", color: "#F5F2EC", padding: "110px 60px" }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start", maxWidth: 1180, margin: "0 auto" }}>
        {/* Left */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#E8673A", marginBottom: 20 }}>
            <div style={{ width: 24, height: 1, background: "#E8673A" }} />
            About
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 3vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-1px" }}>
            Builder.<br />
            <em style={{ fontStyle: "italic", color: "#C9A84C" }}>Trainer.</em><br />
            Engineer.
          </h2>
        </div>

        {/* Right */}
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(245,242,236,0.7)", marginBottom: 22 }}>
            I bridge the gap between{" "}
            <strong style={{ color: "#F5F2EC" }}>enterprise cloud infrastructure</strong> and
            human understanding. With hands-on expertise across OCI compute, VCN architecture,
            CI/CD automation, and containerization — I architect production-grade systems while
            training hundreds of engineers every month.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.85, color: "rgba(245,242,236,0.7)", marginBottom: 40 }}>
            My approach is grounded in real projects — not theory. Every concept I teach, I&apos;ve
            deployed in production.
          </p>

          {/* Education */}
          <div style={{ marginBottom: 36, padding: "22px 24px", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 6 }}>
            <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "#C9A84C", fontWeight: 600, marginBottom: 12 }}>Education</div>
            <div style={{ fontSize: 15, fontWeight: 600, color: "#F5F2EC" }}>{education.degree}</div>
            <div style={{ fontSize: 13, color: "#C9A84C", marginTop: 4 }}>{education.institution}</div>
            <div style={{ fontSize: 12, color: "rgba(245,242,236,0.45)", marginTop: 4 }}>{education.location} · {education.period} · CGPA {education.cgpa}</div>
          </div>

          {/* Certifications */}
          <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(245,242,236,0.4)", fontWeight: 600, marginBottom: 14 }}>
            Oracle Certifications · 2025
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {certifications.map((cert) => (
              <div key={cert.name}
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 20px", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, transition: "border-color 0.2s, background 0.2s" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "#C9A84C"; el.style.background = "rgba(201,168,76,0.04)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(255,255,255,0.07)"; el.style.background = "transparent"; }}
              >
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#C9A84C", flexShrink: 0 }} />
                <span style={{ fontSize: 13, fontWeight: 500, color: "#F5F2EC", flex: 1 }}>{cert.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C9A84C", flexShrink: 0 }}>{cert.year}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, marginTop: 40, border: "1px solid rgba(255,255,255,0.07)", borderRadius: 6, overflow: "hidden" }}>
            {[
              { value: "5,000+", label: "Students Trained" },
              { value: "3×",     label: "OCI Certified"    },
              { value: "3+",     label: "Live Projects"    },
            ].map((stat) => (
              <div key={stat.label} style={{ padding: "24px 20px", background: "rgba(255,255,255,0.02)", textAlign: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, color: "#C4500A", letterSpacing: "-1px" }}>{stat.value}</div>
                <div style={{ fontSize: 11, color: "rgba(245,242,236,0.4)", textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 6 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #about > div { grid-template-columns: 1fr !important; gap: 40px !important; }
          #about { padding: 70px 24px !important; }
        }
      `}</style>
    </section>
  );
}
