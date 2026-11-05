import Link from "next/link";
import SectionTag from "@/components/ui/SectionTag";

interface IPageHeader {
  tag: string;
  title: string;
  description?: string;
  breadcrumb?: { name: string; href: string }[];
}

// Faixa de título das páginas internas
export default function PageHeader({ tag, title, description, breadcrumb = [] }: IPageHeader) {
  return (
    <section className="relative overflow-hidden bg-brand-deep px-6 pb-20 pt-16 text-white">
      {/* Círculos decorativos */}
      <div className="pointer-events-none absolute -right-24 -top-28 h-[380px] w-[380px] rounded-full border-[28px] border-sun/90" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-4 top-44 h-[150px] w-[150px] rounded-full bg-brand" aria-hidden="true" />

      <div className="container-apae relative flex flex-col gap-6">
        <nav aria-label="Você está em" className="animatedElementLeft flex flex-wrap items-center gap-2 text-[14px] text-mist">
          <Link href="/" className="text-mist no-underline hover:text-sun">
            Início
          </Link>
          {[...breadcrumb, { name: title, href: "" }].map((item) => (
            <span key={item.name} className="flex items-center gap-2">
              <span aria-hidden="true">/</span>
              {item.href ? (
                <Link href={item.href} className="text-mist no-underline hover:text-sun">
                  {item.name}
                </Link>
              ) : (
                <span aria-current="page" className="font-bold text-white">
                  {item.name}
                </span>
              )}
            </span>
          ))}
        </nav>
        <div className="animatedElementLeft">
          <SectionTag label={tag} light />
        </div>
        <h1
          className="animatedElementLeft m-0 max-w-[820px] font-display font-semibold leading-[1.05]"
          style={{ fontSize: "clamp(38px, 5.5vw, 64px)", textWrap: "balance" }}
        >
          {title}
        </h1>
        {description && (
          <p className="animatedElementLeft m-0 max-w-[640px] text-[19px] leading-[1.6] text-mist" style={{ textWrap: "pretty" }}>
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
