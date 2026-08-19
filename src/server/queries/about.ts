import type { AboutProps } from "../../lib/data";

export const getAboutProps = (_accountIdArg?: bigint): AboutProps | null => {
  return {
  "title": "Sobre Inmobiliaria Burgo Nuevo",
  "subtitle": "Tu inmobiliaria en León",
  "content": "Inmobiliaria con actividad en León desde 1994.\n\nOfrecemos un servicio de comercialización personalizado para grandes inversores, así como una amplia cartera de viviendas en venta y alquiler en toda la provincia.",
  "content2": "Estamos especializados en la venta y alquiler de viviendas, locales comerciales, negocios y oficinas.\n\nAdemás, somos comercializadora homologada por diversas entidades bancarias.",
  "services": [{
  "icon": "home",
  "title": "Venta de viviendas"
}, {
  "icon": "key",
  "title": "Alquiler residencial y comercial"
}, {
  "icon": "calculator",
  "title": "Valoración de inmuebles"
}, {
  "icon": "map",
  "title": "Locales, suelos y garajes"
}, {
  "icon": "handshake",
  "title": "Asesoramiento a inversores"
}, {
  "icon": "briefcase",
  "title": "Gestión documental y notarial"
}],
  "maxServicesDisplayed": 6,
  "servicesSectionTitle": "Servicios ofrecidos",
  "aboutSectionTitle": "Nuestra visión",
  "buttonName": "Ponte en contacto",
  "showKPI": false,
  "image": "/placeholder-about.jpg",
  "kpi1Data": "37+",
  "kpi1Name": "Años de experiencia",
  "kpi2Data": "500+",
  "kpi2Name": "Hogares encontrados",
  "kpi3Data": "80+",
  "kpi3Name": "Clientes Satisfechos",
  "kpi4Data": "",
  "kpi4Name": ""
};
}
