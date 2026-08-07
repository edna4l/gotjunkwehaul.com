import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <div className="border-y border-(--color-accent)/25 bg-[#0d0d0d] py-6">
      <div className="mx-auto flex w-[calc(100%-40px)] max-w-[900px] flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="m-0 text-[0.98rem] font-semibold text-white">
          Free, no-obligation estimates{" "}
          <span className="text-(--color-accent)">— call or text (559) 381-4910</span>
        </p>
        <Button href="tel:+15593814910" size="small" className="shrink-0">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
        </Button>
      </div>
    </div>
  );
}
