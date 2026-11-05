import Image from "next/image";
import SectionTag from "@/components/ui/SectionTag";
import { partners } from "@/utils/content";

export default function PartnersStrip() {
  return (
    <section className="border-t border-line bg-white px-6 py-16">
      <div className="container-apae flex flex-col items-center gap-8">
        <SectionTag label="Parceiros" />
        <div className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="animatedSide apae-card flex h-[120px] w-[220px] items-center justify-center overflow-hidden rounded-[24px] border border-line bg-white p-4"
            >
              <Image src={partner.logo} alt={partner.name} sizes="220px" className="max-h-full w-auto object-contain" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
