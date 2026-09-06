import { useEffect, useState } from "react";
import { PHOTOS } from "../data/content";
import { FG, GRAD, MUTED, R, sans } from "../theme";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), 120);
    const onScroll = () => setScroll(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      style={{
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-15% 0",
          zIndex: 0,
          transform: `translateY(${scroll * 0.38}px)`,
        }}
      >
        <img
          src={PHOTOS.hero}
          alt="Kodi creative studio"
          loading="eager"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.28) saturate(0.6)",
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(160deg, rgba(9,9,9,.35) 0%, rgba(9,9,9,.05) 40%, rgba(9,9,9,.75) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "26%",
          left: "49%",
          transform: "translateX(-50%)",
          width: "32vw",
          height: "32vw",
          borderRadius: "50%",
          background: "radial-gradient(circle,rgba(224,64,28,.13) 0%,transparent 70%)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      <div
        className="p48"
        style={{
          padding: "110px 48px 0",
          display: "flex",
          justifyContent: "space-between",
          position: "relative",
          zIndex: 3,
          opacity: ready ? 1 : 0,
          transform: ready ? "none" : "translateY(14px)",
          transition: "all .6s ease .1s",
        }}
      >
        <span
          style={{
            fontFamily: sans,
            fontWeight: 400,
            fontSize: 11,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "rgba(240,237,232,.45)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            className="dot-pulse"
            style={{
              display: "inline-block",
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: R,
            }}
          />
          Creative Agency
        </span>
        <span
          style={{
            fontFamily: sans,
            fontWeight: 300,
            fontSize: 11,
            letterSpacing: ".22em",
            textTransform: "uppercase",
            color: "rgba(240,237,232,.3)",
          }}
        >
          Est. 2024
        </span>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
          padding: "0 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ overflow: "hidden", marginBottom: 4 }}>
          <div
            style={{
              transform: ready ? "translateY(0)" : "translateY(108%)",
              transition: "transform 1s cubic-bezier(.16,1,.3,1) .28s",
            }}
          >
            <h1
              style={{
                fontFamily: sans,
                fontWeight: 900,
                fontSize: "clamp(80px,17vw,244px)",
                letterSpacing: "-0.045em",
                color: FG,
                lineHeight: 0.88,
                display: "inline-flex",
                alignItems: "baseline",
                margin: 0,
              }}
            >
              Kod
              <span style={{ position: "relative", display: "inline-block" }}>
                i
                <span
                  className="dot-pulse"
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "2%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "0.17em",
                    height: "0.17em",
                    borderRadius: "50%",
                    background: R,
                    display: "block",
                    boxShadow: "0 0 clamp(10px,2.5vw,36px) rgba(224,64,28,.65)",
                  }}
                />
              </span>
            </h1>
          </div>
        </div>
        <div style={{ overflow: "hidden", marginBottom: 48 }}>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 200,
              fontSize: "clamp(14px,1.55vw,21px)",
              color: "rgba(240,237,232,.45)",
              letterSpacing: ".04em",
              transform: ready ? "translateY(0)" : "translateY(108%)",
              transition: "transform .95s cubic-bezier(.16,1,.3,1) .48s",
            }}
          >
            Brand · Digital · Advertising · Production
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: ready ? 1 : 0,
            transition: "opacity .7s ease .72s",
          }}
        >
          <a
            href="#brand"
            data-h="1"
            style={{
              fontFamily: sans,
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: ".05em",
              border: "1px solid rgba(240,237,232,.18)",
              color: FG,
              padding: "13px 30px",
              textDecoration: "none",
              backdropFilter: "blur(8px)",
              transition: "all .22s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = R;
              e.currentTarget.style.color = R;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(240,237,232,.18)";
              e.currentTarget.style.color = FG;
            }}
          >
            View Our Work
          </a>
          <a
            href="#contact"
            data-h="1"
            style={{
              fontFamily: sans,
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: ".05em",
              background: GRAD,
              color: "#fff",
              padding: "13px 30px",
              textDecoration: "none",
              transition: "opacity .22s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = ".8")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start a Project →
          </a>
        </div>
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          paddingBottom: 36,
          opacity: ready ? 1 : 0,
          transition: "opacity .6s ease 1.3s",
        }}
      >
        <span
          style={{
            fontFamily: sans,
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: ".24em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          Scroll
        </span>
        <div
          className="scroll-line"
          style={{
            width: 1,
            height: 52,
            background: `linear-gradient(to bottom,${R},transparent)`,
          }}
        />
      </div>

      <div
        className="orbital-badge"
        style={{
          position: "absolute",
          top: 90,
          right: 52,
          width: 120,
          height: 120,
          zIndex: 4,
        }}
      >
        <svg viewBox="0 0 120 120" className="spin-badge" style={{ width: "100%", height: "100%" }}>
          <defs>
            <path id="cp" d="M60 60 m-42 0 a42 42 0 1 1 84 0 a42 42 0 1 1-84 0" />
          </defs>
          <text
            style={{
              fontSize: 10,
              fontFamily: sans,
              fontWeight: 500,
              fill: "rgba(240,237,232,.28)",
              letterSpacing: "0.18em",
            }}
          >
            <textPath href="#cp">CREATIVE AGENCY • KODI • EST 2024 • </textPath>
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
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: GRAD,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path
                d="M2 6h8M6 2l4 4-4 4"
                stroke="#fff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
