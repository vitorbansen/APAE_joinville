import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";

export default function NotFound() {
  return (
    <section className="px-6 py-[140px]">
      <div className="container-apae flex max-w-[640px] flex-col items-center gap-6 text-center">
        <span className="font-display text-[96px] font-semibold leading-none text-sun">404</span>
        <h1 className="title-h2">Página não encontrada</h1>
        <p className="prose-apae m-0">O endereço acessado não existe ou foi movido.</p>
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full bg-brand px-7 py-4 font-extrabold text-white no-underline transition-colors hover:bg-brand-dark"
        >
          Voltar para o início
          <ArrowIcon />
        </Link>
      </div>
    </section>
  );
}
