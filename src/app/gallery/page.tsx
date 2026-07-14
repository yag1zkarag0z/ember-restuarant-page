import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = { title: "Gallery", description: "Inside Ember: the dining room, the kitchen and evenings by the Bosphorus." };
const gallery = [
  ["/images/hero-restaurant.jpg", "Warm lighting across Ember's dining room", "lg:col-span-2 lg:row-span-2"],
  ["/images/signature-beef.jpg", "Beef finished with sauce at the pass", ""],
  ["/images/interior-red.jpg", "The red-toned dining room", ""],
  ["/images/terrace-sea.jpg", "Terrace overlooking the sea", "lg:col-span-2"],
  ["/images/signature-dessert.jpg", "Midnight cacao dessert", ""],
  ["/images/interior-evening.jpg", "Ember set for evening service", ""],
  ["/images/chef-at-work.jpg", "Chef at work", "lg:col-span-2"],
] as const;

export default function GalleryPage() {
  return <main id="main-content" className="bg-[#201218] text-white page-enter"><Navbar /><section className="mx-auto max-w-[1440px] px-5 pb-16 pt-40 sm:px-8 lg:px-12"><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff9a62]">Atmosphere · Plates · People</p><h1 className="mt-6 font-serif text-[clamp(5rem,11vw,10rem)] leading-[0.75] tracking-[-0.055em]">Inside<br /><span className="italic text-[#ff9a62]">Ember.</span></h1></section><section className="grid auto-rows-[24rem] gap-3 p-3 sm:grid-cols-2 sm:p-5 lg:grid-cols-3 lg:auto-rows-[28rem]">{gallery.map(([src, alt, classes]) => <figure key={src} className={`group relative overflow-hidden ${classes}`}><Image src={src} alt={alt} fill sizes="(min-width:1024px) 50vw,100vw" className="object-cover transition duration-700 group-hover:scale-105" /><figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6 pt-20 text-xs uppercase tracking-[0.16em] opacity-0 transition-opacity group-hover:opacity-100">{alt}</figcaption></figure>)}</section><Footer /></main>;
}
