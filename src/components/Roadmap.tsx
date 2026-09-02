import { STAGES } from "../data/content";
import { FG, GRAD, LINE, MUTED, sans, serif } from "../theme";
import { GradText } from "./GradText";

export function Roadmap() {
  return (
    <section className="page-pad" style={{ padding: "120px 40px", background: "#08080D" }}>
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
            Where we&apos;re <GradText>going.</GradText>
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          <div
            className="roadmap-line"
            style={{
              position: "absolute",
              top: 24,
              left: 0,
              right: 0,
              height: 1,
              background: LINE,
            }}
          />
          <div
            className="roadmap-progress"
            style={{
              position: "absolute",
              top: 22,
              left: 0,
              width: "33%",
              height: 3,
              background: GRAD,
              borderRadius: 2,
            }}
          />

          <div className="roadmap-grid">
            {STAGES.map((stage, i) => (
              <div key={stage.label} className="roadmap-col" style={{ paddingTop: 8, paddingRight: 40 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}>
                  <div
                    style={{
                      width: i === 0 ? 14 : 8,
                      height: i === 0 ? 14 : 8,
                      borderRadius: "50%",
                      background: i === 0 ? GRAD : LINE,
                      marginTop: -40,
                      position: "relative",
                      flexShrink: 0,
                      boxShadow: i === 0 ? "0 0 16px rgba(224,64,28,0.5)" : "none",
                    }}
                  />
                  <div>
                    <div
                      style={{
                        fontFamily: sans,
                        fontWeight: 600,
                        fontSize: 10,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: i === 0 ? "#FF6B3D" : MUTED,
                      }}
                    >
                      {stage.label}
                      {i === 0 && (
                        <span
                          style={{
                            marginLeft: 8,
                            background: GRAD,
                            color: "#fff",
                            fontSize: 9,
                            padding: "2px 7px",
                            letterSpacing: "0.12em",
                          }}
                        >
                          Active
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: serif,
                    fontSize: "clamp(20px, 2.2vw, 30px)",
                    color: i === 0 ? FG : "#2E2B34",
                    margin: "0 0 20px",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {stage.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {stage.services.map((svc) => (
                    <div
                      key={svc}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: sans,
                        fontWeight: 300,
                        fontSize: 13,
                        color: i === 0 ? "#8A8680" : "#2A2730",
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: i === 0 ? "#E0401C" : "#2A2730",
                          flexShrink: 0,
                          opacity: i === 0 ? 0.6 : 1,
                        }}
                      />
                      {svc}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
