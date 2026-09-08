// Las 11 unidades con sus medidas, tomadas del catálogo de la empresa y de las fichas de
// "Caracteristicas de cada camion". Ningún dato de acá está estimado.
import type { ImageMetadata } from 'astro';

import sprinter from '../assets/fotos/sprinter.jpg';
import accSider from '../assets/fotos/accelo-sider.jpg';
import accPuerta from '../assets/fotos/accelo-todo-puerta.jpg';
import accBalancin from '../assets/fotos/accelo-balancin.jpg';
import agrale from '../assets/fotos/agrale-8500.jpg';
import atego1729 from '../assets/fotos/atego-1729.jpg';
import atego1721 from '../assets/fotos/atego-1721.jpg';
import atego1726 from '../assets/fotos/atego-1726.jpg';
import atego1732 from '../assets/fotos/atego-1732.jpg';
import actros from '../assets/fotos/actros-2641.jpg';
import semi from '../assets/fotos/semirremolque.jpg';

export interface Unidad {
  nombre: string;
  marca: string;
  variante: string;
  descripcion: string;
  pallets: number;
  pesoMax: string;
  largo: string;
  ancho: string;
  alto: string;
  extras: string[];
  foto: ImageMetadata;
  alt: string;
}

/** Ordenadas de menor a mayor capacidad, que es como un cliente busca su unidad. */
export const flota: Unidad[] = [
  {
    nombre: 'Sprinter',
    marca: 'Mercedes-Benz',
    variante: 'Camioneta',
    descripcion: 'Camioneta furgón para repartos y cargas chicas.',
    pallets: 2,
    pesoMax: '1.400 kg',
    largo: '2,20 m',
    ancho: '2,00 m',
    alto: '1,80 m',
    extras: ['Cargas generales y peligrosas'],
    foto: sprinter,
    alt: 'Camioneta Mercedes-Benz Sprinter blanca de Transporte Carchedi',
  },
  {
    nombre: 'Accelo 815',
    marca: 'Mercedes-Benz',
    variante: 'Chasis sider con lona lateral',
    descripcion: 'Chasis sider con lona lateral, pala hidráulica y zorra manual.',
    pallets: 8,
    pesoMax: '4.500 kg',
    largo: '4,20 m',
    ancho: '2,20 m',
    alto: '1,80 m',
    extras: ['Pala hidráulica', 'Zorra manual', 'Cargas generales y peligrosas'],
    foto: accSider,
    alt: 'Mercedes-Benz Accelo 815 sider con lona roja de Transporte Carchedi',
  },
  {
    nombre: 'Accelo 815',
    marca: 'Mercedes-Benz',
    variante: 'Chasis todo puerta',
    descripcion: 'Chasis todo puerta con pala hidráulica y zorra manual.',
    pallets: 8,
    pesoMax: '4.500 kg',
    largo: '4,20 m',
    ancho: '2,20 m',
    alto: '1,80 m',
    extras: ['Pala hidráulica', 'Zorra manual', 'Cargas generales y peligrosas'],
    foto: accPuerta,
    alt: 'Mercedes-Benz Accelo 815 todo puerta de Transporte Carchedi',
  },
  {
    nombre: 'Accelo 815',
    marca: 'Mercedes-Benz',
    variante: 'Balancín todo puerta',
    descripcion: 'Balancín todo puerta, con pala hidráulica y zorra manual.',
    pallets: 10,
    pesoMax: '9.000 kg',
    largo: '5,00 m',
    ancho: '2,40 m',
    alto: '1,80 m',
    extras: ['Pala hidráulica', 'Zorra manual', 'Cargas generales y peligrosas'],
    foto: accBalancin,
    alt: 'Mercedes-Benz Accelo 815 balancín todo puerta de Transporte Carchedi',
  },
  {
    nombre: 'Agrale 8500',
    marca: 'Agrale',
    variante: 'Chasis media baranda con lona',
    descripcion: 'Chasis media baranda con lona, pala hidráulica y zorra manual.',
    pallets: 10,
    pesoMax: '5.000 kg',
    largo: '5,80 m',
    ancho: '2,00 m',
    alto: '2,80 m',
    extras: ['Pala hidráulica', 'Zorra manual', 'Cargas generales y peligrosas'],
    foto: agrale,
    alt: 'Agrale 8500 media baranda con lona roja de Transporte Carchedi',
  },
  {
    nombre: 'Atego 1729',
    marca: 'Mercedes-Benz',
    variante: 'Furgón cerrado refrigerado',
    descripcion: 'Chasis furgón refrigerado, con pala hidráulica bajo chasis y zorra manual.',
    // PENDIENTE: el catálogo dice 11 pallets y el nombre de la carpeta de fotos dice 10.
    // Se toma el dato del catálogo. Confirmar con el cliente.
    pallets: 11,
    pesoMax: '9.000 kg',
    largo: '5,80 m',
    ancho: '2,10 m',
    alto: '2,18 m',
    extras: ['Refrigerado', 'Pala hidráulica', 'Zorra manual'],
    foto: atego1729,
    alt: 'Mercedes-Benz Atego 1729 con furgón cerrado refrigerado de Transporte Carchedi',
  },
  {
    nombre: 'Atego 1721',
    marca: 'Mercedes-Benz',
    variante: 'Chasis todo puerta',
    descripcion: 'Chasis todo puerta, con pala hidráulica y zorra manual.',
    pallets: 12,
    pesoMax: '8.000 kg',
    largo: '7,20 m',
    ancho: '2,45 m',
    alto: '2,20 m',
    extras: ['Pala hidráulica', 'Zorra manual', 'Cargas generales y peligrosas'],
    foto: atego1721,
    alt: 'Mercedes-Benz Atego 1721 todo puerta de Transporte Carchedi',
  },
  {
    nombre: 'Atego 1726',
    marca: 'Mercedes-Benz',
    variante: 'Chasis todo puerta con lona',
    descripcion: 'Chasis todo puerta con lona, zorra manual y pala hidráulica.',
    pallets: 12,
    pesoMax: '10.000 kg',
    largo: '6,40 m',
    ancho: '2,45 m',
    alto: '2,80 m',
    extras: ['Pala hidráulica', 'Zorra manual', 'Cargas generales y peligrosas'],
    foto: atego1726,
    alt: 'Mercedes-Benz Atego 1726 todo puerta con lona roja de Transporte Carchedi',
  },
  {
    nombre: 'Atego 1732',
    marca: 'Mercedes-Benz',
    variante: 'Chasis media baranda con lona',
    descripcion: 'Chasis media baranda y lona, con pala hidráulica y zorra manual.',
    pallets: 14,
    pesoMax: '10.000 kg',
    largo: '7,35 m',
    ancho: '2,50 m',
    alto: '2,45 m',
    extras: ['Más altura quitando lona y arcos', 'Pala hidráulica', 'Zorra manual'],
    foto: atego1732,
    alt: 'Mercedes-Benz Atego 1732 media baranda con lona roja de Transporte Carchedi',
  },
  {
    nombre: 'Actros 2641',
    marca: 'Mercedes-Benz',
    variante: 'Balancín media baranda',
    descripcion: 'Balancín media baranda con arco y lona, pala hidráulica y zorra manual.',
    pallets: 14,
    pesoMax: '20.000 kg',
    largo: '7,35 m',
    ancho: '2,50 m',
    alto: '2,45 m',
    extras: ['Más altura quitando lona y arcos', 'Pala hidráulica', 'Zorra manual'],
    foto: actros,
    alt: 'Mercedes-Benz Actros 2641 balancín con lona roja de Transporte Carchedi',
  },
  {
    nombre: 'Semirremolque',
    marca: 'Mercedes-Benz',
    variante: 'Media baranda con lona',
    descripcion: 'Semirremolque media baranda con lona y pala hidráulica bajo chasis.',
    pallets: 24,
    pesoMax: '40 tn',
    largo: '14,50 m',
    ancho: '2,60 m',
    alto: 'Personalizada',
    extras: ['Posibilidad de más altura', 'Pala hidráulica', 'Zorra manual'],
    foto: semi,
    alt: 'Semirremolque rojo de Transporte Carchedi con lona y el nombre de la empresa',
  },
];
