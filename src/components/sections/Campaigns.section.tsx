"use client";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BannerBemVindo from "@/assets/banners/seja_bem_vindo.jpg";
import BannerBazar from "@/assets/banners/bazar.png";
import BannerDoar from "@/assets/banners/doar_faz_bem.png";
import SectionTag from "@/components/ui/SectionTag";

// Banners que já estavam no carrossel do site atual
const slides: { image: StaticImageData; alt: string; href?: string }[] = [
  { image: BannerBemVindo, alt: "Seja bem-vindo — conheça nosso site APAE de Joinville-SC", href: "/sobre" },
  { image: BannerBazar, alt: "Conheça nosso bazar — visite, doe e compre!" },
  { image: BannerDoar, alt: "Doar faz bem para o coração", href: "/doe-agora" },
];

const INTERVAL_MS = 6000;

export default function Campaigns() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), INTERVAL_MS);
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (step: number) => setActive((current) => (current + step + slides.length) % slides.length);

  return (
    <section className="px-6 py-[100px]">
      <div className="container-apae flex flex-col gap-8">
        <div className="animatedSide flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <SectionTag label="Campanhas" />
            <h2 className="title-h2">Fique por dentro</h2>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Banner anterior"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-line-strong bg-white text-ink transition-colors hover:border-brand hover:text-brand-dark"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="m15 5-7 7 7 7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo banner"
              className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-line-strong bg-white text-ink transition-colors hover:border-brand hover:text-brand-dark"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="m9 5 7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="animatedSide relative aspect-[1366/768] overflow-hidden rounded-[32px] bg-white shadow-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Campanhas da APAE"
        >
          {slides.map((slide, index) => {
            const className = `absolute inset-0 transition-opacity duration-700 ${index === active ? "opacity-100" : "pointer-events-none opacity-0"}`;
            const image = <Image src={slide.image} alt={slide.alt} fill sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover" />;
            return slide.href ? (
              <Link key={slide.alt} href={slide.href} aria-hidden={index !== active} tabIndex={index === active ? 0 : -1} className={className}>
                {image}
              </Link>
            ) : (
              <div key={slide.alt} aria-hidden={index !== active} className={className}>
                {image}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-2.5">
          {slides.map((slide, index) => (
            <button
              key={slide.alt}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Ver banner ${index + 1}`}
              aria-current={index === active}
              className={`h-3 cursor-pointer rounded-full border-0 transition-all ${index === active ? "w-10 bg-brand" : "w-3 bg-line-strong"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
