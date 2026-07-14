"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState, type FormEvent, type ReactNode } from "react";
import { siteConfig } from "@/lib/site";

const ReservationContext = createContext<{ openReservation: () => void } | null>(null);

export function useReservation() {
  const context = useContext(ReservationContext);
  if (!context) throw new Error("useReservation must be used inside ReservationProvider");
  return context;
}

export default function ReservationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const isTurkish = usePathname().startsWith("/tr");

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => event.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function submitReservation(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = isTurkish
      ? [
          "Merhaba Ember, masa rezervasyonu yapmak istiyorum.",
          `İsim: ${data.get("name")}`,
          `Tarih: ${data.get("date")}`,
          `Saat: ${data.get("time")}`,
          `Kişi: ${data.get("guests")}`,
          `Notlar: ${data.get("notes") || "Yok"}`,
        ].join("\n")
      : [
          "Hello Ember, I would like to book a table.",
          `Name: ${data.get("name")}`,
          `Date: ${data.get("date")}`,
          `Time: ${data.get("time")}`,
          `Guests: ${data.get("guests")}`,
          `Notes: ${data.get("notes") || "None"}`,
        ].join("\n");

    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  }

  return (
    <ReservationContext.Provider value={{ openReservation: () => setIsOpen(true) }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] grid place-items-end bg-[#12090e]/75 p-0 backdrop-blur-sm sm:place-items-center sm:p-6"
          role="presentation"
          onMouseDown={() => setIsOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-title"
            className="max-h-[92svh] w-full overflow-y-auto rounded-t-[2rem] bg-[#f7eadf] p-6 text-[#261419] shadow-2xl sm:max-w-2xl sm:rounded-[2rem] sm:p-10"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="section-label">{isTurkish ? "Akşamınız burada başlıyor" : "Your evening starts here"}</p>
                <h2 id="reservation-title" className="mt-4 font-serif text-5xl leading-none sm:text-6xl">
                  {isTurkish ? "Masa ayırt" : "Book a table"}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#261419]/20 text-xl"
                aria-label={isTurkish ? "Rezervasyon formunu kapat" : "Close reservation form"}
              >
                ×
              </button>
            </div>

            <form onSubmit={submitReservation} className="mt-9 grid gap-5 sm:grid-cols-2">
              <label className="text-xs font-bold uppercase tracking-[0.16em] sm:col-span-2">
                {isTurkish ? "İsim" : "Name"}
                <input name="name" required autoFocus className="mt-2 w-full border-b border-[#261419]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#c84f30]" placeholder={isTurkish ? "İsminiz" : "Your name"} />
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.16em]">
                {isTurkish ? "Tarih" : "Date"}
                <input name="date" type="date" required className="mt-2 w-full border-b border-[#261419]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#c84f30]" />
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.16em]">
                {isTurkish ? "Saat" : "Time"}
                <select name="time" required defaultValue="20:00" className="mt-2 w-full border-b border-[#261419]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#c84f30]">
                  {["18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map((time) => <option key={time}>{time}</option>)}
                </select>
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.16em]">
                {isTurkish ? "Kişi sayısı" : "Guests"}
                <select name="guests" required defaultValue="2" className="mt-2 w-full border-b border-[#261419]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#c84f30]">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((guest) => <option key={guest} value={guest}>{guest} {isTurkish ? "kişi" : guest === 1 ? "guest" : "guests"}</option>)}
                </select>
              </label>
              <label className="text-xs font-bold uppercase tracking-[0.16em] sm:col-span-2">
                {isTurkish ? "Alerjiler veya notlar" : "Allergies or notes"}
                <textarea name="notes" rows={3} className="mt-2 w-full resize-none border-b border-[#261419]/30 bg-transparent px-0 py-3 text-base font-normal normal-case tracking-normal outline-none focus:border-[#c84f30]" placeholder={isTurkish ? "İsteğe bağlı" : "Optional"} />
              </label>
              <button type="submit" className="mt-2 rounded-full bg-[#261419] px-7 py-5 text-xs font-bold uppercase tracking-[0.2em] text-white sm:col-span-2">
                {isTurkish ? "WhatsApp ile devam et ↗" : "Continue on WhatsApp ↗"}
              </button>
            </form>
          </section>
        </div>
      )}
    </ReservationContext.Provider>
  );
}
