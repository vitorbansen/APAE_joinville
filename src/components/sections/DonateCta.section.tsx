import Link from "next/link";
import { HeartIcon } from "@/components/ui/Icons";
import { donation } from "@/utils/content";

export default function DonateCta() {
  return (
    <section className="px-6 pb-[100px]">
      <div className="animatedSide container-apae relative overflow-hidden rounded-[40px] bg-sun px-8 py-14 sm:px-14">
        <div className="pointer-events-none absolute -right-20 -top-24 h-[300px] w-[300px] rounded-full border-[26px] border-white/40" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-28 right-40 h-[200px] w-[200px] rounded-full bg-brand/15" aria-hidden="true" />
        <div className="relative flex flex-wrap items-center justify-between gap-10">
          <div className="flex max-w-[620px] flex-col gap-4">
            <h2 className="title-h2 text-ink">Doar faz bem para o coração</h2>
            <p className="m-0 text-[18px] leading-[1.65] text-ink/80">
              As doações e campanhas beneficiam diretamente a família apaeana, bem como possibilitam a melhoria nos
              atendimentos.
            </p>
            <p className="m-0 text-[16px] font-bold text-ink">
              Chave PIX ({donation.pixKeyType}): <span className="font-extrabold">{donation.pixKey}</span>
            </p>
          </div>
          <Link
            href="/doe-agora"
            className="flex items-center gap-2 rounded-full bg-ink px-8 py-[18px] text-[17px] font-extrabold text-white no-underline transition-colors hover:bg-brand-deep"
          >
            <HeartIcon />
            Quero doar
          </Link>
        </div>
      </div>
    </section>
  );
}
