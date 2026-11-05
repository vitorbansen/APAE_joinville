import type { Metadata } from "next";
import Image from "next/image";
import Diretoria from "@/assets/diretoria.jpg";
import PageHeader from "@/components/ui/PageHeader";
import SectionTag from "@/components/ui/SectionTag";
import { board, boardPeriod, councils } from "@/utils/content";

export const metadata: Metadata = { title: "Equipe APAE" };

const initials = (name: string) =>
  name
    .split(" ")
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

export default function EquipePage() {
  return (
    <>
      <PageHeader
        tag={`Gestão ${boardPeriod}`}
        title="Equipe APAE"
        description={`Diretoria da APAE de Joinville – ${boardPeriod}`}
        breadcrumb={[{ name: "A APAE", href: "/sobre" }]}
      />

      <section className="px-6 py-[100px]">
        <div className="container-apae flex flex-col gap-16">
          <figure className="animatedSide m-0 overflow-hidden rounded-[36px] border-[6px] border-white bg-white shadow-xl">
            <Image src={Diretoria} alt="Parte da diretoria da APAE de Joinville — gestão 2023/2025" sizes="(min-width: 1200px) 1152px, 100vw" className="block h-auto w-full" />
          </figure>

          <div className="flex flex-col gap-8">
            <div className="animatedSide flex flex-col gap-4">
              <SectionTag label="Diretoria" />
              <h2 className="title-h2">Diretoria da APAE de Joinville – {boardPeriod}</h2>
            </div>
            <ul className="m-0 grid list-none gap-5 p-0" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))" }}>
              {board.map((member, index) => (
                <li
                  key={member.name}
                  className={`apae-card animatedSide flex flex-col gap-4 rounded-[26px] border p-6 ${
                    index === 0 ? "border-sun bg-sun" : "border-line bg-white"
                  }`}
                >
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-full font-display text-[20px] font-semibold ${
                      index === 0 ? "bg-white text-ink" : "bg-brand-light text-brand-dark"
                    }`}
                    aria-hidden="true"
                  >
                    {initials(member.name)}
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className={`text-[14px] font-extrabold ${index === 0 ? "text-ink/70" : "text-brand-dark"}`}>{member.role}</span>
                    <span className="text-[19px] font-bold leading-snug text-ink">{member.name}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))" }}>
            {councils.map((council) => (
              <div key={council.title} className="animatedSide flex flex-col gap-5 rounded-[28px] bg-brand-deep p-7 text-white">
                <h2 className="m-0 font-display text-[23px] font-medium">{council.title}</h2>
                <ul className="m-0 flex list-none flex-col p-0">
                  {council.members.map((member) => (
                    <li key={member} className="border-b border-white/10 py-3 text-[16px] text-mist last:border-b-0">
                      {member}
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
