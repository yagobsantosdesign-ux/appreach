"use client";

import { useEffect, useRef } from "react";

export default function CursorDot() {
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });
  const raf = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const loop = () => {
      // lerp suave: 14% por frame → segue com leve lag elegante
      current.current.x += (pos.current.x - current.current.x) * 0.14;
      current.current.y += (pos.current.y - current.current.y) * 0.14;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${current.current.x}px, ${current.current.y}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
      style={{
        width: 10,
        height: 10,
        borderRadius: "50%",
        background: "var(--color-dark)",
        marginLeft: -5,
        marginTop: -5,
        willChange: "transform",
      }}
    />
  );
}
