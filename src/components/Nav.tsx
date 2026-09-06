import { useEffect, useState } from "react";
import { NAV_LINKS } from "../data/content";
import { FG, GRAD, LINE, MUTED, sans } from "../theme";
import { KodiLogo } from "./KodiLogo";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto",
        zIndex: 500,
        transition: "background .4s,border-color .4s",
        background: scrolled ? "rgba(9,9,9,.94)" : "transparent",
        backdropFilter: scrolled ? "blur(22px)" : "none",
        borderBottom: `1px solid ${scrolled ? LINE : "transparent"}`,
      }}
    >
      <div
        className="p48"
        style={{
          maxWidth: 1380,
          margin: "0 auto",
          padding: "0 48px",
          height: 66,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }} aria-label="Kodi home" data-h="1">
          <KodiLogo size={21} />
        </a>
        <nav className="nd" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              data-h="1"
              style={{
                fontFamily: sans,
                fontWeight: 400,
                fontSize: 13,
                color: MUTED,
                textDecoration: "none",
                transition: "color .2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
              onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            data-h="1"
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: ".08em",
              background: GRAD,
              color: "#fff",
              padding: "11px 24px",
              textDecoration: "none",
              transition: "opacity .2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = ".8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start a Project
          </a>
        </nav>
        <button
          type="button"
          className="nm"
          data-h="1"
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
                  transition: "all .22s",
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
          className="p48"
          style={{
            background: "rgba(9,9,9,.97)",
            borderTop: `1px solid ${LINE}`,
            padding: "28px 48px 36px",
            display: "flex",
            flexDirection: "column",
            gap: 22,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              data-h="1"
              style={{
                fontFamily: sans,
                fontWeight: 400,
                fontSize: 15,
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
            data-h="1"
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 13,
              background: GRAD,
              color: "#fff",
              padding: "14px 24px",
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
