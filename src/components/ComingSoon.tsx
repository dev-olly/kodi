import { COMING } from "../data/content";
import { BG, FG, GRAD, LINE, MUTED, sans, serif } from "../theme";

export function ComingSoon() {
  return (
    <section className="page-pad" style={{ padding: "120px 40px" }}>
      <div className="section-inner" style={{ padding: 0 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            paddingBottom: 24,
            borderBottom: `1px solid ${LINE}`,
          }}
        >
          <h2
            style={{
              fontFamily: serif,
              fontSize: "clamp(30px, 4vw, 56px)",
              color: FG,
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            Coming <em style={{ color: MUTED, fontStyle: "normal" }}>Soon.</em>
          </h2>
          <span
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 12,
              color: MUTED,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            In Development
          </span>
        </div>

        <div className="coming-grid">
          {COMING.map((dept, i) => (
            <div
              key={dept.name}
              className="coming-card"
              style={{
                background: BG,
                padding: "52px 44px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background: i === 0 ? GRAD : "transparent",
                  opacity: i === 0 ? 1 : 0,
                }}
              />
              <div
                style={{
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 11,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: MUTED,
                  marginBottom: 20,
                }}
              >
                {String(i + 5).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily: serif,
                  fontSize: 32,
                  color: FG,
                  opacity: 0.28,
                  margin: "0 0 28px",
                  letterSpacing: "-0.01em",
                }}
              >
                {dept.name}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {dept.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: 13,
                      color: "#3A3740",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div
                style={{
                  marginTop: 36,
                  display: "inline-block",
                  fontFamily: sans,
                  fontWeight: 500,
                  fontSize: 10,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#E0401C",
                  opacity: 0.45,
                  border: "1px solid rgba(224,64,28,0.2)",
                  padding: "6px 12px",
                }}
              >
                Building Now
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
