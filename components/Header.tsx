"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { brand, navItems } from "@/lib/brand";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-forest text-ivory">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src={brand.logoSrc}
            alt=""
            width={48}
            height={48}
            className="h-12 w-12 rounded-full bg-ivory object-cover transition-opacity duration-300 group-hover:opacity-90"
            style={{ width: 48, height: 48 }}
            priority
          />
          <span className="font-heading truncate text-[15px] leading-tight font-semibold tracking-wide transition-colors duration-300 group-hover:text-gold">
            {brand.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 xl:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 text-[12px] tracking-[0.14em] whitespace-nowrap transition-colors duration-300 after:absolute after:right-0 after:bottom-0 after:left-0 after:h-px after:origin-left after:bg-gold after:transition-transform after:duration-300 hover:text-gold ${
                  active
                    ? "text-gold after:scale-x-100"
                    : "text-ivory/80 after:scale-x-0 hover:after:scale-x-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="/#claim"
            className="ml-2 rounded-sm border border-gold bg-gold px-4 py-2 text-[11px] font-medium tracking-[0.16em] text-forest uppercase transition-colors duration-300 hover:border-gold-soft hover:bg-gold-soft"
          >
            Check My Eligibility
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm border border-gold/40 px-3 py-2 text-[11px] tracking-[0.2em] uppercase xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-3 border-t border-gold/20 px-5 py-5 xl:hidden"
          aria-label="Mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-1.5 text-sm text-ivory/80 transition-colors duration-300 hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/#claim"
            className="mt-2 rounded-sm bg-gold px-4 py-3 text-center text-[11px] font-medium tracking-[0.16em] text-forest uppercase transition-colors duration-300 hover:bg-gold-soft"
            onClick={() => setOpen(false)}
          >
            Check My Eligibility
          </a>
        </nav>
      ) : null}
    </header>
  );
}
