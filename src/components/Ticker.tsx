import { TICKER_WORDS } from "../data/content";
import { GRAD_TEXT, MUTED, sans } from "../theme";

export function Ticker() {
  const all = [...TICKER_WORDS, ...TICKER_WORDS];
  return (
    <div
      style={{
        borderTop: "1px solid rgba(238,234,228,0.07)",
        borderBottom: "1px solid rgba(238,234,228,0.07)",
        padding: "13px 0",
        overflow: "hidden",
        background: "#08080D",
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
              gap: 28,
              padding: "0 28px",
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
              color: i % 3 === 1 ? "transparent" : MUTED,
              background: i % 3 === 1 ? GRAD_TEXT : "none",
              WebkitBackgroundClip: i % 3 === 1 ? "text" : "unset",
              backgroundClip: i % 3 === 1 ? "text" : "unset",
            }}
          >
            {word}
            <svg width="4" height="4" viewBox="0 0 4 4">
              <circle cx="2" cy="2" r="2" fill={i % 5 === 0 ? "#E0401C" : "#2A2A2A"} />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}
