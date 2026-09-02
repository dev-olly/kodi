import { NAV_LINKS } from "../data/content";
import { MUTED, sans } from "../theme";
import { KodiLogo } from "./KodiLogo";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(238,234,228,0.07)",
        padding: "36px 40px",
      }}
      className="page-pad"
    >
      <div
        className="section-inner"
        style={{
          padding: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: 20,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <a href="#" style={{ textDecoration: "none" }} aria-label="Kodi home">
          <KodiLogo size={19} />
        </a>
        <nav aria-label="Footer" style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: 12,
                color: MUTED,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              {link}
            </a>
          ))}
        </nav>
        <span style={{ fontFamily: sans, fontWeight: 300, fontSize: 11, color: "#2E2B34" }}>
          © 2026 KODI
        </span>
      </div>
    </footer>
  );
}
