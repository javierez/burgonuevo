
import {
  type CardDisplayConfig,
  DEFAULT_CARD_DISPLAY,
  resolveCardDisplay,
} from "~/lib/card-display";

// Module-level default for queries that haven't (yet) been refactored to
// accept an explicit accountId. Falls back to the build-time env var.

export type LinkItem = {
  title: string;
  url: string;
};

export type LinkCategory = {
  name: string;
  links: LinkItem[];
};

export const getLinksProps = (_accountIdArg?: bigint): LinkCategory[] => {
  return [{
  "name": "Organismos Nacionales",
  "links": [{
  "title": "Catastro",
  "url": "https://www1.sedecatastro.gob.es/CYCBienInmueble/OVCBusqueda.aspx"
}, {
  "title": "INE (Instituto Nacional de Estadística)",
  "url": "https://www.ine.es/"
}, {
  "title": "Calculadora IPC",
  "url": "https://www.ine.es/calcula/?lang=es"
}, {
  "title": "DGT (Dirección General de Tráfico)",
  "url": "https://www.dgt.es/"
}]
}, {
  "name": "Castilla y León",
  "links": [{
  "title": "Boletín Oficial Castilla y León",
  "url": "https://bocyl.jcyl.es/"
}, {
  "title": "Valoración Urbana (Castilla y León)",
  "url": "https://servicios4.jcyl.es/ora_iguiaexp/pac_ubicacion.proc_1"
}, {
  "title": "Valoración Rústica (Castilla y León)",
  "url": "https://servicios4.jcyl.es/ora_iguiaexp/iguia.rus_ubica_rustica"
}]
}, {
  "name": "León",
  "links": [{
  "title": "Ayuntamiento de León",
  "url": "https://www.aytoleon.es/es/Paginas/home.aspx"
}, {
  "title": "Diputación de León",
  "url": "https://www.dipuleon.es/"
}, {
  "title": "Diario de León",
  "url": "https://www.diariodeleon.es/"
}, {
  "title": "Leonoticias",
  "url": "https://www.leonoticias.com/"
}, {
  "title": "La Nueva Crónica de León",
  "url": "https://www.lanuevacronica.com/"
}, {
  "title": "RTVCYL León",
  "url": "https://www.rtvcyl.es/Leon"
}]
}];
}

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  category: string;
  questions: FaqItem[];
};

export const getFaqsProps = (_accountIdArg?: bigint): FaqCategory[] => {
  return [];
}

export type PropertiesConfig = {
  title: string;
  subtitle: string;
  buttonText: string;
  itemsPerPage?: number;
  defaultSort?: string;
  showDescription: boolean;
  showReference?: boolean;
  cardDisplay: CardDisplayConfig;
};

const PROPERTIES_DEFAULTS = {
  title: "Propiedades Destacadas",
  subtitle: "Descubre nuestra selección de propiedades disponibles",
  buttonText: "Ver Todas las Propiedades",
  showDescription: true,
  showReference: true,
  cardDisplay: DEFAULT_CARD_DISPLAY,
} satisfies PropertiesConfig;

export const getPropertiesConfig = (_accountIdArg?: bigint): PropertiesConfig => {
  return {
  "cardDisplay": {
  "cardTitle": "listing",
  "cardEyebrow": "location",
  "cardLocationField": "province"
},
  "title": "Nuestras propiedades",
  "subtitle": "Encuentra tu opción ideal",
  "buttonText": "Ver Todas",
  "showDescription": true
};
}

export type SEOConfig = {
  title: string;
  description: string;
  name?: string;
  image?: string;
  url?: string;
  telephone?: string;
  email?: string;
  keywords?: string[] | string; // Support both array and string formats
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogSiteName?: string;
  ogLocale?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  /** Per-account Google Analytics 4 measurement ID (e.g. "G-XXXXXXXXXX"). */
  gaMeasurementId?: string;
};

/**
 * Per-account website feature flags + light config. Stored as a JSON string in
 * `website_config.features_props`. Every field is optional; when undefined the
 * caller falls back to the historical default, so a null column = today's behavior.
 *
 * NOTE (v1 template): some fields have no visible effect on this older template
 * because it doesn't render those surfaces (e.g. the navbar already uses direct
 * links rather than mega-menus, and the hero has its own layout). Such fields are
 * still parsed so the shape stays in sync with v2 and the admin. The fields that
 * apply on v1: `pages.promociones`, `menuLabels.vender`, `menuLabels.contacto`,
 * `logoSize`, `referenceSearch`, `footerCards`, `serviciosCta`, `headerStyle`,
 * `descriptionAlign`.
 */
export type FeaturesProps = {
  pages?: {
    promociones?: boolean;
    servicios?: boolean;
    nosotros?: boolean;
  };
  sections?: {
    socialFamily?: boolean;
  };
  menuLabels?: {
    segundaMano?: string;
    alquilar?: string;
    inversion?: string;
    inversionSubtitle?: string;
    inversionHref?: string;
    vender?: string;
    /** Label for the contact CTA / titles (e.g. "Contacto"). Default "Contáctanos". */
    contacto?: string;
  };
  logoSize?: "standard" | "large" | "xlarge";
  /** Hero section height: "standard" (~88vh) or "full" (fills the screen). */
  heroSize?: "standard" | "full";
  /** Hero shows direct Venta/Alquiler access buttons instead of the search bar. */
  heroDirectAccess?: boolean;
  /** Navbar Venta/Alquiler are direct links (no property-type mega-menu). */
  navDirectLinks?: boolean;
  /**
   * Show the navbar "Busca" search box (free text: reference, address, city,
   * title). Kept under the original key so existing site configs keep working.
   * Default true.
   */
  referenceSearch?: boolean;
  /** Show the bottom call-to-action on the /servicios page. Default true. */
  serviciosCta?: boolean;
  /**
   * /servicios card layout. "grid" (default) → up to 3 cards per row.
   * "stacked" → one full-width card per row, image beside the copy, for
   * long-form service descriptions.
   */
  serviciosLayout?: "grid" | "stacked";
  /** Contact CTA shows only the button (no heading/blurb). Default false. */
  contactCtaMinimal?: boolean;
  /** When true, footer navigation renders as cards and the property-types column is hidden. */
  footerCards?: boolean;
  /**
   * "minimal" hides the small uppercase kicker above section titles and the
   * subtitle below them, site-wide, for a cleaner look. Defaults to "standard".
   */
  headerStyle?: "standard" | "minimal";
  /**
   * Text alignment for description/paragraph blocks. Unset → keep each block's
   * existing alignment; "justify"/"center" override it site-wide.
   */
  descriptionAlign?: "justify" | "center";
  /**
   * Homepage "Propiedades destacadas" behavior.
   * "grid" (default) → the full card grid, button navigates to the search page.
   * "feed" → a short teaser grid whose button opens the full-screen vertical
   * property feed (TikTok style) in place, without leaving the homepage.
   */
  featuredMode?: "grid" | "feed";
  /**
   * How many cards the "Propiedades destacadas" grid shows. Unset → every
   * listing fetched (12) in "grid" mode, 3 in "feed" mode.
   */
  featuredGridCount?: number;
};

/** Read the legacy `metadata.modules.promotions` flag (older accounts gated /promociones here). */
function readLegacyPromotions(metadata: string | null | undefined): boolean | undefined {
  if (!metadata) return undefined;
  try {
    const raw =
      typeof metadata === "string" ? (JSON.parse(metadata) as unknown) : metadata;
    const modules =
      raw && typeof raw === "object" && "modules" in raw
        ? (raw as { modules?: { promotions?: unknown } }).modules
        : undefined;
    return modules?.promotions === true ? true : undefined;
  } catch {
    return undefined;
  }
}

export const getFeaturesProps = (): FeaturesProps => {
  return {
  "pages": {
  "promociones": true
}
};
}

export type ModulesConfig = {
  promotionsEnabled: boolean;
};

// Thin wrapper kept for existing callers; promotions now lives in features_props
// (with legacy metadata.modules.promotions folded in by getFeaturesProps).
export const getModulesConfig = (): ModulesConfig => {
  return {
  "promotionsEnabled": true
};
}

export const getSEOConfig = (): SEOConfig => {
  return {
  "url": "",
  "name": "",
  "email": "bnuevo@inmo-bnuevo.com",
  "ogUrl": "",
  "title": "Inmobiliaria Burgo Nuevo · Venta y alquiler en León",
  "ogType": "website",
  "ogImage": "",
  "ogTitle": "",
  "keywords": "inmobiliaria león, pisos en venta león, pisos en alquiler león, casas león, locales león, garajes león, burgo nuevo, centro león, obra nueva leon",
  "ogLocale": "es_ES",
  "telephone": "",
  "ogSiteName": "",
  "description": "Inmobiliaria en el centro de León. Venta y alquiler de pisos, casas, locales, suelos y garajes con asesoramiento personalizado. Especialistas en venta de promociones de obra nueva.",
  "ogDescription": ""
};
}
