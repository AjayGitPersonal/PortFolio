"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = navLinks.map((l) => l.href.slice(1));
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position:    "fixed",
    top:         0,
    left:        0,
    right:       0,
    zIndex:      100,
    display:     "flex",
    alignItems:  "center",
    justifyContent: "space-between",
    padding:     "0 60px",
    height:      70,
    background:  scrolled ? "rgba(245,242,236,0.95)" : "transparent",
    backdropFilter: scrolled ? "blur(14px)" : "none",
    borderBottom: scrolled ? "1px solid #D4CFC7" : "1px solid transparent",
    transition:  "all 0.3s ease",
  };

  return (
    <header style={navStyle}>
      {/* Logo */}
      <a href="#hero" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontSize: 22, color: "#C4500A", letterSpacing: "-0.5px" }}>
        Ajayeswaran
      </a>

      {/* Desktop links */}
      <nav style={{ display: "flex", gap: 32, alignItems: "center" }} className="desk-nav">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              fontSize:      13,
              fontWeight:    500,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color:         active === link.href.slice(1) ? "#C4500A" : "#4A3F35",
              transition:    "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#C4500A")}
            onMouseLeave={(e) => (e.currentTarget.style.color = active === link.href.slice(1) ? "#C4500A" : "#4A3F35")}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          style={{
            padding:       "9px 22px",
            background:    "#1A1410",
            color:         "#F5F2EC",
            borderRadius:  4,
            fontSize:      12,
            fontWeight:    600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            transition:    "background 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "#C4500A")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "#1A1410")}
        >
          Contact
        </a>
      </nav>

      {/* Mobile burger */}
      <button
        className="mob-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: "#1A1410", padding: 8 }}
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          {menuOpen ? (
            <>
              <line x1="4" y1="4" x2="18" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="18" y1="4" x2="4" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </>
          ) : (
            <>
              <line x1="3" y1="6"  x2="19" y2="6"  stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="3" y1="11" x2="19" y2="11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              <line x1="3" y1="16" x2="19" y2="16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </>
          )}
        </svg>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ position: "absolute", top: 70, left: 0, right: 0, background: "#FAF8F4", borderBottom: "1px solid #D4CFC7", padding: "20px 24px 28px" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", padding: "12px 0", fontSize: 14, fontWeight: 500, color: active === link.href.slice(1) ? "#C4500A" : "#4A3F35", borderBottom: "1px solid #D4CFC7", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{ display: "inline-block", marginTop: 18, padding: "10px 24px", background: "#1A1410", color: "#F5F2EC", borderRadius: 4, fontSize: 13, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Contact
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desk-nav { display: none !important; }
          .mob-btn  { display: block !important; }
          header    { padding: 0 24px !important; }
        }
      `}</style>
    </header>
  );
}
