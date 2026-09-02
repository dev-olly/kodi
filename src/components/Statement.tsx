import { FG, GRAD, MUTED, sans, serif } from "../theme";
import { GradText } from "./GradText";

export function Statement() {
  return (
    <section
      className="page-pad"
      style={{
        padding: "140px 40px",
        position: "relative",
        overflow: "hidden",
        background: "#08080D",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(ellipse, rgba(224,64,28,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div className="section-inner" style={{ padding: 0, position: "relative", zIndex: 2 }}>
        <div style={{ maxWidth: 880 }}>
          <div
            style={{
              fontFamily: sans,
              fontWeight: 300,
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: MUTED,
              marginBottom: 36,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ display: "inline-block", width: 32, height: 1, background: GRAD }} />
            Our Position
          </div>
          <p
            style={{
              fontFamily: serif,
              fontStyle: "italic",
              fontSize: "clamp(24px, 3.5vw, 52px)",
              color: FG,
              lineHeight: 1.3,
              margin: 0,
            }}
          >
            &ldquo;The biggest mistake is launching with 30 services. We built{" "}
            <GradText>four disciplines that are genuinely world-class</GradText>
            {" "}— and we&apos;re building the rest with the same rigour.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
