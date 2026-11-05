import type { Metadata } from "next";
import Image from "next/image";
import SedeBoaVista from "@/assets/contato/sede_boa_vista.png";
import CentroDia from "@/assets/contato/centro_dia.png";
import { ArrowIcon, MailIcon, PhoneIcon, PinIcon, WhatsappIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import SectionTag from "@/components/ui/SectionTag";
import { departmentEmails, donation } from "@/utils/content";
import { addresses, siteConfig } from "@/utils/siteConfig";

export const metadata: Metadata = { title: "Contato" };

const addressImages = [SedeBoaVista, CentroDia];

const mapsLink = (address: (typeof addresses)[number]) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${address.street}, ${address.city}, ${address.cep}`)}`;

export default function ContatoPage() {
  return (
    <>
      <PageHeader tag="Fale com a APAE" title="Contato" />

      <section className="px-6 py-[100px]">
        <div className="container-apae flex flex-col gap-16">
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href={siteConfig.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="apae-card animatedSide flex items-center gap-5 rounded-[28px] border border-brand bg-brand p-7 text-white no-underline"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/15">
                <WhatsappIcon className="h-8 w-8" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-[15px] font-bold text-white/80">Recepção da APAE — WhatsApp</span>
                <span className="whitespace-nowrap font-display text-[24px] font-semibold sm:text-[28px]">{siteConfig.whatsapp}</span>
              </span>
            </a>
            <a
              href={siteConfig.phoneHref}
              className="apae-card animatedSide flex items-center gap-5 rounded-[28px] border border-sun bg-sun p-7 text-ink no-underline"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/50">
                <PhoneIcon className="h-8 w-8" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-[15px] font-bold text-ink/70">Telefone</span>
                <span className="whitespace-nowrap font-display text-[24px] font-semibold sm:text-[28px]">{siteConfig.phone}</span>
              </span>
            </a>
          </div>

          <div className="flex flex-col gap-8">
            <div className="animatedSide flex flex-col gap-4">
              <SectionTag label="E-mails" />
              <h2 className="title-h2">Fale com o setor certo</h2>
            </div>
            <ul className="m-0 grid list-none gap-4 p-0" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))" }}>
              {departmentEmails.map((item) => (
                <li key={item.email} className="animatedSide">
                  <a
                    href={`mailto:${item.email}`}
                    className="apae-card flex h-full items-center gap-4 rounded-[22px] border border-line bg-white p-5 text-ink no-underline"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-dark">
                      <MailIcon />
                    </span>
                    <span className="flex min-w-0 flex-col gap-0.5">
                      <span className="text-[15px] font-extrabold">{item.label}</span>
                      <span className="break-all text-[15px] text-muted">{item.email}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="animatedSide m-0 text-[16px] text-muted">
              Chave PIX ({donation.pixKeyType}): <strong className="text-ink">{donation.pixKey}</strong>
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <div className="animatedSide flex flex-col gap-4">
              <SectionTag label="Endereços" />
              <h2 className="title-h2">Onde estamos</h2>
            </div>
            <div className="grid gap-7 lg:grid-cols-2">
              {addresses.map((address, index) => (
                <div key={address.name} className="animatedSide flex flex-col overflow-hidden rounded-[32px] border border-line bg-white">
                  <Image
                    src={addressImages[index]}
                    alt={`Fachada — ${address.name}`}
                    sizes="(min-width: 1024px) 570px, 100vw"
                    className="block aspect-[2/1] h-auto w-full object-cover"
                  />
                  <div className="flex flex-col gap-4 p-7">
                    <h3 className="m-0 font-display text-[26px] font-medium">{address.name}</h3>
                    <p className="m-0 flex gap-3 text-[17px] leading-[1.6] text-muted">
                      <PinIcon className="mt-1 h-5 w-5 shrink-0 text-brand" />
                      <span>
                        {address.street}
                        <br />
                        {address.city} · CEP {address.cep}
                      </span>
                    </p>
                    <a
                      href={mapsLink(address)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 self-start rounded-full border-2 border-brand px-6 py-3 font-extrabold text-brand-dark no-underline transition-colors hover:bg-brand hover:text-white"
                    >
                      Como chegar
                      <ArrowIcon />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
