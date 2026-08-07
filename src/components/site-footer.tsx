import { Phone } from "lucide-react";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-(--color-accent)/25 bg-[#050505] py-[25px] text-white">
      <div className="mx-auto grid w-[calc(100%-40px)] grid-cols-1 items-center gap-[18px] sm:grid-cols-2 lg:grid-cols-[1.05fr_1.25fr_0.9fr_auto] lg:gap-[35px]">
        <div>
          <div className="inline-flex items-baseline gap-1.5 font-display text-[1.7rem] font-extrabold leading-[0.9]">
            <span className="text-white">Got</span>
            <span className="text-(--color-accent)">Junk</span>
          </div>
          <a
            href="https://www.gotjunkwehaul.com"
            className="block font-extrabold text-(--color-accent)"
          >
            www.gotjunkwehaul.com
          </a>
        </div>

        <p className="m-0 text-[0.86rem] leading-[1.45] text-[#dbdbdb]">
          Reliable junk removal, hauling, cleanouts, yard debris removal and light demolition.{" "}
          <strong className="block text-(--color-accent)">
            Proudly serving Corcoran and the Central Valley.
          </strong>
        </p>

        <div className="grid gap-1.5">
          <a href="tel:+15593814910" className="flex items-center gap-1.5 font-extrabold text-(--color-accent)">
            <Phone className="h-4 w-4" aria-hidden="true" /> (559) 381-4910
          </a>
          <a href="https://www.gotjunkwehaul.com" className="font-extrabold text-(--color-accent)">
            www.gotjunkwehaul.com
          </a>
        </div>

        <div aria-label="Social media links" className="mt-1 flex gap-2.5 sm:mt-0">
          <a
            href="https://www.facebook.com/profile.php?id=61586970762693"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white text-[1.15rem] font-black text-[#111111]"
          >
            f
          </a>
          <a
            href="https://www.instagram.com/gotjunk559/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid h-[38px] w-[38px] place-items-center rounded-full bg-white text-[#111111]"
          >
            <InstagramIcon className="h-[18px] w-[18px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
