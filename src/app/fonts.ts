import { GeistSans } from "geist/font/sans";
import {
  Nunito,
} from "next/font/google";
import type { FontFamilyKey } from "~/lib/data";

const nunito = Nunito({ subsets: ["latin"], display: "swap", variable: "--font-nunito" });

type FontEntry = { loader: { variable: string; className: string }; cssVar: string };

export const fontCatalog: Partial<Record<FontFamilyKey, FontEntry>> = {
  geist: { loader: GeistSans, cssVar: "var(--font-geist-sans)" },
  nunito: { loader: nunito, cssVar: "var(--font-nunito)" },
};

export const allFontVariables = Object.values(fontCatalog)
  .filter((entry): entry is FontEntry => Boolean(entry))
  .map((entry) => entry.loader.variable)
  .join(" ");
