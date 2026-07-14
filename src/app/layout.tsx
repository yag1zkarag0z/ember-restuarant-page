import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import MobileBookingBar from "@/components/MobileBookingBar";
import ReservationProvider from "@/components/ReservationProvider";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({ variable: "--font-serif", subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Ember | Modern Mediterranean Dining", template: "%s | Ember" },
  description: siteConfig.description,
  keywords: ["fine dining Istanbul", "Mediterranean restaurant", "Karaköy restaurant", "tasting menu"],
  alternates: { canonical: "/", languages: { "en-US": "/", "tr-TR": "/tr" } },
  openGraph: { type: "website", locale: "en_US", alternateLocale: ["tr_TR"], url: "/", siteName: siteConfig.name, title: "Ember | Dinner in the last light", description: siteConfig.description },
  twitter: { card: "summary_large_image", title: "Ember | Dinner in the last light", description: siteConfig.description },
  authors: [{ name: "Yagiz Karagoz", url: siteConfig.creatorUrl }],
  creator: "Yagiz Karagoz",
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/hero-restaurant.jpg`,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  servesCuisine: ["Mediterranean", "Contemporary", "Turkish"],
  priceRange: "$$$",
  acceptsReservations: true,
  menu: `${siteConfig.url}/menu`,
  address: { "@type": "PostalAddress", streetAddress: siteConfig.streetAddress, addressLocality: siteConfig.locality, addressCountry: siteConfig.country },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "18:00", closes: "23:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "18:00", closes: "00:30" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "17:00", closes: "23:00" },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} scroll-smooth antialiased`}>
      <body>
        <a href="#main-content" className="sr-only z-[200] bg-white p-3 text-black focus:not-sr-only focus:fixed focus:left-3 focus:top-3">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd).replace(/</g, "\\u003c") }} />
        <ReservationProvider>
          {children}
          <MobileBookingBar />
        </ReservationProvider>
      </body>
    </html>
  );
}
