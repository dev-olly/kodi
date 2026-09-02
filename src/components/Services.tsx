import { useState } from "react";
import { SERVICES } from "../data/content";
import { FG, LINE, MUTED, sans, serif } from "../theme";
import { GradText } from "./GradText";

export function Services() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section>
      <div className="section-inner" style={{ paddingTop: 120 }}>
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
              fontSize: "clamp(36px, 5vw, 64px)",
              color: FG,
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            What we <GradText>do.</GradText>
          </h2>
          <span
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 12,
              color: MUTED,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            04 Departments
          </span>
        </div>
      </div>

      {SERVICES.map((service) => {
        const open = active === service.name;
        return (
          <div
            key={service.name}
            id={service.slug}
            style={{
              borderBottom: `1px solid ${LINE}`,
              transition: "background 0.4s",
              background: open ? "rgba(224,64,28,0.03)" : "transparent",
            }}
          >
            <div className="section-inner">
              <button
                type="button"
                className="services-row"
                aria-expanded={open}
                onClick={() => setActive(open ? null : service.name)}
              >
                <span
                  style={{
                    fontFamily: serif,
                    fontStyle: "italic",
                    fontSize: "clamp(36px, 5vw, 72px)",
                    background: open ? "linear-gradient(110deg, #E0401C 0%, #FF6B3D 100%)" : "none",
                    WebkitBackgroundClip: open ? "text" : "unset",
                    WebkitTextFillColor: open ? "transparent" : MUTED,
                    backgroundClip: open ? "text" : "unset",
                    color: open ? "transparent" : MUTED,
                    transition: "all 0.3s",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  {service.num}
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: serif,
                      fontSize: "clamp(28px, 4.5vw, 68px)",
                      color: FG,
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                    }}
                  >
                    {service.name}
                  </div>
                  <div
                    style={{
                      fontFamily: sans,
                      fontWeight: 300,
                      fontSize: 14,
                      color: MUTED,
                      marginTop: 6,
                    }}
                  >
                    {service.sub}
                  </div>
                </div>
                <span
                  className="services-count"
                  style={{
                    fontFamily: sans,
                    fontWeight: 300,
                    fontSize: 12,
                    color: MUTED,
                    letterSpacing: "0.1em",
                    justifySelf: "end",
                  }}
                >
                  {service.count} services
                </span>
                <div
                  style={{
                    width: 36,
                    height: 36,
                    border: `1px solid ${open ? "#E0401C" : LINE}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s",
                    background: open ? "rgba(224,64,28,0.12)" : "transparent",
                    transform: open ? "rotate(45deg)" : "none",
                    justifySelf: "end",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke={open ? "#FF6B3D" : MUTED}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: open ? 500 : 0,
                  transition: "max-height 0.55s cubic-bezier(0.16,1,0.3,1)",
                }}
              >
                <div className="services-expand">
                  <div>
                    <p
                      style={{
                        fontFamily: sans,
                        fontWeight: 300,
                        fontSize: 16,
                        color: "#9A9590",
                        lineHeight: 1.8,
                        margin: "0 0 32px",
                      }}
                    >
                      {service.body}
                    </p>
                    <a
                      href="#contact"
                      style={{
                        fontFamily: sans,
                        fontWeight: 500,
                        fontSize: 13,
                        color: "#FF6B3D",
                        textDecoration: "none",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(224,64,28,0.1)",
                        border: "1px solid rgba(224,64,28,0.2)",
                        padding: "10px 20px",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background = "rgba(224,64,28,0.2)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "rgba(224,64,28,0.1)")
                      }
                    >
                      Start a {service.name} project →
                    </a>
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {service.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: sans,
                          fontWeight: 300,
                          fontSize: 13,
                          color: "#8A8680",
                          border: `1px solid ${LINE}`,
                          padding: "8px 14px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
