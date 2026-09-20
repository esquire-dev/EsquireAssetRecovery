import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { brand, footerLegal, formatAddress, navItems } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.9fr_0.9fr] md:px-10">
        <div>
          <div className="flex items-center gap-4">
            <Image
              src={brand.logoSrc}
              alt=""
              width={68}
              height={68}
              className="h-[68px] w-[68px] rounded-full bg-ivory object-cover"
            />
            <div>
              <p className="font-heading text-xl font-semibold">{brand.name}</p>
              <p className="mt-1 text-sm text-ivory/70">{brand.tagline}</p>
            </div>
          </div>
          <address className="mt-8 flex items-start gap-3 text-sm leading-relaxed not-italic text-ivory/80">
            <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            <div>
              <p>{brand.address.line1}</p>
              <p>{brand.address.line2}</p>
              <p>
                {brand.address.city}, {brand.address.state} {brand.address.zip}
              </p>
            </div>
          </address>
          <p className="mt-4 flex flex-col gap-2 text-sm">
            <a className="inline-flex items-center gap-2 text-gold hover:text-gold-soft" href={brand.phoneHref}>
              <Icon name="phone" className="h-4 w-4" />
              {brand.phoneDisplay}
            </a>
            <a className="inline-flex items-center gap-2 text-gold hover:text-gold-soft" href={brand.emailHref}>
              <Icon name="mail" className="h-4 w-4" />
              {brand.email}
            </a>
          </p>
        </div>

        <div>
          <p className="text-[11px] tracking-[0.28em] text-gold uppercase">Quick Links</p>
          <ul className="mt-5 space-y-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ivory/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/library/#faq" className="text-ivory/80 hover:text-gold">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <Image
            src={brand.officeImageSrc}
            alt={`Office at ${formatAddress()}`}
            width={900}
            height={600}
            className="h-40 w-full rounded-sm object-cover"
          />
          <p className="mt-4 text-[11px] tracking-[0.22em] text-gold uppercase">
            {brand.jurisdiction}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            {footerLegal.map((item) => (
              <Link key={item.href} href={item.href} className="text-ivory/80 hover:text-gold">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold/20">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-sm text-ivory/70 md:flex-row md:items-center md:justify-between md:px-10">
          <p>© 2026 {brand.name}</p>
          <p>{brand.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}
