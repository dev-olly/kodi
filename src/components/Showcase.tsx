import { useState } from "react";
import { SHOWCASE } from "../data/content";
import { useInView } from "../hooks/useInView";
import { DIM, FG, MUTED, sans } from "../theme";

function ShowTile({
  src,
  label,
  sublabel,
  tall,
  delay,
}: {
  src: string;
  label: string;
  sublabel: string;
  tall: boolean;
  delay: number;
}) {
  const [ref, inView] = useInView(0.08);
  const [hov, setHov] = useState(false);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      data-h="1"
      style={{
        position: "relative",
        height: tall ? "72vh" : "48vh",
        minHeight: tall ? 480 : 280,
        overflow: "hidden",
        background: "#111",
        alignSelf: tall ? "stretch" : "end",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(52px)",
        transition: `opacity .9s ease ${delay}s,transform .9s cubic-bezier(.16,1,.3,1) ${delay}s`,
      }}
    >
      <img
        loading="lazy"
        src={src}
        alt={label}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform .8s cubic-bezier(.16,1,.3,1)",
          transform: hov ? "scale(1.07)" : "scale(1)",
          filter: "brightness(0.55) saturate(0.7)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(9,9,9,.85) 0%, transparent 60%)",
        }}
      />
      <div style={{ position: "absolute", bottom: 24, left: 24, right: 24 }}>
        <div
          style={{
            fontFamily: sans,
            fontWeight: 300,
            fontSize: 10,
            letterSpacing: ".2em",
            textTransform: "uppercase",
            color: MUTED,
            marginBottom: 6,
          }}
        >
          {sublabel}
        </div>
        <div
          style={{
            fontFamily: sans,
            fontWeight: 700,
            fontSize: 18,
            color: FG,
            letterSpacing: "-0.01em",
          }}
        >
          {label}
        </div>
      </div>
    </div>
  );
}

export function Showcase() {
  const [ref, inView] = useInView();

  return (
    <section style={{ padding: "100px 48px" }} className="p48">
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
            Selected <span style={{ color: DIM }}>work.</span>
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
            2024
          </span>
        </div>
        <div className="r2" style={{ gridTemplateColumns: "1.1fr 0.9fr 1fr", gap: 3, alignItems: "end" }}>
          {SHOWCASE.map((tile, i) => (
            <ShowTile
              key={tile.label}
              src={tile.src}
              label={tile.label}
              sublabel={tile.sublabel}
              tall={tile.tall}
              delay={i * 0.11}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
