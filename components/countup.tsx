"use client";

import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  from?: number;
  to: number;
  duration?: number; // milliseconds
  format?: (n: number) => string;
  /** If true (default), wait until the element is visible to start the animation */
  startOnView?: boolean;
  /** If true (default), only play once and don't restart when scrolled out/in */
  once?: boolean;
};

export function CountUp({
  from = 0,
  to,
  duration = 1500,
  format,
  startOnView = true,
  once = true,
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const startRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const elRef = useRef<HTMLSpanElement | null>(null);
  const [started, setStarted] = useState(!startOnView);

  // Respect users who prefer reduced motion: immediately show final value
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setValue(to);
      setStarted(false);
    }
    // only needs to run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!startOnView || started) return;
    if (!elRef.current) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            if (once) obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );

    obs.observe(elRef.current);
    return () => obs.disconnect();
  }, [startOnView, once, started]);

  useEffect(() => {
    if (!started) return;

    startRef.current = null;
    const step = (ts: number) => {
      if (!startRef.current) startRef.current = ts;
      const elapsed = ts - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const current = from + (to - from) * progress;
      setValue(current);
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, from, to, duration]);

  // Use a stable formatter to avoid server/client locale differences
  const defaultFormatter = (n: number) =>
    new Intl.NumberFormat("en-US").format(n);
  const display = format
    ? format(Math.round(value))
    : defaultFormatter(Math.round(value));

  return (
    <span ref={elRef} aria-live="polite">
      {display}
    </span>
  );
}
