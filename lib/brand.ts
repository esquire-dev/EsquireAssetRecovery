export const brand = {
  name: "Esquire Asset Recovery, LLC",
  shortName: "Esquire Asset Recovery",
  tagline: "Attorney-owned surplus fund recovery",
  logoSrc: "/logo.jpg",
  officeImageSrc: "/office.avif",
  jurisdiction: "Texas, US",
  disclaimer:
    "No upfront cost. An attorney-owned firm. Recovering surplus funds with legal-grade care.",
  address: {
    line1: "8911 North Capital of Texas Highway",
    line2: "Suite 4200",
    city: "Austin",
    state: "Texas",
    zip: "78759-7439",
  },
  phoneDisplay: "737.320.3131",
  phoneHref: "tel:+17373203131",
  faxDisplay: "512.473.0133",
  email: "George@EsquireAssetRecovery.com",
  emailHref: "mailto:George@EsquireAssetRecovery.com",
} as const;

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/library", label: "Library & Process" },
  { href: "/legal-resources", label: "Resources" },
  { href: "/media", label: "Media Coverage" },
] as const;

export const footerLegal = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
] as const;

export function formatAddress() {
  const { line1, line2, city, state, zip } = brand.address;
  return `${line1}, ${line2}, ${city}, ${state} ${zip}`;
}
