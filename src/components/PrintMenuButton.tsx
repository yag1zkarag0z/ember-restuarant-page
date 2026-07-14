"use client";

export default function PrintMenuButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print-hidden shrink-0 rounded-full border border-[#261419]/25 px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-[#261419] hover:text-white sm:tracking-[0.14em]"
      aria-label="Print menu or save as PDF"
    >
      <span className="sm:hidden">Print</span>
      <span className="hidden sm:inline">Print / Save PDF</span>
    </button>
  );
}
