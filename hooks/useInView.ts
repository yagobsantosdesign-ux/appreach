"use client";
import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30% 0px", ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
    // Observa o elemento uma única vez no mount; `options` é estável por uso.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, visible };
}
