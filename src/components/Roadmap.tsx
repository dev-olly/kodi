import { STAGES } from "../data/content";
import { useInView } from "../hooks/useInView";
import { BG, DIM, FG, GRAD, GRAD_TEXT, LINE, MUTED, R, sans } from "../theme";

export function Roadmap() {
  const [ref, inView] = useInView();

  return (
    <section className="p48" style={{ background: BG, padding: "100px 48px" }}>
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: 20,
            borderBottom: `1px solid ${LINE}`,
            marginBottom: 64,
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
            Where we&apos;re{" "}
            <span
              style={{
                background: GRAD_TEXT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              going.
            </span>
          </h2>
        </div>
        <div style={{ position: "relative" }}>
          <div
            className="roadmap-line"
            style={{
              position: "absolute",
              top: 20,
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
              top: 18,
              left: 0,
              width: "33.5%",
              height: 3,
              background: GRAD,
              borderRadius: 2,
            }}
          />
          <div className="r3" style={{ gap: 2, paddingTop: 52 }}>
            {STAGES.map((stage, i) => (
              <div
                key={stage.phase}
                className="roadmap-col"
                style={{
                  paddingRight: i < 2 ? 48 : 0,
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateY(28px)",
                  transition: `all .8s cubic-bezier(.16,1,.3,1) ${0.1 + i * 0.12}s`,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 22,
                    marginTop: -42,
                  }}
                >
                  <div
                    style={{
                      width: i === 0 ? 16 : 8,
                      height: i === 0 ? 16 : 8,
                      borderRadius: "50%",
                      background: i === 0 ? GRAD : DIM,
                      boxShadow: i === 0 ? "0 0 20px rgba(224,64,28,.55)" : "none",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: sans,
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: ".2em",
                      textTransform: "uppercase",
                      color: i === 0 ? R : MUTED,
                    }}
                  >
                    {stage.phase}
                  </span>
                  {stage.active && (
                    <span
                      style={{
                        fontFamily: sans,
                        fontWeight: 700,
                        fontSize: 9,
                        letterSpacing: ".14em",
                        textTransform: "uppercase",
                        background: GRAD,
                        color: "#fff",
                        padding: "3px 8px",
                      }}
                    >
                      Active
                    </span>
                  )}
                </div>
                <h3
                  style={{
                    fontFamily: sans,
                    fontWeight: i === 0 ? 900 : 400,
                    fontSize: "clamp(16px,1.9vw,26px)",
                    color: i === 0 ? FG : DIM,
                    margin: "0 0 18px",
                    letterSpacing: "-0.015em",
                  }}
                >
                  {stage.title}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {stage.svcs.map((svc) => (
                    <div
                      key={svc}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        fontFamily: sans,
                        fontWeight: 300,
                        fontSize: 13,
                        color: i === 0 ? "#8A8580" : "#2A2724",
                      }}
                    >
                      <span
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: "50%",
                          background: i === 0 ? R : "#2A2724",
                          flexShrink: 0,
                          opacity: i === 0 ? 0.5 : 1,
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
