import { PhoneIcon, SocialIcon, WhatsappIcon } from "@/components/ui/Icons";
import { siteConfig, socialLinks } from "@/utils/siteConfig";

export default function TopBar() {
  return (
    <div className="bg-brand-deep text-[13px] text-mist">
      <div className="container-apae flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-2">
        <div className="flex flex-wrap gap-x-6 gap-y-1">
          <a href={siteConfig.phoneHref} className="flex items-center gap-2 text-mist no-underline hover:text-sun">
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <a
            href={siteConfig.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-mist no-underline hover:text-sun"
          >
            <WhatsappIcon className="h-4 w-4" />
            {siteConfig.whatsapp}
          </a>
        </div>
        <div className="hidden items-center gap-1 sm:flex">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="flex h-8 w-8 items-center justify-center rounded-full text-mist transition-colors hover:bg-white/10 hover:text-sun"
            >
              <SocialIcon name={social.name} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
