import type { Metadata } from "next";
import Image from "next/image";
import { ArrowIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import { partners } from "@/utils/content";

export const metadata: Metadata = { title: "Parceiros" };

export default function ParceirosPage() {
  return (
    <>
      <PageHeader tag="Juntos somos mais fortes" title="Parceiros" breadcrumb={[{ name: "A APAE", href: "/sobre" }]} />

      <section className="px-6 py-[100px]">
        <ul className="container-apae m-0 grid list-none gap-7 p-0" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
          {partners.map((partner) => (
            <li key={partner.name} className="animatedSide">
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="apae-card group flex h-full flex-col overflow-hidden rounded-[28px] border border-line bg-white text-ink no-underline"
              >
                <div className="flex h-[220px] items-center justify-center p-8">
                  <Image src={partner.logo} alt={partner.name} sizes="300px" className="max-h-full w-auto object-contain" />
                </div>
                <span className="flex items-center justify-between gap-4 border-t border-line px-7 py-5 font-display text-[20px] font-medium">
                  {partner.name}
                  <ArrowIcon className="h-5 w-5 text-brand transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
