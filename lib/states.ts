export type ForeclosureType = "judicial" | "nonjudicial";
export type TaxSaleType = "lien" | "deed" | "redeemable";

export type StateRecord = {
  name: string;
  slug: string;
  abbr: string;
  foreclosure: ForeclosureType;
  taxSale: TaxSaleType;
  col: number;
  row: number;
};

const judicial = new Set([
  "connecticut",
  "delaware",
  "florida",
  "hawaii",
  "illinois",
  "indiana",
  "iowa",
  "kansas",
  "kentucky",
  "louisiana",
  "maine",
  "new-jersey",
  "new-mexico",
  "new-york",
  "north-dakota",
  "ohio",
  "pennsylvania",
  "south-carolina",
  "vermont",
  "wisconsin",
]);

const taxLien = new Set([
  "alabama",
  "arizona",
  "colorado",
  "florida",
  "illinois",
  "indiana",
  "iowa",
  "kentucky",
  "maryland",
  "mississippi",
  "missouri",
  "montana",
  "nebraska",
  "new-jersey",
  "new-york",
  "ohio",
  "oklahoma",
  "south-carolina",
  "vermont",
  "west-virginia",
  "wyoming",
]);

const taxRedeemable = new Set([
  "connecticut",
  "delaware",
  "georgia",
  "hawaii",
  "louisiana",
  "massachusetts",
  "pennsylvania",
  "rhode-island",
  "tennessee",
  "texas",
]);

const raw: Array<[string, string, number, number]> = [
  ["Alabama", "AL", 6, 6],
  ["Alaska", "AK", 0, 8],
  ["Arizona", "AZ", 1, 5],
  ["Arkansas", "AR", 4, 5],
  ["California", "CA", 0, 4],
  ["Colorado", "CO", 2, 4],
  ["Connecticut", "CT", 9, 3],
  ["Delaware", "DE", 9, 4],
  ["Florida", "FL", 7, 7],
  ["Georgia", "GA", 7, 6],
  ["Hawaii", "HI", 1, 8],
  ["Idaho", "ID", 1, 2],
  ["Illinois", "IL", 5, 2],
  ["Indiana", "IN", 5, 3],
  ["Iowa", "IA", 4, 3],
  ["Kansas", "KS", 3, 5],
  ["Kentucky", "KY", 5, 4],
  ["Louisiana", "LA", 4, 6],
  ["Maine", "ME", 10, 0],
  ["Maryland", "MD", 8, 4],
  ["Massachusetts", "MA", 9, 2],
  ["Michigan", "MI", 6, 2],
  ["Minnesota", "MN", 4, 2],
  ["Mississippi", "MS", 5, 6],
  ["Missouri", "MO", 4, 4],
  ["Montana", "MT", 2, 2],
  ["Nebraska", "NE", 3, 4],
  ["Nevada", "NV", 1, 3],
  ["New Hampshire", "NH", 10, 1],
  ["New Jersey", "NJ", 8, 3],
  ["New Mexico", "NM", 2, 5],
  ["New York", "NY", 8, 2],
  ["North Carolina", "NC", 6, 5],
  ["North Dakota", "ND", 3, 2],
  ["Ohio", "OH", 6, 3],
  ["Oklahoma", "OK", 3, 6],
  ["Oregon", "OR", 0, 3],
  ["Pennsylvania", "PA", 7, 3],
  ["Rhode Island", "RI", 10, 2],
  ["South Carolina", "SC", 7, 5],
  ["South Dakota", "SD", 3, 3],
  ["Tennessee", "TN", 5, 5],
  ["Texas", "TX", 3, 7],
  ["Utah", "UT", 1, 4],
  ["Vermont", "VT", 9, 1],
  ["Virginia", "VA", 7, 4],
  ["Washington", "WA", 0, 2],
  ["West Virginia", "WV", 6, 4],
  ["Wisconsin", "WI", 6, 1],
  ["Wyoming", "WY", 2, 3],
];

function slugify(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

function taxSaleFor(slug: string): TaxSaleType {
  if (taxLien.has(slug)) return "lien";
  if (taxRedeemable.has(slug)) return "redeemable";
  return "deed";
}

export const states: StateRecord[] = raw.map(([name, abbr, col, row]) => {
  const slug = slugify(name);
  return {
    name,
    slug,
    abbr,
    foreclosure: judicial.has(slug) ? "judicial" : "nonjudicial",
    taxSale: taxSaleFor(slug),
    col,
    row,
  };
});

export const foreclosureLabels: Record<ForeclosureType, string> = {
  judicial: "Judicial",
  nonjudicial: "Non-Judicial",
};

export const taxSaleLabels: Record<TaxSaleType, string> = {
  lien: "Tax Lien Certificate",
  deed: "Tax Deed",
  redeemable: "Redeemable Tax Deed",
};

export function getState(slug: string) {
  return states.find((state) => state.slug === slug);
}

export const alabamaForeclosure = {
  title: "Alabama Mortgage Foreclosure Laws",
  overview:
    "Alabama primarily follows a nonjudicial foreclosure path, though court involvement can arise depending on the instrument and the facts of the case. Many nonjudicial matters can move from notice through sale on a relatively short timeline, often in the range of two to three months once statutory notice steps begin.",
  extra:
    "Covered residential mortgages may also be subject to a 120-day pre-foreclosure waiting period under federal servicing rules before a notice of foreclosure is issued. Exact timing still depends on the loan, the county, and whether the borrower responds during the notice window.",
};

export const alabamaTaxSale = {
  title: "Alabama Tax Liens and Tax Deeds",
  overview:
    "Alabama counties commonly use tax lien certificate sales administered through the county. Investors may purchase liens for delinquent property taxes, and the former owner may retain statutory redemption rights for a limited period.",
  extra:
    "Where a lien is not redeemed, the process can proceed toward a tax deed. Procedures, sale calendars, and redemption windows vary by county treasurer or revenue office, so claim documents must match the holding county’s requirements.",
};
