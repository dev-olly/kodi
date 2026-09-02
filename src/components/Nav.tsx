import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";
import { FG, GRAD, LINE, MUTED, sans } from "../theme";
import { KodiLogo } from "./KodiLogo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        transition: "all 0.4s",
        borderBottom: scrolled ? `1px solid ${LINE}` : "1px solid transparent",
        background: scrolled ? "rgba(6,6,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div
        className="section-inner"
        style={{
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }} aria-label="Kodi home">
          <KodiLogo size={22} />
        </a>
        <nav className="nav-desktop" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: sans,
                fontWeight: 400,
                fontSize: 13,
                color: MUTED,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
              onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="grad-bg"
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.06em",
              background: GRAD,
              color: "#fff",
              padding: "10px 22px",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start a Project
          </a>
        </nav>
        <button
          type="button"
          className="nav-mobile-btn"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          <div style={{ width: 22, display: "flex", flexDirection: "column", gap: 5 }}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: 1,
                  background: FG,
                  transition: "all 0.2s",
                  transform:
                    open && i === 0
                      ? "rotate(45deg) translateY(6px)"
                      : open && i === 2
                        ? "rotate(-45deg) translateY(-6px)"
                        : "none",
                  opacity: open && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </div>
        </button>
      </div>
      {open && (
        <div
          id="mobile-nav"
          style={{
            borderTop: `1px solid ${LINE}`,
            padding: "28px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
            background: "rgba(6,6,10,0.97)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: sans,
                fontSize: 14,
                color: MUTED,
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 13,
              background: GRAD,
              color: "#fff",
              padding: "14px 22px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: 8,
            }}
          >
            Start a Project
          </a>
        </div>
      )}
    </header>
  );
}
