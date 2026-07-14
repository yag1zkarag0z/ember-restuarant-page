import Link from "next/link";
import Brand from "@/components/Brand";
import { siteConfig } from "@/lib/site";

export default function Footer({ locale = "en" }: { locale?: "en" | "tr" }) {
  const isTurkish = locale === "tr";
  return (
    <footer className="bg-[#150d12] px-5 pb-8 pt-16 text-[#f8eadf] sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] gap-12 border-b border-white/15 pb-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Brand href={isTurkish ? "/tr" : "/"} />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">{isTurkish ? "Ateş, mevsim ve günün son ışığıyla şekillenen modern Akdeniz restoranı." : siteConfig.description}</p>
          <div className="mt-7 flex gap-5 text-xs uppercase tracking-[0.16em]"><Link href={isTurkish ? "/tr/story" : "/story"}>{isTurkish ? "Hikâye" : "Story"}</Link><Link href={isTurkish ? "/tr/gallery" : "/gallery"}>{isTurkish ? "Galeri" : "Gallery"}</Link><Link href={isTurkish ? "/tr/private-dining" : "/private-dining"}>{isTurkish ? "Davetler" : "Events"}</Link></div>
        </div>
        <div className="text-sm leading-8 text-white/65"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff9a62]">{isTurkish ? "Bizi bulun" : "Find us"}</p><p>{siteConfig.streetAddress}</p><p>Karaköy, Istanbul</p><a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-white">{siteConfig.phone}</a><br /><a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-white">{siteConfig.email}</a></div>
        <div className="text-sm leading-8 text-white/65"><p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff9a62]">{isTurkish ? "Saatler" : "Hours"}</p><p>{isTurkish ? "Sal–Per" : "Tue–Thu"} · 18:00–23:30</p><p>{isTurkish ? "Cum–Cmt" : "Fri–Sat"} · 18:00–00:30</p><p>{isTurkish ? "Pazar" : "Sunday"} · 17:00–23:00</p></div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><p>© 2026 Ember Restaurant. {isTurkish ? "Konsept proje." : "Concept project."}</p><div className="flex flex-wrap gap-5"><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="hover:text-orange-400">Instagram</a>
      <Link href={isTurkish ? "/tr/privacy" : "/privacy"} className="hover:text-orange-400">{isTurkish ? "Gizlilik" : "Privacy"}</Link>
      <a href={siteConfig.creatorUrl} target="_blank" rel="noreferrer" className="text-orange-500 font-extrabold animate-pulse hover:text-orange-300">By Yagiz Karagoz</a></div></div>
    </footer>
  );
}
