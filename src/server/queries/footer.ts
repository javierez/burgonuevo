
import type { FooterProps } from "../../lib/data";

export const getFooterProps = (_accountIdArg?: bigint): FooterProps | null => {
  return {
  "companyName": "Inmobiliaria Burgo Nuevo",
  "description": "",
  "socialLinks": {

},
  "officeLocations": [],
  "quickLinksVisibility": {
  "inicio": true,
  "vender": false,
  "comprar": false,
  "alquilar": false,
  "contacto": true,
  "nosotros": true,
  "reseñas": true,
  "propiedades": true
},
  "propertyTypesVisibility": {
  "casas": true,
  "pisos": true,
  "garajes": true,
  "locales": true,
  "solares": true
},
  "copyright": "© 2026 Inmobiliaria Burgo Nuevo"
};
}
