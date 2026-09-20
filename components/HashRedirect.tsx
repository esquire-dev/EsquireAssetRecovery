"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";

export function HashRedirect({ to, children }: { to: string; children: ReactNode }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <section className="px-6 py-24 text-center">
      <p className="text-taupe">Redirecting to the requested page.</p>
      <a
        href={to}
        className="mt-4 inline-block text-forest underline decoration-gold underline-offset-4"
      >
        {children}
      </a>
    </section>
  );
}
