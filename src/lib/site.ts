export const siteConfig = {
  name: "Ember",
  legalName: "Ember Restaurant",
  description:
    "A sunset-inspired modern Mediterranean dining room in Istanbul, shaped by fire, season and coastal produce.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  address: "42 Sunset Avenue, Karaköy, Istanbul",
  streetAddress: "42 Sunset Avenue",
  locality: "Istanbul",
  country: "TR",
  phone: "+90 555 555 04 24",
  whatsappNumber: "905555550424",
  email: "hello@ember.example",
  instagramUrl: "https://www.instagram.com/",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Karakoy%2C%20Istanbul",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Karakoy%2C%20Istanbul&t=&z=14&ie=UTF8&iwloc=&output=embed",
  creatorUrl: "https://www.linkedin.com/in/yagiz-karagoz-b18820358/",
} as const;
