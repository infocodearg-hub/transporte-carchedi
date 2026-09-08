// Las siete categorías de servicio, transcriptas del sitio viejo. Dos no llevan texto y es a
// propósito: no se les inventa una descripción para rellenar.
import type { ImageMetadata } from 'astro';

import sprinter from '../assets/fotos/sprinter.jpg';
import pala from '../assets/fotos/serv-pala.jpg';
import furgon from '../assets/fotos/atego-1729.jpg';
import semi from '../assets/fotos/serv-semirremolque.jpg';
import peligrosa from '../assets/fotos/serv-peligrosa.jpg';
import autoelevador from '../assets/fotos/serv-autoelevador.jpg';

export interface Servicio {
  id: string;
  titulo: string;
  texto?: string;
  foto?: ImageMetadata;
  alt: string;
  /** Ícono de línea que se usa cuando la tarjeta no tiene foto. */
  icono?: 'grua';
}

export const servicios: Servicio[] = [
  {
    id: 'camionetas',
    titulo: 'Camionetas',
    texto:
      'Todos nuestros vehículos cuentan con ruta, verificación técnica, seguro del camión, seguro de la carga (a pedido, en caso de que se necesite) y seguro de vida obligatorio para los chóferes y peones que realicen el trabajo.',
    foto: sprinter,
    alt: 'Camioneta Mercedes-Benz Sprinter de Transporte Carchedi con el monograma TC en el lateral',
  },
  {
    id: 'hidrogrua',
    titulo: 'Camión con hidrogrúa',
    // PENDIENTE: no hay ninguna foto de una unidad con hidrogrúa en el material entregado.
    // La tarjeta va sin foto hasta que el cliente la provea. No se usa la foto de otra unidad.
    // PENDIENTE: la mención a YPF GAS es marca de un tercero. Ya estaba pública en el sitio
    // viejo; confirmar con el cliente si se mantiene.
    texto:
      'Nuestros camiones con hidrogrúa están totalmente al día, tanto para cargas generales como peligrosas y trabajos en altura. Hidrogrúa y chofer certificados por ingenieros. El chofer tiene todos los registros de gruista. Tenemos experiencia: trabajos realizados para empresas grandes como YPF GAS.',
    icono: 'grua',
    alt: '',
  },
  {
    id: 'pala-hidraulica',
    titulo: 'Camión con pala hidráulica',
    texto:
      'La pala hidráulica es una plataforma que sube y baja con la finalidad de cargar y descargar mercadería pesada.',
    foto: pala,
    alt: 'Camión de Transporte Carchedi con la pala hidráulica bajada y pallets listos para descargar',
  },
  {
    id: 'furgones',
    titulo: 'Camiones con furgones cerrados, sider y playo',
    texto:
      'Contamos con camiones habilitados para cargas generales, chasis o balancines, desde 6, 8, 10, 12 y 14 pallets, y desde 4 hasta 17 toneladas.',
    foto: furgon,
    alt: 'Mercedes-Benz Atego 1729 con furgón cerrado refrigerado de Transporte Carchedi',
  },
  {
    id: 'semirremolque',
    // Sin texto descriptivo a propósito: la tarjeta va solo con foto y título.
    titulo: 'Camiones semirremolque playo, media baranda y cerrados',
    foto: semi,
    alt: 'Semirremolque de Transporte Carchedi con lona roja y el nombre de la empresa a lo largo',
  },
  {
    id: 'carga-peligrosa',
    titulo: 'Camión con carga peligrosa',
    texto:
      'Todas nuestras unidades, como nuestro personal, están habilitadas para realizar cargas peligrosas. Todos los papeles al día, tanto del camión como del chofer.',
    // PENDIENTE: única foto disponible con el rombo de riesgo visible, pero es nocturna y de
    // calidad limitada. Pedir al cliente una foto diurna con los rombos bien legibles.
    foto: peligrosa,
    alt: 'Semirremolque de Transporte Carchedi con rombo de riesgo, operando junto a contenedores',
  },
  {
    id: 'autoelevador',
    // Sin texto descriptivo a propósito.
    titulo: 'Alquiler de autoelevador',
    foto: autoelevador,
    alt: 'Autoelevador cargando pallets sobre un camión de Transporte Carchedi',
  },
];

export const listaServicio = [
  'Asesoramiento para transporte y logística',
  'Cotizaciones personalizadas',
  'Seguimiento satelital de su carga',
  'Servicio de peones para carga y descarga',
  'Camionetas para repartos',
  'Camiones con pala hidráulica',
  'Camiones con hidrogrúa / plancha',
  'Camiones semirremolque',
];

export const listaHabilitaciones = [
  'Vehículos desde 2 hasta 30 pallets',
  'Vehículos desde 1.500 kg hasta 30 toneladas',
  'Habilitados por la CNRT',
  'VTV para cargas generales y peligrosas',
  'Registro municipal',
  'Psicofísico al día',
  'Cursos para cargas generales y peligrosas',
  'Cursos de gruista',
];

export const pilares = [
  {
    titulo: 'En el tiempo',
    texto:
      'Transporte Carchedi, con más de 10 años en el mercado, apuesta al crecimiento constante de la mano de un servicio serio y confiable. Con nuestra experiencia en transporte con camiones con pala hidráulica y camiones habilitados para carga peligrosa, y habilitación para residuos especiales. Un servicio diferente al que muchos creen brindar bien. Con vehículos 0 km y personal capacitado.',
    icono: 'reloj',
  },
  {
    titulo: 'Móviles',
    texto:
      'Contamos con móviles último modelo para el confort de nuestros clientes y para asegurar que todos los servicios lleguen a destino sin ningún tipo de problema.',
    icono: 'camion',
  },
  {
    titulo: 'Documentación',
    texto:
      'Vehículos y operarios dentro de todas las normas establecidas en el Mercosur para el transporte de cargas generales y cargas peligrosas. Chóferes habilitados con cursos para realizar todo tipo de cargas peligrosas.',
    icono: 'documento',
  },
  {
    titulo: 'Superación constante',
    texto:
      'Estudiamos día a día el crecimiento del mercado y nos adaptamos a los cambios constantes y a su evolución. Es por eso que contamos con una estructura confiable y adaptada a los cambios.',
    icono: 'grafico',
  },
  {
    titulo: 'Organización',
    texto:
      'Nuestros operarios tienen capacitaciones permanentes y gran experiencia en operaciones complejas. Sobre todo, la amabilidad y el respeto con el que trabajamos nos identifica día tras día.',
    icono: 'engranaje',
  },
  {
    titulo: 'Nuestro equipo',
    texto:
      'Contamos con un equipo de trabajo consolidado y por sobre todo responsable, porque creemos que el capital humano es lo más importante dentro de nuestra compañía.',
    icono: 'equipo',
  },
] as const;

export const tiposDeFlota = [
  'Camiones con hidrogrúas',
  'Camiones con balancines',
  'Camiones con furgones cerrados',
  'Camiones con semirremolque',
  'Camiones con pala hidráulica',
  'Camiones con carga peligrosa o con carga IMO',
  'Camionetas',
  // PENDIENTE: Fiorino y playo aparecen en la lista que dio el cliente pero no tienen unidad ni
  // foto propia en el material. Confirmar que siguen operativos.
  'Fiorino',
  'Playo',
];
