"use client";

import Image from "next/image";
import { useState } from "react";

export function VideoPlaceholder() {
  const [soundOn, setSoundOn] = useState(false);

  return (
    <div className="rounded-md border border-gold bg-beige p-3">
      <div className="relative aspect-video overflow-hidden rounded-sm bg-forest">
        <Image
          src="/images/surplus-home.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 72rem, 100vw"
        />
        <div className="absolute inset-0 bg-forest/70" />
        <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 text-center text-ivory">
          <span className="text-[11px] tracking-[0.32em] text-gold uppercase">
            Featured Presentation
          </span>
          <p className="font-heading text-xl">Video coming soon</p>
          <button
            type="button"
            onClick={() => setSoundOn((value) => !value)}
            className="rounded-sm border border-gold px-5 py-2 text-[11px] tracking-[0.2em] text-gold uppercase"
            aria-pressed={soundOn}
          >
            {soundOn ? "Sound on" : "Enable sound"}
          </button>
        </div>
      </div>
    </div>
  );
}
