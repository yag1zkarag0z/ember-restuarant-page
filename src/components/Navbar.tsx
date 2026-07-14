"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Brand from "@/components/Brand";
import ReservationButton from "@/components/ReservationButton";

const englishLinks = [
  ["Story", "/story"],
  ["Menu", "/menu"],
  ["Gallery", "/gallery"],
  ["Private dining", "/private-dining"],
  ["Visit", "/#visit"],
] as const;

const turkishLinks = [
  ["Hikâyemiz", "/tr/story"],
  ["Menü", "/tr/menu"],
  ["Galeri", "/tr/gallery"],
  ["Özel davetler", "/tr/private-dining"],
  ["Konum", "/tr#konum"],
] as const;

const localePairs: Record<string, string> = {
  "/": "/tr",
  "/story": "/tr/story",
  "/menu": "/tr/menu",
  "/gallery": "/tr/gallery",
  "/private-dining": "/tr/private-dining",
  "/privacy": "/tr/privacy",
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isTurkish = pathname.startsWith("/tr");
  const links = isTurkish ? turkishLinks : englishLinks;
  const alternatePath = isTurkish
    ? pathname.replace(/^\/tr/, "") || "/"
    : localePairs[pathname] ?? "/tr";

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] border-b border-white/15 bg-[#160c11]/90 text-white shadow-[0_8px_30px_rgba(18,9,14,0.18)] backdrop-blur-xl lg:absolute lg:z-50 lg:bg-transparent lg:shadow-none lg:backdrop-blur-none">
        <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-24 sm:px-8 lg:px-12">
        <Brand href={isTurkish ? "/tr" : "/"} />

        <div className="hidden items-center gap-7 text-[0.68rem] font-semibold uppercase tracking-[0.16em] lg:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition-colors hover:text-[#ffb37b]">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={alternatePath}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/30 text-[0.62rem] font-bold tracking-[0.12em] transition-colors hover:bg-white hover:text-[#241319]"
            aria-label={isTurkish ? "Switch to English" : "Türkçeye geç"}
          >
            {isTurkish ? "EN" : "TR"}
          </Link>
          <ReservationButton className="hidden rounded-full border border-white/45 px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] transition-colors hover:border-[#ffb37b] hover:bg-[#ffb37b] hover:text-[#241319] md:block">
            {isTurkish ? "Rezervasyon" : "Reserve"}
          </ReservationButton>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#ffb37b] bg-[#ff8652] text-[#261419] shadow-[0_6px_20px_rgba(255,134,82,0.3)] transition-transform hover:scale-105 lg:hidden"
            aria-label={isTurkish ? "Menüyü aç" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="space-y-1.5" aria-hidden="true">
              <span className="block h-0.5 w-5 bg-current" />
              <span className="block h-0.5 w-5 bg-current" />
            </span>
          </button>
        </div>
        </nav>
      </header>

      {isOpen && (
        <div
          className="fixed inset-0 z-[120] bg-[#12090e]/65 backdrop-blur-sm"
          role="presentation"
          onMouseDown={() => setIsOpen(false)}
        >
          <div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={isTurkish ? "Mobil navigasyon" : "Mobile navigation"}
            className="ml-auto flex h-dvh w-[min(88vw,26rem)] flex-col overflow-y-auto overscroll-contain border-l border-white/10 bg-[#160c11] px-5 py-5 text-white shadow-2xl sm:px-7"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4">
              <Brand href={isTurkish ? "/tr" : "/"} />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/25 text-2xl transition-colors hover:bg-white/10"
                aria-label={isTurkish ? "Menüyü kapat" : "Close menu"}
              >
                ×
              </button>
            </div>

            <nav className="my-auto py-10" aria-label={isTurkish ? "Ana navigasyon" : "Main navigation"}>
              {links.map(([label, href], index) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center border-b border-white/10 py-4"
                >
                  <span className="mr-4 w-5 shrink-0 font-sans text-[0.58rem] font-bold text-[#ff9a62]">0{index + 1}</span>
                  <span className="font-serif text-[clamp(1.9rem,8vw,2.7rem)] leading-none transition-colors group-hover:text-[#ff9a62]">
                    {label}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="border-t border-white/15 pt-5">
              <ReservationButton className="w-full rounded-full bg-[#ff8652] px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#261419]">
                {isTurkish ? "Masa ayırt" : "Book now"}
              </ReservationButton>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
