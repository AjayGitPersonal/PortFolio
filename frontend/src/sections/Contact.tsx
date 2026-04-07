"use client";
import { personalInfo } from "@/src/data/resume";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "110px 60px", background: "#C4500A", color: "#fff" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.5)" }} />
            Let&apos;s Connect
          </div>

          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 7vw, 6rem)", fontWeight: 700, lineHeight: 1.0, letterSpacing: "-3px", color: "#fff", marginBottom: 24 }}>
            Let&apos;s <em style={{ fontStyle: "italic", opacity: 0.7 }}>Build</em><br />Together.
          </h2>

          <p style={{ fontSize: 16, lineHeight: 1.8, color: "rgba(255,255,255,0.75)", maxWidth: 460, marginBottom: 48 }}>
            Open to cloud engineering roles, DevOps opportunities, and technical collaborations.
            Based in Coimbatore — available for remote & hybrid.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href={`mailto:${personalInfo.email}`}
              style={{ padding: "13px 28px", background: "#fff", color: "#C4500A", borderRadius: 4, fontSize: 13, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", transition: "opacity 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Email Me
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
              style={{ padding: "13px 28px", background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)", letterSpacing: "0.06em", textTransform: "uppercase", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              LinkedIn
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
              style={{ padding: "13px 28px", background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)", letterSpacing: "0.06em", textTransform: "uppercase", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              GitHub
            </a>
            <a href="/AJAYESWARAN_RESUME.docx" download
              style={{ padding: "13px 28px", background: "rgba(255,255,255,0.12)", color: "#fff", borderRadius: 4, fontSize: 13, fontWeight: 600, border: "1px solid rgba(255,255,255,0.25)", letterSpacing: "0.06em", textTransform: "uppercase", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            >
              ↓ Resume
            </a>
          </div>
        </div>

        {/* Contact detail line */}
        <div style={{ marginTop: 80, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.15)", display: "flex", gap: 40, flexWrap: "wrap" }}>
          {[
            { label: "Email",    value: personalInfo.email    },
            { label: "Phone",    value: personalInfo.phone    },
            { label: "Location", value: personalInfo.location },
          ].map((item) => (
            <div key={item.label}>
              <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.5)", fontWeight: 600, marginBottom: 4 }}>{item.label}</div>
              <div style={{ fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>{item.value}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact { padding: 70px 24px !important; }
        }
      `}</style>
    </section>
  );
}
