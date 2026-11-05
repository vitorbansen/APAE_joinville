import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AlunosQuadra from "@/assets/alunos_quadra.jpg";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import SectionTag from "@/components/ui/SectionTag";
import Stats from "@/components/sections/Stats.section";
import { activities, missionTexts, professionals, programs, publicPolicies, specialties, structure } from "@/utils/content";
import { institutionalLinks, siteConfig } from "@/utils/siteConfig";

export const metadata: Metadata = { title: "Institucional" };

const lists = [
  { title: "Programas e serviços", items: programs },
  { title: "Equipe de profissionais", items: professionals },
  { title: "Aulas e cursos", items: activities },
  { title: "Estrutura", items: structure },
];

export default function InstitucionalPage() {
  return (
    <>
      <PageHeader tag="A APAE" title="Institucional" description={siteConfig.fullName} />

      <section className="px-6 py-[100px]">
        <div className="container-apae grid items-center gap-16 lg:grid-cols-2">
          <div className="animatedSide flex flex-col gap-6">
            <SectionTag label="Quem somos" />
            <h2 className="title-h2">Desde 1965 ao lado da pessoa com deficiência e sua família</h2>
            <p className="prose-apae m-0">{siteConfig.about}</p>
            {missionTexts.map((text) => (
              <p key={text} className="prose-apae m-0">
                {text}
              </p>
            ))}
          </div>
          <div className="animatedSide overflow-hidden rounded-[40px] border-[6px] border-white shadow-xl">
            <Image src={AlunosQuadra} alt="Alunos e professores da APAE de Joinville" sizes="(min-width: 1024px) 580px, 100vw" className="block h-auto w-full" />
          </div>
        </div>
      </section>

      <Stats />

      <section className="px-6 py-[100px]">
        <div className="container-apae flex flex-col gap-12">
          <div className="animatedSide flex max-w-[760px] flex-col gap-5">
            <SectionTag label="Atendimento" />
            <h2 className="title-h2">Assistência Social, Saúde e Educação</h2>
            <p className="prose-apae m-0">
              A cada ano a APAE é ampliada, devido à grande demanda, tendo em vista os serviços prestados nas três
              Políticas Públicas. Contando com 420 assistidos diariamente, mais os externos, perfazendo um total de 600
              assistidos.
            </p>
            <div className="flex flex-wrap gap-3">
              {publicPolicies.map((policy) => (
                <span key={policy} className="rounded-full bg-brand-light px-5 py-2.5 font-bold text-brand-dark">
                  {policy}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))" }}>
            <div className="animatedSide flex flex-col gap-4 rounded-[28px] bg-brand-deep p-7 text-white">
              <h3 className="m-0 font-display text-[22px] font-medium">Especialidades</h3>
              <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                {specialties.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[16px] text-mist">
                    <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {lists.map((list) => (
              <div key={list.title} className="animatedSide flex flex-col gap-4 rounded-[28px] border border-line bg-white p-7">
                <h3 className="m-0 font-display text-[22px] font-medium">{list.title}</h3>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0">
                  {list.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[16px] text-muted">
                      <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sun-light px-6 py-[80px]">
        <div className="container-apae flex flex-col gap-8">
          <h2 className="title-h2 animatedSide">Conheça mais</h2>
          <div className="grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))" }}>
            {institutionalLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="apae-card animatedSide flex items-center justify-between gap-4 rounded-[24px] border border-line bg-white p-6 font-display text-[20px] font-medium text-ink no-underline"
              >
                {link.name}
                <ArrowIcon className="h-6 w-6 shrink-0 text-brand" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
