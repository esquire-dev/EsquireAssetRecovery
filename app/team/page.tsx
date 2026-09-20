import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = {
  title: "Our Team",
  robots: { index: false, follow: true },
  alternates: { canonical: "/about/" },
};

export default function TeamRedirectPage() {
  return <HashRedirect to="/about/#team">Continue to Our Team</HashRedirect>;
}
