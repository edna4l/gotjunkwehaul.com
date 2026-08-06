import { Clock, MapPin, Phone } from "lucide-react";
import { EstimateForm } from "@/components/estimate-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-[#f6f6f4] py-[42px]">
      <div className="mx-auto grid w-[calc(100%-40px)] grid-cols-1 items-center gap-[50px] md:grid-cols-[0.85fr_1.15fr]">
        <div className="relative border-b border-[#cfcfcf] pb-9 md:border-b-0 md:border-r md:pb-0 md:pr-9">
          <p className="mb-0 font-extrabold uppercase tracking-[0.03em] text-[#8d7400]">
            Fast, friendly local service
          </p>
          <h2 className="max-w-[570px] font-display text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold leading-[1.15] text-[#161616]">
            Ready to Reclaim Your Space?
          </h2>
          <p className="my-[18px] mb-7 text-[1.15rem] text-[#161616]">
            Call or text{" "}
            <a href="tel:+15593814910" className="font-black text-[#b08d00]">
              (559) 381-4910
            </a>{" "}
            for a free estimate.
          </p>

          <div className="grid gap-1.5">
            <p className="m-0 flex items-center gap-2 font-semibold text-[#161616]">
              <Phone className="h-[1.2rem] w-[1.2rem] text-[#111111]" aria-hidden="true" />
              <a href="tel:+15593814910">(559) 381-4910</a>
            </p>
            <p className="m-0 flex items-center gap-2 font-semibold text-[#161616]">
              <MapPin className="h-[1.2rem] w-[1.2rem] text-[#111111]" aria-hidden="true" />
              1612 Jepsen, Corcoran, CA 93212
            </p>
            <p className="m-0 flex items-center gap-2 font-semibold text-[#161616]">
              <Clock className="h-[1.2rem] w-[1.2rem] text-[#111111]" aria-hidden="true" />
              Always open
            </p>
          </div>

          <div className="mt-[22px] text-left font-display text-[1.1rem] font-extrabold leading-[1.15] text-[#222222] md:absolute md:bottom-0 md:right-[18px] md:mt-0 md:-rotate-6 md:text-center">
            Send us photos
            <br />
            for faster estimates.
          </div>
        </div>

        <EstimateForm />
      </div>
    </section>
  );
}
