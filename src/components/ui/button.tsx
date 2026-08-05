import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "default" | "small";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-(--color-accent) text-[#0b0b0b] shadow-[0_8px_24px_rgba(255,212,0,0.22)] hover:bg-[#ffdf38] hover:shadow-[0_10px_28px_rgba(255,212,0,0.3)]",
  outline:
    "text-white border-(--color-accent) bg-black/35 hover:bg-(--color-accent) hover:text-[#111111]",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "min-h-[50px] px-[22px] py-[13px]",
  small: "min-h-[43px] px-[18px] py-[11px] text-[0.9rem]",
};

const baseStyles =
  "inline-flex items-center justify-center gap-[9px] rounded-[7px] border-2 border-transparent font-extrabold leading-none transition-[transform,box-shadow,background] duration-150 ease-in-out hover:-translate-y-0.5 cursor-pointer";

export function Button({
  variant = "primary",
  size = "default",
  className,
  children,
  href,
  ...props
}: ButtonAsLink | ButtonAsButton) {
  const classes = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

  if (href) {
    const isExternalScheme = /^(tel:|sms:|mailto:)/.test(href);
    if (isExternalScheme) {
      return (
        <a href={href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
