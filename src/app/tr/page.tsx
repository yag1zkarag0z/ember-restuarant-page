import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReservationButton from "@/components/ReservationButton";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "Ember | Modern Akdeniz Mutfağı", description: "İstanbul'da ateş, mevsim ve Ege ürünleriyle şekillenen modern Akdeniz restoranı.", alternates: { canonical: "/tr", languages: { "en-US": "/", "tr-TR": "/tr" } } };

const dishes = [
  { name: "Ember dana", detail: "füme patlıcan · konfi limon · kuzu jus", image: "/images/signature-beef.jpg" },
  { name: "Ege karidesi", detail: "köz biber · rezene · narenciye yağı", image: "/images/signature-seafood.jpg" },
  { name: "Gece kakaosu", detail: "vişne · yanık bal · kakao parçaları", image: "/images/signature-dessert.jpg" },
] as const;

export default function TurkishHomePage() {
  return (
    <main id="main-content" lang="tr" className="overflow-hidden bg-[#f7eadf] text-[#261419] page-enter">
      <Navbar />

      <section className="relative min-h-[100svh] bg-[#241319] text-white">
        <Image src="/images/hero-restaurant.jpg" alt="Ember'ın sıcak ve çağdaş yemek salonu" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,10,16,0.9)_0%,rgba(34,13,18,0.6)_48%,rgba(34,13,18,0.18)_100%)]" />
        <div className="sunset-glow absolute -bottom-36 -left-28 h-[30rem] w-[30rem] rounded-full opacity-80 blur-3xl" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] items-end px-5 pb-16 pt-36 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
          <div className="max-w-5xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.32em] text-[#ffc09a]">Modern Akdeniz · İstanbul</p>
            <h1 className="max-w-4xl font-serif text-[clamp(4.6rem,11vw,10.5rem)] font-medium leading-[0.73] tracking-[-0.055em]">Gün batımında<span className="block italic text-[#ff9a62]">başlayan akşamlar.</span></h1>
            <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
              <ReservationButton className="inline-flex w-fit items-center rounded-full bg-[#ff8a52] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#241319] transition-transform hover:-translate-y-1">Masa ayırt <span className="ml-4 text-lg">↗</span></ReservationButton>
              <p className="max-w-xs text-sm leading-6 text-white/60">Açık ateş, kıyı ürünleri ve mevsimin ritmiyle şekillenen bir akşam menüsü.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="relative px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div><p className="section-label">Felsefemiz</p><p className="mt-8 max-w-sm text-sm leading-7 text-[#6f5555]">Ember’da akşam güneşi takip eder. Ateşle pişirir, kıyıdan gelen ürünleri seçer ve her malzemeye kendi zamanını veririz.</p></div>
          <h2 className="font-serif text-[clamp(3.5rem,7vw,7rem)] leading-[0.9] tracking-[-0.045em]">Tanıdık tatlar,<span className="block italic text-[#c84f30]">yeni bir ışıkta.</span></h2>
        </div>
      </section>

      <section id="menu" className="bg-[#201218] px-5 py-24 text-[#f8eadf] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col gap-8 border-b border-white/15 pb-12 md:flex-row md:items-end md:justify-between">
            <div><p className="section-label text-[#ff9a62]">Akşam menüsünden</p><h2 className="mt-6 font-serif text-6xl leading-none tracking-[-0.04em] sm:text-7xl lg:text-8xl">Üç imza tabak.</h2></div>
            <Link href="/tr/menu" className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 hover:text-[#ff9a62]">Tüm menüyü keşfet ↗</Link>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {dishes.map((dish, index) => (
              <article key={dish.name} className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#3b2428]"><Image src={dish.image} alt={dish.name} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/20 text-xs backdrop-blur">0{index + 1}</span></div>
                <div className="border-b border-white/15 py-6"><div><h3 className="font-serif text-3xl">{dish.name}</h3><p className="mt-2 text-sm leading-6 text-white/45">{dish.detail}</p></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="grid bg-[#f7eadf] lg:min-h-[52rem] lg:grid-cols-2">
        <div className="relative min-h-[34rem] lg:min-h-full"><Image src="/images/chef-at-work.jpg" alt="Ember mutfağında mevsimlik tabak hazırlayan şef" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#2a1117]/45 to-transparent" /></div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-20">
          <div className="max-w-xl">
            <p className="section-label">Ateşin ardında</p><h2 className="mt-7 font-serif text-6xl leading-[0.9] tracking-[-0.045em] sm:text-7xl">Mevsim yön verir.<span className="block italic text-[#c84f30]">Ateş tamamlar.</span></h2>
            <p className="mt-8 text-base leading-8 text-[#6f5555]">Mutfağımız bugün en iyi olanla başlar. Yerel sebzeler; olta balıkları, dinlendirilmiş etler ve açık ocağın sessiz gösterisiyle buluşur.</p>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#261419]/15 pt-8"><div><strong className="font-serif text-4xl font-medium">12</strong><p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#7d5d5b]">Mevsimlik tabak</p></div><div><strong className="font-serif text-4xl font-medium">7</strong><p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#7d5d5b]">Yerel üretici</p></div></div>
          </div>
        </div>
      </section>

      <section className="bg-[#cc5434] p-3 sm:p-5">
        <div className="grid auto-rows-[18rem] gap-3 sm:grid-cols-2 sm:auto-rows-[28rem] lg:grid-cols-4">
          {[["/images/interior-red.jpg", "Ember'ın sıcak kırmızı yemek salonu"], ["/images/dish-salmon.jpg", "Mevsimlik somon tabağı"], ["/images/interior-evening.jpg", "Zarif akşam yemek salonu"], ["/images/terrace-sea.jpg", "Deniz kıyısındaki Akdeniz terası"]].map(([src, alt], index) => <div key={src} className={`group relative overflow-hidden ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}><Image src={src} alt={alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>)}
        </div>
      </section>

      <section className="grid bg-[#f7eadf] lg:grid-cols-2">
        <div className="relative min-h-[38rem] lg:min-h-[52rem]"><Image src="/images/dish-seasonal.jpg" alt="Ember'da mevsimlik tadım menüsü tabağı" fill sizes="(min-width:1024px) 50vw,100vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-[#261419]/35 to-transparent" /></div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-20">
          <div className="max-w-xl"><p className="section-label">Gün batımı tadımı</p><h2 className="mt-7 font-serif text-6xl leading-[0.88] tracking-[-0.045em] sm:text-8xl">Yedi an.<span className="block italic text-[#c84f30]">Tek bir akşam.</span></h2><p className="mt-8 text-sm leading-7 text-[#6f5555]">Kıyıdan, bahçeden ve açık ateşten geçen yedi tabaklık bir yolculuk. Tüm masa için sunulur.</p><div className="mt-10 divide-y divide-[#261419]/15 border-y border-[#261419]/15 text-sm"><div className="flex justify-between py-5"><span>Gün batımı tadım menüsü</span><strong>$95</strong></div><div className="flex justify-between py-5"><span>Şarap eşleşmesi</span><strong>$55</strong></div><div className="flex justify-between py-5"><span>Alkolsüz eşleşme</span><strong>$32</strong></div></div><Link href="/tr/menu" className="mt-8 inline-block border-b border-[#261419] pb-1 text-xs font-bold uppercase tracking-[0.18em]">Tüm menüyü incele ↗</Link></div>
        </div>
      </section>

      <section className="bg-[#201218] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><p className="section-label text-[#ff9a62]">Ember’da buluşun</p><div><h2 className="font-serif text-6xl leading-[0.88] tracking-[-0.045em] sm:text-8xl">Size özel akşamlar,<span className="block italic text-[#ff9a62]">kişisel dokunuşlarla.</span></h2><p className="mt-7 max-w-2xl text-sm leading-7 text-white/50">Şef masaları, özel kutlamalar ve davetinize göre hazırlanan menülerle tüm restoran etkinlikleri.</p></div></div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">{[["Şef masası", "10 kişi"], ["Özel salon", "24 kişi"], ["Tüm restoran", "80 kişi"]].map(([title, capacity], index) => <Link href="/tr/private-dining" key={title} className="group border border-white/15 p-7 transition-colors hover:bg-[#ff8652] hover:text-[#261419]"><span className="text-xs text-[#ff9a62] group-hover:text-[#261419]">0{index + 1}</span><h3 className="mt-20 font-serif text-4xl">{title}</h3><p className="mt-3 text-xs uppercase tracking-[0.18em] opacity-55">{capacity}ye kadar</p></Link>)}</div>
        </div>
      </section>

      <section className="bg-[#f7eadf] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1440px]"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-label">Akşamı takip edin</p><h2 className="mt-5 font-serif text-6xl leading-none sm:text-7xl">@ember.istanbul</h2></div><a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-xs font-bold uppercase tracking-[0.18em]">Instagram’da takip et ↗</a></div><div className="mt-10 grid h-[28rem] grid-cols-2 gap-3 sm:grid-cols-4">{[["/images/interior-red.jpg", "Yemek salonu"], ["/images/signature-seafood.jpg", "Ege karidesi"], ["/images/chef-at-work.jpg", "Mutfakta"], ["/images/signature-dessert.jpg", "Tatlı"]].map(([src, alt]) => <Link href="/tr/gallery" key={src} className="group relative overflow-hidden"><Image src={src} alt={alt} fill sizes="25vw" className="object-cover transition duration-700 group-hover:scale-105" /></Link>)}</div></div>
      </section>

      <section id="reserve" className="relative isolate overflow-hidden bg-[#ff8652] px-5 py-28 text-center text-[#261419] sm:px-8 lg:py-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,#ffd39e_0,transparent_30%),radial-gradient(circle_at_82%_75%,#bb2e38_0,transparent_38%)] opacity-80" />
        <p className="text-xs font-bold uppercase tracking-[0.3em]">Akşamınız burada başlıyor</p><h2 className="mx-auto mt-7 max-w-5xl font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.78] tracking-[-0.055em]">Altın saatte<span className="block italic text-[#6e1c2c]">buluşalım.</span></h2><ReservationButton className="mt-12 inline-flex rounded-full bg-[#211218] px-8 py-5 text-xs font-bold uppercase tracking-[0.22em] text-white transition-transform hover:-translate-y-1">Masa talep et ↗</ReservationButton>
      </section>

      <section id="konum" className="grid bg-[#f7eadf] lg:grid-cols-2">
        <div className="px-5 py-20 sm:px-12 lg:px-20 lg:py-28"><p className="section-label">Ember’ı ziyaret edin</p><h2 className="mt-7 max-w-xl font-serif text-6xl leading-[0.9] tracking-[-0.045em] sm:text-7xl">Boğaz’ın üzerinde bir akşam.</h2><p className="mt-8 text-base leading-8 text-[#6f5555]">42 Sunset Avenue, Karaköy, İstanbul<br />Salı–Pazar, 18:00’den itibaren</p><a href={siteConfig.mapsUrl} target="_blank" rel="noreferrer" className="mt-8 inline-block border-b border-[#261419] pb-1 text-xs font-bold uppercase tracking-[0.2em]">Haritalarda aç ↗</a></div>
        <div className="min-h-[30rem] bg-[#261419] p-3 sm:p-5"><iframe title="Ember restoranının Karaköy, İstanbul konumu" src={siteConfig.mapsEmbedUrl} className="h-full min-h-[30rem] w-full border-0 grayscale-[0.25]" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div>
      </section>

      <Footer locale="tr" />
    </main>
  );
}
