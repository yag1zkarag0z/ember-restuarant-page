"use client";

import { useReservation } from "@/components/ReservationProvider";
import { usePathname } from "next/navigation";

export default function MobileBookingBar() {
  const { openReservation } = useReservation();
  const isTurkish = usePathname().startsWith("/tr");
  return (
    <button type="button" onClick={openReservation} className="fixed inset-x-4 bottom-4 z-40 rounded-full bg-[#ff8652] px-6 py-4 text-xs font-black uppercase tracking-[0.2em] text-[#261419] shadow-[0_12px_40px_rgba(38,20,25,0.35)] md:hidden">
      {isTurkish ? "Masa ayırt" : "Book a table"}
    </button>
  );
}
