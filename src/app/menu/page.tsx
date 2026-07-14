import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import ReservationButton from "@/components/ReservationButton";

export const metadata: Metadata = {
  title: "Food & Drinks Menu | Ember",
  description:
    "Explore Ember's complete seasonal food, cocktail, wine, spirits and soft drinks menu.",
};

const menuGroups = [
  {
    id: "food",
    eyebrow: "The kitchen",
    title: "Food menu",
    description: "Modern Mediterranean plates built around the season and finished over flame.",
    sections: [
      {
        id: "starters",
        title: "Starters & small plates",
        items: [
          ["Ember sourdough", "smoked butter · thyme salt", "$8"],
          ["Raw Aegean sea bass", "green almond · citrus · wild fennel", "$18"],
          ["Fire-roasted beetroot", "sour cherry · sheep's yoghurt · dill", "$14"],
          ["Charred octopus", "white bean · preserved lemon · paprika oil", "$19"],
        ],
      },
      {
        id: "salads",
        title: "Salads & garden",
        items: [
          ["Sunset tomato", "Ezine cheese · basil · sumac", "$15"],
          ["Charred greens", "almond · lemon · aged vinegar", "$14"],
          ["Aegean herb salad", "cucumber · green olive · citrus", "$13"],
        ],
      },
      {
        id: "pasta",
        title: "Pasta & grains",
        items: [
          ["Lobster orzo", "tomato · shellfish butter · tarragon", "$28"],
          ["Wild mushroom manti", "brown butter · sage · hazelnut", "$23"],
          ["Saffron risotto", "artichoke · aged cheese · lemon", "$24"],
        ],
      },
      {
        id: "seafood",
        title: "Seafood",
        items: [
          ["Aegean prawn", "charred pepper · fennel · citrus oil", "$29"],
          ["Line-caught sea bass", "braised greens · mussel broth · saffron", "$36"],
          ["Grilled salmon", "spinach · cucumber · smoked tomato", "$32"],
          ["Lobster", "herbs · grilled lemon · olive oil", "$94"],
        ],
      },
      {
        id: "meat",
        title: "Meat & fire",
        items: [
          ["Ember-roasted beef", "smoked aubergine · preserved lemon · lamb jus", "$42"],
          ["Dry-aged ribeye", "coal-roasted onion · pepper jus", "$54"],
          ["Lamb shoulder", "apricot · freekeh · rosemary", "$38"],
          ["Fire-grilled chicken", "harissa · burnt yoghurt · herbs", "$27"],
        ],
      },
      {
        id: "vegetarian",
        title: "Vegetarian",
        items: [
          ["Coal-roasted celeriac", "hazelnut · black garlic · sage", "$24"],
          ["Smoked aubergine", "chickpea · tahini · pomegranate", "$22"],
          ["Grilled artichoke", "white bean · caper · dill", "$25"],
        ],
      },
      {
        id: "desserts",
        title: "Desserts",
        items: [
          ["Midnight cacao", "sour cherry · burnt honey · cocoa nib", "$14"],
          ["Burnt milk", "fig leaf · olive oil · sea salt", "$12"],
          ["Sunset citrus", "mandarin · yoghurt · orange blossom", "$13"],
          ["Anatolian cheese", "seasonal preserve · grilled bread", "$16"],
        ],
      },
    ],
  },
  {
    id: "drinks",
    eyebrow: "At the bar",
    title: "Drinks menu",
    description: "Sunset cocktails, coastal wines and thoughtful alcohol-free pours.",
    sections: [
      {
        id: "cocktails",
        title: "Signature cocktails",
        items: [
          ["Last Light", "gin · mandarin · bergamot · tonic", "$17"],
          ["Ember Negroni", "fig-infused gin · vermouth · bitter orange", "$18"],
          ["Bosphorus Highball", "raki · cucumber · mint · soda", "$16"],
          ["Golden Hour", "tequila · apricot · lime · chilli", "$17"],
          ["Midnight Sour", "bourbon · sour cherry · lemon · foam", "$18"],
        ],
      },
      {
        id: "wine-glass",
        title: "Wine by the glass",
        items: [
          ["Emir", "Cappadocia · crisp white", "$12"],
          ["Narince", "Tokat · textured white", "$14"],
          ["Kalecik Karası", "Ankara · light red", "$15"],
          ["Öküzgözü", "Elazığ · structured red", "$16"],
          ["Provence rosé", "France · dry rosé", "$14"],
        ],
      },
      {
        id: "wine-bottle",
        title: "Wine by the bottle",
        items: [
          ["Emir Reserve", "Cappadocia · 2024", "$48"],
          ["Narince Barrel Selection", "Tokat · 2023", "$62"],
          ["Kalecik Karası Reserve", "Ankara · 2022", "$68"],
          ["Aegean Cabernet Blend", "İzmir · 2021", "$76"],
          ["Champagne Brut", "France · NV", "$120"],
        ],
      },
      {
        id: "beer",
        title: "Beer & cider",
        items: [
          ["Local pilsner", "330 ml", "$8"],
          ["Aegean wheat beer", "330 ml", "$9"],
          ["Craft IPA", "330 ml", "$10"],
          ["Dry apple cider", "330 ml", "$9"],
        ],
      },
      {
        id: "spirits",
        title: "Spirits",
        items: [
          ["Yeni Rakı", "4 cl", "$11"],
          ["Premium gin", "4 cl", "$13"],
          ["Single malt whisky", "4 cl", "$16"],
          ["Small-batch bourbon", "4 cl", "$14"],
          ["Aged rum", "4 cl", "$14"],
        ],
      },
      {
        id: "soft-drinks",
        title: "Soft drinks",
        items: [
          ["House citrus soda", "mandarin · lemon · sparkling water", "$7"],
          ["Pomegranate cooler", "pomegranate · lime · mint", "$8"],
          ["Homemade lemonade", "classic or ginger", "$7"],
          ["Cola / Cola Zero", "200 ml", "$5"],
          ["Tonic / Ginger ale", "200 ml", "$5"],
        ],
      },
      {
        id: "coffee-tea",
        title: "Coffee & tea",
        items: [
          ["Turkish coffee", "traditional copper pot", "$5"],
          ["Espresso", "single origin", "$4"],
          ["Americano", "hot or iced", "$5"],
          ["Flat white", "double espresso · steamed milk", "$6"],
          ["Loose-leaf tea", "black · green · herbal", "$6"],
        ],
      },
      {
        id: "water",
        title: "Water",
        items: [
          ["Still water", "330 ml / 750 ml", "$4 / $7"],
          ["Sparkling water", "330 ml / 750 ml", "$4 / $7"],
        ],
      },
    ],
  },
] as const;

const menuLinks = menuGroups.flatMap((group) =>
  group.sections.map((section) => ({ id: section.id, title: section.title })),
);

export default function MenuPage() {
  return (
    <main id="main-content" className="bg-[#f7eadf] text-[#261419] page-enter">
      <Navbar />

      <section className="relative flex min-h-[72svh] items-end overflow-hidden bg-[#201218] px-5 pb-16 pt-36 text-white sm:px-8 sm:pb-20 lg:px-12">
        <Image
          src="/images/interior-red.jpg"
          alt="The warm evening atmosphere at Ember"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(27,10,16,0.92),rgba(41,13,18,0.48),rgba(41,13,18,0.2))]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ffb37b]">Food · Wine · Cocktails</p>
          <h1 className="mt-6 max-w-5xl font-serif text-[clamp(4.8rem,11vw,10rem)] leading-[0.74] tracking-[-0.055em]">
            The full
            <span className="block italic text-[#ff9a62]">menu.</span>
          </h1>
        </div>
      </section>

      <MenuCategoryNav links={menuLinks} />

      {menuGroups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={group.id}
          className={groupIndex === 1 ? "bg-[#201218] text-[#f7eadf]" : "bg-[#f7eadf]"}
        >
          <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-32">
            <div className={`grid gap-10 border-b pb-16 lg:grid-cols-[0.7fr_1.3fr] ${groupIndex === 1 ? "border-white/15" : "border-[#261419]/20"}`}>
              <p className={`section-label ${groupIndex === 1 ? "text-[#ff9a62]" : ""}`}>{group.eyebrow}</p>
              <div>
                <h2 className="font-serif text-6xl leading-none tracking-[-0.04em] sm:text-8xl">{group.title}</h2>
                <p className={`mt-6 max-w-2xl text-sm leading-7 ${groupIndex === 1 ? "text-white/50" : "text-[#7d5d5b]"}`}>
                  {group.description}
                </p>
              </div>
            </div>

            <div className="mt-16 grid gap-x-16 gap-y-20 lg:grid-cols-2">
              {group.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-28">
                  <h3 className={`border-b pb-5 font-serif text-4xl leading-none sm:text-5xl ${groupIndex === 1 ? "border-white/15" : "border-[#261419]/20"}`}>
                    {section.title}
                  </h3>
                  <div className={`divide-y ${groupIndex === 1 ? "divide-white/10" : "divide-[#261419]/12"}`}>
                    {section.items.map(([name, detail, price]) => (
                      <article key={name} className="py-5">
                        <div className="flex items-baseline justify-between gap-5">
                          <h4 className="font-serif text-2xl leading-tight sm:text-3xl">{name}</h4>
                          <span className={`shrink-0 text-sm font-bold ${groupIndex === 1 ? "text-[#ffb37b]" : "text-[#c84f30]"}`}>
                            {price}
                          </span>
                        </div>
                        <p className={`mt-2 pr-12 text-sm leading-6 ${groupIndex === 1 ? "text-white/40" : "text-[#7d5d5b]"}`}>
                          {detail}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>

          {groupIndex === 0 && (
            <div className="grid h-[26rem] grid-cols-2 sm:h-[36rem] sm:grid-cols-3">
              {[
                ["/images/signature-beef.jpg", "Ember-roasted beef"],
                ["/images/signature-seafood.jpg", "Aegean prawn plate"],
                ["/images/signature-dessert.jpg", "Midnight cacao dessert"],
              ].map(([src, alt], index) => (
                <div key={src} className={`relative overflow-hidden ${index === 2 ? "hidden sm:block" : ""}`}>
                  <Image src={src} alt={alt} fill sizes="33vw" className="object-cover" />
                </div>
              ))}
            </div>
          )}
        </section>
      ))}

      <section className="grid bg-[#ff8652] text-[#261419] lg:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[30rem]">
          <Image
            src="/images/dish-salmon.jpg"
            alt="A seasonal plate at Ember"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex items-center px-5 py-20 sm:px-12 lg:px-20">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em]">Dietary notes</p>
            <h2 className="mt-7 font-serif text-6xl leading-[0.88] tracking-[-0.045em] sm:text-8xl">
              Every table,
              <span className="block italic text-[#6e1c2c]">considered.</span>
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-7 text-[#5d3533]">
              Vegetarian and allergy-aware menus are available with advance notice. Please share your requirements when reserving.
            </p>
            <ReservationButton
              className="mt-10 inline-flex rounded-full bg-[#211218] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white transition-transform hover:-translate-y-1"
            >
              Book on WhatsApp ↗
            </ReservationButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
