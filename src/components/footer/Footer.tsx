import Image from "next/image";
import Link from "next/link";
import ApaeLogo from "@/assets/apae_logo.png";
import NewsletterForm from "@/components/footer/NewsletterForm";
import { MailIcon, PhoneIcon, PinIcon, SocialIcon } from "@/components/ui/Icons";
import { Petals } from "@/components/ui/SectionTag";
import { addresses, siteConfig, sitemapLinks, socialLinks } from "@/utils/siteConfig";

const columnTitle = "m-0 font-display text-[19px] font-semibold text-white";

export default function Footer() {
  return (
    <footer className="bg-brand-deep px-6 pb-8 pt-[72px] text-mist">
      <div className="container-apae flex flex-col gap-12">
        <div className="grid gap-12" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(min(230px, 100%), 1fr))" }}>
          <div className="flex flex-col gap-5">
            <div className="self-start rounded-[28px] bg-white p-3">
              <Image src={ApaeLogo} alt="APAE de Joinville" className="h-[96px] w-auto" />
            </div>
            <p className="m-0 text-[15px] leading-[1.65]">{siteConfig.about}</p>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-sun hover:text-ink"
                >
                  <SocialIcon name={social.name} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className={columnTitle}>Mapa do site</h2>
            <ul className="m-0 grid list-none grid-cols-1 gap-2.5 p-0 text-[15px]">
              {sitemapLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-mist no-underline transition-colors hover:text-sun">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4 text-[15px]">
            <h2 className={columnTitle}>Contato</h2>
            <a href={siteConfig.phoneHref} className="flex items-center gap-3 text-mist no-underline hover:text-sun">
              <PhoneIcon className="h-5 w-5 shrink-0 text-sun" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 break-all text-mist no-underline hover:text-sun">
              <MailIcon className="h-5 w-5 shrink-0 text-sun" />
              {siteConfig.email}
            </a>
            {addresses.map((address) => (
              <div key={address.name} className="flex gap-3">
                <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-sun" />
                <span className="leading-[1.55]">
                  <strong className="text-white">{address.name}</strong>
                  <br />
                  {address.street}
                  <br />
                  {address.city} · CEP {address.cep}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h2 className={columnTitle}>Newsletter</h2>
            <p className="m-0 text-[15px] leading-[1.6]">Receba as novidades da APAE de Joinville no seu e-mail.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-7 text-[13px]">
          <span>
            © {siteConfig.year} Todos os direitos reservados para APAE Joinville · CNPJ {siteConfig.cnpj}
          </span>
          <Petals />
        </div>
      </div>
    </footer>
  );
}
