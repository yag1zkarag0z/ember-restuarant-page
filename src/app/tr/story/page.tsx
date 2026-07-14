import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReservationButton from "@/components/ReservationButton";

export const metadata: Metadata = {
  title: "Hikâyemiz",
  description: "Ember'ın insanlarını, üreticilerini ve açık ateş felsefesini keşfedin.",
  alternates: { canonical: "/tr/story", languages: { "en-US": "/story", "tr-TR": "/tr/story" } },
};

export default function TurkishStoryPage() {
  return (
    <main id="main-content" lang="tr" className="bg-[#f7eadf] text-[#261419] page-enter">
      <Navbar />
      <section className="relative flex min-h-[78svh] items-end px-5 pb-16 pt-36 text-white sm:px-8 lg:px-12">
        <Image src="/images/chef-at-work.jpg" alt="Ember şefinin mevsimlik bir tabağı hazırlaması" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b0b12] via-[#1b0b12]/35 to-[#1b0b12]/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px]"><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffb37b]">Hikâyemiz</p><h1 className="mt-6 max-w-5xl font-serif text-[clamp(4.2rem,10vw,9rem)] leading-[0.76] tracking-[-0.05em]">Mevsimin yön verdiği<br /><span className="italic text-[#ff9a62]">bir mutfak.</span></h1></div>
      </section>
      <section className="mx-auto grid max-w-[1200px] gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:py-36">
        <p className="section-label">Şef Deniz Aral</p>
        <div><p className="font-serif text-4xl leading-[1.05] sm:text-6xl">“Ateş bir lezzet değil, malzemeyi dinlemenin bir yoludur.”</p><div className="mt-10 grid gap-7 text-sm leading-8 text-[#6f5555] sm:grid-cols-2"><p>İstanbul ile Ege kıyıları arasında büyüyen Deniz; pazarlardan, balıkçı köylerinden ve uzun aile sofralarından öğrendi. Ember bu anıları çağdaş bir yemek salonuna taşıyor.</p><p>Menü tekneler, tarlalar ve bahçelerle birlikte değişiyor. Her tabak bir üreticiyle başlıyor, son karakterini ateşte buluyor.</p></div></div>
      </section>
      <section className="grid bg-[#201218] text-white lg:grid-cols-2">
        <div className="relative min-h-[38rem]"><Image src="/images/terrace-sea.jpg" alt="Denize bakan Akdeniz terası" fill sizes="50vw" className="object-cover" /></div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-20"><div><p className="section-label text-[#ff9a62]">Sözümüz</p><h2 className="mt-6 font-serif text-6xl leading-[0.9] sm:text-7xl">Kaynağa yakın.</h2><ul className="mt-9 divide-y divide-white/15 text-sm text-white/60">{["Küçük Ege teknelerinden günlük deniz ürünleri", "150 kilometre içinden tedarik edilen sebzeler", "Bütün hayvan kullanımı ve düşük atıklı mutfak", "Bağımsız üreticilere odaklanan şarap mahzeni"].map((item) => <li key={item} className="py-5">{item}</li>)}</ul><ReservationButton className="mt-10 rounded-full bg-[#ff8652] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#261419]">Akşam yemeğine katılın ↗</ReservationButton></div></div>
      </section>
      <Footer locale="tr" />
    </main>
  );
}
