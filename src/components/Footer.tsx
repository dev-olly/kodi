import { NAV_LINKS } from "../data/content";
import { BG, DIM, FG, GRAD, LINE, MUTED, sans } from "../theme";
import { KodiLogo } from "./KodiLogo";

export function Footer() {
  return (
    <footer className="p48" style={{ background: BG, borderTop: `1px solid ${LINE}`, padding: "52px 48px" }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 40 }}>
          <a href="#" style={{ textDecoration: "none" }} aria-label="Kodi home" data-h="1">
            <KodiLogo size={52} />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
            paddingTop: 28,
            borderTop: `1px solid ${LINE}`,
          }}
        >
          <nav aria-label="Footer" style={{ display: "flex", flexWrap: "wrap", gap: 32 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                data-h="1"
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: 12,
                  color: MUTED,
                  textDecoration: "none",
                  letterSpacing: ".04em",
                  transition: "color .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = FG)}
                onMouseLeave={(e) => (e.currentTarget.style.color = MUTED)}
              >
                {link}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            data-h="1"
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: ".1em",
              textTransform: "uppercase",
              background: GRAD,
              color: "#fff",
              padding: "10px 22px",
              textDecoration: "none",
            }}
          >
            Start a Project
          </a>
          <span style={{ fontFamily: sans, fontWeight: 300, fontSize: 11, color: DIM }}>
            © 2026 Kodi Creative Agency
          </span>
        </div>
      </div>
    </footer>
  );
}
