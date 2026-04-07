"use client";
import { personalInfo } from "@/src/data/resume";

export default function Footer() {
  return (
    <footer style={{ padding: "28px 60px", background: "#1A1410", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#C4500A", fontSize: 18 }}>
        Ajayeswaran
      </div>
      <span style={{ fontSize: 12, color: "rgba(245,242,236,0.3)" }}>
        © {new Date().getFullYear()} {personalInfo.name}</span>
      <div style={{ display: "flex", gap: 20 }}>
        {[
          { label: "GitHub",   href: personalInfo.github   },
          { label: "LinkedIn", href: personalInfo.linkedin  },
        ].map((l) => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: 12, color: "rgba(245,242,236,0.3)", fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C4500A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245,242,236,0.3)")}
          >
            {l.label}
          </a>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer { padding: 24px !important; flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
