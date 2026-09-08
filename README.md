# Transporte Carchedi — landing institucional

Sitio de una sola página con navegación por anclas. Astro + Tailwind, estático.

```sh
npm install
npm run dev       # desarrollo en localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ para revisarlo como en producción
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Teléfonos, mail, dirección, horario, redes | `src/data/site.ts` |
| Las 11 unidades con medidas y capacidades | `src/data/flota.ts` |
| Las 7 categorías de servicio y los 6 pilares | `src/data/servicios.ts` |
| Las 6 preguntas frecuentes | `src/data/faq.ts` |
| Fotos ya recortadas | `src/assets/fotos/` |

**Todo dato de contacto sale de `src/data/site.ts`.** Aparece en la barra superior, contacto, el pie
y los datos estructurados: se cambia en un solo lugar.

## Decisiones que conviene no deshacer sin pensarlo

- **El rojo es `#D9232A` y el negro `#1A1919`**, tomados del PDF del logo, no estimados.
- **Nada de amarillo.** El sitio viejo tenía páginas enteras en amarillo fuerte.
- **El horario es de lunes a viernes.** El sitio viejo decía "Lun a Sab" y estaba mal.
- **No se incluye el Nextel ID** que figuraba en el sitio viejo: Nextel no opera más en Argentina.
- **El hero usa `HEADER1.jpeg`** en dos recortes (16:9 y 4:5) dentro de un `<picture>`, para que el
  navegador baje solo el que corresponde. Es la única imagen que no va diferida.
- **Los logos de CNRT y SENASA no están** y no se descargan de internet ni se recrean: son marcas
  de organismos públicos. Los rombos de riesgo sí se dibujan, porque son señalización normalizada.
- El formulario no tiene backend: arma el mensaje y abre WhatsApp.

## Pendientes marcados en el código

Se encuentran con `grep -rn PENDIENTE src/`. Están listados con su contexto en el informe de
entrega.

## Fuentes del contenido

Los textos vienen del documento `../prompt-landing-carchedi.md`. Las medidas y capacidades de la
flota salen del catálogo del cliente (`../Transporte Carchedi - Catalogo/`) y de las fichas de
`../Caracteristicas de cada camion/`. No hay contenido inventado.
