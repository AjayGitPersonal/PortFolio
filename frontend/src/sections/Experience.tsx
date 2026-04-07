"use client";
import { experience } from "@/src/data/resume";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "110px 60px", background: "#FAF8F4", borderTop: "1px solid #D4CFC7" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4500A", marginBottom: 14 }}>
            <div style={{ width: 24, height: 1, background: "#C4500A" }} />
            Career
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-1.5px", color: "#1A1410" }}>
            Work <em style={{ fontStyle: "italic", color: "#C4500A" }}>Experience</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {experience.map((job, i) => (
            <div
              key={job.company}
              style={{
                padding:       "40px",
                background:    "#FEFCF8",
                border:        "1px solid #D4CFC7",
                borderTop:     i === 0 ? "3px solid #C4500A" : "1px solid #D4CFC7",
                transition:    "border-color 0.2s",
              }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; if (i !== 0) el.style.borderColor = "#1A1410"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; if (i !== 0) el.style.borderColor = "#D4CFC7"; }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C4500A", marginBottom: 16, letterSpacing: "0.04em" }}>
                {job.period}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, lineHeight: 1.2, marginBottom: 6, color: "#1A1410" }}>
                {job.role}
              </h3>
              <p style={{ fontSize: 13, color: "#8A7A6E", marginBottom: 28 }}>
                {job.company}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {job.highlights.map((h) => (
                  <div key={h} style={{ display: "flex", gap: 10, fontSize: 13, color: "#4A3F35", lineHeight: 1.65 }}>
                    <span style={{ color: "#C4500A", fontWeight: 600, flexShrink: 0, marginTop: 1 }}>—</span>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #experience { padding: 70px 24px !important; }
          #experience > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
