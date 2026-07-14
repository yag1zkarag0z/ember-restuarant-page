import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Ember Restaurant", short_name: "Ember", description: "Modern Mediterranean dining in Istanbul", start_url: "/", display: "standalone", background_color: "#150d12", theme_color: "#ff8652" };
}
