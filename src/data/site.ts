// Fuente única de los datos de contacto. El teléfono y la dirección aparecen en la barra
// superior, el hero, contacto, el pie y el JSON-LD: se leen todos de acá para que no queden
// desfasados entre sí.

export const empresa = {
  // El nombre va SIEMPRE en singular: así está en el mail, el dominio, las redes y el logo.
  nombre: 'Transporte Carchedi',
  razonSocial: 'Transporte Carchedi S.R.L.',
  desde: 'Transportando desde 2015',
  zona: 'Capital Federal y Gran Buenos Aires',
  descripcion:
    'Empresa familiar de transporte de cargas generales y peligrosas en Capital Federal y Gran Buenos Aires. Flota propia con pala hidráulica, habilitada por CNRT y SENASA.',
} as const;

export const contacto = {
  direccion: 'Humaitá 1260 2B — Tapiales, Buenos Aires (1770), Argentina',
  calle: 'Humaitá 1260 2B',
  localidad: 'Tapiales',
  provincia: 'Buenos Aires',
  cp: '1770',
  pais: 'AR',

  // Horario correcto de atención. El sitio viejo dice "Lun a Sab" en la barra superior y está mal.
  horario: 'Lunes a viernes de 8 a 18',
  horarioCorto: 'Lun a Vie de 8 a 18',
  horarioNota: 'WhatsApp habilitado las 24 horas',

  oficina: '2096-7518',
  oficinaTel: '+541120967518',
  celular: '11-3558-6154',
  celularTel: '+5491135586154',
  whatsappNumero: '5491135586154',

  // PENDIENTE: el mail es @transportecarchedi.com y el sitio vive en transportecarchedi.com.ar.
  // El catálogo del cliente usa las dos formas. Confirmar cuál queda.
  email: 'info@transportecarchedi.com',
  web: 'www.transportecarchedi.com.ar',

  mapa: 'https://maps.app.goo.gl/JXiwvEGvq1tzec4d6',
  mapaEmbed:
    'https://www.google.com/maps?q=Humait%C3%A1%201260%2C%20Tapiales%2C%20Buenos%20Aires&output=embed',

  // NO se incluye el Nextel ID 656*389 del sitio viejo: Nextel no opera más en Argentina.
} as const;

export const redes = [
  { nombre: 'LinkedIn', url: 'https://www.linkedin.com/in/transportecarchedi/' },
  { nombre: 'Instagram', url: 'https://www.instagram.com/transportecarchedi' },
  { nombre: 'Facebook', url: 'https://www.facebook.com/transportecarchedi' },
] as const;

/** Arma un enlace de WhatsApp con el texto ya cargado. */
export function linkWhatsApp(texto = 'Necesito reservar un camión...'): string {
  return `https://api.whatsapp.com/send?phone=${contacto.whatsappNumero}&text=${encodeURIComponent(texto)}`;
}

export const waPrincipal = linkWhatsApp();

export const navegacion = [
  { texto: 'Inicio', href: '#inicio' },
  { texto: 'Nosotros', href: '#nosotros' },
  { texto: 'Servicios', href: '#servicios' },
  { texto: 'Flota', href: '#flota' },
  { texto: 'Habilitaciones', href: '#habilitaciones' },
  { texto: 'Preguntas frecuentes', href: '#faq' },
  { texto: 'Contacto', href: '#contacto' },
] as const;
