import Link from "next/link";

export default function Brand({ href = "/" }: { href?: string }) {
  return (
    <Link href={href} className="group inline-flex min-w-0 items-center gap-2.5 sm:gap-3" aria-label="Ember home">
      <span className="relative grid h-8 w-8 shrink-0 place-items-center rounded-full border border-current/45 sm:h-9 sm:w-9">
        <span className="h-3 w-3 rounded-full bg-[#ff8a52] shadow-[0_0_18px_#ff8a52] transition-transform group-hover:scale-125" />
      </span>
      <span className="font-serif text-2xl font-semibold tracking-[0.15em] sm:text-3xl sm:tracking-[0.18em]">EMBER</span>
    </Link>
  );
}
