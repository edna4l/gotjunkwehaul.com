import Image from "next/image";
import { MapPin, MessageSquare, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const TRUST_ITEMS = ["Local & Reliable", "Free Estimates", "Residential & Commercial"];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[670px] items-end overflow-hidden md:min-h-[560px] md:items-center"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[67%_center] md:object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.97)_0%,rgba(0,0,0,0.78)_39%,rgba(0,0,0,0.18)_72%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.56),transparent_34%),radial-gradient(circle_at_82%_36%,transparent_0_28%,rgba(0,0,0,0.14)_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.98)_0%,rgba(0,0,0,0.8)_53%,rgba(0,0,0,0.2)_100%)] md:hidden" />

      <div className="relative z-10 mx-auto w-[min(calc(100%-40px),var(--container-max))] py-[90px] pb-[35px] md:py-[76px] md:pb-[38px]">
        <p className="mb-[11px] text-[0.85rem] font-extrabold uppercase tracking-[0.17em] text-(--color-accent)">
          Local junk removal &amp; hauling
        </p>

        <h1 className="max-w-[690px] font-display text-[clamp(3.8rem,10vw,7.6rem)] italic leading-[0.82] text-white [text-shadow:0_7px_22px_rgba(0,0,0,0.55)]">
          <span className="block">Got Junk?</span>
          <span className="block font-normal text-(--color-accent)">
            We&rsquo;ll Haul It Away.
          </span>
        </h1>

        <p className="mb-[15px] mt-[27px] max-w-[560px] text-[clamp(1rem,1.6vw,1.18rem)] font-medium leading-[1.55] text-[#f4f4f4]">
          Reliable junk removal, hauling, cleanouts, yard debris removal and
          light demolition throughout Corcoran and the Central Valley.
        </p>

        <p className="mb-[23px] flex max-w-[560px] items-start gap-3 leading-[1.5] text-white">
          <MapPin className="mt-1 h-4 w-4 shrink-0 text-(--color-accent)" aria-hidden="true" />
          Proudly serving Kings County, Tulare County, Fresno County and nearby areas.
        </p>

        <div className="flex flex-wrap gap-[13px] sm:flex-row [&>*]:w-full sm:[&>*]:w-auto">
          <Button href="tel:+15593814910">
            <Phone className="h-4 w-4" aria-hidden="true" /> Call for a Free Estimate
          </Button>
          <Button
            variant="outline"
            href="sms:+15593814910?body=Hi%20Got%20Junk!%20I%27d%20like%20a%20free%20estimate.%20I%20can%20send%20photos%20of%20the%20items."
          >
            <MessageSquare className="h-4 w-4" aria-hidden="true" /> Text Us Photos
          </Button>
        </div>

        <div
          aria-label="Business benefits"
          className="mt-[29px] grid gap-2.5 text-[0.92rem] font-semibold text-[#f4f4f4] sm:flex sm:flex-wrap sm:gap-[25px]"
        >
          {TRUST_ITEMS.map((item) => (
            <span key={item} className="first-letter:text-(--color-accent)">
              ✔ {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
