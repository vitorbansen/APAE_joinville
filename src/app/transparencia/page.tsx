import type { Metadata } from "next";
import { DownloadIcon, FileIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import { transparencyGroups } from "@/utils/content";

export const metadata: Metadata = { title: "Transparência" };

export default function TransparenciaPage() {
  return (
    <>
      <PageHeader
        tag="Documentos e prestações de contas"
        title="Transparência"
        description="Estatuto, prestações de contas, balancetes e editais da APAE de Joinville."
      />

      <section className="px-6 py-[100px]">
        <div className="container-apae grid items-start gap-12 lg:grid-cols-[260px_1fr]">
          {/* Índice */}
          <nav aria-label="Seções" className="hidden flex-col gap-1 lg:sticky lg:top-32 lg:flex">
            {transparencyGroups.map((group) => (
              <a
                key={group.title}
                href={`#${slugify(group.title)}`}
                className="rounded-xl px-4 py-2.5 text-[15px] font-bold text-muted no-underline transition-colors hover:bg-brand-light hover:text-brand-dark"
              >
                {group.title}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-14">
            {transparencyGroups.map((group) => (
              <div key={group.title} id={slugify(group.title)} className="flex scroll-mt-32 flex-col gap-5">
                <h2 className="animatedSide m-0 flex items-center gap-3 font-display text-[28px] font-medium">
                  {group.title}
                  <span className="rounded-full bg-brand-light px-3 py-0.5 font-sans text-[14px] font-extrabold text-brand-dark">
                    {group.items.length}
                  </span>
                </h2>
                <ul className="m-0 grid list-none gap-3 p-0 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.href} className="animatedSide">
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="apae-card group flex h-full items-center gap-4 rounded-[20px] border border-line bg-white p-4 text-ink no-underline"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sun-light text-ink">
                          <FileIcon className="h-6 w-6" />
                        </span>
                        <span className="flex flex-1 flex-col">
                          <span className="text-[16px] font-bold leading-snug">{item.label}</span>
                          <span className="text-[13px] font-bold text-muted-2">PDF</span>
                        </span>
                        <DownloadIcon className="h-5 w-5 shrink-0 text-brand transition-transform group-hover:translate-y-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function slugify(text: string) {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
