import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import { historyChapters, historyIntro, historyToday } from "@/utils/content";

export const metadata: Metadata = { title: "História da APAE" };

export default function HistoriaPage() {
  return (
    <>
      <PageHeader
        tag="Uma trajetória de conquistas"
        title="História da APAE"
        description={historyIntro}
        breadcrumb={[{ name: "A APAE", href: "/sobre" }]}
      />

      <section className="px-6 py-[100px]">
        <ol className="container-apae relative m-0 flex list-none flex-col gap-20 p-0">
          {/* Linha do tempo */}
          <span className="absolute bottom-0 left-[27px] top-0 w-1 rounded-full bg-line-strong md:left-1/2 md:-translate-x-1/2" aria-hidden="true" />

          {historyChapters.map((chapter, index) => (
            <li key={chapter.year} className="relative grid gap-8 pl-20 md:grid-cols-2 md:gap-20 md:pl-0">
              <span
                className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border-4 border-cream bg-sun font-display text-[15px] font-semibold text-ink md:left-1/2 md:-translate-x-1/2"
                aria-hidden="true"
              >
                {chapter.year}
              </span>
              <div className={`animatedSide flex flex-col gap-4 ${index % 2 ? "md:order-2" : "md:text-right"}`}>
                <span className="font-display text-[44px] font-semibold leading-none text-brand">{chapter.year}</span>
                <h2 className="m-0 font-display text-[30px] font-medium leading-tight">{chapter.title}</h2>
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 40)} className="prose-apae m-0 text-left">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className={`animatedSide ${index % 2 ? "md:order-1" : ""}`}>
                {chapter.image && (
                  <figure className="m-0 overflow-hidden rounded-[32px] border-[6px] border-white bg-white shadow-xl">
                    <Image src={chapter.image.src} alt={chapter.image.alt} sizes="(min-width: 768px) 520px, 100vw" className="block h-auto w-full" />
                  </figure>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-brand-deep px-6 py-[100px] text-white">
        <div className="container-apae flex max-w-[860px] flex-col gap-6">
          <span className="tag-label animatedSide text-sun">Hoje</span>
          <h2 className="title-h2 animatedSide">A APAE nos dias de hoje</h2>
          {historyToday.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="animatedSide m-0 text-[18px] leading-[1.75] text-mist">
              {paragraph}
            </p>
          ))}
        </div>
      </section>
    </>
  );
}
