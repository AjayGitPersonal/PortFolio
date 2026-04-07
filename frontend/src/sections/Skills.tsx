"use client";
import { useEffect, useRef, useState } from "react";
import { skills } from "@/src/data/resume";

const allSkills = [
  ...skills.cloud.map((s)       => ({ ...s, cat: "Cloud"       })),
  ...skills.devops.map((s)      => ({ ...s, cat: "DevOps"      })),
  ...skills.programming.map((s) => ({ ...s, cat: "Programming" })),
];

function SkillTile({ name, level, cat }: { name: string; level: number; cat: string }) {
  const [hovered, setHovered] = useState(false);
  const [barW, setBarW]       = useState(0);
  const ref                   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarW(level); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding:    "26px 28px",
        background: hovered ? "#1A1410" : "#FEFCF8",
        border:     "1px solid #D4CFC7",
        transition: "background 0.25s, color 0.25s",
        cursor:     "default",
      }}
    >
      <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: hovered ? "#E8673A" : "#C4500A", fontWeight: 600, marginBottom: 10 }}>{cat}</div>
      <div style={{ fontSize: 15, fontWeight: 600, color: hovered ? "#F5F2EC" : "#1A1410", marginBottom: 16, lineHeight: 1.3 }}>{name}</div>
      <div style={{ height: 3, background: hovered ? "rgba(255,255,255,0.1)" : "#D4CFC7", borderRadius: 2 }}>
        <div style={{ height: "100%", width: `${barW}%`, background: "#C4500A", borderRadius: 2, transition: "width 1s cubic-bezier(0.4,0,0.2,1)" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "110px 60px", background: "#F5F2EC" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ marginBottom: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#C4500A", marginBottom: 14 }}>
            <div style={{ width: 24, height: 1, background: "#C4500A" }} />
            Technical Skills
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 3.5vw, 3.2rem)", fontWeight: 700, letterSpacing: "-1.5px", color: "#1A1410" }}>
            What I <em style={{ fontStyle: "italic", color: "#C4500A" }}>Build</em> & Know
          </h2>
        </div>

        {/* Skill tiles grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {allSkills.map((s) => <SkillTile key={s.name} {...s} />)}
        </div>

        {/* Soft skills strip */}
        <div style={{ marginTop: 2, padding: "28px", background: "#FAF8F4", border: "1px solid #D4CFC7", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.14em", color: "#8A7A6E", fontWeight: 600, marginRight: 8 }}>Soft Skills</span>
          {skills.soft.map((s) => (
            <span key={s} style={{ padding: "5px 14px", border: "1px solid #D4CFC7", borderRadius: 2, fontSize: 12, fontWeight: 500, color: "#4A3F35", letterSpacing: "0.04em" }}>{s}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills { padding: 70px 24px !important; }
          #skills .container > div { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          #skills .container > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
