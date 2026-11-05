"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ApaeLogo from "@/assets/apae_logo.png";
import { HeartIcon } from "@/components/ui/Icons";
import { navItems } from "@/utils/siteConfig";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string, children?: { href: string }[]) =>
    pathname === href || pathname.startsWith(`${href}/`) || !!children?.some((child) => pathname === child.href);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-apae flex items-center justify-between gap-6 px-6 py-1.5">
        <Link href="/" className="flex items-center no-underline" aria-label="APAE de Joinville — página inicial">
          <Image src={ApaeLogo} alt="" className="block h-[72px] w-auto lg:h-[88px]" priority />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-1 text-[15px] font-bold lg:flex" aria-label="Principal">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <button
                  type="button"
                  className={`flex cursor-pointer items-center gap-1.5 rounded-full border-0 bg-transparent px-4 py-2.5 font-bold transition-colors hover:bg-brand-light ${
                    isActive(item.href, item.children) ? "text-brand-dark" : "text-ink"
                  }`}
                  aria-haspopup="true"
                >
                  {item.name}
                  <svg viewBox="0 0 12 12" className="h-3 w-3 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">
                    <path d="m2 4 4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </button>
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="flex min-w-[250px] flex-col rounded-2xl border border-line bg-white p-2 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`rounded-xl px-4 py-3 no-underline transition-colors hover:bg-brand-light ${
                          pathname === child.href ? "text-brand-dark" : "text-ink"
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 no-underline transition-colors hover:bg-brand-light ${
                  isActive(item.href) ? "text-brand-dark" : "text-ink"
                }`}
              >
                {item.name}
              </Link>
            )
          )}
          <Link
            href="/doe-agora"
            className="ml-3 flex items-center gap-2 rounded-full bg-sun px-6 py-3 font-extrabold text-ink no-underline transition-colors hover:bg-sun-dark"
          >
            <HeartIcon className="h-5 w-5" />
            Doe agora
          </Link>
        </nav>

        {/* Mobile button */}
        <button
          type="button"
          onClick={() => setShowMenu(!showMenu)}
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white lg:hidden"
          aria-label="Menu"
          aria-expanded={showMenu}
        >
          <span className="relative block h-4 w-6">
            <span className={`absolute left-0 h-[3px] w-6 rounded bg-brand transition-all duration-300 ${showMenu ? "top-[7px] rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-[7px] h-[3px] w-6 rounded bg-brand transition-opacity duration-300 ${showMenu ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 h-[3px] w-6 rounded bg-brand transition-all duration-300 ${showMenu ? "top-[7px] -rotate-45" : "top-[14px]"}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`absolute left-0 right-0 top-full max-h-[calc(100vh-90px)] overflow-y-auto border-b border-line bg-white shadow-lg transition-all duration-300 lg:hidden ${
          showMenu ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 text-[16px] font-bold" aria-label="Principal">
          {navItems.map((item) => (
            <div key={item.href} className="border-b border-line">
              {item.children ? (
                <>
                  <span className="block pb-1 pt-4 text-[12px] uppercase tracking-[0.12em] text-muted-2">{item.name}</span>
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setShowMenu(false)}
                      className={`block py-2.5 pl-3 no-underline ${pathname === child.href ? "text-brand-dark" : "text-ink"}`}
                    >
                      {child.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => setShowMenu(false)}
                  className={`block py-3.5 no-underline ${isActive(item.href) ? "text-brand-dark" : "text-ink"}`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/doe-agora"
            onClick={() => setShowMenu(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-sun px-6 py-3.5 font-extrabold text-ink no-underline"
          >
            <HeartIcon className="h-5 w-5" />
            Doe agora
          </Link>
        </nav>
      </div>
    </header>
  );
}
