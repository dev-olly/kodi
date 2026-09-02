import { BG, FG, GRAD, GRAD_TEXT, MUTED, sans, serif } from "../theme";
import { GradText } from "./GradText";

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        position: "relative",
        overflow: "hidden",
        paddingBottom: 72,
      }}
    >
      <div
        className="hero-panel"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "46%",
          height: "72%",
          overflow: "hidden",
          zIndex: 0,
        }}
      >
        <img
          src="/hero.jpg"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(1.4) brightness(0.35) hue-rotate(20deg)",
            mixBlendMode: "lighten",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to left, transparent, ${BG} 80%)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to top, ${BG} 0%, transparent 40%)`,
          }}
        />
      </div>

      <div
        className="orbital-badge"
        style={{
          position: "absolute",
          top: 120,
          right: "8%",
          width: 130,
          height: 130,
          zIndex: 10,
        }}
      >
        <svg viewBox="0 0 130 130" className="spin-slow" style={{ width: "100%", height: "100%" }}>
          <defs>
            <path id="circle-path" d="M 65 65 m -45 0 a 45 45 0 1 1 90 0 a 45 45 0 1 1 -90 0" />
          </defs>
          <text
            style={{
              fill: MUTED,
              fontSize: 10.5,
              letterSpacing: "0.2em",
              fontFamily: sans,
              fontWeight: 500,
            }}
          >
            <textPath href="#circle-path">CREATIVE AGENCY • KODI • EST 2024 • </textPath>
          </text>
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: GRAD,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M2 7h10M7 2l5 5-5 5"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div
        className="section-inner"
        style={{ paddingTop: 160, width: "100%", position: "relative", zIndex: 5 }}
      >
        <div className="fade-up-1" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: GRAD,
            }}
          />
          <span
            style={{
              fontFamily: sans,
              fontWeight: 400,
              fontSize: 12,
              letterSpacing: "0.22em",
              color: MUTED,
              textTransform: "uppercase",
            }}
          >
            Brand · Digital · Advertising · Production
          </span>
        </div>

        <div className="fade-up-2">
          <h1
            style={{
              fontFamily: serif,
              fontSize: "clamp(58px, 10.5vw, 148px)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              margin: "0 0 40px",
              color: FG,
            }}
          >
            We build
            <br />
            <GradText>brands</GradText>
            <br />
            that can&apos;t
            <br />
            be ignored.
          </h1>
        </div>

        <div
          className="fade-up-3 hero-bottom"
          style={{
            borderTop: `1px solid rgba(238,234,228,0.07)`,
            paddingTop: 32,
          }}
        >
          <p
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 15,
              color: MUTED,
              maxWidth: 380,
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            One studio. Four disciplines. Zero compromise. We&apos;re built for companies that demand
            to be seen.
          </p>
          <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
            {[
              { n: "04", l: "Disciplines" },
              { n: "20+", l: "Services" },
              { n: "∞", l: "Ambition" },
            ].map((stat) => (
              <div key={stat.l} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: serif,
                    fontSize: 28,
                    background: GRAD_TEXT,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  {stat.n}
                </div>
                <div
                  style={{
                    fontFamily: sans,
                    fontSize: 10,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: MUTED,
                    marginTop: 4,
                  }}
                >
                  {stat.l}
                </div>
              </div>
            ))}
            <a
              href="#contact"
              className="hero-cta"
              style={{
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: "0.06em",
                background: GRAD,
                color: "#fff",
                padding: "13px 28px",
                textDecoration: "none",
                transition: "opacity 0.2s",
                marginLeft: 16,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.82")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Let&apos;s Talk →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
