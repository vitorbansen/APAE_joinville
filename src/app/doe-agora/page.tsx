import type { Metadata } from "next";
import Image from "next/image";
import PixQrCode from "@/assets/pix_qrcode.png";
import CopyButton from "@/components/ui/CopyButton";
import { HeartIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import SectionTag from "@/components/ui/SectionTag";
import { donation, missionTexts } from "@/utils/content";
import { siteConfig } from "@/utils/siteConfig";

export const metadata: Metadata = { title: "Doe Agora!" };

export default function DoeAgoraPage() {
  return (
    <>
      <PageHeader tag="Doar faz bem para o coração" title="Doe Agora!" description={siteConfig.about} />

      <section className="px-6 py-[100px]">
        <div className="container-apae grid items-start gap-14 lg:grid-cols-[1fr_440px]">
          <div className="animatedSide flex flex-col gap-6">
            <SectionTag label="Por que doar" />
            <h2 className="title-h2">Sua doação mantém e amplia os atendimentos</h2>
            {missionTexts.map((text) => (
              <p key={text} className="prose-apae m-0">
                {text}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-6 lg:sticky lg:top-32">
            <div className="animatedSide flex flex-col items-center gap-5 rounded-[36px] bg-sun p-8 text-center">
              <span className="flex items-center gap-2 font-display text-[28px] font-semibold text-ink">
                <HeartIcon className="h-7 w-7" />
                Nosso PIX
              </span>
              <div className="rounded-[24px] bg-white p-4">
                <Image src={PixQrCode} alt="QR Code PIX da APAE de Joinville" className="block h-[220px] w-[220px]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[14px] font-extrabold uppercase tracking-[0.1em] text-ink/70">
                  Chave {donation.pixKeyType}
                </span>
                <span className="font-display text-[26px] font-semibold text-ink">{donation.pixKey}</span>
              </div>
              <CopyButton value={donation.pixKey} label="Copiar chave PIX" />
            </div>

            <div className="animatedSide flex flex-col gap-4 rounded-[36px] bg-brand-deep p-8 text-white">
              <span className="font-display text-[24px] font-semibold">Conta no {donation.bank}</span>
              <dl className="m-0 grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 rounded-2xl bg-white/10 p-4">
                  <dt className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-mist">Agência</dt>
                  <dd className="m-0 font-display text-[24px] font-semibold">{donation.agency}</dd>
                </div>
                <div className="flex flex-col gap-1 rounded-2xl bg-white/10 p-4">
                  <dt className="text-[13px] font-extrabold uppercase tracking-[0.1em] text-mist">Conta corrente</dt>
                  <dd className="m-0 font-display text-[24px] font-semibold">{donation.account}</dd>
                </div>
              </dl>
              <span className="text-[14px] text-mist">
                {siteConfig.fullName} · CNPJ {siteConfig.cnpj}
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
