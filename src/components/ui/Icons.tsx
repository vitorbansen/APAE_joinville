import type { SocialName } from "@/utils/siteConfig";

interface IIcon {
  className?: string;
}

const strokeProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function InstagramIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V9H7v3.5h2V21h3.5v-8.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z" />
    </svg>
  );
}

export function WhatsappIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2z" />
    </svg>
  );
}

export function YoutubeIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="2.5" y="5" width="19" height="14" rx="4" />
      <path d="m10 9 5 3-5 3z" fill="currentColor" />
    </svg>
  );
}

export function PhoneIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M5 3.5h3.5l1.5 4.5-2.2 1.4a11 11 0 0 0 4.8 4.8L14 12l4.5 1.5V17a2.5 2.5 0 0 1-2.7 2.5A15.5 15.5 0 0 1 2.5 6.2 2.5 2.5 0 0 1 5 3.5z" />
    </svg>
  );
}

export function MailIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function PinIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function FileIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </svg>
  );
}

export function DownloadIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 4v11m0 0-4.5-4.5M12 15l4.5-4.5M5 19.5h14" />
    </svg>
  );
}

export function HeartIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20z" />
    </svg>
  );
}

export function ArrowIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export function CalendarIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <rect x="3.5" y="5" width="17" height="15" rx="3" />
      <path d="M3.5 10h17M8 3v4m8-4v4" />
    </svg>
  );
}

export function ClockIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CheckIcon({ className = "h-5 w-5" }: IIcon) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...strokeProps}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function SocialIcon({ name, className }: IIcon & { name: SocialName }) {
  const icons = { Instagram: InstagramIcon, Facebook: FacebookIcon, WhatsApp: WhatsappIcon, YouTube: YoutubeIcon };
  const Icon = icons[name];
  return <Icon className={className} />;
}
