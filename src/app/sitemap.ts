import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/menu", "/story", "/gallery", "/private-dining", "/privacy", "/tr", "/tr/menu", "/tr/story", "/tr/gallery", "/tr/private-dining", "/tr/privacy"].map((route) => ({ url: `${siteConfig.url}${route}`, lastModified: new Date(), changeFrequency: route.includes("menu") ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
