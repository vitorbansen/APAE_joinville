import Image from "next/image";
import Link from "next/link";
import AlunoMosaico from "@/assets/aluno_mosaico.jpg";
import { ArrowIcon, CheckIcon } from "@/components/ui/Icons";
import SectionTag from "@/components/ui/SectionTag";
import { publicPolicies, specialties } from "@/utils/content";

const policyColors = ["bg-sun text-ink", "bg-brand text-white", "bg-brand-deep text-white"];

export default function Services() {
  return (
    <section className="px-6 py-[100px]">
      <div className="container-apae grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="animatedSide relative mx-auto w-full max-w-[460px]">
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[200px_200px_40px_40px] bg-brand-light" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[200px_200px_40px_40px] border-[6px] border-white shadow-xl">
            <Image
              src={AlunoMosaico}
              alt="Aluno da APAE de Joinville montando um mosaico"
              sizes="(min-width: 1024px) 460px, 100vw"
              className="block h-auto w-full"
            />
          </div>
        </div>

        <div className="animatedSide flex flex-col gap-7">
          <SectionTag label="O que fazemos" />
          <h2 className="title-h2">Atendimento nas três políticas públicas</h2>
          <p className="prose-apae m-0">
            Serviços prestados nas três Políticas Públicas — Assistência Social, Saúde e Educação — contribuindo de forma
            planejada e contínua para a melhoria da qualidade de vida da pessoa com deficiência e suas famílias.
          </p>
          <div className="flex flex-wrap gap-3">
            {publicPolicies.map((policy, index) => (
              <span key={policy} className={`rounded-full px-6 py-3 font-display text-[18px] font-medium ${policyColors[index]}`}>
                {policy}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 rounded-[28px] border border-line bg-white p-7">
            <h3 className="m-0 text-[17px] font-extrabold">Atendimentos nas mais diversas especialidades</h3>
            <ul className="m-0 grid list-none gap-x-6 gap-y-2.5 p-0 sm:grid-cols-2">
              {specialties.map((specialty) => (
                <li key={specialty} className="flex items-center gap-2.5 text-[16px] text-muted">
                  <CheckIcon className="h-5 w-5 shrink-0 text-brand" />
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/sobre"
            className="flex items-center gap-2 self-start font-extrabold text-brand-dark no-underline hover:underline"
          >
            Conheça a instituição
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
