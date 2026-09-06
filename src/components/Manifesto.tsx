import { useInView } from "../hooks/useInView";
import { R, sans, serif } from "../theme";

export function Manifesto() {
  const [ref, inView] = useInView(0.2);

  return (
    <section
      ref={ref}
      className="p48"
      style={{ background: R, padding: "120px 48px", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: 0,
          bottom: "-12%",
          fontFamily: sans,
          fontWeight: 900,
          fontSize: "28vw",
          letterSpacing: "-0.06em",
          color: "rgba(0,0,0,.1)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        K
      </div>
      <div style={{ maxWidth: 1380, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 48,
            opacity: inView ? 1 : 0,
            transition: "opacity .7s ease",
          }}
        >
          <span
            style={{
              fontFamily: sans,
              fontWeight: 400,
              fontSize: 11,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,.45)",
            }}
          >
            Our Position
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.18)" }} />
        </div>
        <p
          style={{
            fontFamily: serif,
            fontStyle: "italic",
            fontSize: "clamp(22px,3.6vw,55px)",
            color: "#fff",
            lineHeight: 1.3,
            maxWidth: "82%",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(28px)",
            transition: "all .9s cubic-bezier(.16,1,.3,1) .15s",
          }}
        >
          &ldquo;The biggest mistake is launching with 30 services. Four disciplines, done with total
          rigour, beats thirty done carelessly every time.&rdquo;
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 48,
            marginTop: 56,
            opacity: inView ? 1 : 0,
            transition: "opacity .8s ease .35s",
          }}
        >
          {[
            { n: "04", l: "Core disciplines" },
            { n: "100%", l: "Creative ownership" },
            { n: "24h", l: "Response guarantee" },
          ].map((stat) => (
            <div key={stat.l}>
              <div
                style={{
                  fontFamily: sans,
                  fontWeight: 900,
                  fontSize: "clamp(32px,4vw,52px)",
                  color: "#fff",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.n}
              </div>
              <div
                style={{
                  fontFamily: sans,
                  fontWeight: 300,
                  fontSize: 11,
                  letterSpacing: ".18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,.48)",
                  marginTop: 6,
                }}
              >
                {stat.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
