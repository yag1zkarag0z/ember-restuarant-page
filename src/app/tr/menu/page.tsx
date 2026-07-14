import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import Navbar from "@/components/Navbar";
import ReservationButton from "@/components/ReservationButton";

export const metadata: Metadata = {
  title: "Yemek ve İçecek Menüsü",
  description: "Ember'ın mevsimlik yemek, kokteyl, şarap ve alkolsüz içecek menüsü.",
  alternates: { canonical: "/tr/menu", languages: { "en-US": "/menu", "tr-TR": "/tr/menu" } },
};

const menuGroups = [
  {
    id: "yemek",
    eyebrow: "Mutfaktan",
    title: "Yemek menüsü",
    description: "Mevsimin ürünleriyle hazırlanan ve açık ateşte son dokunuşunu bulan modern Akdeniz tabakları.",
    sections: [
      { id: "baslangiclar", title: "Başlangıçlar ve küçük tabaklar", items: [["Ember ekşi mayalı ekmek", "füme tereyağı · kekik tuzu", "$8"], ["Çiğ Ege levreği", "yeşil badem · narenciye · yabani rezene", "$18"], ["Ateşte pancar", "vişne · koyun yoğurdu · dereotu", "$14"], ["Köz ahtapot", "beyaz fasulye · konfi limon · paprika yağı", "$19"]] },
      { id: "salatalar", title: "Salatalar ve bahçe", items: [["Gün batımı domatesi", "Ezine peyniri · fesleğen · sumak", "$15"], ["Köz yeşillikler", "badem · limon · yıllanmış sirke", "$14"], ["Ege otları", "salatalık · yeşil zeytin · narenciye", "$13"]] },
      { id: "makarna", title: "Makarna ve tahıllar", items: [["Istakozlu arpa şehriye", "domates · kabuklu deniz ürünü tereyağı · tarhun", "$28"], ["Yabani mantarlı mantı", "kahverengi tereyağı · adaçayı · fındık", "$23"], ["Safranlı risotto", "enginar · yıllanmış peynir · limon", "$24"]] },
      { id: "deniz", title: "Deniz ürünleri", items: [["Ege karidesi", "köz biber · rezene · narenciye yağı", "$29"], ["Olta levreği", "sote yeşillik · midye suyu · safran", "$36"], ["Izgara somon", "ıspanak · salatalık · füme domates", "$32"], ["Istakoz", "otlar · ızgara limon · zeytinyağı", "$94"]] },
      { id: "et", title: "Et ve ateş", items: [["Ember dana", "füme patlıcan · konfi limon · kuzu jus", "$42"], ["Dry-aged ribeye", "köz soğan · biber jus", "$54"], ["Kuzu omuz", "kayısı · firik · biberiye", "$38"], ["Ateşte tavuk", "harissa · yanık yoğurt · otlar", "$27"]] },
      { id: "vejetaryen", title: "Vejetaryen", items: [["Köz kereviz", "fındık · siyah sarımsak · adaçayı", "$24"], ["Füme patlıcan", "nohut · tahin · nar", "$22"], ["Izgara enginar", "beyaz fasulye · kapari · dereotu", "$25"]] },
      { id: "tatlilar", title: "Tatlılar", items: [["Gece kakaosu", "vişne · yanık bal · kakao parçaları", "$14"], ["Yanık süt", "incir yaprağı · zeytinyağı · deniz tuzu", "$12"], ["Gün batımı narenciyesi", "mandalina · yoğurt · portakal çiçeği", "$13"], ["Anadolu peynirleri", "mevsim reçeli · ızgara ekmek", "$16"]] },
    ],
  },
  {
    id: "icecek",
    eyebrow: "Bardan",
    title: "İçecek menüsü",
    description: "Gün batımı kokteylleri, kıyı şarapları ve özenli alkolsüz seçenekler.",
    sections: [
      { id: "kokteyller", title: "İmza kokteyller", items: [["Last Light", "gin · mandalina · bergamot · tonik", "$17"], ["Ember Negroni", "incirli gin · vermut · bitter portakal", "$18"], ["Bosphorus Highball", "rakı · salatalık · nane · soda", "$16"], ["Golden Hour", "tekila · kayısı · lime · acı biber", "$17"], ["Midnight Sour", "bourbon · vişne · limon · köpük", "$18"]] },
      { id: "kadeh-sarap", title: "Kadeh şarap", items: [["Emir", "Kapadokya · canlı beyaz", "$12"], ["Narince", "Tokat · dokulu beyaz", "$14"], ["Kalecik Karası", "Ankara · hafif kırmızı", "$15"], ["Öküzgözü", "Elazığ · gövdeli kırmızı", "$16"], ["Provence rosé", "Fransa · sek roze", "$14"]] },
      { id: "sise-sarap", title: "Şişe şarap", items: [["Emir Reserve", "Kapadokya · 2024", "$48"], ["Narince Barrel Selection", "Tokat · 2023", "$62"], ["Kalecik Karası Reserve", "Ankara · 2022", "$68"], ["Ege Cabernet kupajı", "İzmir · 2021", "$76"], ["Champagne Brut", "Fransa · NV", "$120"]] },
      { id: "bira", title: "Bira ve cider", items: [["Yerel pilsner", "330 ml", "$8"], ["Ege buğday birası", "330 ml", "$9"], ["Craft IPA", "330 ml", "$10"], ["Sek elma cider", "330 ml", "$9"]] },
      { id: "distile", title: "Distile içkiler", items: [["Yeni Rakı", "4 cl", "$11"], ["Premium gin", "4 cl", "$13"], ["Single malt whisky", "4 cl", "$16"], ["Small-batch bourbon", "4 cl", "$14"], ["Yıllanmış rom", "4 cl", "$14"]] },
      { id: "alkolsuz", title: "Alkolsüz içecekler", items: [["Ev yapımı narenciye sodası", "mandalina · limon · soda", "$7"], ["Nar serinliği", "nar · lime · nane", "$8"], ["Ev yapımı limonata", "klasik veya zencefilli", "$7"], ["Kola / Kola Zero", "200 ml", "$5"], ["Tonik / Ginger ale", "200 ml", "$5"]] },
      { id: "kahve-cay", title: "Kahve ve çay", items: [["Türk kahvesi", "geleneksel bakır cezve", "$5"], ["Espresso", "single origin", "$4"], ["Americano", "sıcak veya soğuk", "$5"], ["Flat white", "double espresso · süt", "$6"], ["Yaprak çay", "siyah · yeşil · bitki", "$6"]] },
      { id: "su", title: "Su", items: [["Durgun su", "330 ml / 750 ml", "$4 / $7"], ["Maden suyu", "330 ml / 750 ml", "$4 / $7"]] },
    ],
  },
] as const;

const menuLinks = menuGroups.flatMap((group) => group.sections.map((section) => ({ id: section.id, title: section.title })));

export default function TurkishMenuPage() {
  return (
    <main id="main-content" lang="tr" className="bg-[#f7eadf] text-[#261419] page-enter">
      <Navbar />

      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-[#201218] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 lg:px-12">
        <Image src="/images/interior-red.jpg" alt="Ember'ın sıcak akşam atmosferi" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,10,16,0.92),rgba(41,13,18,0.48),rgba(41,13,18,0.2))]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffb37b]">Yemek · Şarap · Kokteyl</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(4.8rem,11vw,10rem)] leading-[0.74] tracking-[-0.055em]">Tüm<span className="block italic text-[#ff9a62]">menü.</span></h1>
        </div>
      </section>

      <MenuCategoryNav links={menuLinks} label="Menü kategorileri" selectLabel="Kategori seçin" />

      {menuGroups.map((group, groupIndex) => (
        <section key={group.id} id={group.id} className={groupIndex === 1 ? "bg-[#201218] text-[#f7eadf]" : "bg-[#f7eadf]"}>
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
            <div className={`grid gap-10 border-b pb-16 lg:grid-cols-[0.7fr_1.3fr] ${groupIndex === 1 ? "border-white/15" : "border-[#261419]/20"}`}>
              <p className={`section-label ${groupIndex ? "text-[#ff9a62]" : ""}`}>{group.eyebrow}</p>
              <div><h2 className="font-serif text-6xl leading-none sm:text-8xl">{group.title}</h2><p className={`mt-6 max-w-2xl text-sm leading-7 ${groupIndex ? "text-white/50" : "text-[#7d5d5b]"}`}>{group.description}</p></div>
            </div>
            <div className="mt-16 grid gap-x-16 gap-y-20 lg:grid-cols-2">
              {group.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h3 className={`border-b pb-5 font-serif text-4xl leading-none sm:text-5xl ${groupIndex ? "border-white/15" : "border-[#261419]/20"}`}>{section.title}</h3>
                  <div className={`divide-y ${groupIndex ? "divide-white/10" : "divide-[#261419]/12"}`}>
                    {section.items.map(([name, detail, price]) => (
                      <article key={name} className="py-5">
                        <div className="flex items-baseline justify-between gap-5"><h4 className="font-serif text-2xl leading-tight sm:text-3xl">{name}</h4><span className={`shrink-0 text-sm font-bold ${groupIndex ? "text-[#ffb37b]" : "text-[#c84f30]"}`}>{price}</span></div>
                        <p className={`mt-2 pr-12 text-sm leading-6 ${groupIndex ? "text-white/40" : "text-[#7d5d5b]"}`}>{detail}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {groupIndex === 0 && (
            <div className="grid h-[26rem] grid-cols-2 sm:h-[36rem] sm:grid-cols-3">
              {[["/images/signature-beef.jpg", "Ember dana"], ["/images/signature-seafood.jpg", "Ege karidesi"], ["/images/signature-dessert.jpg", "Gece kakaosu tatlısı"]].map(([src, alt], index) => <div key={src} className={`relative overflow-hidden ${index === 2 ? "hidden sm:block" : ""}`}><Image src={src} alt={alt} fill sizes="33vw" className="object-cover" /></div>)}
            </div>
          )}
        </section>
      ))}

      <section className="grid bg-[#ff8652] text-[#261419] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[30rem]"><Image src="/images/dish-salmon.jpg" alt="Ember'da mevsimlik bir tabak" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" /></div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-20">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.26em]">Beslenme notları</p><h2 className="mt-7 font-serif text-6xl leading-[0.88] tracking-[-0.045em] sm:text-8xl">Her masa,<span className="block italic text-[#6e1c2c]">özenle düşünülür.</span></h2><p className="mt-8 max-w-xl text-sm leading-7 text-[#5d3533]">Önceden bilgi verilmesi durumunda vejetaryen ve alerji hassasiyetine uygun menüler sunulur. Lütfen rezervasyon sırasında ihtiyaçlarınızı paylaşın.</p><ReservationButton className="mt-10 inline-flex rounded-full bg-[#211218] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1">WhatsApp ile rezervasyon ↗</ReservationButton></div>
        </div>
      </section>

      <Footer locale="tr" />
    </main>
  );
}
