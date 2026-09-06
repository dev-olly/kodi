import { FG, R, sans } from "../theme";

export function KodiLogo({ size = 22, color = FG }: { size?: number; color?: string }) {
  return (
    <span
      style={{
        fontFamily: sans,
        fontWeight: 900,
        fontSize: size,
        letterSpacing: "-0.04em",
        color,
        display: "inline-flex",
        alignItems: "baseline",
        lineHeight: 1,
        userSelect: "none",
      }}
    >
      Kod
      <span style={{ position: "relative", display: "inline-block" }}>
        i
        <span
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "1%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "0.17em",
            height: "0.17em",
            borderRadius: "50%",
            background: R,
            display: "block",
          }}
        />
      </span>
    </span>
  );
}
