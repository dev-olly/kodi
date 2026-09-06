import { COMING } from "../data/content";
import { useInView } from "../hooks/useInView";
import { DIM, FG, LINE, MUTED, R, sans } from "../theme";

export function ComingSoon() {
  const [ref, inView] = useInView();

  return (
    <section className="p48" style={{ background: "#060606", padding: "100px 48px" }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: 20,
            borderBottom: `1px solid ${LINE}`,
            marginBottom: 48,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(20px)",
            transition: "all .7s ease",
          }}
        >
          <h2
            style={{
              fontFamily: sans,
              fontWeight: 900,
              fontSize: "clamp(28px,4vw,56px)",
              letterSpacing: "-0.03em",
              color: FG,
              margin: 0,
            }}
          >
            Coming <span style={{ color: DIM }}>Soon.</span>
          </h2>
          <span
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 11,
              letterSpacing: ".2em",
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Building now
          </span>
        </div>
        <div className="r3" style={{ gap: 2, background: LINE }}>
          {COMING.map((dept) => (
            <div key={dept.name} style={{ background: "#060606", padding: "48px 40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                <span
                  style={{
                    fontFamily: sans,
                    fontWeight: 700,
                    fontSize: 9,
                    letterSpacing: ".28em",
                    textTransform: "uppercase",
                    color: R,
                    opacity: 0.45,
                    border: "1px solid rgba(224,64,28,.2)",
                    padding: "4px 10px",
                  }}
                >
                  Classified
                </span>
                <div style={{ flex: 1, height: 1, background: LINE }} />
              </div>
              <h3
                style={{
                  fontFamily: sans,
                  fontWeight: 900,
                  fontSize: "clamp(18px,2vw,28px)",
                  color: FG,
                  opacity: 0.22,
                  margin: "0 0 24px",
                  letterSpacing: "-0.01em",
                }}
              >
                {dept.name}
              </h3>
              <ul
                className="cl-group"
                style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}
              >
                {dept.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      position: "relative",
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: 13,
                      color: MUTED,
                      lineHeight: 1.4,
                    }}
                  >
                    <span style={{ position: "relative" }}>
                      {item}
                      <span className="cl-bar" />
                    </span>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 8 }}>
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: "50%",
                    background: R,
                    opacity: 0.35,
                  }}
                />
                <span
                  style={{
                    fontFamily: sans,
                    fontWeight: 300,
                    fontSize: 10,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    color: MUTED,
                    opacity: 0.5,
                  }}
                >
                  In development
                </span>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            fontFamily: sans,
            fontWeight: 300,
            fontSize: 12,
            color: MUTED,
            marginTop: 18,
            letterSpacing: ".02em",
            opacity: 0.6,
          }}
        >
          Hover a panel to reveal what&apos;s coming.
        </p>
      </div>
    </section>
  );
}
