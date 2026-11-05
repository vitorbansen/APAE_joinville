import Image from "next/image";
import Link from "next/link";
import HeroImage from "@/assets/alunos_quadra.jpg";
import { ArrowIcon, HeartIcon } from "@/components/ui/Icons";
import SectionTag from "@/components/ui/SectionTag";
import { siteConfig } from "@/utils/siteConfig";

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden px-6 pb-24 pt-14 lg:pt-20">
      {/* Formas decorativas nas cores do logo */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-sun-light" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 right-[-120px] h-[360px] w-[360px] rounded-full bg-brand-light" aria-hidden="true" />

      <div className="container-apae relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col gap-7">
          <div className="animatedElementLeft">
            <SectionTag label="Seja bem-vindo" />
          </div>
          <h1
            className="animatedElementLeft m-0 font-display font-semibold leading-[1.04] text-ink"
            style={{ fontSize: "clamp(40px, 5.6vw, 68px)", textWrap: "balance" }}
          >
            Fazendo história com pessoas com deficiência{" "}
            {/* Destaque amarelo que acompanha a quebra de linha no celular */}
            <span
              className="box-decoration-clone"
              style={{ backgroundImage: "linear-gradient(transparent 64%, #F6D31A 64%, #F6D31A 92%, transparent 92%)" }}
            >
              intelectual e múltipla
            </span>
          </h1>
          <p className="animatedElementLeft m-0 max-w-[580px] text-[19px] leading-[1.65] text-muted" style={{ textWrap: "pretty" }}>
            {siteConfig.about}
          </p>
          <div className="animatedElementLeft flex flex-wrap gap-4 pt-1">
            <Link
              href="/doe-agora"
              className="flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-[16px] font-extrabold text-white no-underline transition-colors hover:bg-brand-dark"
            >
              <HeartIcon />
              Doe agora
            </Link>
            <Link
              href="/historia-da-apae"
              className="flex items-center gap-2 rounded-full border-2 border-ink/15 px-7 py-[14px] text-[16px] font-extrabold text-ink no-underline transition-colors hover:border-brand hover:text-brand-dark"
            >
              Conheça nossa história
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="animatedElementRight relative">
          <div className="absolute -left-5 -top-5 h-full w-full rounded-[44px] bg-sun" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[44px] border-[6px] border-white shadow-2xl">
            <Image
              src={HeroImage}
              alt="Alunos e professores da APAE de Joinville na quadra da escola"
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
              className="block h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-7 right-6 flex items-center gap-3 rounded-full bg-white px-5 py-3 shadow-xl">
            <span className="font-display text-[28px] font-semibold leading-none text-brand">1965</span>
            <span className="text-[13px] font-bold leading-tight text-muted">
              fundada em
              <br />
              {siteConfig.foundedAt.replace(" de 1965", "")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
