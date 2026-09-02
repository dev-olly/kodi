import { FG, sans } from "../theme";

export function KodiLogo({ size = 22 }: { size?: number }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "baseline",
        fontFamily: sans,
        fontWeight: 700,
        fontSize: size,
        letterSpacing: "-0.01em",
        color: FG,
        lineHeight: 1,
      }}
    >
      Kod
      <span style={{ position: "relative", display: "inline-block" }}>
        i
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: size * -0.08 + "px",
            left: "50%",
            transform: "translateX(-50%)",
            width: size * 0.18 + "px",
            height: size * 0.18 + "px",
            borderRadius: "50%",
            background: "#E0401C",
            display: "block",
          }}
        />
      </span>
    </span>
  );
}
