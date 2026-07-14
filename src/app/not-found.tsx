import Link from "next/link";

export default function NotFound() {
  return <main id="main-content" className="grid min-h-screen place-items-center bg-[#201218] px-5 text-center text-[#f7eadf]"><div><p className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff9a62]">404 · After hours</p><h1 className="mt-6 font-serif text-7xl leading-[0.8] sm:text-9xl">This table<br /><span className="italic text-[#ff9a62]">isn’t set.</span></h1><p className="mx-auto mt-8 max-w-md text-sm leading-7 text-white/50">The page you were looking for has left the menu.</p><Link href="/" className="mt-9 inline-flex rounded-full bg-[#ff8652] px-7 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#261419]">Return home</Link></div></main>;
}
