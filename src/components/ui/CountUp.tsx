"use client";
import { useEffect, useRef } from "react";

interface ICountUp {
  value: number;
  decimals?: number;
  duration?: number;
}

const format = (value: number, decimals: number) =>
  value.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

// Conta de 0 até o valor quando o número aparece na tela.
// O HTML já sai com o valor final (sem JS ou com movimento reduzido o número fica correto).
export default function CountUp({ value, decimals = 0, duration = 1800 }: ICountUp) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    element.textContent = format(0, decimals);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = format(value * eased, decimals);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      element.textContent = format(value, decimals);
    };
  }, [value, decimals, duration]);

  return <span ref={ref}>{format(value, decimals)}</span>;
}
