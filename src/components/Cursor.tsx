import { useEffect, useState } from "react";
import { R } from "../theme";

function canUseCustomCursor() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [pos, setPos] = useState({ x: -300, y: -300 });
  const [big, setBig] = useState(false);

  useEffect(() => {
    const update = () => setEnabled(canUseCustomCursor());
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("has-custom-cursor", enabled);
    return () => document.body.classList.remove("has-custom-cursor");
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) =>
      setBig(!!(e.target as HTMLElement).closest("a,button,[data-h]"));
    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        zIndex: 10000,
        pointerEvents: "none",
        transform: "translate(-50%,-50%)",
        transition: "width .2s,height .2s,background .2s,border .2s",
        width: big ? 42 : 10,
        height: big ? 42 : 10,
        borderRadius: "50%",
        background: big ? "transparent" : R,
        border: big ? `1.5px solid ${R}` : "none",
      }}
    />
  );
}
