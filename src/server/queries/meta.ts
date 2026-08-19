import type { MetadataProps } from "../../lib/data";

// Using React cache to memoize the query
export const getMetadataProps = (): MetadataProps | null => {
  return {
  "mainpage": {
  "title": "Inmobiliaria Burgo Nuevo · Venta y alquiler en León",
  "robots": {
  "index": 1,
  "follow": 1,
  "googleBot": {
  "index": 1,
  "follow": 1,
  "max-snippet": -1,
  "max-image-preview": "large"
}
},
  "twitter": {
  "card": "summary_large_image",
  "title": "",
  "images": [""],
  "description": ""
},
  "keywords": ["inmobiliaria", "León"],
  "openGraph": {
  "type": "website",
  "title": "",
  "images": [{
  "alt": "",
  "url": "",
  "width": 1200,
  "height": 630
}],
  "locale": "es_ES",
  "siteName": "",
  "description": ""
},
  "alternates": {
  "canonical": "/"
},
  "description": "Inmobiliaria en el centro de León. Venta y alquiler de pisos, casas, locales, suelos y garajes con asesoramiento personalizado. Especialistas en venta de promociones de obra nueva."
}
};
}