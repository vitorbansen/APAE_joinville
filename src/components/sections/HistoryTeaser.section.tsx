import Image from "next/image";
import Link from "next/link";
import Fundadora from "@/assets/historia/fundadora-da-apae-joinville.jpg";
import FotoAntiga from "@/assets/historia/foto-antiga-apae-joinville.jpg";
import { ArrowIcon } from "@/components/ui/Icons";
import SectionTag from "@/components/ui/SectionTag";
import { historyIntro } from "@/utils/content";

const milestones = [
  { year: "1965", text: "Abertura oficial da Escola do Excepcional" },
  { year: "1972", text: "Construção da sede própria no Bairro América" },
  { year: "2004", text: "Inauguração da nova sede no Bairro Boa Vista" },
];

export default function HistoryTeaser() {
  return (
    <section className="relative overflow-hidden bg-sun-light px-6 py-[100px]">
      <div className="container-apae grid items-center gap-16 lg:grid-cols-2">
        <div className="animatedSide flex flex-col gap-7">
          <SectionTag label="Nossa história" />
          <h2 className="title-h2">Uma trajetória de conquistas</h2>
          <p className="prose-apae m-0">{historyIntro}</p>
          <ol className="m-0 flex list-none flex-col gap-0 p-0">
            {milestones.map((milestone) => (
              <li key={milestone.year} className="flex items-center gap-5 border-b border-line-strong py-4 last:border-b-0">
                <span className="font-display text-[30px] font-semibold text-brand-dark">{milestone.year}</span>
                <span className="text-[16px] font-bold text-ink">{milestone.text}</span>
              </li>
            ))}
          </ol>
          <Link
            href="/historia-da-apae"
            className="flex items-center gap-2 self-start rounded-full bg-ink px-7 py-4 font-extrabold text-white no-underline transition-colors hover:bg-brand-deep"
          >
            Ler a história completa
            <ArrowIcon />
          </Link>
        </div>

        <div className="animatedSide relative grid grid-cols-[1fr_0.8fr] items-end gap-5">
          <div className="overflow-hidden rounded-[32px] border-[6px] border-white shadow-xl">
            <Image src={FotoAntiga} alt="Foto antiga da APAE Joinville" sizes="(min-width: 1024px) 320px, 55vw" className="block h-auto w-full grayscale-[30%]" />
          </div>
          <div className="mb-10 overflow-hidden rounded-[32px] border-[6px] border-white shadow-xl">
            <Image src={Fundadora} alt="Fundadora da APAE Joinville" sizes="(min-width: 1024px) 260px, 45vw" className="block h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
