import type { CSSProperties, ReactNode } from "react";
import { GRAD_TEXT } from "../theme";

const clip: CSSProperties = {
  background: GRAD_TEXT,
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export function GradText({
  children,
  style = {},
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <span style={{ display: "inline", ...clip, ...style }}>
      {children}
    </span>
  );
}
