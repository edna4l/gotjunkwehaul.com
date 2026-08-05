import { Phone } from "lucide-react";

export function FloatingCallButton() {
  return (
    <a
      href="tel:+15593814910"
      aria-label="Call Got Junk"
      className="fixed bottom-[18px] right-[18px] z-40 grid h-14 w-14 place-items-center rounded-full bg-(--color-accent) text-[#111111] shadow-[0_12px_25px_rgba(0,0,0,0.34)] md:hidden"
    >
      <Phone className="h-6 w-6" aria-hidden="true" />
    </a>
  );
}
