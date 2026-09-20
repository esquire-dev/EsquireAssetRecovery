"use client";

import Link from "next/link";
import { useState } from "react";
import { states } from "@/lib/states";

export function StateDirectory() {
  const [tab, setTab] = useState<"foreclosure" | "tax">("foreclosure");
  const hrefFor =
    tab === "foreclosure"
      ? (slug: string) => `/legal-resources/foreclosure/${slug}`
      : (slug: string) => `/legal-resources/tax-sale/${slug}`;

  return (
    <div>
      <div className="flex flex-wrap gap-3 border-b border-gold/25 pb-px">
        <button
          type="button"
          onClick={() => setTab("foreclosure")}
          className={`rounded-t-sm px-4 py-3 text-[12px] tracking-[0.18em] uppercase ${
            tab === "foreclosure"
              ? "border border-b-ivory border-gold/40 bg-ivory text-forest"
              : "text-taupe hover:text-forest"
          }`}
        >
          Mortgage Foreclosure Laws
        </button>
        <button
          type="button"
          onClick={() => setTab("tax")}
          className={`rounded-t-sm px-4 py-3 text-[12px] tracking-[0.18em] uppercase ${
            tab === "tax"
              ? "border border-b-ivory border-gold/40 bg-ivory text-forest"
              : "text-taupe hover:text-forest"
          }`}
        >
          Property Tax Sale Laws
        </button>
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {states.map((state) => (
          <li key={state.slug}>
            <Link
              href={hrefFor(state.slug)}
              className="block rounded-sm border border-gold/20 bg-beige px-4 py-3 text-sm transition-colors hover:border-gold"
            >
              <span className="block font-heading font-semibold text-forest">
                {state.name}
              </span>
              <span className="text-[11px] tracking-widest text-taupe uppercase">
                {state.abbr}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
