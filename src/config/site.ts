import type { SiteConfig } from './site.types';

const FONT_STACK = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

// Datos verificados por Anett Digital contra el sitio actual de Gualtieri
// (gualtierinqn.com.ar) y su ficha pública: ciudad, telefono y email son
// reales. No tenemos logo ni colores de marca todavia -- paleta sobria,
// sin inventar identidad visual que no nos mandaron.
// Antiguedad del negocio y horarios de atencion no estan verificados:
// por eso no se afirma "mas de 40 anios" y los horarios llevan badge
// de ejemplo (hoursBadge), igual que las fichas de propiedades.
export const siteConfig: SiteConfig = {
  meta: {
    lang: 'es',
    siteName: 'Gualtieri Inmobiliaria',
    tagline: 'Inmobiliaria en Neuquén Capital',
    description:
      'Gualtieri Inmobiliaria en Neuquén Capital. Propiedades en venta y alquiler, atención directa por teléfono y email.',
    city: 'Neuquén Capital',
    province: 'Neuquén',
    isDemo: true,
    disclaimerBanner: 'Muestra preparada por Anett Digital. No es el sitio oficial de Gualtieri Inmobiliaria.',
  },
  brand: {
    logoText: 'Gualtieri Inmobiliaria',
    colors: {
      primary: '#1e3a5f',
      primaryDark: '#152a46',
      primaryLight: '#e7ebf1',
      accent: '#92400e',
      ink: '#0f172a',
    },
    fontHeading: FONT_STACK,
    fontBody: FONT_STACK,
  },
  nav: [
    { label: 'Propiedades', href: '#propiedades' },
    { label: 'Contacto', href: '#contacto' },
  ],
  hero: {
    eyebrow: 'Inmobiliaria en Neuquén Capital',
    title: 'Encontrá tu próxima propiedad en Neuquén',
    subtitle:
      'Venta y alquiler de propiedades en Neuquén Capital. Mirá el listado desde el celular y comunicate directo por teléfono o email.',
    ctaLabel: 'Llamar ahora',
    ctaHref: 'tel:+542994435016',
    secondaryLabel: 'Ver propiedades',
    secondaryHref: '#propiedades',
    trustPoints: ['Atención directa, sin intermediarios', 'Venta y alquiler', 'Propiedades en Neuquén Capital'],
  },
  listings: {
    heading: 'Propiedades',
    subheading:
      'Así se vería el listado en el celular. Las fichas de abajo son de ejemplo, para mostrar el formato — se completan con las propiedades reales.',
    items: [
      {
        badge: 'Ficha de ejemplo',
        title: 'Casa 3 ambientes',
        zone: 'Terrazas del Neuquén',
        operation: 'Venta',
        price: 'USD 95.000',
        detail: '2 dormitorios · 90 m²',
        icon: 'home',
      },
      {
        badge: 'Ficha de ejemplo',
        title: 'Departamento 2 ambientes',
        zone: 'Centro, Neuquén',
        operation: 'Alquiler',
        price: '$350.000/mes',
        detail: '1 dormitorio · 45 m²',
        icon: 'building',
      },
      {
        badge: 'Ficha de ejemplo',
        title: 'Lote 450 m²',
        zone: 'Bardas Soleadas',
        operation: 'Venta',
        price: 'USD 40.000',
        detail: '450 m² · esquina',
        icon: 'map',
      },
    ],
  },
  contactInfo: {
    heading: 'Contacto',
    subheading: 'Teléfono y email reales de Gualtieri — nada de pie vacío.',
    phoneDisplay: '(0299) 443-5016',
    phoneHref: '+542994435016',
    email: 'info@gualtieri.com.ar',
    location: 'Neuquén Capital, Neuquén',
    hours: [
      { day: 'Lunes a viernes', hours: '9:00–13:00 y 16:00–20:00' },
      { day: 'Sábados', hours: '9:00–13:00' },
    ],
    hoursBadge: 'Horario de ejemplo',
  },
  contactForm: {
    heading: 'Consultá por una propiedad',
    subheading: 'Dejanos tu contacto y te escribimos para coordinar.',
    nameLabel: 'Nombre',
    phoneLabel: 'Teléfono',
    messageLabel: 'Contanos qué estás buscando',
    submitLabel: 'Enviar por email',
    successMessage: 'Listo, te abrimos el email con tu mensaje.',
    mailSubjectTemplate: 'Consulta desde la página — {nombre}',
    mailBodyTemplate: 'Nombre: {nombre}\nTeléfono: {telefono}\n\n{mensaje}',
  },
  footer: {
    businessName: 'Gualtieri Inmobiliaria',
    rubroLine: 'Inmobiliaria en Neuquén Capital',
    demoDisclaimer: 'Muestra preparada por Anett Digital. No es el sitio oficial de Gualtieri Inmobiliaria.',
  },
};
