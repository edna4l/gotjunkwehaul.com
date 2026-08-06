import { Clock, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f6f6f4] py-[42px]">
      <div className="mx-auto grid w-[calc(100%-40px)] grid-cols-1 items-center gap-[50px] md:grid-cols-[0.62fr_1fr]">
        <div className="relative flex flex-col border-b border-[#cfcfcf] pb-9 md:items-center md:border-b-0 md:border-r md:pb-0 md:pr-9 md:text-center">
          <p className="mb-0 font-extrabold uppercase tracking-[0.03em] text-[#8d7400]">
            Fast, friendly local service
          </p>
          <h2 className="max-w-[900px] font-display text-[clamp(2rem,4.6vw,4rem)] font-extrabold leading-[1.15] text-[#161616]">
            Ready to Reclaim Your Space?
          </h2>
          <p className="my-[18px] mb-7 max-w-[680px] text-[clamp(1.15rem,1.7vw,1.5rem)] text-[#161616]">
            Call or text{" "}
            <a href="tel:+15593814910" className="font-black text-[#b08d00]">
              (559) 381-4910
            </a>{" "}
            for a free estimate.
          </p>

          <div className="grid gap-2">
            <p className="m-0 flex items-center gap-2 text-[1.05rem] font-semibold text-[#161616] md:justify-center">
              <Phone className="h-[1.2rem] w-[1.2rem] text-[#111111]" aria-hidden="true" />
              <a href="tel:+15593814910">(559) 381-4910</a>
            </p>
            <p className="m-0 flex items-center gap-2 text-[1.05rem] font-semibold text-[#161616] md:justify-center">
              <MapPin className="h-[1.2rem] w-[1.2rem] text-[#111111]" aria-hidden="true" />
              1612 Jepsen, Corcoran, CA 93212
            </p>
            <p className="m-0 flex items-center gap-2 text-[1.05rem] font-semibold text-[#161616] md:justify-center">
              <Clock className="h-[1.2rem] w-[1.2rem] text-[#111111]" aria-hidden="true" />
              Always open
            </p>
          </div>

          <div className="mt-7 max-w-[640px] font-display text-[clamp(1.3rem,2.4vw,2rem)] font-extrabold leading-[1.2] text-[#222222]">
            Send us photos for faster estimates.
          </div>

          <p className="mt-5 max-w-[640px] text-[clamp(1.05rem,1.3vw,1.25rem)] text-[#3a3a3a]">
            Prefer texting?{" "}
            <a
              href="sms:+15593814910?body=Hi%20Got%20Junk!%20I%27d%20like%20a%20free%20estimate.%20I%27ll%20send%20photos%20here."
              className="font-bold text-[#b08d00]"
            >
              Text us directly
            </a>{" "}
            and attach photos from your phone.
          </p>
        </div>

        <EstimateForm />
      </div>
    </section>
  );
}
