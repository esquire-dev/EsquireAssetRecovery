import type { Metadata } from "next";
import { HashRedirect } from "@/components/HashRedirect";

export const metadata: Metadata = {
  title: "Who We Serve",
  robots: { index: false, follow: true },
  alternates: { canonical: "/about/" },
};

export default function WhoWeServeRedirectPage() {
  return <HashRedirect to="/about/#who-we-serve">Continue to Who We Serve</HashRedirect>;
}
