import { useEffect, useRef, useState } from "react";

export function SmileCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: fine)").matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let rx = 0, ry = 0, dx = 0, dy = 0;
    let raf = 0;

    const move = (e: MouseEvent) => {
      dx = e.clientX; dy = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dx}px, ${dy}px) translate(-50%, -50%)`;
      }
    };
    const tick = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(${hover ? 1.8 : 1})`;
      }
      raf = requestAnimationFrame(tick);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      cancelAnimationFrame(raf);
    };
  }, [enabled, hover]);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-10 w-10 rounded-full border border-primary/70 transition-[width,height,background] duration-200"
        style={{ boxShadow: "0 0 24px var(--primary), inset 0 0 12px var(--primary)", mixBlendMode: "screen" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-primary"
        style={{ boxShadow: "0 0 12px var(--primary)" }}
      />
    </>
  );
}
