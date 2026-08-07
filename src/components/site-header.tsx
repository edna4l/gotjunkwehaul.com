"use client";

import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FacebookIcon, InstagramIcon } from "@/components/social-icons";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#areas", label: "Service Areas" },
  { href: "#gallery", label: "Gallery" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 min-h-[74px] border-b border-(--color-accent)/15 bg-black/96 backdrop-blur-md">
      <div className="mx-auto flex min-h-[74px] w-[calc(100%-40px)] items-center gap-[30px] md:justify-between">
        <a
          href="#home"
          aria-label="Got Junk home"
          className="inline-flex shrink-0 items-baseline gap-1.5 font-display text-[clamp(1.4rem,2.2vw,1.9rem)] font-extrabold leading-[0.9]"
        >
          <span className="text-white">Got</span>
          <span className="text-(--color-accent)">Junk</span>
        </a>

        <button
          type="button"
          aria-label="Open navigation"
          aria-expanded={isOpen}
          aria-controls="main-navigation"
          onClick={() => setIsOpen((open) => !open)}
          className="ml-auto grid h-10 w-11 place-items-center rounded-lg border border-white/25 md:hidden"
        >
          <Menu className="h-5 w-5 text-white" aria-hidden="true" />
        </button>

        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={cn(
            "absolute left-5 right-5 top-[67px] flex-col gap-0 rounded-[10px] border border-white/16 bg-[#101010] p-2 shadow-[var(--shadow-card)] md:static md:left-auto md:right-auto md:top-auto md:ml-0 md:flex md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-8",
            isOpen ? "flex" : "hidden"
          )}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="relative px-3 py-[13px] text-[0.91rem] font-bold text-[#f1f1f1] after:absolute after:bottom-[-10px] after:left-0 after:right-full after:h-[3px] after:bg-(--color-accent) after:transition-[right] after:duration-150 hover:after:right-0 md:px-0 md:py-0 md:text-[0.95rem] lg:text-[1.2rem]"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1 flex items-center gap-2.5 border-t border-white/10 px-3 pt-3 md:hidden">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white"
            >
              <FacebookIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full border border-white/25 text-white"
            >
              <InstagramIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </nav>

        <div className="flex items-center gap-[18px]">
          <div className="hidden items-center gap-2 xl:flex">
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/25 text-white/80 hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <FacebookIcon className="h-[15px] w-[15px]" aria-hidden="true" />
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full border border-white/25 text-white/80 hover:border-(--color-accent) hover:text-(--color-accent)"
            >
              <InstagramIcon className="h-[15px] w-[15px]" aria-hidden="true" />
            </a>
          </div>
          <a
            href="tel:+15593814910"
            aria-label="Call Got Junk"
            className="hidden items-center gap-1.5 whitespace-nowrap font-extrabold text-(--color-accent) lg:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" /> (559) 381-4910
          </a>
          <Button href="#contact" size="small" className="hidden md:inline-flex">
            Free Estimate
          </Button>
        </div>
      </div>
    </header>
  );
}
