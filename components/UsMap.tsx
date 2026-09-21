"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import {
  foreclosureLabels,
  taxSaleLabels,
  type ForeclosureType,
  type TaxSaleType,
  states,
} from "@/lib/states";

const geoUrl = "/maps/states-10m.json";

const foreclosureFill: Record<ForeclosureType, string> = {
  judicial: "#16302A",
  nonjudicial: "#C7A24A",
};

const taxFill: Record<TaxSaleType, string> = {
  lien: "#16302A",
  deed: "#C7A24A",
  redeemable: "#F4EEE1",
};

const darkFills = new Set([foreclosureFill.judicial, taxFill.lien]);

const labelOffsets: Record<string, { dx: number; dy: number }> = {
  VT: { dx: 44, dy: -12 },
  NH: { dx: 30, dy: 4 },
  MA: { dx: 36, dy: -2 },
  RI: { dx: 32, dy: 10 },
  CT: { dx: 32, dy: 16 },
  NJ: { dx: 28, dy: 6 },
  DE: { dx: 32, dy: 4 },
  MD: { dx: 44, dy: 16 },
  HI: { dx: 0, dy: 8 },
  MI: { dx: 8, dy: 22 },
  FL: { dx: 12, dy: 8 },
  LA: { dx: -8, dy: 6 },
};

const leaderStates = new Set(["VT", "NH", "MA", "RI", "CT", "NJ", "DE", "MD"]);

type UsMapProps =
  | { mode: "foreclosure"; pathPrefix: "/legal-resources/foreclosure" }
  | { mode: "tax"; pathPrefix: "/legal-resources/tax-sale" };

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export function UsMap({ mode, pathPrefix }: UsMapProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="overflow-hidden rounded-md border border-gold/20 bg-ivory">
      <ComposableMap projection="geoAlbersUsa" width={980} height={580} className="h-auto w-full">
        <Geographies geography={geoUrl}>
          {({ geographies, path }) => (
            <>
              {geographies.map((geo) => {
                const name = String(geo.properties?.name ?? "");
                const state = states.find((item) => item.slug === slugify(name));
                if (!state) return null;
                const fill =
                  mode === "foreclosure"
                    ? foreclosureFill[state.foreclosure]
                    : taxFill[state.taxSale];
                const label =
                  mode === "foreclosure"
                    ? foreclosureLabels[state.foreclosure]
                    : taxSaleLabels[state.taxSale];
                const isHovered = hovered === state.slug;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    tabIndex={0}
                    aria-label={`${state.name} — ${label}`}
                    fill={isHovered ? "#244F42" : fill}
                    stroke={isHovered ? "#C7A24A" : "#16302A"}
                    strokeWidth={isHovered ? 1 : 0.7}
                    style={{ outline: "none", cursor: "pointer" }}
                    onMouseEnter={() => setHovered(state.slug)}
                    onMouseLeave={() => setHovered(null)}
                    onClick={() => router.push(`${pathPrefix}/${state.slug}/`)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        router.push(`${pathPrefix}/${state.slug}/`);
                      }
                    }}
                  />
                );
              })}
              {geographies.map((geo) => {
                const name = String(geo.properties?.name ?? "");
                const state = states.find((item) => item.slug === slugify(name));
                if (!state) return null;
                const fill =
                  mode === "foreclosure"
                    ? foreclosureFill[state.foreclosure]
                    : taxFill[state.taxSale];
                const [cx, cy] = path.centroid(geo);
                if (!Number.isFinite(cx) || !Number.isFinite(cy)) return null;
                const offset = labelOffsets[state.abbr];
                const x = cx + (offset?.dx ?? 0);
                const y = cy + (offset?.dy ?? 0);
                const outside = leaderStates.has(state.abbr);
                const textFill = outside || !darkFills.has(fill) ? "#16302A" : "#FBF8F2";

                return (
                  <g key={`${geo.rsmKey}-label`} style={{ pointerEvents: "none" }}>
                    {outside ? (
                      <line
                        x1={cx}
                        y1={cy}
                        x2={x - 8}
                        y2={y}
                        stroke="#16302A"
                        strokeWidth={0.6}
                      />
                    ) : null}
                    <text
                      x={x}
                      y={y}
                      dy={3}
                      textAnchor="middle"
                      fill={textFill}
                      style={{
                        fontFamily: "var(--font-sans), Inter, sans-serif",
                        fontSize: 9,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {state.abbr}
                    </text>
                  </g>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>
    </div>
  );
}

export function MapLegend({ mode }: { mode: "foreclosure" | "tax" }) {
  const items =
    mode === "foreclosure"
      ? [
          { color: foreclosureFill.judicial, label: "Judicial" },
          { color: foreclosureFill.nonjudicial, label: "Non-Judicial" },
        ]
      : [
          { color: taxFill.lien, label: "Tax Lien Certificate" },
          { color: taxFill.deed, label: "Tax Deed" },
          { color: taxFill.redeemable, label: "Redeemable Tax Deed" },
        ];

  return (
    <ul className="mt-6 flex flex-wrap gap-5 text-sm text-taupe">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          <span
            className="inline-block h-3.5 w-3.5 rounded-sm border border-gold"
            style={{ backgroundColor: item.color }}
          />
          {item.label}
        </li>
      ))}
    </ul>
  );
}
