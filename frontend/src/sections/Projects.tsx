"use client";
import { projects } from "@/src/data/resume";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "110px 60px", background: "#F5F2EC", borderTop: "1px solid #D4CFC7" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4500A", marginBottom: 14 }}>
            <div style={{ width: 24, height: 1, background: "#C4500A" }} />
            Projects
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-1.5px", color: "#1A1410" }}>
            Selected <em style={{ fontStyle: "italic", color: "#C4500A" }}>Work</em>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 3 }}>
          {/* Featured */}
          <div
            style={{ padding: "44px", background: "#1A1410", color: "#F5F2EC", border: "1px solid #D4CFC7", transition: "border-color 0.2s", cursor: "pointer" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#C4500A")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#D4CFC7")}
            onClick={() => window.open(projects[0].link, "_blank")}
          >
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#E8673A", marginBottom: 22, letterSpacing: "0.06em" }}>01 / Featured</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, lineHeight: 1.2, marginBottom: 8, color: "#F5F2EC" }}>
              {projects[0].title}
            </h3>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", color: "#E8673A", marginBottom: 20 }}>{projects[0].subtitle}</div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "rgba(245,242,236,0.65)", marginBottom: 28 }}>{projects[0].description}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
              {projects[0].tags.map((tag) => (
                <span key={tag} style={{ padding: "4px 12px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 2, fontSize: 11, color: "rgba(245,242,236,0.6)", fontWeight: 500, letterSpacing: "0.04em" }}>{tag}</span>
              ))}
            </div>
            <a href={projects[0].link} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 12, fontWeight: 600, color: "#C4500A", letterSpacing: "0.08em", textTransform: "uppercase", transition: "letter-spacing 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.letterSpacing = "0.12em")}
              onMouseLeave={(e) => (e.currentTarget.style.letterSpacing = "0.08em")}
            >
              View on GitHub →
            </a>
          </div>

          {/* Small cards stack */}
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            {projects.slice(1).map((proj, i) => (
              <div
                key={proj.title}
                style={{ padding: "30px", background: "#FEFCF8", border: "1px solid #D4CFC7", flex: 1, transition: "border-color 0.2s", cursor: "pointer" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#C4500A")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#D4CFC7")}
                onClick={() => window.open(proj.link, "_blank")}
              >
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: "#C4500A", marginBottom: 14, letterSpacing: "0.06em" }}>0{i + 2}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, lineHeight: 1.2, marginBottom: 6, color: "#1A1410" }}>{proj.title}</h3>
                <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "#8A7A6E", marginBottom: 14 }}>{proj.subtitle}</div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: "#4A3F35", marginBottom: 18 }}>{proj.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {proj.tags.slice(0, 3).map((tag) => (
                    <span key={tag} style={{ padding: "3px 10px", background: "#F5F2EC", border: "1px solid #D4CFC7", borderRadius: 2, fontSize: 10, color: "#8A7A6E", letterSpacing: "0.04em" }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #projects { padding: 70px 24px !important; }
          #projects > div > div:last-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
