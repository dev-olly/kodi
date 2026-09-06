import { useCounter } from "../hooks/useCounter";
import { useInView } from "../hooks/useInView";
import { R, sans } from "../theme";

export function Stats() {
  const [ref, inView] = useInView(0.35);
  const n1 = useCounter(4, inView, 1600);
  const n2 = useCounter(20, inView, 1900);
  const n3 = useCounter(100, inView, 2100);
  const stats = [
    { n: n1, suf: "", label: "Core Disciplines" },
    { n: n2, suf: "+", label: "Services Available" },
    { n: n3, suf: "%", label: "Creative Ownership" },
  ];

  return (
    <div
      ref={ref}
      className="p48"
      style={{ background: R, padding: "80px 48px", position: "relative", overflow: "hidden" }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: "-2%",
          bottom: "-15%",
          fontFamily: sans,
          fontWeight: 900,
          fontSize: "20vw",
          letterSpacing: "-0.05em",
          color: "rgba(0,0,0,.09)",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        K.
      </div>
      <div
        className="r3"
        style={{
          maxWidth: 1380,
          margin: "0 auto",
          gap: 40,
          position: "relative",
          zIndex: 2,
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "none" : "translateY(24px)",
              transition: "all .7s ease",
            }}
          >
            <div
              style={{
                fontFamily: sans,
                fontWeight: 900,
                fontSize: "clamp(52px,7.5vw,100px)",
                letterSpacing: "-0.04em",
                color: "#fff",
                lineHeight: 1,
              }}
            >
              {stat.n}
              {stat.suf}
            </div>
            <div
              style={{
                fontFamily: sans,
                fontWeight: 300,
                fontSize: 11,
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.5)",
                marginTop: 8,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
