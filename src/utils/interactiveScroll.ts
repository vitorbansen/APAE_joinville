"use client";

import { useEffect } from "react";

// Anima elementos com a classe "animatedSide" quando entram na tela.
// A direção é definida pela posição do elemento: metade esquerda entra pela esquerda,
// metade direita pela direita e elementos centralizados / largura total sobem de baixo.
// Também aceita as classes explícitas "animatedElementLeft", "animatedElementRight" e "animatedElementBottom".
// É montado em src/app/template.tsx, que remonta a cada navegação entre páginas.
const SELECTOR = ".animatedSide, .animatedElementLeft, .animatedElementRight, .animatedElementBottom";
const DIRECTION_CLASSES = ["fromLeft", "fromRight", "fromBottom"];
const STAGGER_SECONDS = 0.12;
const DURATION_SECONDS = 0.9; // igual à maior duração em .revealed (globals.css)

function getDirection(element: HTMLElement) {
  if (element.classList.contains("animatedElementLeft")) return "fromLeft";
  if (element.classList.contains("animatedElementRight")) return "fromRight";
  if (element.classList.contains("animatedElementBottom")) return "fromBottom";

  const rect = element.getBoundingClientRect();
  const viewportWidth = window.innerWidth;
  const center = rect.left + rect.width / 2;

  if (rect.width > viewportWidth * 0.7) return "fromBottom";
  if (center < viewportWidth * 0.45) return "fromLeft";
  if (center > viewportWidth * 0.55) return "fromRight";
  return "fromBottom";
}

function cleanUp(element: HTMLElement) {
  element.classList.remove("animatedSide", "animatedElementLeft", "animatedElementRight", "animatedElementBottom", "revealed", ...DIRECTION_CLASSES);
  element.style.transitionDelay = "";
}

export function InteractiveScroll() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach(cleanUp);
      return;
    }

    elements.forEach((element) => element.classList.add(getDirection(element)));
    const timers: number[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        let order = 0;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);

          const delay = order * STAGGER_SECONDS;
          order++;
          element.style.transitionDelay = `${delay}s`;
          element.classList.add("revealed");
          // Remove as classes ao fim da animação para não interferir no hover dos cards
          timers.push(window.setTimeout(() => cleanUp(element), (delay + DURATION_SECONDS) * 1000));
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    // Aguarda um frame para a posição inicial ser aplicada antes de observar
    const frame = requestAnimationFrame(() => elements.forEach((element) => observer.observe(element)));

    return () => {
      cancelAnimationFrame(frame);
      timers.forEach(clearTimeout);
      observer.disconnect();
    };
  }, []);

  return null;
}
