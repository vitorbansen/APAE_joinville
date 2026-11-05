import type { Metadata } from "next";
import Image from "next/image";
import Fundadora from "@/assets/historia/fundadora-da-apae-joinville.jpg";
import PageHeader from "@/components/ui/PageHeader";
import { founder, presidents } from "@/utils/content";

export const metadata: Metadata = { title: "Galeria dos Presidentes" };

export default function GaleriaPresidentesPage() {
  return (
    <>
      <PageHeader
        tag="Relação dos Presidentes da APAE – Joinville – SC"
        title="Galeria dos Presidentes"
        breadcrumb={[{ name: "A APAE", href: "/sobre" }]}
      />

      <section className="px-6 py-[100px]">
        <div className="container-apae flex flex-col gap-14">
          <div className="animatedSide flex flex-wrap items-center gap-8 rounded-[36px] bg-sun p-6 sm:p-8">
            <div className="h-[140px] w-[140px] shrink-0 overflow-hidden rounded-full border-[5px] border-white">
              <Image src={Fundadora} alt="Fundadora da APAE Joinville" sizes="140px" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="tag-label text-ink/70">Fundadora</span>
              <span className="font-display text-[clamp(26px,3.5vw,38px)] font-semibold leading-tight text-ink">{founder}</span>
            </div>
          </div>

          <ol className="m-0 grid list-none gap-4 p-0" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(280px, 100%), 1fr))" }}>
            {presidents.map((president, index) => (
              <li
                key={`${president.period}-${president.name}`}
                className="apae-card animatedSide flex items-center gap-4 rounded-[22px] border border-line bg-white p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light font-display text-[16px] font-semibold text-brand-dark">
                  {index + 1}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="text-[14px] font-extrabold text-brand-dark">{president.period}</span>
                  <span className="text-[17px] font-bold leading-snug text-ink">{president.name}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
