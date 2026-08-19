

export type ContactProps = {
  title: string;
  subtitle: string;
  messageForm: boolean;
  address: boolean;
  phone: boolean;
  mail: boolean;
  schedule: boolean;
  map: boolean;
  // Contact information fields
  offices: Array<{
    id: string;
    name: string;
    address: {
      street: string;
      city: string;
      state: string;
      country: string;
      postalCode?: string;
    };
    phoneNumbers: {
      main: string;
      sales?: string;
    };
    emailAddresses: {
      info: string;
      sales?: string;
    };
    scheduleInfo: {
      weekdays: string;
      saturday: string;
      sunday: string;
    };
    mapUrl: string;
    isDefault?: boolean;
  }>;
  /**
   * Set by the CRM contact config. Unused by this template, but declared so the
   * generated site — which inlines contact_props verbatim as a typed literal —
   * still compiles.
   */
  whatsappNumber?: string;
};

export const getContactProps = (_accountIdArg?: bigint): ContactProps | null => {
  return {
  "map": true,
  "mail": true,
  "phone": true,
  "title": "Contáctanos",
  "address": true,
  "offices": [{
  "id": "OlnINS_CmHQ_Co3xHJmpg",
  "name": "Inmobiliaria Burgo Nuevo León",
  "mapUrl": "https://www.google.com/maps/place/Inmobiliaria+Burgo+Nuevo/@42.596831,-5.5737995,17z/data=!3m2!4b1!5s0xd379a9a2c774de5:0xacf8dab4ead6060e!4m6!3m5!1s0xd379b2b5d8086b1:0x4064bd3a31033bab!8m2!3d42.596831!4d-5.5712246!16s%2Fg%2F11h91yq6p1?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D",
  "address": {
  "city": "León",
  "state": "León",
  "street": "Av. Independencia 5, Local 2, esquina con Calle Arco de Ánimas",
  "country": "España"
},
  "isDefault": true,
  "phoneNumbers": {
  "main": "987263000",
  "sales": ""
},
  "scheduleInfo": {
  "sunday": "Domingos: cerrado",
  "saturday": "Sábados: con cita previa",
  "weekdays": "Lunes a Viernes: 10:00 - 14:00 y 16:00 - 19:30"
},
  "emailAddresses": {
  "info": "bnuevo@inmo-bnuevo.com",
  "sales": ""
}
}],
  "schedule": true,
  "subtitle": "",
  "messageForm": true
};
}

