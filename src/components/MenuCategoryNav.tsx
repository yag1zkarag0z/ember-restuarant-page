"use client";

import PrintMenuButton from "@/components/PrintMenuButton";

type MenuLink = {
  id: string;
  title: string;
};

export default function MenuCategoryNav({
  links,
  label = "Jump to a menu category",
  selectLabel = "Choose a category",
}: {
  links: readonly MenuLink[];
  label?: string;
  selectLabel?: string;
}) {
  function goToSection(id: string) {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  }

  return (
    <div className="sticky top-20 z-30 border-b border-[#261419]/15 bg-[#f7eadf]/95 px-4 py-3 text-[#261419] shadow-[0_8px_24px_rgba(38,20,25,0.06)] backdrop-blur sm:top-24 sm:px-8 lg:top-0 lg:px-12 print-hidden">
      <nav aria-label={label} className="mx-auto max-w-[1440px]">
        <div className="flex items-center gap-3 lg:hidden">
          <label htmlFor="menu-category" className="sr-only">
            {selectLabel}
          </label>
          <select
            id="menu-category"
            defaultValue=""
            onChange={(event) => {
              if (event.target.value) goToSection(event.target.value);
            }}
            className="min-w-0 flex-1 appearance-none rounded-full border border-[#261419]/20 bg-white/55 px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] outline-none focus:border-[#c84f30]"
          >
            <option value="" disabled>{selectLabel}</option>
            {links.map((link) => <option key={link.id} value={link.id}>{link.title}</option>)}
          </select>
          <PrintMenuButton />
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex min-w-0 flex-1 gap-2 overflow-x-auto py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {links.map((link) => (
              <button
                type="button"
                key={link.id}
                onClick={() => goToSection(link.id)}
                className="shrink-0 rounded-full border border-[#261419]/20 px-4 py-2 text-[0.64rem] font-bold uppercase tracking-[0.12em] transition-colors hover:border-[#c84f30] hover:bg-[#c84f30] hover:text-white"
              >
                {link.title}
              </button>
            ))}
          </div>
          <PrintMenuButton />
        </div>
      </nav>
    </div>
  );
}
