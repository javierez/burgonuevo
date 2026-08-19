import type { HeroProps } from "../../lib/data";
import { getContactProps } from "./contact";

export type HeroPropsWithCities = HeroProps & { cities: string[] };

/**
 * Cities used for the homepage rotation and the navbar "Zonas" dropdown.
 * Sourced from the offices configured in `website_config.contact_props`,
 * not from the listings table — this is the authoritative list of cities
 * the agency has a physical presence in.
 */
export const getHeroCities = (_accountId?: bigint): string[] => {
  return ["León"];
}

// Using React cache to memoize the query
export const getHeroProps = (_accountIdArg?: bigint): HeroProps | null => {
  return {
  "title": "Venta y alquiler de viviendas y locales comerciales en León",
  "subtitle": "Especialistas en venta de Obra Nueva. Experiencia de más de 30 años.",
  "backgroundVideo": "https://inmobiliariaacropolis.s3.us-east-1.amazonaws.com/accounts/111/hero/background_1779825943575_0AZxqj.mov",
  "findPropertyButton": "Encuentra tu casa",
  "contactButton": "Ponte en    contacto",
  "backgroundImage": "",
  "backgroundType": "video"
};
}
