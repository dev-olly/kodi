import { useState } from "react";
import { SERVICES } from "../data/content";
import { useInView } from "../hooks/useInView";
import { FG, GRAD, GRAD_TEXT, MUTED, R, sans } from "../theme";

type Service = (typeof SERVICES)[number];

function DeptCard({ service, delay }: { service: Service; delay: number }) {
  const [ref, inView] = useInView(0.1);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      id={service.slug}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      data-h="1"
      style={{
        position: "relative",
        height: "64vh",
        minHeight: 420,
        overflow: "hidden",
        background: "#111",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(56px)",
        transition: `opacity .9s ease ${delay}s,transform .9s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      <img
        loading="lazy"
        src={service.photo}
        alt={service.name}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .85s cubic-bezier(.16,1,.3,1),filter .55s",
          transform: hov ? "scale(1.08)" : "scale(1.0)",
          filter: hov
            ? "brightness(0.45) saturate(0.65)"
            : "brightness(0.35) saturate(0.55)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `linear-gradient(to top, rgba(9,9,9,${hov ? 0.98 : 0.84}) 0%, rgba(9,9,9,.1) 55%, transparent 100%)`,
          transition: "all .5s",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 3,
          background: GRAD,
          transform: hov ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "left",
          transition: "transform .4s cubic-bezier(.16,1,.3,1)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          padding: "28px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <span
            style={{
              fontFamily: sans,
              fontWeight: 700,
              fontSize: 10,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              background: GRAD,
              color: "#fff",
              padding: "5px 10px",
            }}
          >
            {service.num}
          </span>
          <span
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 11,
              letterSpacing: ".12em",
              textTransform: "uppercase",
              color: "rgba(240,237,232,.35)",
              opacity: hov ? 1 : 0,
              transform: hov ? "translateX(0)" : "translateX(10px)",
              transition: "all .4s ease .08s",
            }}
          >
            Explore →
          </span>
        </div>
        <div>
          <h3
            style={{
              fontFamily: sans,
              fontWeight: 900,
              fontSize: "clamp(38px,5vw,72px)",
              letterSpacing: "-0.035em",
              color: FG,
              lineHeight: 1,
              margin: "0 0 8px",
            }}
          >
            {service.name}
          </h3>
          <p
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 13,
              color: "rgba(240,237,232,.38)",
              margin: "0 0 22px",
            }}
          >
            {service.sub}
          </p>
          <div
            style={{
              maxHeight: hov ? 340 : 0,
              overflow: "hidden",
              transition: "max-height .58s cubic-bezier(.16,1,.3,1)",
            }}
          >
            <p
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: 13,
                color: "rgba(240,237,232,.58)",
                lineHeight: 1.75,
                margin: "0 0 18px",
              }}
            >
              {service.body}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {service.items.map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: sans,
                    fontWeight: 400,
                    fontSize: 11,
                    color: FG,
                    border: "1px solid rgba(240,237,232,.14)",
                    padding: "5px 10px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              data-h="1"
              style={{
                display: "inline-block",
                marginTop: 20,
                fontFamily: sans,
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: ".08em",
                color: R,
                textDecoration: "none",
                borderBottom: "1px solid rgba(224,64,28,.3)",
                paddingBottom: 2,
              }}
            >
              Start a {service.name} project →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Departments() {
  const [ref, inView] = useInView();

  return (
    <section style={{ padding: "88px 48px 100px" }} className="p48">
      <div style={{ maxWidth: 1380, margin: "0 auto" }}>
        <div
          ref={ref}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: 20,
            borderBottom: "1px solid rgba(240,237,232,0.07)",
            marginBottom: 3,
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
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
            What we{" "}
            <span
              style={{
                background: GRAD_TEXT,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              do.
            </span>
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
            Hover each card
          </span>
        </div>
        <div className="r2" style={{ gap: 3 }}>
          {SERVICES.map((service, i) => (
            <DeptCard key={service.name} service={service} delay={i * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
