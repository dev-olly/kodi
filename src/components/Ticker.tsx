import { TICKER_WORDS } from "../data/content";
import { DIM, MUTED, R, sans } from "../theme";

export function Ticker() {
  const all = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div
      style={{
        borderTop: "1px solid rgba(240,237,232,0.07)",
        borderBottom: "1px solid rgba(240,237,232,0.07)",
        padding: "11px 0",
        overflow: "hidden",
        background: "#060606",
      }}
      aria-hidden="true"
    >
      <div className="marquee-track">
        {all.map((word, i) => (
          <span
            key={`${word}-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 18,
              padding: "0 18px",
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 10,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: i % 5 === 0 ? R : MUTED,
              whiteSpace: "nowrap",
            }}
          >
            {word}
            <svg width="3" height="3" viewBox="0 0 3 3">
              <circle cx="1.5" cy="1.5" r="1.5" fill={i % 5 === 0 ? R : DIM} />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
